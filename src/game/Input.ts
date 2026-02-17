export class Input {
    public keys: { [key: string]: boolean } = {};

    constructor() {
        window.addEventListener('keydown', (e) => {
            this.keys[e.key] = true;
            this.keys[e.code] = true; // Support both key and code
        });
        window.addEventListener('keyup', (e) => {
            this.keys[e.key] = false;
            this.keys[e.code] = false;
        });
        window.addEventListener('blur', () => {
            this.keys = {}; // Clear all keys on focus loss
        });
    }

    isDown(key: string): boolean {
        return !!this.keys[key];
    }
}
