import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        target: 'esnext'
    },
    esbuild: {
        target: 'esnext',
        supported: {
            'top-level-await': true
        },
    },
    optimizeDeps: {
        esbuildOptions: {
            target: 'esnext'
        }
    }
});
