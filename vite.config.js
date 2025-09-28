import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig(({ command }) => ({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
                'resources/js/job-posts.js',
            ],
            refresh: true,
        }),
    ],
    server: command === 'serve' ? {
        host: '0.0.0.0',
        port: 5173,
        hmr: {
            host: 'localhost',
            protocol: 'ws',
        },
        cors: {
            origin: ['http://localhost:8000'],
            methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
            allowedHeaders: ['*'],
            credentials: true
        },
    } : undefined,
    build: {
        outDir: 'public/build',
        emptyOutDir: true,
        manifest: true,
    },
}));
