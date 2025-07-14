# 🚀 GitHub Pages Setup Guide

Hướng dẫn deploy blog với AI auto-generation lên GitHub Pages.

## 📋 Bước 1: Cấu hình Repository

### 1.1 Bật GitHub Pages
1. Vào repository Settings
2. Scroll xuống phần **Pages**
3. Trong **Source**, chọn **GitHub Actions**

### 1.2 Thêm API Keys vào Secrets
1. Vào **Settings > Secrets and variables > Actions**
2. Thêm các secrets sau:

**Bắt buộc (ít nhất 1):**
- `OPENAI_API_KEY` - OpenAI API key
- `CLAUDE_API_KEY` - Claude API key  
- `GEMINI_API_KEY` - Gemini API key

**Tùy chọn:**
- `CUSTOM_DOMAIN` - Domain tùy chỉnh (nếu có)

## 📋 Bước 2: Cấu hình Blog

### 2.1 Cập nhật blog.config.ts
Sửa URL trong `blog.config.ts`:

```typescript
// Thay đổi URL thành GitHub Pages URL của bạn
url: 'https://username.github.io/repository-name/',
```

### 2.2 Cập nhật CNAME (nếu có custom domain)
Nếu bạn có domain riêng, tạo file `public/CNAME`:

```
your-domain.com
```

## 📋 Bước 3: Test và Deploy

### 3.1 Test AI Generation Local
```bash
# Cài đặt dependencies
pnpm install

# Setup AI system
pnpm ai:setup

# Test AI generation
pnpm ai:test

# Tạo bài viết thử
pnpm ai:blog
```

### 3.2 Test Build Local
```bash
# Build static site
pnpm generate

# Preview
pnpm preview
```

### 3.3 Deploy lên GitHub
```bash
git add .
git commit -m "Setup AI auto-blog for GitHub Pages"
git push origin main
```

## 🤖 Workflow Tự Động

### Auto-Blog Generation
- **File**: `.github/workflows/auto-blog.yml`
- **Lịch**: Mỗi ngày 9:00 AM UTC (4:00 PM VN)
- **Chức năng**: 
  - Tạo bài viết mới bằng AI
  - Commit vào repository
  - Trigger deployment tự động

### GitHub Pages Deployment  
- **File**: `.github/workflows/deploy-github-pages.yml`
- **Trigger**: Khi có push vào main branch
- **Chức năng**:
  - Build static site với Nuxt
  - Deploy lên GitHub Pages

## 🔧 Cấu hình Nâng cao

### Custom Domain
1. Thêm `CUSTOM_DOMAIN` vào GitHub Secrets
2. Tạo file `public/CNAME` với domain của bạn
3. Cấu hình DNS records:
   ```
   Type: CNAME
   Name: www (hoặc @)
   Value: username.github.io
   ```

### Thay đổi lịch tạo bài
Sửa file `.github/workflows/auto-blog.yml`:

```yaml
schedule:
  # Chạy 2 lần/ngày: 9:00 và 21:00 UTC
  - cron: '0 9,21 * * *'
  # Chỉ chạy thứ 2-6
  - cron: '0 9 * * 1-5'
```

### Tùy chỉnh chủ đề bài viết
Chỉnh sửa `scripts/ai-auto-blog.js`:

```javascript
const BLOG_TOPICS = [
    'Your Custom Topic 1',
    'Your Custom Topic 2',
    // ... thêm chủ đề của bạn
]
```

## 📊 Monitoring

### GitHub Actions
- Vào tab **Actions** để xem logs
- Workflow **AI Auto Blog Generator** - tạo bài viết
- Workflow **Deploy to GitHub Pages** - deployment

### Kiểm tra deployment
- URL: `https://username.github.io/repository-name/`
- Hoặc custom domain nếu đã cấu hình

## 🐛 Troubleshooting

### Lỗi thường gặp

**1. Build failed - Missing API key**
```
Error: All AI providers failed to generate content
```
**Giải pháp**: Kiểm tra API keys trong GitHub Secrets

**2. GitHub Pages không cập nhật**
```
Pages build and deployment completed successfully
```
**Giải pháp**: 
- Kiểm tra file đã được commit chưa
- Xóa cache browser (Ctrl+F5)
- Đợi 5-10 phút để GitHub Pages cập nhật

**3. 404 Error trên GitHub Pages**
```
404 - File not found
```
**Giải pháp**:
- Kiểm tra `baseURL` trong `nuxt.config.ts`
- Đảm bảo repository name đúng
- Kiểm tra GitHub Pages settings

**4. CSS/JS không load**
```
Failed to load resource
```
**Giải pháp**:
- Kiểm tra `baseURL` configuration
- Đảm bảo assets được build đúng

### Debug Commands

```bash
# Kiểm tra build local
pnpm generate
ls -la dist/

# Test AI generation
pnpm ai:test

# Kiểm tra GitHub Actions logs
# Vào repository > Actions tab
```

## 📚 Tài liệu tham khảo

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Nuxt Static Site Generation](https://nuxt.com/docs/getting-started/deployment#static-hosting)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## 🎉 Kết quả

Sau khi setup thành công:
- ✅ Blog tự động tạo bài viết mỗi ngày
- ✅ Tự động deploy lên GitHub Pages
- ✅ Hoàn toàn miễn phí
- ✅ Không cần server riêng

**Happy blogging! 🚀**
