import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    base: command === "build" ? "/watermark/" : "/",
    plugins: [react()],
    optimizeDeps: {
      include: ["lucide-react"],
      exclude: ["lucide-react/icons"],
    },
  };
});
