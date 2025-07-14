import { exec } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

// AI API Configuration
const AI_PROVIDERS = {
    openai: {
        url: 'https://api.openai.com/v1/chat/completions',
        headers: {
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json'
        }
    },
    claude: {
        url: 'https://api.anthropic.com/v1/messages',
        headers: {
            'x-api-key': process.env.CLAUDE_API_KEY,
            'Content-Type': 'application/json',
            'anthropic-version': '2023-06-01'
        }
    },
    gemini: {
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
        headers: {
            'Content-Type': 'application/json'
        }
    }
}

// Blog topics for AI to choose from
const BLOG_TOPICS = [
    'Artificial Intelligence and Machine Learning',
    'Web Development Trends',
    'Mobile App Development',
    'Cloud Computing and DevOps',
    'Cybersecurity Best Practices',
    'Data Science and Analytics',
    'Blockchain and Cryptocurrency',
    'Internet of Things (IoT)',
    'Software Engineering Principles',
    'Tech Industry News and Analysis',
    'Programming Languages Comparison',
    'Database Management Systems',
    'User Experience (UX) Design',
    'Digital Marketing Strategies',
    'E-commerce Technology',
    'Startup and Entrepreneurship',
    'Remote Work and Productivity',
    'Tech Career Development',
    'Open Source Software',
    'Future of Technology'
]

// Categories mapping
const CATEGORIES = {
    'ai': 'Experience Sharing',
    'web': 'Code',
    'mobile': 'Code',
    'cloud': 'Code',
    'security': 'Experience Sharing',
    'data': 'Code',
    'blockchain': 'Experience Sharing',
    'iot': 'Code',
    'software': 'Code',
    'industry': 'Life',
    'programming': 'Code',
    'database': 'Code',
    'design': 'Experience Sharing',
    'marketing': 'Experience Sharing',
    'ecommerce': 'Experience Sharing',
    'startup': 'Life',
    'remote': 'Life',
    'career': 'Life',
    'opensource': 'Code',
    'future': 'Experience Sharing'
}

async function callAI(provider, prompt) {
    const config = AI_PROVIDERS[provider]
    if (!config) {
        throw new Error(`Unsupported AI provider: ${provider}`)
    }

    let body
    switch (provider) {
        case 'openai':
            body = {
                model: 'gpt-4',
                messages: [{ role: 'user', content: prompt }],
                max_tokens: 2000,
                temperature: 0.7
            }
            break
        case 'claude':
            body = {
                model: 'claude-3-sonnet-20240229',
                max_tokens: 2000,
                messages: [{ role: 'user', content: prompt }]
            }
            break
        case 'gemini':
            body = {
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: {
                    maxOutputTokens: 2000,
                    temperature: 0.7
                }
            }
            break
    }

    try {
        const response = await fetch(config.url, {
            method: 'POST',
            headers: config.headers,
            body: JSON.stringify(body)
        })

        if (!response.ok) {
            throw new Error(`AI API error: ${response.status} ${response.statusText}`)
        }

        const data = await response.json()
        
        // Extract content based on provider
        switch (provider) {
            case 'openai':
                return data.choices[0].message.content
            case 'claude':
                return data.content[0].text
            case 'gemini':
                return data.candidates[0].content.parts[0].text
            default:
                throw new Error('Unknown provider response format')
        }
    } catch (error) {
        console.error(`Error calling ${provider} API:`, error.message)
        throw error
    }
}

function generateSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()
}

function selectRandomTopic() {
    return BLOG_TOPICS[Math.floor(Math.random() * BLOG_TOPICS.length)]
}

function getCategory(topic) {
    const topicLower = topic.toLowerCase()
    for (const [key, category] of Object.entries(CATEGORIES)) {
        if (topicLower.includes(key)) {
            return category
        }
    }
    return 'Experience Sharing' // Default category
}

function generateTags(content) {
    // Simple tag extraction based on content
    const commonTags = ['AI', 'Technology', 'Programming', 'Web Development', 'Tutorial', 'Tips', 'Guide']
    const contentLower = content.toLowerCase()
    
    const relevantTags = commonTags.filter(tag => 
        contentLower.includes(tag.toLowerCase())
    )
    
    // Add some random relevant tags
    const additionalTags = ['Innovation', 'Best Practices', 'Industry Trends']
    const randomTag = additionalTags[Math.floor(Math.random() * additionalTags.length)]
    
    return [...new Set([...relevantTags.slice(0, 3), randomTag])]
}

async function generateBlogPost() {
    const topic = selectRandomTopic()
    const category = getCategory(topic)
    
    const prompt = `Write a comprehensive blog post about "${topic}" in Vietnamese. 
    
    Requirements:
    - Write in Vietnamese language
    - Length: 800-1200 words
    - Include practical examples and actionable insights
    - Use a professional but engaging tone
    - Structure with clear headings and subheadings
    - Include introduction, main content, and conclusion
    - Make it SEO-friendly with relevant keywords
    - Focus on providing value to readers interested in technology and AI
    
    Format the response as a complete blog post with markdown formatting.
    Do not include the frontmatter (title, date, etc.) - just the content.`

    // Try different AI providers in order of preference
    const providers = ['openai', 'claude', 'gemini']
    let content = null
    let usedProvider = null

    for (const provider of providers) {
        const apiKey = process.env[`${provider.toUpperCase()}_API_KEY`]
        if (!apiKey) {
            console.log(`Skipping ${provider}: No API key found`)
            continue
        }

        try {
            console.log(`Trying to generate content with ${provider}...`)
            content = await callAI(provider, prompt)
            usedProvider = provider
            break
        } catch (error) {
            console.error(`Failed with ${provider}:`, error.message)
            continue
        }
    }

    if (!content) {
        throw new Error('All AI providers failed to generate content')
    }

    console.log(`Successfully generated content using ${usedProvider}`)

    // Extract title from content (first heading or generate one)
    const titleMatch = content.match(/^#\s+(.+)$/m)
    const title = titleMatch ? titleMatch[1] : `${topic} - Hướng dẫn chi tiết`
    
    // Generate description from first paragraph
    const descriptionMatch = content.match(/\n\n([^#\n]+)/m)
    const description = descriptionMatch ? 
        descriptionMatch[1].substring(0, 150) + '...' : 
        `Tìm hiểu về ${topic} và cách áp dụng trong thực tế.`

    const slug = generateSlug(title)
    const tags = generateTags(content)
    const now = new Date()
    const dateStr = now.toLocaleDateString('en-CA')
    const timeStr = now.toLocaleTimeString()

    return {
        title,
        description,
        slug,
        category,
        tags,
        content,
        date: `${dateStr} ${timeStr}`,
        provider: usedProvider
    }
}

async function createBlogFile(blogData) {
    // Try to save to external database first
    if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_KEY) {
        try {
            await saveToSupabase(blogData)
            console.log('✅ Saved to Supabase database')
        } catch (error) {
            console.error('❌ Failed to save to Supabase:', error.message)
        }
    }

    // Also save to file for GitHub Pages fallback
    const year = new Date().getFullYear()
    const directory = path.join(process.cwd(), 'content', 'posts', year.toString())

    // Ensure directory exists
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true })
    }

    const filePath = path.join(directory, `${blogData.slug}.md`)

    // Check if file already exists
    if (fs.existsSync(filePath)) {
        console.log(`File ${blogData.slug}.md already exists, skipping...`)
        return null
    }

    const frontmatter = `---
title: "${blogData.title}"
description: "${blogData.description}"
date: "${blogData.date}"
updated: "${blogData.date}"
categories: ["${blogData.category}"]
tags: [${blogData.tags.map(tag => `"${tag}"`).join(', ')}]
# Generated by AI (${blogData.provider})
---

${blogData.content}`

    fs.writeFileSync(filePath, frontmatter, 'utf8')
    console.log(`Created blog post: ${filePath}`)
    return filePath
}

async function saveToSupabase(blogData) {
    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY

    const response = await fetch(`${supabaseUrl}/rest/v1/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
            'Prefer': 'return=representation'
        },
        body: JSON.stringify({
            title: blogData.title,
            slug: blogData.slug,
            content: blogData.content,
            description: blogData.description,
            category: blogData.category,
            tags: blogData.tags,
            ai_provider: blogData.provider,
            created_at: new Date().toISOString()
        })
    })

    if (!response.ok) {
        const error = await response.text()
        throw new Error(`Supabase API error: ${response.status} ${error}`)
    }

    return response.json()
}

async function main() {
    try {
        console.log('🤖 Starting AI auto-blog generation...')

        // Generate 2-3 posts per run (instead of every few minutes)
        const postsToGenerate = Math.floor(Math.random() * 2) + 2 // 2-3 posts
        const generatedPosts = []

        for (let i = 0; i < postsToGenerate; i++) {
            console.log(`\n📝 Generating post ${i + 1}/${postsToGenerate}...`)

            try {
                const blogData = await generateBlogPost()
                const filePath = await createBlogFile(blogData)

                if (filePath) {
                    generatedPosts.push(blogData)
                    console.log(`✅ Generated: ${blogData.title}`)

                    // Wait a bit between posts to avoid rate limits
                    if (i < postsToGenerate - 1) {
                        await new Promise(resolve => setTimeout(resolve, 5000))
                    }
                } else {
                    console.log(`⚠️ Post already exists, skipping...`)
                }

            } catch (error) {
                console.error(`❌ Failed to generate post ${i + 1}:`, error.message)
                continue // Continue with next post
            }
        }

        if (generatedPosts.length > 0) {
            console.log(`\n🎉 Successfully generated ${generatedPosts.length} posts:`)
            generatedPosts.forEach((post, index) => {
                console.log(`${index + 1}. ${post.title} (${post.provider})`)
            })
        } else {
            console.log('⚠️ No new posts generated')
        }

    } catch (error) {
        console.error('❌ Error in main process:', error.message)
        process.exit(1)
    }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
    main()
}

export { generateBlogPost, createBlogFile }
