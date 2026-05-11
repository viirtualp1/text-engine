import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/core/index.ts", "src/ui/index.tsx"],
  format: ["esm", "cjs"],
  dts: false,
  external: ["react", "react-dom"],
  clean: true,
});
