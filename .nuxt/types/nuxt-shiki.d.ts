
import type { HookResult } from "@nuxt/schema";
import type { HighlightOptions } from "../../node_modules/.pnpm/@zinkawaii+nuxt-shiki@0.9.0_magicast@0.3.5/node_modules/@zinkawaii/nuxt-shiki/dist/runtime/types";

declare module "#app" {
    export interface RuntimeNuxtHooks {
        "shiki:options": (ctx: {
            options: HighlightOptions;
            extend: (options: Partial<HighlightOptions>) => void;
        }) => HookResult;
    }
}