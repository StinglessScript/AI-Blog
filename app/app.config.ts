import type { Nav, NavItem } from '~/types/nav'
import blogConfig from '~~/blog.config'

export default defineAppConfig({
    ...blogConfig,

    article: {
        categories: <{ [category: string]: { icon: string, color?: string } }>{
            "Experience Sharing": { icon: 'ph:mouse-bold', color: '#3af' },
            "Life": { icon: 'ph:shooting-star-bold', color: '#3ba' },
            "Code": { icon: 'ph:code-bold', color: '#77f' },
            "Uncategorized": { icon: 'ph:folder-dotted-bold' },
        },
        defaultCategoryIcon: 'ph:folder-bold',
        /** Category sorting method, key is the sorting field, value is the display name */
        order: {
            date: 'Creation Date',
            updated: 'Update Date',
            // title: 'Title',
        },
        // Need to modify the key name corresponding to the category icon above
        uncategorizedLabel: 'Uncategorized',
    },

    content: {
        /** Code block auto-collapse trigger line number */
        codeblockCollapsibleRows: 16,
        /** Article excerpt */
        excerpt: {
            animation: true,
            caret: '_',
        },
    },

    footer: {
        /** Footer copyright information */
        copyright: `© ${new Date().getFullYear()} ${blogConfig.author.name}`,
        /** Sidebar bottom icon navigation */
        iconNav: [
            { icon: 'ph:house-bold', text: 'Homepage', url: blogConfig.author.homepage },
            { icon: 'ri:qq-line', text: 'Group: 169994096', url: 'https://jq.qq.com/?_wv=1027&k=lQfNSeEd' },
            { icon: 'ph:github-logo-bold', text: 'GitHub: L33Z22L11', url: 'https://github.com/L33Z22L11' },
            { icon: 'ph:rss-simple-bold', text: 'Atom Subscription', url: '/atom.xml' },
            { icon: 'ph:subway-bold', text: 'Traveling', url: 'https://www.travellings.cn/go-by-clouds.html' },
        ] satisfies NavItem[],
        /** Footer site map */
        nav: [
            {
                title: 'Explore',
                items: [
                    { icon: 'ph:rss-simple-bold', text: 'Atom Subscription', url: '/atom.xml' },
                    { icon: 'ph:subway-bold', text: 'Traveling', url: 'https://www.travellings.cn/go-by-clouds.html' },
                    { icon: 'ph:flying-saucer-bold', text: 'Interdimensional Travel', url: 'https://travel.moe/go.html?travel=on' },
                ],
            },
            {
                title: 'Social',
                items: [
                    { icon: 'ph:github-logo-bold', text: 'L33Z22L11', url: 'https://github.com/L33Z22L11' },
                    { icon: 'ri:qq-line', text: 'Group: 169994096', url: 'https://jq.qq.com/?_wv=1027&k=lQfNSeEd' },
                    { icon: 'ph:envelope-simple-bold', text: blogConfig.author.email, url: `mailto:${blogConfig.author.email}` },
                ],
            },
            {
                title: 'Information',
                items: [
                    { icon: 'simple-icons:nuxtdotjs', text: 'Nuxt Blog Open Source', url: 'https://github.com/L33Z22L11/blog-v3' },
                    { icon: 'ph:swatches-bold', text: 'Theme Inspired by Stellar', url: '/theme' },
                    { icon: 'ph:certificate-bold', text: 'ICP Certificate No. 20246888', url: 'https://icp.gov.moe/?keyword=20246888' },
                ],
            },
        ] satisfies Nav,
        /** Other information at the bottom of the footer copyright information */
        message: '',
    },

    /** Top logo in the left sidebar */
    header: {
        logo: 'https://weavatar.com/avatar/47c0f2e82b76d9b10eb3023df9e02e4e3fdbeaf5b74b842063f207971e7fbe7b?s=160',
        /** Display title text, otherwise display pure logo */
        showTitle: true,
        subtitle: blogConfig.subtitle,
        emojiTail: ['📄', '🦌', '🙌', '🐟', '🏖️'],
    },

    pagination: {
        perPage: 10,
        /** Default sorting method, needs to be a key name in this.article.order */
        sortOrder: 'date' as const,
        /** Allow (normal/preview/archive) article list ascending order, enable to switch order by clicking the icon on the left side of the sorting method */
        allowAscending: false,
    },

    /** Left sidebar navigation */
    nav: [
        {
            title: '',
            items: [
                { icon: 'ph:files-bold', text: 'Articles', url: '/' },
                // { icon: 'ph:link-bold', text: 'Links', url: '/link' },
                { icon: 'ph:archive-bold', text: 'Archive', url: '/archive' },
            ],
        },
    ] satisfies Nav,

    /** Stylized blog-stats widget */
    seasonal: {
        // widgetBackground: 'https://wsrv.nl/?url=i2.hdslb.com/bfs/archive/46165212e09842103752c453d7987a470059760b.jpg@320w',
        // emoji: '🧧',
    },

    stats: {
        /** Age corresponding to the title of each year on the archive page */
        birthYear: 2003,
        /** Preset text for blog-stats widget */
        wordCount: 'About 100,000',
    },

    themes: {
        light: {
            icon: 'ph:sun-bold',
            tip: 'Light Mode',
        },
        system: {
            icon: 'ph:monitor-bold',
            tip: 'Follow System',
        },
        dark: {
            icon: 'ph:moon-bold',
            tip: 'Dark Mode',
        },
    },
})
