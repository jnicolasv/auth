import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/output.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
    server: {
        host: '0.0.0.0', // Escuchar en todas las interfaces
        port: 8088, // Puerto configurado
        strictPort: true,
    },
    base: '/build/', // Rutas relativas en producción
});
