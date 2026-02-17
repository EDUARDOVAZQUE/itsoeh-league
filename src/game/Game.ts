import * as THREE from 'three';
// @ts-ignore
import WebGPURenderer from 'three/examples/jsm/renderers/webgpu/WebGPURenderer';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { Car, Ball } from './Entities';
import { Input } from './Input';
import { checkCircleCollision, resolveElasticCollision } from './Physics';
// @ts-ignore
import fondp from './fondp.png';
// @ts-ignore
import musicUrl from './music0.mp3';
// @ts-ignore
import goalUrl from './goal.mp3';
// @ts-ignore
import nitroUrl from './nitro.mp3';

export class Game {
    private renderer: WebGPURenderer | THREE.WebGLRenderer;
    private scene: THREE.Scene;
    private camera: THREE.OrthographicCamera;
    private input: Input;

    private p1: Car;
    private p2: Car;
    private ball: Ball;

    // Scores
    private scoreP1 = 0;
    private scoreP2 = 0;
    private scoreElP1!: HTMLElement;
    private scoreElP2!: HTMLElement;
    private nitroElP1!: HTMLElement;
    private nitroElP2!: HTMLElement;

    // Timer
    private gameTime = 300; // 5 minutes
    private timerEl!: HTMLElement;

    // Effect
    private goalEffects: THREE.Mesh[] = [];

    private lastTime = 0;

    // Screen Shake & Game State
    private shakeTime = 0;
    private shakeIntensity = 0;
    private originalCameraPos: THREE.Vector3 = new THREE.Vector3();
    private isGoalScored = false;

    // Audio
    private listener: THREE.AudioListener;
    private soundMusic: THREE.Audio;
    private soundGoal: THREE.Audio;
    private soundNitro: THREE.Audio;
    private isNitroPlaying = false;
    private hasInteracted = false;

    constructor(container: HTMLElement) {
        this.input = new Input();

        // Audio Setup
        this.listener = new THREE.AudioListener();

        this.soundMusic = new THREE.Audio(this.listener);
        this.soundGoal = new THREE.Audio(this.listener);
        this.soundNitro = new THREE.Audio(this.listener);

        const audioLoader = new THREE.AudioLoader();

        // Load Music
        audioLoader.load(musicUrl, (buffer) => {
            this.soundMusic.setBuffer(buffer);
            this.soundMusic.setLoop(true);
            this.soundMusic.setVolume(8.0);
        });

        // Load Goal
        audioLoader.load(goalUrl, (buffer) => {
            this.soundGoal.setBuffer(buffer);
            this.soundGoal.setLoop(false);
            this.soundGoal.setVolume(1.0);
        });

        // Load Nitro
        audioLoader.load(nitroUrl, (buffer) => {
            this.soundNitro.setBuffer(buffer);
            this.soundNitro.setLoop(true);
            this.soundNitro.setVolume(0.8);
        });

        // User Interaction for Audio
        const startAudio = () => {
            if (!this.hasInteracted) {
                this.hasInteracted = true;

                // Resume Context if suspended
                if (this.listener.context.state === 'suspended') {
                    this.listener.context.resume().then(() => {
                        console.log("AudioContext Resumed");
                    });
                }

                if (this.soundMusic.buffer && !this.soundMusic.isPlaying) {
                    this.soundMusic.play();
                    console.log("Music Started");
                }
            }
        };

        window.addEventListener('click', startAudio);
        window.addEventListener('keydown', startAudio);

        window.addEventListener('keydown', (e) => {
            // Block browser shortcuts (Ctrl+, Alt+)
            // Specifically block Ctrl+W, Ctrl+R, Ctrl+F, etc. which happen when P2 boosts (Ctrl) + P1 plays
            if (e.ctrlKey || e.altKey) {
                // Allow the modifier keys themselves (used for game actions)
                if (['Control', 'Alt', 'Shift', 'Meta'].includes(e.key)) return;

                e.preventDefault();
                // e.stopPropagation(); // Do not stop propagation, so Input class still gets it? 
                // Input class works fine with preventDefault (it only stops browser action)
            }

            // Prevent scrolling with arrows/space
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
                e.preventDefault();
            }

            if (e.key.toLowerCase() === 'r' && !e.ctrlKey) {
                this.p1.toggleDebug();
                this.p2.toggleDebug();
                this.ball.toggleDebug();
            }
        }, { passive: false });



        // Background Image
        console.log("Background Image Path:", fondp);

        // DEBUG: Set bright background to check transparency
        document.body.style.backgroundColor = 'blue';
        container.style.backgroundColor = 'blue';

        container.style.backgroundImage = `url(${fondp})`;
        container.style.backgroundSize = 'cover';
        container.style.backgroundPosition = 'center';
        container.style.backgroundRepeat = 'no-repeat';
        container.style.width = '100%';
        container.style.height = '100%';

        // Force body size just in case
        document.body.style.margin = '0';
        document.body.style.width = '100vw';
        document.body.style.height = '100vh';

        // Create UI Overlay internally to ensure it exists
        // Create UI Overlay (Arcade Style)
        const ui = document.createElement('div');
        ui.style.position = 'absolute';
        ui.style.top = '0';
        ui.style.left = '0';
        ui.style.width = '100%';
        ui.style.height = '100%';
        ui.style.pointerEvents = 'none';
        ui.style.fontFamily = '"Arial Black", Gadget, sans-serif';
        ui.style.zIndex = '100';

        // CSS Styles for Animations and Layout
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes popScale {
                0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
                50% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
                100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            }
            @keyframes scorePop {
                0% { transform: scale(1); }
                50% { transform: scale(1.5); }
                100% { transform: scale(1); }
            }
            .score-pop {
                animation: scorePop 0.3s ease-out;
                color: #ffff00 !important;
                text-shadow: 0 0 10px #ff0000 !important;
            }
            .goal-anim {
                animation: popScale 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
            }
            /* Scoreboard Container */
            .scoreboard {
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                height: 80px;
                filter: drop-shadow(0 4px 6px rgba(0,0,0,0.5));
            }
            .score-panel {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 10px 40px;
                color: white;
                font-size: 32px;
                font-weight: bold;
                position: relative;
                min-width: 120px;
            }
            .score-panel::before {
                content: '';
                position: absolute;
                top: 0; left: 0; right: 0; bottom: 0;
                z-index: -1;
                transform: skewX(-20deg);
                border-bottom: 3px solid rgba(255,255,255,0.2);
            }
            .p1-panel::before { background: linear-gradient(180deg, #001133, #0033aa); border-left: 3px solid #3366ff; }
            .p2-panel::before { background: linear-gradient(180deg, #331100, #aa3300); border-right: 3px solid #ff6633; transform: skewX(20deg); }
            
            .timer-panel {
                background: linear-gradient(180deg, #111, #222);
                color: white;
                font-size: 24px;
                padding: 0 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                clip-path: polygon(0 0, 100% 0, 85% 100%, 15% 100%);
                height: 60px;
                margin-top: -5px; /* Stick to top */
                border-bottom: 2px solid #555;
            }

            /* Circular Nitro */
            .nitro-gauge {
                position: absolute;
                bottom: 30px;
                width: 120px;
                height: 120px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(0,0,0,0.6);
                border-radius: 50%;
                border: 2px solid rgba(255,255,255,0.1);
                box-shadow: 0 0 10px rgba(0,0,0,0.5);
            }
            .nitro-circle {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background: conic-gradient(var(--color) var(--percent), transparent 0);
                mask: radial-gradient(transparent 55%, black 56%);
                -webkit-mask: radial-gradient(transparent 55%, black 56%);
                transform: rotate(180deg);
                opacity: 0.8;
            }
            .nitro-text {
                position: absolute;
                font-size: 24px;
                font-weight: bold;
                color: white;
                text-shadow: 0 0 5px black;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .bolt-icon {
                font-size: 16px;
                margin-bottom: -5px;
            }
        `;
        document.head.appendChild(style);

        ui.innerHTML = `
            <!-- Scoreboard -->
            <div class="scoreboard">
                <div class="score-panel p1-panel">
                    <span id="p1-score" style="text-shadow: 0 0 10px #3366ff;">0</span>
                </div>
                <div class="timer-panel">
                    <span id="game-timer">05:00</span>
                </div>
                <div class="score-panel p2-panel">
                    <span id="p2-score" style="text-shadow: 0 0 10px #ff6633;">0</span>
                </div>
            </div>

            <!-- Goal Overlay -->
            <div id="goal-overlay" style="display: none; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; z-index: 200;">
                <h1 id="goal-text" style="font-size: 100px; color: white; margin: 0; text-transform: uppercase; -webkit-text-stroke: 3px black; filter: drop-shadow(0 0 10px rgba(0,0,0,0.8)); font-style: italic;">GOAL!</h1>
            </div>

            <!-- P1 Nitro (Left) -->
            <div class="nitro-gauge" style="left: 30px; --color: #3366ff;">
                <div id="p1-nitro-visual" class="nitro-circle" style="--percent: 0%;"></div>
                <div class="nitro-text">
                    <span class="bolt-icon">⚡</span>
                    <span id="p1-nitro-text">100%</span>
                </div>
                <div style="position: absolute; bottom: -25px; font-size: 12px; color: #aaa;">PLAYER 1 (E)</div>
            </div>

            <!-- P2 Nitro (Right) -->
            <div class="nitro-gauge" style="right: 30px; --color: #ff6633;">
                <div id="p2-nitro-visual" class="nitro-circle" style="--percent: 0%;"></div>
                <div class="nitro-text">
                    <span class="bolt-icon">⚡</span>
                    <span id="p2-nitro-text">100%</span>
                </div>
                <div style="position: absolute; bottom: -25px; font-size: 12px; color: #aaa;">PLAYER 2 (CTRL)</div>
            </div>
        `;
        container.appendChild(ui);

        // UI references
        this.scoreElP1 = ui.querySelector('#p1-score') as HTMLElement;
        this.scoreElP2 = ui.querySelector('#p2-score') as HTMLElement;
        this.nitroElP1 = ui.querySelector('#p1-nitro-visual') as HTMLElement;
        this.nitroElP2 = ui.querySelector('#p2-nitro-visual') as HTMLElement;
        this.timerEl = ui.querySelector('#game-timer') as HTMLElement;

        if (!this.scoreElP1 || !this.scoreElP2 || !this.nitroElP1 || !this.nitroElP2 || !this.timerEl) {
            console.error("UI Elements not found!", {
                p1: this.scoreElP1, p2: this.scoreElP2,
                n1: this.nitroElP1, n2: this.nitroElP2,
                t: this.timerEl
            });
            const err = document.createElement('div');
            err.style.position = 'absolute';
            err.style.top = '10px';
            err.style.color = 'red';
            err.style.backgroundColor = 'white';
            err.style.zIndex = '9999';
            err.innerText = "Error: UI Elements missing. Check console.";
            container.appendChild(err);
        }

        // Setup Renderer
        try {
            this.renderer = new WebGPURenderer({ antialias: true, alpha: true });
        } catch (e) {
            console.warn("WebGPU not supported, falling back to WebGL");
            this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        }
        this.renderer.setClearColor(0x000000, 0); // Transparent clear color

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        container.appendChild(this.renderer.domElement);



        // Setup Scene
        this.scene = new THREE.Scene();
        // this.scene.background = new THREE.Color(0x202020); // Removed for transparent background

        // Environment for Metallic Reflections
        // Environment for Metallic Reflections
        try {
            const pmremGenerator = new THREE.PMREMGenerator(this.renderer as THREE.WebGLRenderer);
            this.scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0).texture;
            pmremGenerator.dispose();
        } catch (e) {
            console.warn("Failed to create Environment Map (PMREM):", e);
            // Fallback? or just no env map
        }

        // Setup Camera (Orthographic)
        const aspect = window.innerWidth / window.innerHeight;
        const d = 25; // View size
        this.camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 1000);
        this.camera.position.set(20, 20, 20);
        this.camera.lookAt(this.scene.position);
        this.camera.add(this.listener); // Add listener to camera
        this.originalCameraPos.copy(this.camera.position);

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(ambientLight);

        // const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.8);
        // hemiLight.position.set(0, 20, 0);
        // this.scene.add(hemiLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 1);
        dirLight.position.set(10, 20, 10);
        dirLight.castShadow = true;
        dirLight.shadow.camera.top = d;
        dirLight.shadow.camera.bottom = -d;
        dirLight.shadow.camera.left = -d * aspect;
        dirLight.shadow.camera.right = d * aspect;
        dirLight.shadow.bias = -0.0005;
        this.scene.add(dirLight);

        // Ground/Court
        const groundGeo = new THREE.PlaneGeometry(50, 34);
        const textureLoader = new THREE.TextureLoader();
        const groundTexture = textureLoader.load('./src/game/cancha.jpg');
        groundTexture.colorSpace = THREE.SRGBColorSpace;
        const groundMat = new THREE.MeshStandardMaterial({ map: groundTexture });
        const ground = new THREE.Mesh(groundGeo, groundMat);
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        this.scene.add(ground);

        // Boundaries (Simplificado: Perimetro rectangular con huecos en porterias)
        const wallMat = new THREE.MeshStandardMaterial({ color: 0xffffff });

        // Dimensions
        // Dimensions
        const wallHeight = 3;
        const wallThickness = 0.5;
        const fieldWidth = 50;
        const fieldHeight = 34;
        const goalWidth = 10;

        const wallH_Geo = new THREE.BoxGeometry(fieldWidth + wallThickness * 2, wallHeight, wallThickness);

        // Lower wall for the camera side (Bottom) to avoid obstruction
        const wallHeightLow = 0.5; // low height
        const wallH_Low_Geo = new THREE.BoxGeometry(fieldWidth + wallThickness * 2, wallHeightLow, wallThickness);

        // Vertical walls need to be split to leave a gap for the goal
        const sideWallLength = (fieldHeight - goalWidth) / 2;
        const wallV_Geo = new THREE.BoxGeometry(wallThickness, wallHeight, sideWallLength);
        const wallV_Low_Geo = new THREE.BoxGeometry(wallThickness, wallHeightLow, sideWallLength);

        // Top Wall
        const wallTop = new THREE.Mesh(wallH_Geo, wallMat);
        wallTop.position.set(0, wallHeight / 2, -(fieldHeight / 2 + wallThickness / 2));
        this.scene.add(wallTop);

        // Bottom Wall (Lowered)
        const wallBot = new THREE.Mesh(wallH_Low_Geo, wallMat);
        wallBot.position.set(0, wallHeightLow / 2, (fieldHeight / 2 + wallThickness / 2));
        this.scene.add(wallBot);

        // LEFT WALLS (Left is "Back" side relative to camera X approx, keep tall? Or P1 side.)
        // User didn't complain about Left. P1 starts Left.
        // Top-Left
        const wallLeftTop = new THREE.Mesh(wallV_Geo, wallMat);
        wallLeftTop.position.set(-(fieldWidth / 2 + wallThickness / 2), wallHeight / 2, -(fieldHeight / 2 - sideWallLength / 2));
        this.scene.add(wallLeftTop);
        // Bottom-Left
        const wallLeftBot = new THREE.Mesh(wallV_Geo, wallMat);
        wallLeftBot.position.set(-(fieldWidth / 2 + wallThickness / 2), wallHeight / 2, (fieldHeight / 2 - sideWallLength / 2));
        this.scene.add(wallLeftBot);

        // RIGHT WALLS (Side of Car 2, Foreground) -> LOWER THESE
        // Top-Right
        const wallRightTop = new THREE.Mesh(wallV_Low_Geo, wallMat);
        wallRightTop.position.set((fieldWidth / 2 + wallThickness / 2), wallHeightLow / 2, -(fieldHeight / 2 - sideWallLength / 2));
        this.scene.add(wallRightTop);
        // Bottom-Right
        const wallRightBot = new THREE.Mesh(wallV_Low_Geo, wallMat);
        wallRightBot.position.set((fieldWidth / 2 + wallThickness / 2), wallHeightLow / 2, (fieldHeight / 2 - sideWallLength / 2));
        this.scene.add(wallRightBot);

        // Goal Check Floors (Visual only, replacing boxes)
        // Goals are at x = -25 and 25. Depth 4. Width 10.
        const goalFloorGeo = new THREE.PlaneGeometry(4, 10);
        // Simple Green Color, no texture
        const goalFloorMat = new THREE.MeshStandardMaterial({ color: 0x228822 });

        // Left Goal Floor
        const goalLeftFloor = new THREE.Mesh(goalFloorGeo, goalFloorMat);
        goalLeftFloor.rotation.x = -Math.PI / 2;
        goalLeftFloor.position.set(-(fieldWidth / 2 + 2), 0.01, 0);
        this.scene.add(goalLeftFloor);

        // Right Goal Floor
        const goalRightFloor = new THREE.Mesh(goalFloorGeo, goalFloorMat);
        goalRightFloor.rotation.x = -Math.PI / 2;
        goalRightFloor.position.set((fieldWidth / 2 + 2), 0.01, 0);
        this.scene.add(goalRightFloor);

        // No more box meshes for goals. The "hollow" space is now just open air 
        // with a visible floor.

        // Entities
        this.p1 = new Car(this.scene, 0x3366ff, new THREE.Vector3(-15, 0.5, 0), {
            up: 'w', down: 's', left: 'a', right: 'd', nitro: 'e', spin: 'f'
        });

        this.p2 = new Car(this.scene, 0xff6633, new THREE.Vector3(15, 0.5, 0), {
            up: 'ArrowUp', down: 'ArrowDown', left: 'ArrowLeft', right: 'ArrowRight', nitro: 'Control', spin: 'j'
        });
        // Rotate P2 to face left
        this.p2.rotation = Math.PI;
        this.p2.mesh.rotation.y = Math.PI;

        this.ball = new Ball(this.scene);

        // Resize handler
        window.addEventListener('resize', this.onWindowResize.bind(this));

        // Start Loop
        this.renderer.setAnimationLoop(this.animate.bind(this));
    }

    private onWindowResize() {
        const d = 30; // Zoom out simple fix
        const aspect = window.innerWidth / window.innerHeight;

        this.camera.left = -d * aspect;
        this.camera.right = d * aspect;
        this.camera.top = d;
        this.camera.bottom = -d;

        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    private animate(time: number) {
        try {
            const dt = Math.min((time - this.lastTime) / 1000, 0.1); // Cap dt
            this.lastTime = time;

            this.update(dt);
            this.renderer.render(this.scene, this.camera);
        } catch (e) {
            console.error("Game Loop Error:", e);
            this.renderer.setAnimationLoop(null); // Stop loop
            const err = document.createElement('div');
            err.style.position = 'absolute';
            err.style.top = '50%';
            err.style.left = '50%';
            err.style.transform = 'translate(-50%, -50%)';
            err.style.color = 'red';
            err.style.backgroundColor = 'rgba(0,0,0,0.8)';
            err.style.padding = '20px';
            err.style.zIndex = '9999';
            err.innerText = `Game Error: ${e}`;
            document.body.appendChild(err);
        }
    }

    private update(dt: number) {
        // Screen Shake
        if (this.shakeTime > 0) {
            this.shakeTime -= dt;
            const shake = this.shakeIntensity * (this.shakeTime / 0.5); // Fade out
            const rx = (Math.random() - 0.5) * shake;
            const ry = (Math.random() - 0.5) * shake;
            const rz = (Math.random() - 0.5) * shake;

            this.camera.position.copy(this.originalCameraPos).add(new THREE.Vector3(rx, ry, rz));
            this.camera.lookAt(this.scene.position);
        } else {
            if (this.camera.position.distanceTo(this.originalCameraPos) > 0.01) {
                this.camera.position.copy(this.originalCameraPos);
                this.camera.lookAt(this.scene.position);
            }
        }

        // Goal Effects Animation
        for (let i = this.goalEffects.length - 1; i >= 0; i--) {
            const effect = this.goalEffects[i];
            effect.scale.x += 10 * dt; // Expand
            effect.scale.z += 10 * dt;

            if (effect.material instanceof THREE.Material) {
                effect.material.opacity -= 1.5 * dt; // Fade
                if (effect.material.opacity <= 0) {
                    this.scene.remove(effect);
                    this.goalEffects.splice(i, 1);
                }
            }
        }

        // Audio Logic (Nitro)
        // Check if either player is boosting (and has nitro > 0 handled by Entity)
        // We can check input for nitro keys, but let's check explicit state (assumed or inferred)
        // Simplest: Check input and nitro amount logic here or infer from speed?
        // Let's check input + nitro > 0
        const p1Boost = this.input.isDown(this.p1['controls'].nitro) && this.p1.nitro > 0;
        const p2Boost = this.input.isDown(this.p2['controls'].nitro) && this.p2.nitro > 0;

        if (p1Boost || p2Boost) {
            if (!this.isNitroPlaying && this.soundNitro.buffer) {
                this.soundNitro.play();
                this.isNitroPlaying = true;
            }
        } else {
            if (this.isNitroPlaying) {
                this.soundNitro.stop();
                this.isNitroPlaying = false;
            }
        }

        // Toggle Debug
        if (this.input.isDown('r')) {
            // Simple debounce or state check? 
            // isDown is true every frame. We need 'onPress'.
            // For now, let's rely on the user tapping quickly or add a flag
        }
        // Actually, Input class only has isDown. Let's add a debouncer in Game or just check in keys.
        // Better: Event listener in Input or here?
        // Let's add a one-off check here using a flag or just hook into keyup in Input.
        // No, let's just add it to the window event listener in Game constructor or use a 'justPressed' logic.

        this.p1.update(dt, this.input);
        this.p2.update(dt, this.input);
        this.ball.update(dt);

        // Update Timer
        if (this.gameTime > 0) {
            this.gameTime -= dt;
            if (this.gameTime < 0) this.gameTime = 0;

            // Format time
            const minutes = Math.floor(this.gameTime / 60);
            const seconds = Math.floor(this.gameTime % 60);
            this.timerEl.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} `;
        }

        // Update UI (Nitro Circular)
        // Nitro is 0-100.
        // Conic gradient: var(--percent)
        this.nitroElP1.style.setProperty('--percent', `${this.p1.nitro}% `);
        this.nitroElP2.style.setProperty('--percent', `${this.p2.nitro}% `);

        // Update Text
        const textP1 = document.getElementById('p1-nitro-text');
        if (textP1) textP1.innerText = `${Math.floor(this.p1.nitro)}% `;

        const textP2 = document.getElementById('p2-nitro-text');
        if (textP2) textP2.innerText = `${Math.floor(this.p2.nitro)}% `;

        // Collisions
        if (checkCircleCollision(this.p1, this.ball)) {
            resolveElasticCollision(this.p1, this.ball);
        }
        if (checkCircleCollision(this.p2, this.ball)) {
            resolveElasticCollision(this.p2, this.ball);
        }

        // Car-Car Collision (Optional, keeping it simple for now)
        if (checkCircleCollision(this.p1, this.p2)) {
            resolveElasticCollision(this.p1, this.p2);
        }

        // Boundary Checks (Ball)
        const fieldW = 25;
        const fieldH = 17;
        const goalDepth = 4;
        const goalHalfWidth = 5;
        const ballR = this.ball.radius;

        // X Limits (Goals?)
        // Right Goal (P1 scoring? or P2 defending?)
        if (this.ball.position.x > fieldW - ballR) {
            // Check if within Goal Width
            if (Math.abs(this.ball.position.z) < goalHalfWidth) {
                // Deeper check for score
                if (this.ball.position.x > fieldW + goalDepth - ballR - 1) {
                    this.handleGoal(1); // P1 scores
                }
                // Side walls of goal
                if (Math.abs(this.ball.position.z) > goalHalfWidth - ballR) {
                    // Bounce off side inside goal? Simplified: Push back locally
                    this.ball.velocity.z *= -0.5;
                    this.ball.position.z = Math.sign(this.ball.position.z) * (goalHalfWidth - ballR);
                }
            } else {
                // Hit the wall
                this.ball.position.x = fieldW - ballR;
                this.ball.velocity.x *= -0.8;
            }
        } else if (this.ball.position.x < -fieldW + ballR) {
            // Left Goal
            if (Math.abs(this.ball.position.z) < goalHalfWidth) {
                if (this.ball.position.x < -(fieldW + goalDepth - ballR - 1)) {
                    this.handleGoal(2); // P2 scores
                }
                // Side walls of goal
                if (Math.abs(this.ball.position.z) > goalHalfWidth - ballR) {
                    this.ball.velocity.z *= -0.5;
                    this.ball.position.z = Math.sign(this.ball.position.z) * (goalHalfWidth - ballR);
                }
            } else {
                this.ball.position.x = -fieldW + ballR;
                this.ball.velocity.x *= -0.8;
            }
        }

        // Z Limits
        if (this.ball.position.z > fieldH - ballR) {
            this.ball.position.z = fieldH - ballR;
            this.ball.velocity.z *= -0.8;
        } else if (this.ball.position.z < -fieldH + ballR) {
            this.ball.position.z = -fieldH + ballR;
            this.ball.velocity.z *= -0.8;
        }

        // Car Boundaries (Keep them inside)
        this.constrainEntity(this.p1, fieldW, fieldH);
        this.constrainEntity(this.p2, fieldW, fieldH);
    }

    private constrainEntity(entity: Car, w: number, h: number) {
        const margin = entity.radius;
        const goalWidth = 5; // Half width
        const goalDepth = 4;

        // X Bounds
        if (entity.position.x > w - margin) {
            // Allow entering goal
            if (Math.abs(entity.position.z) < goalWidth - margin) {
                if (entity.position.x > w + goalDepth - margin) {
                    entity.position.x = w + goalDepth - margin;
                    entity.velocity.x *= -0.1; // Bounce slightly instead of stop
                }
            } else {
                entity.position.x = w - margin;
                entity.velocity.x *= -0.1; // Bounce slightly
            }
        }
        if (entity.position.x < -w + margin) {
            // Allow entering goal
            if (Math.abs(entity.position.z) < goalWidth - margin) {
                if (entity.position.x < -(w + goalDepth - margin)) {
                    entity.position.x = -(w + goalDepth - margin);
                    entity.velocity.x *= -0.1;
                }
            } else {
                entity.position.x = -w + margin;
                entity.velocity.x *= -0.1;
            }
        }

        // Z Bounds
        if (entity.position.z > h - margin) {
            entity.position.z = h - margin;
            entity.velocity.z *= -0.1;
        }
        if (entity.position.z < -h + margin) {
            entity.position.z = -h + margin;
            entity.velocity.z *= -0.1;
        }

        this.checkGoalPostCollisions(entity, w, 5); // 5 is goalHalfWidth
    }

    private checkGoalPostCollisions(entity: Car, fieldW: number, goalHalfW: number) {
        // Post positions: (+- fieldW, +- goalHalfW)
        // We treat them as static circles with small radius
        const postRadius = 0.5; // Thickness of wall/post
        const posts = [
            { x: fieldW, z: goalHalfW },
            { x: fieldW, z: -goalHalfW },
            { x: -fieldW, z: goalHalfW },
            { x: -fieldW, z: -goalHalfW }
        ];

        for (const p of posts) {
            // Check distance
            const dx = entity.position.x - p.x;
            const dz = entity.position.z - p.z;
            const distSq = dx * dx + dz * dz;
            const combinedRadius = entity.radius + postRadius;

            if (distSq < combinedRadius * combinedRadius) {
                // Collision!
                const dist = Math.sqrt(distSq);
                const normal = new THREE.Vector3(dx, 0, dz).normalize();

                // 1. Push out (Separation)
                const overlap = combinedRadius - dist;
                entity.position.add(normal.clone().multiplyScalar(overlap));

                // 2. Bounce (Velocity reflection)
                const velAlongNormal = entity.velocity.dot(normal);
                if (velAlongNormal < 0) {
                    // Bounce factor
                    const restitution = 0.5;
                    const j = -(1 + restitution) * velAlongNormal;
                    const impulse = normal.multiplyScalar(j);

                    // Apply to entity (Post has infinite mass, so entity takes it all)
                    entity.velocity.add(impulse);
                }
            }
        }
    }

    private handleGoal(scorer: number) {
        if (this.isGoalScored) return;
        this.isGoalScored = true;

        // Show Goal Overlay
        const goalText = document.getElementById('goal-text');
        const goalOverlay = document.getElementById('goal-overlay');
        if (goalOverlay && goalText) {
            // Reset Styles first (Default Center)
            goalOverlay.style.top = '50%';
            goalOverlay.style.left = '50%';
            goalOverlay.style.bottom = 'auto';
            goalOverlay.style.right = 'auto';
            goalOverlay.style.transform = 'translate(-50%, -50%)';
            goalOverlay.style.textAlign = 'center';

            // Custom positioning for P1 (Blue)
            if (scorer === 1) {
                goalOverlay.style.top = 'auto';
                goalOverlay.style.left = 'auto';
                goalOverlay.style.bottom = '10%';
                goalOverlay.style.right = '10%';
                goalOverlay.style.transform = 'none';
                goalOverlay.style.textAlign = 'right';
            }

            goalOverlay.style.display = 'block';
            goalText.classList.remove('goal-anim');
            void goalText.offsetWidth; // trigger reflow
            goalText.classList.add('goal-anim');

            // Hide after 2s
            setTimeout(() => {
                goalOverlay.style.display = 'none';
            }, 2000);
        }

        // Screen Shake
        this.shakeTime = 0.5;
        this.shakeIntensity = 2.0;

        // Play Goal Sound
        if (this.soundGoal.buffer) {
            if (this.soundGoal.isPlaying) this.soundGoal.stop();
            this.soundGoal.play();
        }

        if (scorer === 1) {
            this.scoreP1++;
            this.scoreElP1.innerText = `P1: ${this.scoreP1} `;
            this.scoreElP1.parentElement?.classList.add('score-pop');
            setTimeout(() => this.scoreElP1.parentElement?.classList.remove('score-pop'), 300);

            // Effect (Right Goal)
            this.triggerGoalEffect(new THREE.Vector3(25, 0, 0), 0x3366ff);
        } else {
            this.scoreP2++;
            this.scoreElP2.innerText = `P2: ${this.scoreP2} `;
            this.scoreElP2.parentElement?.classList.add('score-pop');
            setTimeout(() => this.scoreElP2.parentElement?.classList.remove('score-pop'), 300);

            // Effect (Left Goal)
            this.triggerGoalEffect(new THREE.Vector3(-25, 0, 0), 0xff6633);
        }

        // Reset delayed
        setTimeout(() => {
            this.p1.nitro = 100;
            this.p2.nitro = 100;
            this.resetPositions();
        }, 2000);
    }

    private triggerGoalEffect(pos: THREE.Vector3, color: number) {
        const geo = new THREE.CylinderGeometry(1, 1, 20, 32); // Tall cylinder
        const mat = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 1.0,
            side: THREE.DoubleSide
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.copy(pos);
        mesh.position.y = 10; // Center vertically
        this.scene.add(mesh);
        this.goalEffects.push(mesh);
    }

    private resetPositions() {
        this.isGoalScored = false;
        this.ball.position.set(0, 1.5, 0);
        this.ball.velocity.set(0, 0, 0);

        this.p1.position.set(-15, 0.5, 0);
        this.p1.rotation = 0;
        this.p1.speed = 0;
        this.p1.velocity.set(0, 0, 0);

        this.p2.position.set(15, 0.5, 0);
        this.p2.rotation = Math.PI;
        this.p2.speed = 0;
        this.p2.velocity.set(0, 0, 0);
    }
}
