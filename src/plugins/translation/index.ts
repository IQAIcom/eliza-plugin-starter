import type { Plugin } from "@ai16z/eliza";
import { getTranslationAction } from "./action.ts";
import { translationEvaluator } from "./evaluator.ts";
import { translationProvider } from "./provider/index.ts";
import { initializeTranslationConfig, translationService } from "./service.ts";
import type { TranslationConfig } from "./types.ts";

export const translationPlugin: Plugin = {
	name: "translation",
	description: "A plugin for translating text between different languages",
	actions: [getTranslationAction],
	evaluators: [translationEvaluator],
	providers: [translationProvider],
	services: [translationService],
};

export const initializeTranslationPlugin = (
	config: TranslationConfig,
): void => {
	if (config.provider) {
		initializeTranslationConfig(config.provider);
	}
};

export * from "./types.ts";
