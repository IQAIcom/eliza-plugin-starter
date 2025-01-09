import { defineConfig } from "tsup";

export default defineConfig({
	entry: {
		index: "src/index.ts",
		client: "src/client.ts",
	},
	format: ["cjs", "esm"],
	dts: true,
	splitting: true,
	sourcemap: true,
	clean: true,
	external: ["react"],
});
