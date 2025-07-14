<template>
  <div class="latest-posts">
    <h2>Latest AI Generated Posts</h2>
    
    <!-- Loading state -->
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <p>Loading latest posts...</p>
    </div>
    
    <!-- Error state -->
    <div v-else-if="error" class="error">
      <p>Failed to load latest posts. Showing static content instead.</p>
    </div>
    
    <!-- Success state -->
    <div v-else class="posts-grid">
      <article 
        v-for="post in latestPosts" 
        :key="post.id"
        class="post-card"
      >
        <h3>
          <NuxtLink :to="`/posts/${post.slug}`">
            {{ post.title }}
          </NuxtLink>
        </h3>
        <p class="description">{{ post.description }}</p>
        <div class="meta">
          <time :datetime="post.created_at">
            {{ formatDate(post.created_at) }}
          </time>
          <span class="category">{{ post.category }}</span>
          <span class="ai-badge">🤖 {{ post.ai_provider }}</span>
        </div>
        <div class="tags">
          <span 
            v-for="tag in post.tags" 
            :key="tag"
            class="tag"
          >
            {{ tag }}
          </span>
        </div>
      </article>
    </div>
    
    <!-- Fallback to static content if database fails -->
    <div v-if="error && staticPosts.length > 0" class="static-fallback">
      <h3>Recent Posts (Static)</h3>
      <ContentList 
        path="/posts" 
        :query="{ 
          only: ['_path', 'title', 'description', 'date', 'categories', 'tags'],
          sort: [{ date: -1 }],
          limit: 5
        }"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const latestPosts = ref([])
const loading = ref(true)
const error = ref(false)
const staticPosts = ref([])

// Supabase config (public keys are safe for client-side)
const supabaseUrl = 'https://your-project.supabase.co'
const supabaseAnonKey = 'your-anon-key'

async function loadLatestPosts() {
  try {
    loading.value = true
    error.value = false
    
    const response = await fetch(`${supabaseUrl}/rest/v1/posts?select=*&order=created_at.desc&limit=5`, {
      headers: {
        'apikey': supabaseAnonKey,
        'Authorization': `Bearer ${supabaseAnonKey}`
      }
    })
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }
    
    const posts = await response.json()
    latestPosts.value = posts
    
    console.log(`✅ Loaded ${posts.length} posts from database`)
    
  } catch (err) {
    console.error('❌ Failed to load from database:', err)
    error.value = true
    
    // Fallback to static content
    await loadStaticPosts()
    
  } finally {
    loading.value = false
  }
}

async function loadStaticPosts() {
  try {
    // This will use Nuxt Content as fallback
    const { data } = await $fetch('/api/_content/query', {
      params: {
        only: ['_path', 'title', 'description', 'date', 'categories', 'tags'],
        where: [{ _dir: '/posts' }],
        sort: [{ date: -1 }],
        limit: 5
      }
    })
    
    staticPosts.value = data || []
    console.log(`📄 Loaded ${staticPosts.value.length} static posts as fallback`)
    
  } catch (err) {
    console.error('❌ Failed to load static posts:', err)
  }
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

onMounted(() => {
  loadLatestPosts()
})
</script>

<style scoped>
.latest-posts {
  margin: 2rem 0;
}

.loading {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  text-align: center;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error {
  padding: 1rem;
  background: #fee;
  border: 1px solid #fcc;
  border-radius: 4px;
  color: #c33;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.post-card {
  padding: 1.5rem;
  border: 1px solid #e1e5e9;
  border-radius: 8px;
  background: white;
  transition: transform 0.2s, box-shadow 0.2s;
}

.post-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.post-card h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
}

.post-card h3 a {
  color: #2c3e50;
  text-decoration: none;
}

.post-card h3 a:hover {
  color: #3498db;
}

.description {
  color: #666;
  margin: 0.5rem 0;
  line-height: 1.5;
}

.meta {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  font-size: 0.875rem;
  color: #888;
}

.ai-badge {
  background: #e8f5e8;
  color: #2d5a2d;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
}

.tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background: #f1f3f4;
  color: #5f6368;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
}

.static-fallback {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e1e5e9;
}
</style>
