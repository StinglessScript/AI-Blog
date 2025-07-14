import dotenv from 'dotenv'
import { generateBlogPost } from './ai-auto-blog.js'

// Load environment variables
dotenv.config()

async function testAIBlog() {
    console.log('🧪 Testing AI blog generation...')
    
    try {
        const blogData = await generateBlogPost()
        
        console.log('✅ Test successful!')
        console.log('📝 Generated title:', blogData.title)
        console.log('📂 Category:', blogData.category)
        console.log('🏷️ Tags:', blogData.tags.join(', '))
        console.log('🤖 AI Provider:', blogData.provider)
        console.log('📊 Content length:', blogData.content.length, 'characters')
        
        // Show first 200 characters of content
        console.log('📄 Content preview:')
        console.log(blogData.content.substring(0, 200) + '...')
        
    } catch (error) {
        console.error('❌ Test failed:', error.message)
        process.exit(1)
    }
}

testAIBlog()
