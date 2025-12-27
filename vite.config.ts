import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Build output: ./dist at project root (compatible with Nginx static hosting)
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  // Source files location
  root: path.resolve(import.meta.dirname, "client"),
  // Base path for assets (root-relative for static hosting)
  base: "/",
  build: {
    // Output to ./dist at project root (not ../dist relative to client/)
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    // Deterministic asset filenames for cache busting
    assetsDir: "assets",
  },
});
