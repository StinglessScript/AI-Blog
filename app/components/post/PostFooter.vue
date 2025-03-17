<script setup lang="ts">
import type ArticleProps from '~/types/article'

defineOptions({ inheritAttrs: false })
defineProps<ArticleProps>()

const appConfig = useAppConfig()
</script>

<template>
    <div class="post-footer">
        <section v-if="references" class="reference">
            <div id="references" class="title">
                Tham khảo
            </div>
            <div class="content">
                <ul>
                    <li v-for="(link, index) in references" :key="index">
                        <p v-if="typeof link === 'string'">
                            {{ link }}
                        </p>
                        <ProseA v-else :href="link.link">
                            {{ link?.title ?? link.link }}
                        </ProseA>
                    </li>
                </ul>
            </div>
        </section>
        <section class="license">
            <div class="title">
                Giấy phép
            </div>
            <div class="content">
                <p>
                    Bài viết này được cấp phép theo 
                    <ProseA :href="appConfig.copyright.url">
                        {{ appConfig.copyright.name }}
                    </ProseA>, vui lòng ghi nguồn khi chia sẻ.
                </p>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.post-footer {
    margin: 2rem 0.5rem;
    border: 1px solid var(--c-border);
    border-radius: 1rem;
    background-color: var(--c-bg-2);
}

section {
    padding: 1rem;

    & + section {
        border-top: 1px solid var(--c-border);
    }
}

.title {
    font-weight: var(--font-weight-medium);
    color: var(--c-text);
}

.content {
    margin-top: 0.5em;
    font-size: 0.9rem;

    li {
        margin: 0.5em 0;
    }
}
</style>
