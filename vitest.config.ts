import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import { fileURLToPath } from "node:url"

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./test/setup.ts"],
    include: ["test/**/*.test.{ts,tsx}"],
  },
  resolve: {
    alias: {
      // Samakan dengan path alias di tsconfig.json: "@/*" -> "./*"
      "@": fileURLToPath(new URL("./", import.meta.url)),
    },
  },
})
