<script setup lang="ts">
const appConfig = useAppConfig()
const timeEstablished = appConfig.timeEstablished

const blogLog = [
    { date: '2030-08-10', content: 'Domain expiration, expected to redirect and migrate in advance, will notify friends in the link' },
    { date: '2024-08-11', content: 'Nuxt Content restructured blog launched' },
    { date: '2023-05-24', content: 'Switched framework to Hexo, upgraded blog' },
    { date: '2020-08-24', content: 'Switched to current domain' },
    { date: timeEstablished, content: 'Published the first article' },
]
</script>

<template>
    <h3 class="widget-title">
        Update Log
    </h3>
    <!-- TODO: Optimize timeline style -->
    <div class="widget-card">
        <ul>
            <li v-for="(item, index) in blogLog" :key="index">
                <small>{{ item.date }}</small><br>
                {{ item.content }}
            </li>
        </ul>
    </div>
</template>
