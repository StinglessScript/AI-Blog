import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { exec } from 'node:child_process'
import { promisify } from 'node:util'

const execAsync = promisify(exec)

const ENV_TEMPLATE = `# AI Auto-Blog Configuration
# Add these to your GitHub repository secrets or local .env file

# OpenAI API Key (recommended)
OPENAI_API_KEY=your_openai_api_key_here

# Claude API Key (alternative)
CLAUDE_API_KEY=your_claude_api_key_here

# Gemini API Key (alternative)
GEMINI_API_KEY=your_gemini_api_key_here

# Vercel deployment (optional)
VERCEL_TOKEN=your_vercel_token_here
VERCEL_ORG_ID=your_vercel_org_id_here
VERCEL_PROJECT_ID=your_vercel_project_id_here

# Blog configuration
AI_BLOG_ENABLED=true
AI_BLOG_LANGUAGE=vi
AI_BLOG_TOPICS_FILE=scripts/blog-topics.json
`

const TOPICS_CONFIG = {
    "topics": [
        {
            "category": "AI & Machine Learning",
            "keywords": ["artificial intelligence", "machine learning", "deep learning", "neural networks"],
            "vietnamese_topics": [
                "Trí tuệ nhân tạo trong cuộc sống hàng ngày",
                "Machine Learning cho người mới bắt đầu",
                "Ứng dụng AI trong kinh doanh",
                "Tương lai của trí tuệ nhân tạo"
            ]
        },
        {
            "category": "Web Development",
            "keywords": ["web development", "javascript", "react", "vue", "nuxt"],
            "vietnamese_topics": [
                "Xu hướng phát triển web 2025",
                "Nuxt.js vs Next.js - So sánh chi tiết",
                "Tối ưu hiệu suất website",
                "JAMstack và tương lai của web"
            ]
        },
        {
            "category": "Technology Trends",
            "keywords": ["technology", "innovation", "digital transformation"],
            "vietnamese_topics": [
                "Công nghệ blockchain và ứng dụng thực tế",
                "Internet of Things (IoT) trong smart home",
                "Cloud Computing cho doanh nghiệp nhỏ",
                "Cybersecurity trong thời đại số"
            ]
        },
        {
            "category": "Programming",
            "keywords": ["programming", "coding", "software development"],
            "vietnamese_topics": [
                "Clean Code - Viết code sạch và dễ bảo trì",
                "Design Patterns trong lập trình",
                "Git và GitHub cho developer",
                "Testing và TDD trong phát triển phần mềm"
            ]
        },
        {
            "category": "Career & Skills",
            "keywords": ["career", "skills", "learning", "productivity"],
            "vietnamese_topics": [
                "Kỹ năng cần thiết cho developer 2025",
                "Remote work và productivity tips",
                "Xây dựng portfolio developer ấn tượng",
                "Học lập trình hiệu quả cho người mới"
            ]
        }
    ],
    "content_types": [
        "tutorial",
        "guide",
        "comparison",
        "tips",
        "analysis",
        "review",
        "case_study"
    ],
    "writing_styles": [
        "beginner_friendly",
        "technical_deep_dive",
        "practical_examples",
        "step_by_step",
        "conceptual_overview"
    ]
}

async function createEnvFile() {
    const envPath = path.join(process.cwd(), '.env.example')
    
    if (!fs.existsSync(envPath)) {
        fs.writeFileSync(envPath, ENV_TEMPLATE, 'utf8')
        console.log('✅ Created .env.example file')
    } else {
        console.log('ℹ️ .env.example already exists')
    }
}

async function createTopicsConfig() {
    const topicsPath = path.join(process.cwd(), 'scripts', 'blog-topics.json')
    
    if (!fs.existsSync(topicsPath)) {
        fs.writeFileSync(topicsPath, JSON.stringify(TOPICS_CONFIG, null, 2), 'utf8')
        console.log('✅ Created blog-topics.json configuration')
    } else {
        console.log('ℹ️ blog-topics.json already exists')
    }
}

async function updatePackageJson() {
    const packagePath = path.join(process.cwd(), 'package.json')
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'))
    
    // Add new scripts
    const newScripts = {
        'ai:blog': 'node scripts/ai-auto-blog.js',
        'ai:setup': 'node scripts/setup-ai-blog.js',
        'ai:test': 'node scripts/test-ai-blog.js'
    }
    
    let updated = false
    for (const [key, value] of Object.entries(newScripts)) {
        if (!packageJson.scripts[key]) {
            packageJson.scripts[key] = value
            updated = true
        }
    }
    
    if (updated) {
        fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2), 'utf8')
        console.log('✅ Updated package.json with AI blog scripts')
    } else {
        console.log('ℹ️ package.json scripts already up to date')
    }
}

async function createTestScript() {
    const testScriptPath = path.join(process.cwd(), 'scripts', 'test-ai-blog.js')
    
    const testScript = `import { generateBlogPost } from './ai-auto-blog.js'

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
`
    
    if (!fs.existsSync(testScriptPath)) {
        fs.writeFileSync(testScriptPath, testScript, 'utf8')
        console.log('✅ Created test script')
    } else {
        console.log('ℹ️ Test script already exists')
    }
}

async function checkGitHubActions() {
    const workflowPath = path.join(process.cwd(), '.github', 'workflows', 'auto-blog.yml')
    
    if (fs.existsSync(workflowPath)) {
        console.log('✅ GitHub Actions workflow exists')
    } else {
        console.log('⚠️ GitHub Actions workflow not found')
        console.log('   Please ensure .github/workflows/auto-blog.yml is created')
    }
}

function printSetupInstructions() {
    console.log(`
🚀 AI Auto-Blog Setup Complete!

📋 Next Steps:

1. 🔑 Setup API Keys:
   - Get an API key from OpenAI, Claude, or Gemini
   - Add to GitHub repository secrets or local .env file
   - Use .env.example as a template

2. 🔧 GitHub Repository Setup:
   - Go to your repository Settings > Secrets and variables > Actions
   - Add your AI API keys as secrets:
     * OPENAI_API_KEY (recommended)
     * CLAUDE_API_KEY (alternative)
     * GEMINI_API_KEY (alternative)

3. 🧪 Test the Setup:
   pnpm ai:test

4. 🤖 Generate a Blog Post Manually:
   pnpm ai:blog

5. ⏰ Automatic Generation:
   - GitHub Actions will run daily at 9:00 AM UTC
   - Or trigger manually from Actions tab

6. 🚀 Optional - Vercel Auto-Deploy:
   - Add VERCEL_TOKEN, VERCEL_ORG_ID, VERCEL_PROJECT_ID to secrets
   - Blog will auto-deploy after generation

📚 Available Commands:
- pnpm ai:blog     - Generate a new blog post
- pnpm ai:test     - Test AI generation
- pnpm ai:setup    - Run this setup again

🔗 Useful Links:
- OpenAI API: https://platform.openai.com/api-keys
- Claude API: https://console.anthropic.com/
- Gemini API: https://makersuite.google.com/app/apikey
- Vercel Tokens: https://vercel.com/account/tokens

Happy blogging! 🎉
`)
}

async function main() {
    console.log('🔧 Setting up AI Auto-Blog system...\n')
    
    try {
        await createEnvFile()
        await createTopicsConfig()
        await updatePackageJson()
        await createTestScript()
        await checkGitHubActions()
        
        console.log('\n' + '='.repeat(50))
        printSetupInstructions()
        
    } catch (error) {
        console.error('❌ Setup failed:', error.message)
        process.exit(1)
    }
}

main()
`
