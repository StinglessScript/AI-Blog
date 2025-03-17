<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
    <h3 class="widget-title">
        Khả năng truy cập
    </h3>
    <div
        class="widget-card seasonal"
        :style="{
            '--seasonal-bg': `url(${appConfig.seasonal.widgetBackground})`,
            '--seasonal-emoji': appConfig.seasonal.emoji,
        }"
    >
        <!-- TODO: Tối ưu hiển thị kiến trúc kỹ thuật -->
        <p>
            Tên miền đã kích hoạt DNSSEC và HSTS, gia hạn đến tháng 8 năm 2030, được lưu trữ trên Vercel;
            blog được vận hành bởi Nuxt Content và sử dụng hệ thống lưu trữ ảnh phi tập trung.
        </p>
        <p>
            Nhận các chứng nhận cấp tỉnh và quốc gia như sau: <br>
            Giang Tô: <span class="seasonal-emoji">Liên kết đến tuyên truyền chống lừa đảo</span><br>
            Trùng Khánh: <span class="seasonal-emoji">Ô nhiễm DNS</span><br>
            China Mobile: <span class="seasonal-emoji">Nhiều tỉnh chặn phân giải tên miền</span>
        </p>
    </div>
</template>

<style lang="scss" scoped>
.seasonal {
    position: relative;
    overflow: hidden;
    z-index: 0;

    &::before {
        content: "";
        position: absolute;
        opacity: 0.2;
        inset: 0;
        background: center / cover;
        background-image: var(--seasonal-bg, "https://wsrv.nl/?url=i0.hdslb.com/bfs/archive/abf1bb4412360550a18e5f2e71b1227e7d949735.png@320w");
        z-index: -1;
    }
}

.seasonal-emoji::before, .seasonal-emoji::after {
    // 文明用语😋
    content: var(--seasonal-emoji, "\1F595");
}
</style>
