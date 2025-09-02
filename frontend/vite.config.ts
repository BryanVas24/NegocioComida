import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

import { fileURLToPath, URL } from "node:url";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@AppComponents": fileURLToPath(new URL("./src/components/app", import.meta.url)),
      "@AppHooks": fileURLToPath(new URL("./src/hooks/app", import.meta.url)),
    },
  },
});
