import process from 'node:process'
import blogConfig, { routeRules } from './blog.config'

// 此处配置无需修改
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: blogConfig.language,
            },
            link: [
                { rel: 'icon', href: blogConfig.favicon },
                { rel: 'alternate', type: 'application/atom+xml', href: '/atom.xml' },
                { rel: 'preconnect', href: blogConfig.twikoo.preload },
                { rel: 'preconnect', href: 'https://fonts.googleapis.cn' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.cn' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.cn/css2?family=Fira+Code:wght@300..700&family=Noto+Serif+SC:wght@200..900&display=swap', media: 'none', onload: 'this.media="all"' },
                // { rel: 'stylesheet', href: 'https://gcore.jsdelivr.net/npm/nerdfonts-web/nf.min.css' },
            ],
            meta: [
                { name: 'author', content: `${blogConfig.author.name} <${blogConfig.author.email}>` },
                
            ],
            templateParams: {
                separator: '|',
            },
            titleTemplate: `%s %separator ${blogConfig.title}`,
            script: blogConfig.scripts,
        },
        rootId: 'z-root',
        baseURL: process.env.BASE_URL || '/' // GitHub Pages sẽ tự động inject
    },

    compatibilityDate: '2024-08-03',

    // Static site generation configuration
    nitro: {
        prerender: {
            routes: ['/sitemap.xml'],
            crawlLinks: true
        }
    },

    ssr: false, // Disable SSR for static deployment

    components: [
        { path: '~/components/partial', prefix: 'Z' },
        { path: '~/components/zhilu', prefix: 'Zhilu', global: true },
        '~/components',
    ],

    css: [
        '@/assets/css/animation.scss',
        '@/assets/css/article.scss',
        '@/assets/css/color.scss',
        '@/assets/css/main.scss',
        '@/assets/css/reusable.scss',
    ],

    features: {
        inlineStyles: false,
    },

    experimental: {
        payloadExtraction: false, // Disable payload extraction for static sites
    },

    future: {
        compatibilityVersion: 4,
    },

    routeRules,

    runtimeConfig: {
        public: {
            buildTime: new Date().toISOString(),
        },
    },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/css/_variable.scss" as *;',
                    api: 'modern-compiler',
                },
            },
        },
        server: {
            allowedHosts: true,
        },
    },

    modules: [
        '@nuxt/content',
        '@nuxt/icon',
        '@nuxt/image',
        '@nuxtjs/color-mode',
        '@nuxtjs/seo',
        '@pinia/nuxt',
        '@vueuse/nuxt',
        '@zinkawaii/nuxt-shiki',
    ],

    colorMode: {
        preference: 'system',
        fallback: 'light',
        classSuffix: '',
    },

    content: {
        experimental: {
            search: {
                indexed: true
            },
        },
        api: {
            baseURL: '/api/_content'
        },
        highlight: {
            langs: blogConfig.shiki.langs,
            theme: {
                default: blogConfig.shiki.defaultTheme,
                dark: blogConfig.shiki.darkTheme,
            },
        },
        markdown: {
            remarkPlugins: ['remark-reading-time'],
            toc: { depth: 4, searchDepth: 4 },
        },
    },

    icon: {
        customCollections: [
            { prefix: 'zi', dir: './app/assets/icons' },
        ],
    },

    image: {
        // Netlify 需要特殊处理
        provider: process.env.NUXT_IMAGE_PROVIDER,
        domains: blogConfig.imageDomains,
        format: ['avif', 'webp'],
    },

    robots: {
        disallow: blogConfig.robotsNotIndex,
    },

    shiki: {
        bundledLangs: blogConfig.shiki.bundledLangs,
        bundledThemes: blogConfig.shiki.themes,
        defaultLang: 'log',
        defaultTheme: {
            light: blogConfig.shiki.defaultTheme,
            dark: blogConfig.shiki.darkTheme,
        },
    },

    site: {
        name: blogConfig.title,
        url: blogConfig.url,
    },
})
