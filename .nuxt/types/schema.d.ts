import { NuxtModule, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `@nuxtjs/mdc`
     */
    ["mdc"]: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/content`
     */
    ["content"]: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/icon`
     */
    ["icon"]: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     */
    ["colorMode"]: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/nuxt-site-config@3.1.5_magicast@0.3.5_vue@3.5.13_typescript@5.8.2_/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]: typeof import("/Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/nuxt-site-config@3.1.5_magicast@0.3.5_vue@3.5.13_typescript@5.8.2_/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/robots`
     */
    ["robots"]: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/sitemap`
     */
    ["sitemap"]: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-og-image`
     */
    ["ogImage"]: typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-schema-org`
     */
    ["schemaOrg"]: typeof import("nuxt-schema-org").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-link-checker`
     */
    ["linkChecker"]: typeof import("nuxt-link-checker").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-seo-utils`
     */
    ["seo"]: typeof import("nuxt-seo-utils").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     */
    ["nuxtseo"]: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     */
    ["pinia"]: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     */
    ["vueuse"]: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@zinkawaii/nuxt-shiki`
     */
    ["shiki"]: typeof import("@zinkawaii/nuxt-shiki").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxtjs/mdc`
     */
    ["mdc"]?: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/content`
     */
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/icon`
     */
    ["icon"]?: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     */
    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/nuxt-site-config@3.1.5_magicast@0.3.5_vue@3.5.13_typescript@5.8.2_/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]?: typeof import("/Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/nuxt-site-config@3.1.5_magicast@0.3.5_vue@3.5.13_typescript@5.8.2_/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/robots`
     */
    ["robots"]?: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/sitemap`
     */
    ["sitemap"]?: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-og-image`
     */
    ["ogImage"]?: typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-schema-org`
     */
    ["schemaOrg"]?: typeof import("nuxt-schema-org").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-link-checker`
     */
    ["linkChecker"]?: typeof import("nuxt-link-checker").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-seo-utils`
     */
    ["seo"]?: typeof import("nuxt-seo-utils").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     */
    ["nuxtseo"]?: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     */
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     */
    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@zinkawaii/nuxt-shiki`
     */
    ["shiki"]?: typeof import("@zinkawaii/nuxt-shiki").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/mdc", Exclude<NuxtConfig["mdc"], boolean>] | ["@nuxt/content", Exclude<NuxtConfig["content"], boolean>] | ["@nuxt/icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@nuxtjs/color-mode", Exclude<NuxtConfig["colorMode"], boolean>] | ["/Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/nuxt-site-config@3.1.5_magicast@0.3.5_vue@3.5.13_typescript@5.8.2_/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["@nuxtjs/robots", Exclude<NuxtConfig["robots"], boolean>] | ["@nuxtjs/sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["nuxt-og-image", Exclude<NuxtConfig["ogImage"], boolean>] | ["nuxt-schema-org", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["nuxt-link-checker", Exclude<NuxtConfig["linkChecker"], boolean>] | ["nuxt-seo-utils", Exclude<NuxtConfig["seo"], boolean>] | ["@nuxtjs/seo", Exclude<NuxtConfig["nuxtseo"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["@zinkawaii/nuxt-shiki", Exclude<NuxtConfig["shiki"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `@nuxtjs/mdc`
     * @see https://www.npmjs.com/package/@nuxtjs/mdc
     */
    ["mdc"]: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/content`
     * @see https://www.npmjs.com/package/@nuxt/content
     */
    ["content"]: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/icon`
     * @see https://www.npmjs.com/package/@nuxt/icon
     */
    ["icon"]: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     * @see https://www.npmjs.com/package/@nuxtjs/color-mode
     */
    ["colorMode"]: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/nuxt-site-config@3.1.5_magicast@0.3.5_vue@3.5.13_typescript@5.8.2_/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package//Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/nuxt-site-config@3.1.5_magicast@0.3.5_vue@3.5.13_typescript@5.8.2_/node_modules/nuxt-site-config/dist/module
     */
    ["site"]: typeof import("/Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/nuxt-site-config@3.1.5_magicast@0.3.5_vue@3.5.13_typescript@5.8.2_/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/robots`
     * @see https://www.npmjs.com/package/@nuxtjs/robots
     */
    ["robots"]: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/sitemap`
     * @see https://www.npmjs.com/package/@nuxtjs/sitemap
     */
    ["sitemap"]: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-og-image`
     * @see https://www.npmjs.com/package/nuxt-og-image
     */
    ["ogImage"]: typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-schema-org`
     * @see https://www.npmjs.com/package/nuxt-schema-org
     */
    ["schemaOrg"]: typeof import("nuxt-schema-org").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-link-checker`
     * @see https://www.npmjs.com/package/nuxt-link-checker
     */
    ["linkChecker"]: typeof import("nuxt-link-checker").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-seo-utils`
     * @see https://www.npmjs.com/package/nuxt-seo-utils
     */
    ["seo"]: typeof import("nuxt-seo-utils").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     * @see https://www.npmjs.com/package/@nuxtjs/seo
     */
    ["nuxtseo"]: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     * @see https://www.npmjs.com/package/@pinia/nuxt
     */
    ["pinia"]: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     * @see https://www.npmjs.com/package/@vueuse/nuxt
     */
    ["vueuse"]: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@zinkawaii/nuxt-shiki`
     * @see https://www.npmjs.com/package/@zinkawaii/nuxt-shiki
     */
    ["shiki"]: typeof import("@zinkawaii/nuxt-shiki").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxtjs/mdc`
     * @see https://www.npmjs.com/package/@nuxtjs/mdc
     */
    ["mdc"]?: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/content`
     * @see https://www.npmjs.com/package/@nuxt/content
     */
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/icon`
     * @see https://www.npmjs.com/package/@nuxt/icon
     */
    ["icon"]?: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     * @see https://www.npmjs.com/package/@nuxtjs/color-mode
     */
    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/nuxt-site-config@3.1.5_magicast@0.3.5_vue@3.5.13_typescript@5.8.2_/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package//Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/nuxt-site-config@3.1.5_magicast@0.3.5_vue@3.5.13_typescript@5.8.2_/node_modules/nuxt-site-config/dist/module
     */
    ["site"]?: typeof import("/Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/nuxt-site-config@3.1.5_magicast@0.3.5_vue@3.5.13_typescript@5.8.2_/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/robots`
     * @see https://www.npmjs.com/package/@nuxtjs/robots
     */
    ["robots"]?: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/sitemap`
     * @see https://www.npmjs.com/package/@nuxtjs/sitemap
     */
    ["sitemap"]?: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-og-image`
     * @see https://www.npmjs.com/package/nuxt-og-image
     */
    ["ogImage"]?: typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-schema-org`
     * @see https://www.npmjs.com/package/nuxt-schema-org
     */
    ["schemaOrg"]?: typeof import("nuxt-schema-org").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-link-checker`
     * @see https://www.npmjs.com/package/nuxt-link-checker
     */
    ["linkChecker"]?: typeof import("nuxt-link-checker").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-seo-utils`
     * @see https://www.npmjs.com/package/nuxt-seo-utils
     */
    ["seo"]?: typeof import("nuxt-seo-utils").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     * @see https://www.npmjs.com/package/@nuxtjs/seo
     */
    ["nuxtseo"]?: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     * @see https://www.npmjs.com/package/@pinia/nuxt
     */
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     * @see https://www.npmjs.com/package/@vueuse/nuxt
     */
    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@zinkawaii/nuxt-shiki`
     * @see https://www.npmjs.com/package/@zinkawaii/nuxt-shiki
     */
    ["shiki"]?: typeof import("@zinkawaii/nuxt-shiki").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/mdc", Exclude<NuxtConfig["mdc"], boolean>] | ["@nuxt/content", Exclude<NuxtConfig["content"], boolean>] | ["@nuxt/icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@nuxtjs/color-mode", Exclude<NuxtConfig["colorMode"], boolean>] | ["/Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/nuxt-site-config@3.1.5_magicast@0.3.5_vue@3.5.13_typescript@5.8.2_/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["@nuxtjs/robots", Exclude<NuxtConfig["robots"], boolean>] | ["@nuxtjs/sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["nuxt-og-image", Exclude<NuxtConfig["ogImage"], boolean>] | ["nuxt-schema-org", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["nuxt-link-checker", Exclude<NuxtConfig["linkChecker"], boolean>] | ["nuxt-seo-utils", Exclude<NuxtConfig["seo"], boolean>] | ["@nuxtjs/seo", Exclude<NuxtConfig["nuxtseo"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["@zinkawaii/nuxt-shiki", Exclude<NuxtConfig["shiki"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },

   content: {
      cacheVersion: number,

      cacheIntegrity: string,

      transformers: Array<any>,

      base: string,

      api: {
         baseURL: string,
      },

      watch: {
         ws: {
            port: {
               port: number,

               portRange: Array<number>,
            },

            hostname: string,

            showURL: boolean,
         },
      },

      sources: any,

      ignores: Array<any>,

      locales: Array<any>,

      defaultLocale: any,

      highlight: {
         langs: Array<string>,

         theme: {
            default: string,

            dark: string,
         },

         highlighter: string,

         shikiEngine: string,
      },

      markdown: {
         tags: {
            p: string,

            a: string,

            blockquote: string,

            "code-inline": string,

            code: string,

            em: string,

            h1: string,

            h2: string,

            h3: string,

            h4: string,

            h5: string,

            h6: string,

            hr: string,

            img: string,

            ul: string,

            ol: string,

            li: string,

            strong: string,

            table: string,

            thead: string,

            tbody: string,

            td: string,

            th: string,

            tr: string,
         },

         anchorLinks: {
            depth: number,

            exclude: Array<number>,
         },

         remarkPlugins: {
            "remark-reading-time": any,
         },

         toc: {
            depth: number,

            searchDepth: number,
         },

         rehypePlugins: any,
      },

      yaml: any,

      csv: {
         delimeter: string,

         json: boolean,
      },

      navigation: {
         fields: Array<any>,
      },

      contentHead: boolean,

      documentDriven: boolean,

      respectPathCase: boolean,

      experimental: {
         clientDB: boolean,

         cacheContents: boolean,

         stripQueryParameters: boolean,

         advanceQuery: boolean,

         search: {
            indexed: boolean,

            ignoredTags: Array<string>,

            filterQuery: {
               _draft: boolean,

               _partial: boolean,
            },

            options: {
               fields: Array<string>,

               storeFields: Array<string>,

               searchOptions: {
                  prefix: boolean,

                  fuzzy: number,

                  boost: {
                     title: number,

                     content: number,

                     titles: number,
                  },
               },
            },
         },
      },
   },

   icon: {
      serverKnownCssClasses: Array<any>,
   },

   sitemap: {
      isI18nMapped: boolean,

      sitemapName: string,

      isMultiSitemap: boolean,

      excludeAppSources: Array<any>,

      cacheMaxAgeSeconds: number,

      autoLastmod: boolean,

      defaultSitemapsChunkSize: number,

      minify: boolean,

      sortEntries: boolean,

      debug: boolean,

      discoverImages: boolean,

      discoverVideos: boolean,

      sitemapsPathPrefix: string,

      isNuxtContentDocumentDriven: boolean,

      xsl: string,

      xslTips: boolean,

      xslColumns: Array<{

      }>,

      credits: boolean,

      version: string,

      sitemaps: {
         "sitemap.xml": {
            sitemapName: string,

            route: string,

            defaults: any,

            include: Array<any>,

            exclude: Array<string>,

            includeAppSources: boolean,
         },
      },
   },

   "nuxt-schema-org": {
      reactive: boolean,

      minify: boolean,

      scriptAttributes: {
         "data-nuxt-schema-org": boolean,
      },

      identity: any,

      version: string,
   },

   "nuxt-site-config": {
      stack: Array<{

      }>,

      version: string,

      debug: boolean,

      multiTenancy: Array<any>,
   },

   "nuxt-robots": {
      version: string,

      isNuxtContentV2: boolean,

      debug: boolean,

      credits: boolean,

      groups: Array<{

      }>,

      sitemap: Array<string>,

      header: boolean,

      robotsEnabledValue: string,

      robotsDisabledValue: string,

      cacheControl: string,
   },

   "nuxt-og-image": {
      version: string,

      satoriOptions: any,

      resvgOptions: any,

      sharpOptions: any,

      publicStoragePath: string,

      defaults: {
         emojis: string,

         renderer: string,

         component: string,

         extension: string,

         width: number,

         height: number,

         cacheMaxAgeSeconds: number,
      },

      debug: boolean,

      baseCacheKey: string,

      fonts: Array<{

      }>,

      hasNuxtIcon: boolean,

      colorPreference: string,

      strictNuxtContentPaths: any,

      isNuxtContentDocumentDriven: boolean,
   },
  }
  interface PublicRuntimeConfig {
   buildTime: string,

   mdc: {
      components: {
         prose: boolean,

         map: {
            p: string,

            a: string,

            blockquote: string,

            "code-inline": string,

            code: string,

            em: string,

            h1: string,

            h2: string,

            h3: string,

            h4: string,

            h5: string,

            h6: string,

            hr: string,

            img: string,

            ul: string,

            ol: string,

            li: string,

            strong: string,

            table: string,

            thead: string,

            tbody: string,

            td: string,

            th: string,

            tr: string,
         },
      },

      headings: {
         anchorLinks: {
            h1: boolean,

            h2: boolean,

            h3: boolean,

            h4: boolean,

            h5: boolean,

            h6: boolean,
         },
      },
   },

   content: {
      locales: Array<any>,

      defaultLocale: any,

      integrity: number,

      experimental: {
         stripQueryParameters: boolean,

         advanceQuery: boolean,

         clientDB: boolean,
      },

      respectPathCase: boolean,

      api: {
         baseURL: string,
      },

      navigation: {
         fields: Array<any>,
      },

      tags: {
         p: string,

         a: string,

         blockquote: string,

         "code-inline": string,

         code: string,

         em: string,

         h1: string,

         h2: string,

         h3: string,

         h4: string,

         h5: string,

         h6: string,

         hr: string,

         img: string,

         ul: string,

         ol: string,

         li: string,

         strong: string,

         table: string,

         thead: string,

         tbody: string,

         td: string,

         th: string,

         tr: string,
      },

      highlight: {
         langs: Array<string>,

         theme: {
            default: string,

            dark: string,
         },

         highlighter: string,

         shikiEngine: string,
      },

      wsUrl: string,

      documentDriven: boolean,

      host: string,

      trailingSlash: boolean,

      search: {
         indexed: boolean,

         ignoredTags: Array<string>,

         filterQuery: {
            _draft: boolean,

            _partial: boolean,
         },

         options: {
            fields: Array<string>,

            storeFields: Array<string>,

            searchOptions: {
               prefix: boolean,

               fuzzy: number,

               boost: {
                  title: number,

                  content: number,

                  titles: number,
               },
            },
         },
      },

      contentHead: boolean,

      anchorLinks: {
         depth: number,

         exclude: Array<number>,
      },
   },

   "seo-utils": {
      canonicalQueryWhitelist: Array<string>,

      canonicalLowercase: boolean,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }