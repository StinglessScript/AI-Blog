// Generated by nitro
import type { Serialize, Simplify } from "nitropack/types";
declare module "nitropack/types" {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/stats': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/stats.get').default>>>>
    }
    '/atom.xml': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/routes/atom.xml.get').default>>>>
    }
    '/zhilu.opml': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/routes/zhilu.opml.get').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/core/runtime/nitro/handlers/renderer').default>>>>
    }
    '/api/_mdc/highlight': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/highlighter/event-handler').default>>>>
    }
    '/api/_nuxt_icon/:collection': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+icon@1.11.0_magicast@0.3.5_vite@6.2.2_@types+node@22.13.10_jiti@2.4.2_sass@1.85.1_17513f5aa69cd99474a3bc7f34cbf1e5/node_modules/@nuxt/icon/dist/runtime/server/api').default>>>>
    }
    '/__site-config__/debug.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/nuxt-site-config@3.1.5_magicast@0.3.5_vue@3.5.13_typescript@5.8.2_/node_modules/nuxt-site-config/dist/runtime/server/routes/__site-config__/debug').default>>>>
    }
    '/robots.txt': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxtjs+robots@5.2.8_magicast@0.3.5_vue@3.5.13_typescript@5.8.2_/node_modules/@nuxtjs/robots/dist/runtime/server/routes/robots-txt').default>>>>
    }
    '/__robots__/nuxt-content.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxtjs+robots@5.2.8_magicast@0.3.5_vue@3.5.13_typescript@5.8.2_/node_modules/@nuxtjs/robots/dist/runtime/server/routes/__robots__/nuxt-content-v2').default>>>>
    }
    '/__robots__/debug.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxtjs+robots@5.2.8_magicast@0.3.5_vue@3.5.13_typescript@5.8.2_/node_modules/@nuxtjs/robots/dist/runtime/server/routes/__robots__/debug').default>>>>
    }
    '/__robots__/debug-path.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxtjs+robots@5.2.8_magicast@0.3.5_vue@3.5.13_typescript@5.8.2_/node_modules/@nuxtjs/robots/dist/runtime/server/routes/__robots__/debug-path').default>>>>
    }
    '/__sitemap__/nuxt-content-urls.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxtjs+sitemap@7.2.9_h3@1.15.1_magicast@0.3.5_vite@6.2.2_@types+node@22.13.10_jiti@2.4_b2f6b1c1723db3b070602180ba2bd21f/node_modules/@nuxtjs/sitemap/dist/runtime/server/routes/__sitemap__/nuxt-content-urls-v2').default>>>>
    }
    '/__sitemap__/debug.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxtjs+sitemap@7.2.9_h3@1.15.1_magicast@0.3.5_vite@6.2.2_@types+node@22.13.10_jiti@2.4_b2f6b1c1723db3b070602180ba2bd21f/node_modules/@nuxtjs/sitemap/dist/runtime/server/routes/__sitemap__/debug').default>>>>
    }
    '/__sitemap__/style.xsl': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxtjs+sitemap@7.2.9_h3@1.15.1_magicast@0.3.5_vite@6.2.2_@types+node@22.13.10_jiti@2.4_b2f6b1c1723db3b070602180ba2bd21f/node_modules/@nuxtjs/sitemap/dist/runtime/server/routes/sitemap.xsl').default>>>>
    }
    '/sitemap.xml': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxtjs+sitemap@7.2.9_h3@1.15.1_magicast@0.3.5_vite@6.2.2_@types+node@22.13.10_jiti@2.4_b2f6b1c1723db3b070602180ba2bd21f/node_modules/@nuxtjs/sitemap/dist/runtime/server/routes/sitemap.xml').default>>>>
    }
    '/__og-image__/font/**': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/nuxt-og-image@5.0.3_@unhead+vue@2.0.0-rc.13_vue@3.5.13_typescript@5.8.2___magicast@0.3._f24d55df089b7868f004598e1227c90f/node_modules/nuxt-og-image/dist/runtime/server/routes/font').default>>>>
    }
    '/__og-image__/debug.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/nuxt-og-image@5.0.3_@unhead+vue@2.0.0-rc.13_vue@3.5.13_typescript@5.8.2___magicast@0.3._f24d55df089b7868f004598e1227c90f/node_modules/nuxt-og-image/dist/runtime/server/routes/debug.json').default>>>>
    }
    '/__og-image__/image/**': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/nuxt-og-image@5.0.3_@unhead+vue@2.0.0-rc.13_vue@3.5.13_typescript@5.8.2___magicast@0.3._f24d55df089b7868f004598e1227c90f/node_modules/nuxt-og-image/dist/runtime/server/routes/image').default>>>>
    }
    '/__og-image__/static/**': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/nuxt-og-image@5.0.3_@unhead+vue@2.0.0-rc.13_vue@3.5.13_typescript@5.8.2___magicast@0.3._f24d55df089b7868f004598e1227c90f/node_modules/nuxt-og-image/dist/runtime/server/routes/image').default>>>>
    }
    '/__schema-org__/debug.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/nuxt-schema-org@5.0.4_magicast@0.3.5_vue@3.5.13_typescript@5.8.2_/node_modules/nuxt-schema-org/dist/runtime/server/routes/__schema-org__/debug').default>>>>
    }
    '/__link-checker__/inspect': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/nuxt-link-checker@4.2.0_magicast@0.3.5_vite@6.2.2_@types+node@22.13.10_jiti@2.4.2_sass@_baf0ea09af8933f4560db0b4bd507d1b/node_modules/nuxt-link-checker/dist/runtime/server/routes/__link-checker__/inspect').default>>>>
    }
    '/__link-checker__/links': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/nuxt-link-checker@4.2.0_magicast@0.3.5_vite@6.2.2_@types+node@22.13.10_jiti@2.4.2_sass@_baf0ea09af8933f4560db0b4bd507d1b/node_modules/nuxt-link-checker/dist/runtime/server/routes/__link-checker__/links').default>>>>
    }
    '/__link-checker__/debug.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/nuxt-link-checker@4.2.0_magicast@0.3.5_vite@6.2.2_@types+node@22.13.10_jiti@2.4.2_sass@_baf0ea09af8933f4560db0b4bd507d1b/node_modules/nuxt-link-checker/dist/runtime/server/routes/__link-checker__/debug').default>>>>
    }
    '/api/_content/query/:qid/**:params': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/server/api/query').default>>>>
    }
    '/api/_content/query/:qid': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/server/api/query').default>>>>
    }
    '/api/_content/query': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/server/api/query').default>>>>
    }
    '/api/_content/cache.json': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/server/api/cache').default>>>>
    }
    '/api/_content/search': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/server/api/search').default>>>>
    }
    '/api/_content/navigation/:qid/**:params': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/server/api/navigation').default>>>>
    }
    '/api/_content/navigation/:qid': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/server/api/navigation').default>>>>
    }
    '/api/_content/navigation': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/server/api/navigation').default>>>>
    }
    '/_ipx/**': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+image@1.9.0_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5/node_modules/@nuxt/image/dist/runtime/ipx').default>>>>
    }
  }
}
export {}