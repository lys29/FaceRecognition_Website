import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "App.js"),
                about: resolve(__dirname, "About.js"),
            }
        }
    }
})