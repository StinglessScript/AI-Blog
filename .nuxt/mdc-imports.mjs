import _RemarkEmoji from 'remark-emoji'
import _RemarkReadingTime from 'remark-reading-time'
import _Highlight from '/Users/macos/Documents/LongvanV2/AI-Blog/node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/highlighter/rehype-nuxt.js'

export const remarkPlugins = {
  'remark-emoji': { instance: _RemarkEmoji },
  'remark-reading-time': { instance: _RemarkReadingTime },
}

export const rehypePlugins = {
  'highlight': { instance: _Highlight, options: {} },
}

export const highlight = {"theme":{"default":"catppuccin-latte","dark":"one-dark-pro"}}