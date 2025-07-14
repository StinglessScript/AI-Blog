// Static deployment configuration for GitHub Pages
import { defineNuxtConfig } from 'nuxt/config'
import baseConfig from './nuxt.config'

export default defineNuxtConfig({
  ...baseConfig,
  
  // Override for static deployment
  ssr: false,
  
  nitro: {
    prerender: {
      routes: ['/sitemap.xml', '/atom.xml'],
      crawlLinks: true
    }
  },
  
  experimental: {
    payloadExtraction: false,
  },
  
  // Ensure proper routing for SPA
  router: {
    options: {
      hashMode: false
    }
  },
  
  // Generate configuration
  generate: {
    fallback: '404.html'
  }
})
