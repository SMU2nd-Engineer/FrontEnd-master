import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@domain": path.resolve(__dirname, "./src/domain"),
      "@user": path.resolve(__dirname, "./src/domain/user"),
      "@products": path.resolve(__dirname, "./src/domain/products"),
      "@mypage": path.resolve(__dirname, "src/domain/mypage"),
      "@chat": path.resolve(__dirname, "src/domain/chat"),
    },
  },
});
