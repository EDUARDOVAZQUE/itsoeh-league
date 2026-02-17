import * as THREE from 'three';
import { Input } from './Input';
import { CircleCollider } from './Physics';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

export abstract class Entity implements CircleCollider {
    public mesh: THREE.Mesh;
    public position: THREE.Vector3;
    public velocity: THREE.Vector3;
    public radius: number;
    public mass: number;

    constructor(scene: THREE.Scene, radius: number, mass: number, color: number, geometry: THREE.BufferGeometry) {
        this.radius = radius;
        this.mass = mass;
        this.velocity = new THREE.Vector3(0, 0, 0);

        const material = new THREE.MeshStandardMaterial({ color: color });
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;
        this.position = this.mesh.position;

        scene.add(this.mesh);
    }

    abstract update(dt: number, input?: Input): void;
    abstract toggleDebug(): void;
}

// Car class
export class Car extends Entity {
    public rotation: number = 0;
    public speed: number = 0;
    public nitro: number = 100; // Nitro percentage (0-100)
    public readonly maxNitro: number = 100;

    // Stats
    private acceleration = 150; // Force-based acceleration (F=ma)
    private maxSpeed = 15;
    private maxSpeedNitro = 20; // Double speed
    private turnSpeed = 4;
    private friction = 0.98; // Drag factor (0-1)

    private nitroConsumption = 50; // Per second
    private nitroRegen = 10; // Per second

    // Drive Mode State
    public driveMode: 'pivot' | 'rotate' = 'pivot';
    private lastToggleTime: number = 0;

    // Controls
    private controls: { up: string, down: string, left: string, right: string, nitro: string, spin: string };

    private debugMesh: THREE.Mesh;

    constructor(scene: THREE.Scene, color: number, startPos: THREE.Vector3, controls: any) {
        // Physics Collider (Invisible Box)
        // Reverting to original size for physics
        const width = 2;
        const height = 1;
        const depth = 4;
        const radius = 1.5;

        const geo = new THREE.BoxGeometry(width, height, depth);
        const material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true, visible: false });
        super(scene, radius, 10, color, geo); // Mass 10
        this.mesh.material = material;
        this.debugMesh = this.mesh;

        this.position.copy(startPos);
        this.controls = controls;

        // Player Indicator Circle - REMOVED per user request
        // Using model tint instead.

        // Load 3D Model
        const loader = new GLTFLoader();
        loader.load('./src/game/rc_shvan_-_low_poly_model.glb', (gltf) => {
            const model = gltf.scene;
            model.scale.set(6.0, 6.0, 6.0); // 4x original 1.5
            model.position.y = -0.5; // Rel to center at 0.5 -> 0.0
            model.rotation.y = 0; // Fix inverted orientation: 0 degrees

            // Apply Color Filter to the Model
            model.traverse((c) => {
                if (c instanceof THREE.Mesh) {
                    c.castShadow = true;
                    c.receiveShadow = true;

                    // Clone material to avoid shared references if multiple cars use same model
                    if (c.material) {
                        c.material = c.material.clone();
                        // Apply Tint
                        if (c.material instanceof THREE.MeshStandardMaterial || c.material instanceof THREE.MeshBasicMaterial || c.material instanceof THREE.MeshPhongMaterial) {
                            // "Negro con brillos metalicos de rojo o azul"
                            // To achieve this in PBR:
                            // 1. High Metalness (0.8 - 1.0)
                            // 2. Low Roughness (0.2 - 0.3)
                            // 3. Color set to the tint but VERY dark (reflection color)

                            c.material.color.setHex(color);
                            // c.material.color.multiplyScalar(0.15); // Removed darkening

                            if (c.material instanceof THREE.MeshStandardMaterial) {
                                c.material.metalness = 1.0; // Fully Metallic
                                c.material.roughness = 1.0; // Very Shiny (Mirror-like)
                                c.material.envMapIntensity = 2.5; // Boost environment reflections
                            }
                        }
                    }
                }
            });
            this.mesh.add(model);
        }, undefined, (error) => {
            console.error('An error happened loading the car model:', error);
            // Fallbacks if model fails
            const box = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), new THREE.MeshStandardMaterial({ color: color }));
            box.castShadow = true;
            this.mesh.add(box);
        });
    }

    public toggleDebug() {
        if (this.debugMesh.material instanceof THREE.Material) {
            this.debugMesh.material.visible = !this.debugMesh.material.visible;
        }
    }

    update(dt: number, input: Input) {
        // 1. Calculate orientation vectors
        const forward = new THREE.Vector3(Math.sin(this.rotation), 0, Math.cos(this.rotation));
        const right = new THREE.Vector3(Math.sin(this.rotation - Math.PI / 2), 0, Math.cos(this.rotation - Math.PI / 2));

        // 2. Nitro Logic
        let isBoosting = false;
        if (input.isDown(this.controls.nitro)) {
            if (this.nitro > 0) {
                isBoosting = true;
                this.nitro -= this.nitroConsumption * dt;
                if (this.nitro < 0) this.nitro = 0;
            }
            // If button is held but nitro is 0, DO NOT REGEN.
        } else {
            // Only regen if button is NOT held
            this.nitro += this.nitroRegen * dt;
            if (this.nitro > this.maxNitro) this.nitro = this.maxNitro;
        }

        // 3. Drive Force (Acceleration)
        let drive = 0;
        if (input.isDown(this.controls.up)) drive += 1;
        if (input.isDown(this.controls.down)) drive -= 1;

        // Nitro acts as forced forward impulse
        if (isBoosting) {
            // Nitro is an ADDITIVE impulse, not a driver replacement
            // But if we want it to just "push", we can add to velocity directly
            const impulse = forward.clone().multiplyScalar(this.acceleration * 3 * dt / this.mass);
            this.velocity.add(impulse);
        }

        if (drive !== 0) {
            // F = ma -> a = F/m
            const forceVector = forward.clone().multiplyScalar(drive * this.acceleration);
            this.velocity.add(forceVector.multiplyScalar(dt / this.mass));
        }

        // Toggle Drive Mode (Debounced)
        // Using controls.spin (F/J) as toggle key
        if (input.isDown(this.controls.spin)) {
            if (Date.now() - this.lastToggleTime > 500) {
                this.driveMode = this.driveMode === 'pivot' ? 'rotate' : 'pivot';
                this.lastToggleTime = Date.now();
                console.log(`Switched to ${this.driveMode} mode`);
            }
        }

        // 4. Steering (Turn)
        const forwardSpeed = this.velocity.dot(forward);

        // Turn Logic based on Mode
        let canTurn = false;
        if (this.driveMode === 'rotate') {
            canTurn = true;
        } else {
            // Pivot: Turn only if moving or driving
            canTurn = Math.abs(forwardSpeed) > 1 || drive !== 0;
        }

        if (canTurn) {
            let turnDir = 1;
            if (this.driveMode === 'pivot') {
                // Pivot: Invert steering if reversing (drive < 0) or moving backwards (forwardSpeed < 0)
                turnDir = drive !== 0 ? drive : Math.sign(forwardSpeed);
            }

            // Normal turn speed (Nitro does NOT increase turn speed anymore)
            if (input.isDown(this.controls.left)) {
                this.rotation += this.turnSpeed * dt * turnDir;
            }
            if (input.isDown(this.controls.right)) {
                this.rotation -= this.turnSpeed * dt * turnDir;
            }
        }

        // 5. Lateral Friction (Drift / Tire Grip)
        const rightSpeed = this.velocity.dot(right);
        const gripFactor = 0.1;
        const slideFriction = right.clone().multiplyScalar(-rightSpeed * (1 - gripFactor));
        this.velocity.add(slideFriction);

        // 6. Drag / Friction (Braking)
        // Standard friction
        let currentFriction = this.friction; // 0.98

        // If not driving and not boosting, increase friction (Braking effect)
        if (drive === 0 && !isBoosting) {
            currentFriction = 0.95; // Stronger deceleration
        }

        this.velocity.multiplyScalar(currentFriction);

        // 7. Speed Cap
        // Nitro allows exceeding max speed temporarily, but drag will bring it down
        // If boosting, cap is higher. If not, cap is normal.

        const currentMax = isBoosting ? this.maxSpeedNitro : this.maxSpeed;
        const currentSpeedSq = this.velocity.lengthSq();

        // Only cap if we are actively driving or boosting. 
        // If coasting down from nitro speed, drag handles it.
        // Actually, hard caps are good for stability.
        if (currentSpeedSq > currentMax * currentMax) {
            this.velocity.normalize().multiplyScalar(currentMax);
        }

        // 8. Gravity
        this.velocity.y -= 50 * dt;

        // 9. Position Update
        this.position.addScaledVector(this.velocity, dt);

        // 10. Ground Collision
        if (this.position.y < 0.5) {
            this.position.y = 0.5;
            this.velocity.y = 0;
        }

        // 11. Mesh Update
        this.mesh.position.copy(this.position);
        this.mesh.rotation.y = this.rotation;

        // Update public speed for UI/Debugging
        this.speed = this.velocity.length() * Math.sign(forwardSpeed);

        // 12. Nitro Trail Update
        this.updateTrail(dt, isBoosting);
    }

    private trailParticles: THREE.Mesh[] = [];

    private updateTrail(dt: number, isBoosting: boolean) {
        // 1. Spawn particles if boosting
        if (isBoosting) {
            // Create a simple glowing particle
            const geometry = new THREE.PlaneGeometry(0.8, 0.8);
            const material = new THREE.MeshBasicMaterial({
                color: this.mesh.material instanceof THREE.MeshStandardMaterial ? this.mesh.material.color : 0xffa500, // Use car color or orange
                transparent: true,
                opacity: 0.8,
                side: THREE.DoubleSide
            });
            const particle = new THREE.Mesh(geometry, material);

            // Position behind the car
            const offset = new THREE.Vector3(0, 0.5, -3.0); // Behind (Negative Z)
            offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.rotation);
            particle.position.copy(this.position).add(offset);

            // Randomize slightly
            particle.position.x += (Math.random() - 0.5) * 0.5;
            particle.position.z += (Math.random() - 0.5) * 0.5;

            // Face camera-ish (or just flat on ground? Billboarding is better)
            particle.rotation.x = -Math.PI / 2; // Flat on ground
            // OR Billboard? Let's just do flat squares for performance/style

            // Add to scene (not as child of car!)
            if (this.mesh.parent) {
                this.mesh.parent.add(particle);
                this.trailParticles.push(particle);
            }
        }

        // 2. Update existing particles
        for (let i = this.trailParticles.length - 1; i >= 0; i--) {
            const p = this.trailParticles[i];

            // Fade out
            const mat = p.material as THREE.MeshBasicMaterial;
            mat.opacity -= 2.0 * dt; // Fade speed

            // Shrink
            p.scale.multiplyScalar(0.9);

            // Remove if invisible
            if (mat.opacity <= 0) {
                if (p.parent) p.parent.remove(p);
                this.trailParticles.splice(i, 1);
            }
        }
    }
}

export class Ball extends Entity {
    private dropIndicator: THREE.Mesh;

    constructor(scene: THREE.Scene) {
        const geo = new THREE.SphereGeometry(1.5, 16, 16);
        super(scene, 1.5, 1, 0xffffff, geo); // Mass 1 for bouncy ball
        this.position.y = 1.5;

        // Drop Indicator (White circle on ground)
        const dropGeo = new THREE.CircleGeometry(1.5, 32);
        const dropMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });
        this.dropIndicator = new THREE.Mesh(dropGeo, dropMat);
        this.dropIndicator.rotation.x = -Math.PI / 2;
        this.dropIndicator.position.y = 0.05; // Just above ground
        scene.add(this.dropIndicator);

        // Make the physical sphere invisible/debug
        if (this.mesh.material instanceof THREE.Material) {
            this.mesh.material.visible = false;
        }

        // Load the OBJ model
        const loader = new OBJLoader();
        loader.load('./src/game/football_ball_OBJ.obj', (object) => {
            // Find the main mesh
            const meshes: THREE.Mesh[] = [];
            object.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                    meshes.push(child);
                }
            });

            if (meshes.length > 0) {
                const mesh = meshes[0];
                // 1. Center the geometry
                // This permanently modifies the geometry so its origin is at the center of bounding box
                mesh.geometry.center();

                // 2. Fix Scale (No Simplification needed for 300KB model)
                // Recalculate bounding box after centering
                mesh.geometry.computeBoundingBox();
                const box = mesh.geometry.boundingBox!;
                const size = new THREE.Vector3();
                box.getSize(size);
                const maxDim = Math.max(size.x, size.y, size.z);

                // Target diameter = 3.0 (Radius 1.5)
                const scale = 3.0 / maxDim;
                mesh.scale.set(scale, scale, scale);

                // 3. Visuals
                mesh.castShadow = true;
                mesh.receiveShadow = true;

                // Ensure a nice material if none exists or it looks flat
                // If the OBJ has no normals, compute them
                mesh.geometry.computeVertexNormals();

                if (mesh.material && !(mesh.material instanceof THREE.Material)) {
                    // Array of materials? OBJLoader can return array.
                    // Simplify: just use standard white material if complicated
                    mesh.material = new THREE.MeshStandardMaterial({ color: 0xffffff });
                } else if (!mesh.material) {
                    mesh.material = new THREE.MeshStandardMaterial({ color: 0xffffff });
                }

                // If user provided a texture for the ball, we could load it here.
                // But the OBJ might have MTL or texture coords. 
                // Let's trust the OBJ for now or default white.

                this.mesh.add(mesh);
            }
        }, undefined, (error) => {
            console.error('Error loading soccer ball:', error);
            // Make sphere visible if load fails
            if (this.mesh.material instanceof THREE.Material) {
                this.mesh.material.visible = true;
            }
        });
    }

    public toggleDebug() {
        if (this.mesh.material instanceof THREE.MeshStandardMaterial) {
            this.mesh.material.wireframe = !this.mesh.material.wireframe;
            this.mesh.material.visible = !this.mesh.material.visible; // Toggle visibility too so we can see collider
        }
    }

    update(dt: number) {
        // Speed Limit
        const maxSpeed = 60;
        if (this.velocity.lengthSq() > maxSpeed * maxSpeed) {
            this.velocity.setLength(maxSpeed);
        }

        // Friction
        this.velocity.x *= 0.99;
        this.velocity.z *= 0.99;

        // Gravity
        this.velocity.y -= 30 * dt;

        // Movement
        this.position.addScaledVector(this.velocity, dt);

        // Ground Bounce
        if (this.position.y < this.radius) {
            this.position.y = this.radius;
            // Bounce
            if (Math.abs(this.velocity.y) > 2) {
                this.velocity.y *= -0.7; // Restitution
            } else {
                this.velocity.y = 0;
            }

            // Ground Friction
            this.velocity.x *= 0.95;
            this.velocity.z *= 0.95;
        }

        // Visual Rotation (rolling effect approximation)
        this.mesh.rotation.x += this.velocity.z * dt;
        this.mesh.rotation.z -= this.velocity.x * dt;

        this.mesh.rotation.z -= this.velocity.x * dt;

        this.mesh.position.copy(this.position);

        // Visuals: Scale with Height (Depth perception)
        // Shrink as it goes higher
        const heightFactor = Math.max(0, this.position.y - 1.5);
        const scale = 1.0 / (1.0 + heightFactor * 0.05);
        this.mesh.scale.setScalar(scale);

        // Update Drop Indicator
        this.dropIndicator.position.x = this.position.x;
        this.dropIndicator.position.z = this.position.z;
        this.dropIndicator.visible = this.position.y > 1.6; // Hide if on ground
    }
}
