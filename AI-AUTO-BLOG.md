# 🤖 AI Auto-Blog System

Hệ thống tự động tạo bài viết blog bằng AI cho Nuxt.js blog của bạn.

## ✨ Tính năng

- 🤖 **Tự động tạo nội dung**: Sử dụng OpenAI, Claude, hoặc Gemini API
- ⏰ **Lên lịch tự động**: Chạy hàng ngày qua GitHub Actions
- 🌐 **Đa ngôn ngữ**: Hỗ trợ tiếng Việt và tiếng Anh
- 📝 **Đa dạng chủ đề**: AI, công nghệ, lập trình, career tips
- 🚀 **Auto-deploy**: Tự động deploy lên GitHub Pages sau khi tạo bài
- 🏷️ **Smart categorization**: Tự động phân loại và gắn tags
- 📊 **Flexible content**: Hỗ trợ nhiều định dạng bài viết

## 🚀 Cài đặt nhanh

### 1. Chạy script setup

```bash
pnpm ai:setup
```

### 2. Cấu hình API Keys

Tạo file `.env` từ `.env.example` và điền API keys:

```bash
cp .env.example .env
```

Hoặc thêm vào GitHub Secrets (cho auto-deployment):
- `OPENAI_API_KEY` (khuyến nghị)
- `CLAUDE_API_KEY` (thay thế)
- `GEMINI_API_KEY` (thay thế)

### 3. Test thử

```bash
pnpm ai:test
```

### 4. Tạo bài viết thủ công

```bash
pnpm ai:blog
```

## 🔑 Lấy API Keys

### OpenAI (Khuyến nghị)
1. Truy cập [OpenAI Platform](https://platform.openai.com/api-keys)
2. Tạo API key mới
3. Copy và paste vào `.env` hoặc GitHub Secrets

### Claude (Thay thế)
1. Truy cập [Anthropic Console](https://console.anthropic.com/)
2. Tạo API key
3. Copy và paste vào `.env`

### Gemini (Miễn phí)
1. Truy cập [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Tạo API key
3. Copy và paste vào `.env`

## ⚙️ Cấu hình GitHub Actions

### 1. Thêm Secrets vào Repository

Vào `Settings > Secrets and variables > Actions` và thêm:

**Bắt buộc (ít nhất 1):**
- `OPENAI_API_KEY`
- `CLAUDE_API_KEY` 
- `GEMINI_API_KEY`

**Tùy chọn (cho auto-deploy):**
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

### 2. Kích hoạt GitHub Actions

File `.github/workflows/auto-blog.yml` sẽ tự động:
- Chạy hàng ngày lúc 9:00 AM UTC (4:00 PM VN)
- Có thể trigger thủ công từ Actions tab
- Tự động commit và push bài viết mới
- Auto-deploy lên Vercel (nếu cấu hình)

## 📋 Commands có sẵn

```bash
# Tạo bài viết mới bằng AI
pnpm ai:blog

# Test hệ thống AI
pnpm ai:test

# Chạy lại setup
pnpm ai:setup

# Tạo bài viết thủ công (cũ)
pnpm new "tieu-de-bai-viet"
```

## 🎯 Chủ đề được hỗ trợ

- **AI & Machine Learning**: Trí tuệ nhân tạo, ML, Deep Learning
- **Web Development**: JavaScript, React, Vue, Nuxt.js
- **Technology Trends**: Blockchain, IoT, Cloud Computing
- **Programming**: Clean Code, Design Patterns, Testing
- **Career & Skills**: Developer skills, Remote work, Portfolio

## 📁 Cấu trúc Files

```
scripts/
├── ai-auto-blog.js      # Script chính tạo bài viết AI
├── setup-ai-blog.js    # Script setup hệ thống
├── test-ai-blog.js     # Script test AI generation
└── blog-topics.json    # Cấu hình chủ đề

.github/workflows/
└── auto-blog.yml       # GitHub Actions workflow

.env.example            # Template cấu hình
```

## 🔧 Tùy chỉnh

### Thay đổi chủ đề

Chỉnh sửa `scripts/blog-topics.json` để thêm/sửa chủ đề:

```json
{
  "topics": [
    {
      "category": "New Category",
      "vietnamese_topics": [
        "Chủ đề mới 1",
        "Chủ đề mới 2"
      ]
    }
  ]
}
```

### Thay đổi lịch chạy

Sửa file `.github/workflows/auto-blog.yml`:

```yaml
schedule:
  # Chạy 2 lần/ngày: 9:00 và 21:00 UTC
  - cron: '0 9,21 * * *'
```

### Thay đổi ngôn ngữ

Trong `scripts/ai-auto-blog.js`, sửa prompt để thay đổi ngôn ngữ:

```javascript
const prompt = `Write a comprehensive blog post about "${topic}" in English.`
```

## 🐛 Troubleshooting

### Lỗi API Key
```
Error: AI API error: 401 Unauthorized
```
**Giải pháp**: Kiểm tra API key có đúng và còn credit không

### Lỗi GitHub Actions
```
Error: Process completed with exit code 1
```
**Giải pháp**: Kiểm tra Secrets đã được thêm đúng chưa

### Bài viết không được tạo
**Giải pháp**: 
1. Kiểm tra logs trong GitHub Actions
2. Chạy `pnpm ai:test` để test local
3. Đảm bảo có ít nhất 1 API key hợp lệ

## 📈 Monitoring

- **GitHub Actions**: Xem logs tại tab Actions
- **Vercel**: Xem deployment logs tại Vercel dashboard
- **Local testing**: Sử dụng `pnpm ai:test`

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Hãy tạo issue hoặc pull request.

## 📄 License

MIT License - Xem file LICENSE để biết thêm chi tiết.

---

**Happy Auto-Blogging! 🎉**
