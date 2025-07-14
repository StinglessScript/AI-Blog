// Hybrid solution for GitHub Pages + External Database
// AI writes to external API, GitHub Pages reads via client-side JS

// 1. AI writes to external service (Supabase/Firebase)
// 2. GitHub Pages loads content via client-side JavaScript
// 3. Static files as fallback for SEO

class GitHubPagesHybrid {
  constructor() {
    this.supabaseUrl = 'https://your-project.supabase.co'
    this.supabaseKey = 'your-anon-key'
  }

  // AI writes to Supabase (from GitHub Actions)
  async savePostToSupabase(postData) {
    const response = await fetch(`${this.supabaseUrl}/rest/v1/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': this.supabaseKey,
        'Authorization': `Bearer ${this.supabaseKey}`
      },
      body: JSON.stringify({
        title: postData.title,
        slug: postData.slug,
        content: postData.content,
        description: postData.description,
        category: postData.category,
        tags: postData.tags,
        ai_provider: postData.provider,
        created_at: new Date().toISOString()
      })
    })

    if (!response.ok) {
      throw new Error(`Supabase error: ${response.statusText}`)
    }

    return response.json()
  }

  // Client-side: Load posts from Supabase
  async loadPostsFromSupabase() {
    const response = await fetch(`${this.supabaseUrl}/rest/v1/posts?select=*&order=created_at.desc`, {
      headers: {
        'apikey': this.supabaseKey
      }
    })

    if (!response.ok) {
      throw new Error(`Failed to load posts: ${response.statusText}`)
    }

    return response.json()
  }

  // Generate static files for SEO (background job)
  async generateStaticFiles(posts) {
    for (const post of posts) {
      const year = new Date(post.created_at).getFullYear()
      const filePath = `content/posts/${year}/${post.slug}.md`
      
      const frontmatter = `---
title: "${post.title}"
description: "${post.description}"
date: "${post.created_at}"
categories: ["${post.category}"]
tags: [${post.tags.map(tag => `"${tag}"`).join(', ')}]
---

${post.content}`

      // This would run in GitHub Actions
      await this.writeFile(filePath, frontmatter)
    }
  }

  async writeFile(filePath, content) {
    const fs = await import('node:fs')
    const path = await import('node:path')
    
    const directory = path.dirname(filePath)
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true })
    }
    
    fs.writeFileSync(filePath, content, 'utf8')
  }
}

// Client-side JavaScript for GitHub Pages
const clientSideLoader = `
<script>
// Load latest posts from Supabase on page load
async function loadLatestPosts() {
  try {
    const response = await fetch('https://your-project.supabase.co/rest/v1/posts?select=*&order=created_at.desc&limit=5', {
      headers: {
        'apikey': 'your-anon-key'
      }
    })
    
    const posts = await response.json()
    
    // Inject into page
    const container = document.getElementById('latest-posts')
    container.innerHTML = posts.map(post => \`
      <article class="post-card">
        <h3><a href="/posts/\${post.slug}">\${post.title}</a></h3>
        <p>\${post.description}</p>
        <time>\${new Date(post.created_at).toLocaleDateString()}</time>
      </article>
    \`).join('')
    
  } catch (error) {
    console.error('Failed to load latest posts:', error)
    // Fallback to static content
  }
}

// Load on page ready
document.addEventListener('DOMContentLoaded', loadLatestPosts)
</script>
`

export { GitHubPagesHybrid, clientSideLoader }
