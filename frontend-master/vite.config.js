import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
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
    server: {
      proxy: {
        "/ws": {
          target: env.VITE_BACK_API_URL,
          ws: true,
        },
      },
    },
  };
});
