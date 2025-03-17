<script setup lang="ts">
import { toZonedTime } from 'date-fns-tz'

const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()
// Chuyển đổi múi giờ máy chủ sang múi giờ được chỉ định của blog
const buildTime = toZonedTime(runtimeConfig.public.buildTime, appConfig.timezone)

const totalWords = ref(appConfig.stats.wordCount)
const yearlyTip = ref('')

const blogStats = computed(() => [{
    label: 'Thời gian hoạt động',
    content: timeElapse(appConfig.timeEstablished),
    tip: `Blog được ra mắt vào ${appConfig.timeEstablished}`,
}, {
    label: 'Cập nhật lần cuối',
    content: timeElapse(buildTime),
    tip: `Được xây dựng vào ${getLocaleDatetime(buildTime)}`,
}, {
    label: 'Tổng số từ',
    content: totalWords,
    tip: yearlyTip.value,
}])

onMounted(async () => {
    const stats = await $fetch('/api/stats')
    totalWords.value = formatNumber(stats.total.words)
    yearlyTip.value = Object.entries(stats.annual).reverse().map(([year, item]) =>
        `${year} năm: ${item.posts} bài, ${formatNumber(item.words)} từ`,
    ).join('\n')
})
</script>

<template>
    <h3 class="widget-title">
        Thống kê blog
    </h3>

    <ul class="widget-card">
        <li v-for="(item, index) in blogStats" :key="index" :title="item.tip">
            <small>{{ item.label }}</small><br>
            <span data-allow-mismatch>{{ item.content }}</span>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    text-align: center;

    >li {
        flex: 1;
        white-space: nowrap;
    }
}
</style>
