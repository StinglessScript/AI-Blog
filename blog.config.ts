import type { NitroConfig } from 'nitropack'
import type { BundledLanguage, BundledTheme } from 'shiki'
import type { FeedEntry } from '~/types/feed'
import redirectList from './redirects.json'

export { enUS as dateLocale } from 'date-fns/locale/en-US'

// Shared configuration for both nuxt.config and app.config
// This includes startup configurations, while runtime configurations are in app/app.config.ts
const blogConfig = {
    title: 'ZTBee',
    subtitle: 'The path is unclear, yet the journey continues',
    // A long description is beneficial for SEO
    description: 'ZTBee\'s personal blog, sharing technology and life. "Keep tinkering, keep exploring." ZTBee is an open-source enthusiast who has met many like-minded friends. This blog records his experiences in life and technical learning, filled with inspiration and thoughts. The website has a clean and beautiful interface, rich and practical content, and active user interaction. It covers programming, life, learning, and other fields, providing an excellent reading experience for visitors.',
    author: {
        name: 'ZTBee',
        avatar: 'https://www.zhilu.cyou/api/avatar.png',
        email: 'hi@zhilu.cyou',
        homepage: 'https://www.zhilu.cyou/',
    },
    copyright: {
        abbr: 'CC BY-NC-SA 4.0',
        name: 'Attribution-NonCommercial-ShareAlike 4.0 International',
        url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en',
    },
    favicon: 'https://www.zhilu.cyou/api/icon.png',
    language: 'en',
    qqGroup: '169994096',
    timeEstablished: '2019-07-19',
    timezone: 'Asia/Shanghai',
    url: 'https://blog.zhilu.cyou/',

    feed: {
        limit: 50,
    },

    // Hidden URL prefixes
    hideContentPrefixes: ['/posts'],

    imageDomains: [
        // Enable Nuxt Image for this domain automatically
        // 'www.zhilu.cyou',
        // '7.isyangs.cn',
    ],

    // Paths excluded from search engine indexing
    robotsNotIndex: ['/preview', '/previews/*'],

    scripts: [
        // Self-hosted Umami analytics
        { 'src': 'https://zhi.zhilu.cyou/zhi.js', 'data-website-id': 'a1997c81-a42b-46f6-8d1d-8fbd67a8ef41', 'defer': true },
        // Cloudflare Insights analytics
        { 'src': 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': '{"token": "97a4fe32ed8240ac8284e9bffaf03962"}', 'defer': true },
    ],

    // Configuration for Shiki & Plain Shiki for syntax highlighting
    // Also used for Iconify Catppuccin icons corresponding to code block languages
    shiki: {
        bundledLangs: <BundledLanguage[]>['bat', 'log', 'sh', 'powershell'],
        langs: <BundledLanguage[]>['bat', 'c', 'cpp', 'css', 'diff', 'html', 'ini', 'java', 'js', 'json', 'log', 'makefile', 'matlab', 'md', 'mdc', 'powershell', 'python', 'sh', 'sql', 'ssh-config', 'toml', 'ts', 'tsx', 'vb', 'vue', 'xml', 'yaml'],
        themes: <BundledTheme[]>['catppuccin-latte', 'one-dark-pro'],
        defaultTheme: <BundledTheme>'catppuccin-latte',
        darkTheme: <BundledTheme>'one-dark-pro',
    },

    // Configuration for Twikoo comment system
    twikoo: {
        js: 'https://gcore.jsdelivr.net/npm/twikoo@1.6.40/dist/twikoo.all.min.js',
        // Self-hosted Twikoo service
        envId: 'https://twikoo.zhilu.cyou/',
        preload: 'https://twikoo.zhilu.cyou/',
    },
}

// Configuration for OPML and friends page
export const myFeed = <FeedEntry>{
    author: blogConfig.author.name,
    sitenick: 'Chill Zone',
    title: blogConfig.title,
    desc: blogConfig.subtitle || blogConfig.description,
    link: blogConfig.url,
    feed: new URL('/atom.xml', blogConfig.url).toString(),
    icon: blogConfig.favicon,
    avatar: blogConfig.author.avatar,
    archs: ['Nuxt', 'Vercel'],
    date: blogConfig.timeEstablished,
    comment: 'This is my personal space',
}

// Permanent redirection from old pages to new pages
const redirectRouteRules = Object.entries(redirectList)
    .reduce<NitroConfig['routeRules']>((acc, [from, to]) => {
        acc![from] = { redirect: { to, statusCode: 301 } }
        return acc
    }, {})

// https://nitro.build/config#routerules
export const routeRules = <NitroConfig['routeRules']>{
    ...redirectRouteRules,
    '/api/stats': { prerender: true, headers: { 'Content-Type': 'application/json' } },
    '/atom.xml': { prerender: true, headers: { 'Content-Type': 'application/xml' } },
    '/zhilu.opml': { prerender: true, headers: { 'Content-Type': 'application/xml' } },
}

export default blogConfig
