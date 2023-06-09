import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      App: path.resolve(__dirname, "./src/App"),
      indexCSS: path.resolve(__dirname, "./src/index.css"),
      components: path.resolve(__dirname, "./src/components/"),
      Icons: path.resolve(__dirname, "./src/components/Icons"),
      pages: path.resolve(__dirname, "./src/pages"),
      utils: path.resolve(__dirname, "./src/utils"),
      assets: path.resolve(__dirname, "./src/assets"),
    },
  },
});
