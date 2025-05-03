import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@common": path.resolve(__dirname, "src/common"),
      "@domain": path.resolve(__dirname, "src/domain"),
      "@product": path.resolve(__dirname, "src/domain/product"),
      "@user": path.resolve(__dirname, "src/domain/user"),
    },
  },
});
