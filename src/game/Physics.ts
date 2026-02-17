import * as THREE from 'three';

export interface CircleCollider {
    position: THREE.Vector3;
    radius: number;
    velocity: THREE.Vector3;
    mass: number;
}

export function checkCircleCollision(a: CircleCollider, b: CircleCollider): boolean {
    const distSq = a.position.distanceToSquared(b.position);
    const radiusSum = a.radius + b.radius;
    return distSq < radiusSum * radiusSum;
}

export function resolveElasticCollision(a: CircleCollider, b: CircleCollider) {
    // Normal vector
    const normal = new THREE.Vector3().subVectors(b.position, a.position).normalize();

    // Relative velocity
    const relativeVelocity = new THREE.Vector3().subVectors(b.velocity, a.velocity);

    // Velocity along normal
    const velAlongNormal = relativeVelocity.dot(normal);

    // Do not resolve if velocities are separating
    if (velAlongNormal > 0) return;

    // Restitution (bounciness) - 0.8 looks good
    const e = 0.8;

    // Impulse scalar
    let j = -(1 + e) * velAlongNormal;
    j /= (1 / a.mass + 1 / b.mass);

    // Apply impulse
    const impulse = normal.multiplyScalar(j);
    a.velocity.sub(impulse.clone().multiplyScalar(1 / a.mass));
    b.velocity.add(impulse.clone().multiplyScalar(1 / b.mass));

    // Separation logic to prevent sticking
    const dist = a.position.distanceTo(b.position);
    const overlap = (a.radius + b.radius) - dist;

    if (overlap > 0) {
        const correction = normal.normalize().multiplyScalar(overlap / 2);
        a.position.sub(correction);
        b.position.add(correction);
    }
}
