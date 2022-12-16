import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                App: resolve(__dirname, "App.js"),
                About: resolve(__dirname, "About.js"),
            }
        }
    }
})