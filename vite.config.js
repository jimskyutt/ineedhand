import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import fs from 'fs';

export default defineConfig({
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
    server: {
        host: '0.0.0.0',
        port: 5173,
        https: {
            key: fs.readFileSync('path/to/your/localhost-key.pem'),
            cert: fs.readFileSync('path/to/your/localhost.pem'),
        },
        hmr: {
            host: '10.38.184.68',
            protocol: 'wss',
            port: 5173
        },
        cors: {
            origin: ['https://10.38.184.68:8000', 'http://10.38.184.68:8000'],
            methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
            allowedHeaders: ['*'],
            credentials: true
        }
    },
});
