import { defineConfig } from "tsup";

export default defineConfig({
	entry: {
		index: "src/index.ts",
		plugins: "src/plugins/*/index.ts",
		scripts: "src/scripts/*.ts",
	},
	format: ["esm", "cjs"],
	dts: true,
	splitting: true,
	sourcemap: true,
	clean: true,
	outDir: "dist",
	target: "node18",
	treeshake: true,
});
