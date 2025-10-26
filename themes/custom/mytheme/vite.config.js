// web/themes/custom/mytheme/vite.config.js
import { defineConfig } from 'vite';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwind()],
  root: './',
  base: '/themes/custom/mytheme/assets/build/',
  build: {
    outDir: 'assets/build',
    emptyOutDir: true,
    manifest: true, 
    rollupOptions: {
      input: {
        main: 'src/main.js',
        styles: 'src/main.css', // change to 'src/main.css' if that’s your file
        timeline: 'src/timeline.js',
      },
       output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
        assetFileNames: '[name][extname]', // => styles.css
      },
    },
    assetsInlineLimit: 0,
  },
});
