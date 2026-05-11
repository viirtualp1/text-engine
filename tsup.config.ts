import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    "core/index": "src/core/index.ts",
    "ui/index": "src/ui/index.ts",
  },
  format: ["esm", "cjs"],
  dts: false,
  external: ["react", "react-dom"],
  clean: true,
});
