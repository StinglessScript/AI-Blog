
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'Alert': typeof import("../app/components/content/Alert.vue")['default']
    'Badge': typeof import("../app/components/content/Badge.vue")['default']
    'Blur': typeof import("../app/components/content/Blur.vue")['default']
    'CardList': typeof import("../app/components/content/CardList.vue")['default']
    'Chat': typeof import("../app/components/content/Chat.vue")['default']
    'Copy': typeof import("../app/components/content/Copy.vue")['default']
    'EmojiClock': typeof import("../app/components/content/EmojiClock.vue")['default']
    'FeedCard': typeof import("../app/components/content/FeedCard.vue")['default']
    'FeedGroup': typeof import("../app/components/content/FeedGroup.vue")['default']
    'Folding': typeof import("../app/components/content/Folding.vue")['default']
    'Key': typeof import("../app/components/content/Key.vue")['default']
    'LinkBanner': typeof import("../app/components/content/LinkBanner.vue")['default']
    'LinkCard': typeof import("../app/components/content/LinkCard.vue")['default']
    'Pic': typeof import("../app/components/content/Pic.vue")['default']
    'Poetry': typeof import("../app/components/content/Poetry.vue")['default']
    'ProseA': typeof import("../app/components/content/ProseA.vue")['default']
    'ProseCodeInline': typeof import("../app/components/content/ProseCodeInline.vue")['default']
    'ProsePre': typeof import("../app/components/content/ProsePre.vue")['default']
    'ProseTable': typeof import("../app/components/content/ProseTable.vue")['default']
    'Quote': typeof import("../app/components/content/Quote.vue")['default']
    'RenderWithRaw': typeof import("../app/components/content/RenderWithRaw.vue")['default']
    'Tab': typeof import("../app/components/content/Tab.vue")['default']
    'Timeline': typeof import("../app/components/content/Timeline.vue")['default']
    'Tip': typeof import("../app/components/content/Tip.vue")['default']
    'VideoEmbed': typeof import("../app/components/content/VideoEmbed.vue")['default']
    'ZArchive': typeof import("../app/components/partial/Archive.vue")['default']
    'ZArticle': typeof import("../app/components/partial/Article.vue")['default']
    'ZButton': typeof import("../app/components/partial/Button.vue")['default']
    'ZDropdown': typeof import("../app/components/partial/Dropdown.vue")['default']
    'ZError': typeof import("../app/components/partial/Error.vue")['default']
    'ZIconNavList': typeof import("../app/components/partial/IconNavList.vue")['default']
    'ZOrderToggle': typeof import("../app/components/partial/OrderToggle.vue")['default']
    'ZPagination': typeof import("../app/components/partial/Pagination.vue")['default']
    'ZRawLink': typeof import("../app/components/partial/RawLink.vue")['default']
    'ZSearchItem': typeof import("../app/components/partial/SearchItem.vue")['default']
    'ZhiluIcon': typeof import("../app/components/zhilu/Icon.vue")['default']
    'ZhiluIconOld': typeof import("../app/components/zhilu/IconOld.vue")['default']
    'ZhiluHeader': typeof import("../app/components/zhilu/ZhiluHeader.vue")['default']
    'SkipToContent': typeof import("../app/components/SkipToContent.vue")['default']
    'ThemeToggle': typeof import("../app/components/ThemeToggle.vue")['default']
    'ZAside': typeof import("../app/components/ZAside.vue")['default']
    'ZFooter': typeof import("../app/components/ZFooter.vue")['default']
    'ZPanel': typeof import("../app/components/ZPanel.vue")['default']
    'ZPopover': typeof import("../app/components/ZPopover.vue")['default']
    'ZSidebar': typeof import("../app/components/ZSidebar.vue")['default']
    'PopoverLightbox': typeof import("../app/components/popover/Lightbox.vue")['default']
    'PopoverSearch': typeof import("../app/components/popover/Search.vue")['default']
    'PostComment': typeof import("../app/components/post/Comment.vue")['default']
    'PostExcerpt': typeof import("../app/components/post/Excerpt.vue")['default']
    'PostFooter': typeof import("../app/components/post/PostFooter.vue")['default']
    'PostHeader': typeof import("../app/components/post/PostHeader.vue")['default']
    'PostSurround': typeof import("../app/components/post/PostSurround.vue")['default']
    'PostSlide': typeof import("../app/components/post/Slide.vue")['default']
    'WidgetBlogLog': typeof import("../app/components/widget/BlogLog.vue")['default']
    'WidgetBlogStats': typeof import("../app/components/widget/BlogStats.vue")['default']
    'WidgetConnectivity': typeof import("../app/components/widget/Connectivity.vue")['default']
    'WidgetEmpty': typeof import("../app/components/widget/Empty.vue")['default']
    'WidgetGithubCard': typeof import("../app/components/widget/GithubCard.vue")['default']
    'WidgetToc': typeof import("../app/components/widget/Toc.vue")['default']
    'ContentDoc': typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue")['default']
    'ContentList': typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue")['default']
    'ContentNavigation': typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue")['default']
    'ContentQuery': typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue")['default']
    'ContentRenderer': typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']
    'ContentRendererMarkdown': typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue")['default']
    'ContentSlot': typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue")['default']
    'DocumentDrivenEmpty': typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue")['default']
    'DocumentDrivenNotFound': typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.vue")['default']
    'Markdown': typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/Markdown.vue")['default']
    'ProseCode': typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue")['default']
    'ProseBlockquote': typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue")['default']
    'ProseEm': typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue")['default']
    'ProseH1': typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue")['default']
    'ProseH2': typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue")['default']
    'ProseH3': typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue")['default']
    'ProseH4': typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue")['default']
    'ProseH5': typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']
    'ProseH6': typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']
    'ProseHr': typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue")['default']
    'ProseImg': typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue")['default']
    'ProseLi': typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue")['default']
    'ProseOl': typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue")['default']
    'ProseP': typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue")['default']
    'ProseScript': typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']
    'ProseStrong': typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue")['default']
    'ProseTbody': typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue")['default']
    'ProseTd': typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue")['default']
    'ProseTh': typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue")['default']
    'ProseThead': typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue")['default']
    'ProseTr': typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue")['default']
    'ProseUl': typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/.pnpm/@nuxt+image@1.9.0_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5/node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
    'NuxtPicture': typeof import("../node_modules/.pnpm/@nuxt+image@1.9.0_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5/node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
    'MDC': typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']
    'MDCRenderer': typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']
    'MDCSlot': typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']
    'Icon': typeof import("../node_modules/.pnpm/@nuxt+icon@1.11.0_magicast@0.3.5_vite@6.2.2_@types+node@22.13.10_jiti@2.4.2_sass@1.85.1_17513f5aa69cd99474a3bc7f34cbf1e5/node_modules/@nuxt/icon/dist/runtime/components/index")['default']
    'ColorScheme': typeof import("../node_modules/.pnpm/@nuxtjs+color-mode@3.5.2_magicast@0.3.5/node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
    'OgImage': typeof import("../node_modules/.pnpm/nuxt-og-image@5.0.3_@unhead+vue@2.0.0-rc.13_vue@3.5.13_typescript@5.8.2___magicast@0.3._f24d55df089b7868f004598e1227c90f/node_modules/nuxt-og-image/dist/runtime/app/components/OgImage/OgImage")['default']
    'OgImageScreenshot': typeof import("../node_modules/.pnpm/nuxt-og-image@5.0.3_@unhead+vue@2.0.0-rc.13_vue@3.5.13_typescript@5.8.2___magicast@0.3._f24d55df089b7868f004598e1227c90f/node_modules/nuxt-og-image/dist/runtime/app/components/OgImage/OgImageScreenshot")['default']
    'SchemaOrgDebug': typeof import("@unhead/schema-org/vue")['SchemaOrgDebug']
    'SchemaOrgArticle': typeof import("@unhead/schema-org/vue")['SchemaOrgArticle']
    'SchemaOrgBreadcrumb': typeof import("@unhead/schema-org/vue")['SchemaOrgBreadcrumb']
    'SchemaOrgComment': typeof import("@unhead/schema-org/vue")['SchemaOrgComment']
    'SchemaOrgEvent': typeof import("@unhead/schema-org/vue")['SchemaOrgEvent']
    'SchemaOrgFoodEstablishment': typeof import("@unhead/schema-org/vue")['SchemaOrgFoodEstablishment']
    'SchemaOrgHowTo': typeof import("@unhead/schema-org/vue")['SchemaOrgHowTo']
    'SchemaOrgImage': typeof import("@unhead/schema-org/vue")['SchemaOrgImage']
    'SchemaOrgJobPosting': typeof import("@unhead/schema-org/vue")['SchemaOrgJobPosting']
    'SchemaOrgLocalBusiness': typeof import("@unhead/schema-org/vue")['SchemaOrgLocalBusiness']
    'SchemaOrgOrganization': typeof import("@unhead/schema-org/vue")['SchemaOrgOrganization']
    'SchemaOrgPerson': typeof import("@unhead/schema-org/vue")['SchemaOrgPerson']
    'SchemaOrgProduct': typeof import("@unhead/schema-org/vue")['SchemaOrgProduct']
    'SchemaOrgQuestion': typeof import("@unhead/schema-org/vue")['SchemaOrgQuestion']
    'SchemaOrgRecipe': typeof import("@unhead/schema-org/vue")['SchemaOrgRecipe']
    'SchemaOrgReview': typeof import("@unhead/schema-org/vue")['SchemaOrgReview']
    'SchemaOrgVideo': typeof import("@unhead/schema-org/vue")['SchemaOrgVideo']
    'SchemaOrgWebPage': typeof import("@unhead/schema-org/vue")['SchemaOrgWebPage']
    'SchemaOrgWebSite': typeof import("@unhead/schema-org/vue")['SchemaOrgWebSite']
    'SchemaOrgMovie': typeof import("@unhead/schema-org/vue")['SchemaOrgMovie']
    'SchemaOrgCourse': typeof import("@unhead/schema-org/vue")['SchemaOrgCourse']
    'SchemaOrgItemList': typeof import("@unhead/schema-org/vue")['SchemaOrgItemList']
    'SchemaOrgBook': typeof import("@unhead/schema-org/vue")['SchemaOrgBook']
    'SchemaOrgSoftwareApp': typeof import("@unhead/schema-org/vue")['SchemaOrgSoftwareApp']
    'Shiki': typeof import("../node_modules/.pnpm/@zinkawaii+nuxt-shiki@0.9.0_magicast@0.3.5/node_modules/@zinkawaii/nuxt-shiki/dist/runtime/component.vue")['default']
    'NuxtPage': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyAlert': LazyComponent<typeof import("../app/components/content/Alert.vue")['default']>
    'LazyBadge': LazyComponent<typeof import("../app/components/content/Badge.vue")['default']>
    'LazyBlur': LazyComponent<typeof import("../app/components/content/Blur.vue")['default']>
    'LazyCardList': LazyComponent<typeof import("../app/components/content/CardList.vue")['default']>
    'LazyChat': LazyComponent<typeof import("../app/components/content/Chat.vue")['default']>
    'LazyCopy': LazyComponent<typeof import("../app/components/content/Copy.vue")['default']>
    'LazyEmojiClock': LazyComponent<typeof import("../app/components/content/EmojiClock.vue")['default']>
    'LazyFeedCard': LazyComponent<typeof import("../app/components/content/FeedCard.vue")['default']>
    'LazyFeedGroup': LazyComponent<typeof import("../app/components/content/FeedGroup.vue")['default']>
    'LazyFolding': LazyComponent<typeof import("../app/components/content/Folding.vue")['default']>
    'LazyKey': LazyComponent<typeof import("../app/components/content/Key.vue")['default']>
    'LazyLinkBanner': LazyComponent<typeof import("../app/components/content/LinkBanner.vue")['default']>
    'LazyLinkCard': LazyComponent<typeof import("../app/components/content/LinkCard.vue")['default']>
    'LazyPic': LazyComponent<typeof import("../app/components/content/Pic.vue")['default']>
    'LazyPoetry': LazyComponent<typeof import("../app/components/content/Poetry.vue")['default']>
    'LazyProseA': LazyComponent<typeof import("../app/components/content/ProseA.vue")['default']>
    'LazyProseCodeInline': LazyComponent<typeof import("../app/components/content/ProseCodeInline.vue")['default']>
    'LazyProsePre': LazyComponent<typeof import("../app/components/content/ProsePre.vue")['default']>
    'LazyProseTable': LazyComponent<typeof import("../app/components/content/ProseTable.vue")['default']>
    'LazyQuote': LazyComponent<typeof import("../app/components/content/Quote.vue")['default']>
    'LazyRenderWithRaw': LazyComponent<typeof import("../app/components/content/RenderWithRaw.vue")['default']>
    'LazyTab': LazyComponent<typeof import("../app/components/content/Tab.vue")['default']>
    'LazyTimeline': LazyComponent<typeof import("../app/components/content/Timeline.vue")['default']>
    'LazyTip': LazyComponent<typeof import("../app/components/content/Tip.vue")['default']>
    'LazyVideoEmbed': LazyComponent<typeof import("../app/components/content/VideoEmbed.vue")['default']>
    'LazyZArchive': LazyComponent<typeof import("../app/components/partial/Archive.vue")['default']>
    'LazyZArticle': LazyComponent<typeof import("../app/components/partial/Article.vue")['default']>
    'LazyZButton': LazyComponent<typeof import("../app/components/partial/Button.vue")['default']>
    'LazyZDropdown': LazyComponent<typeof import("../app/components/partial/Dropdown.vue")['default']>
    'LazyZError': LazyComponent<typeof import("../app/components/partial/Error.vue")['default']>
    'LazyZIconNavList': LazyComponent<typeof import("../app/components/partial/IconNavList.vue")['default']>
    'LazyZOrderToggle': LazyComponent<typeof import("../app/components/partial/OrderToggle.vue")['default']>
    'LazyZPagination': LazyComponent<typeof import("../app/components/partial/Pagination.vue")['default']>
    'LazyZRawLink': LazyComponent<typeof import("../app/components/partial/RawLink.vue")['default']>
    'LazyZSearchItem': LazyComponent<typeof import("../app/components/partial/SearchItem.vue")['default']>
    'LazyZhiluIcon': LazyComponent<typeof import("../app/components/zhilu/Icon.vue")['default']>
    'LazyZhiluIconOld': LazyComponent<typeof import("../app/components/zhilu/IconOld.vue")['default']>
    'LazyZhiluHeader': LazyComponent<typeof import("../app/components/zhilu/ZhiluHeader.vue")['default']>
    'LazySkipToContent': LazyComponent<typeof import("../app/components/SkipToContent.vue")['default']>
    'LazyThemeToggle': LazyComponent<typeof import("../app/components/ThemeToggle.vue")['default']>
    'LazyZAside': LazyComponent<typeof import("../app/components/ZAside.vue")['default']>
    'LazyZFooter': LazyComponent<typeof import("../app/components/ZFooter.vue")['default']>
    'LazyZPanel': LazyComponent<typeof import("../app/components/ZPanel.vue")['default']>
    'LazyZPopover': LazyComponent<typeof import("../app/components/ZPopover.vue")['default']>
    'LazyZSidebar': LazyComponent<typeof import("../app/components/ZSidebar.vue")['default']>
    'LazyPopoverLightbox': LazyComponent<typeof import("../app/components/popover/Lightbox.vue")['default']>
    'LazyPopoverSearch': LazyComponent<typeof import("../app/components/popover/Search.vue")['default']>
    'LazyPostComment': LazyComponent<typeof import("../app/components/post/Comment.vue")['default']>
    'LazyPostExcerpt': LazyComponent<typeof import("../app/components/post/Excerpt.vue")['default']>
    'LazyPostFooter': LazyComponent<typeof import("../app/components/post/PostFooter.vue")['default']>
    'LazyPostHeader': LazyComponent<typeof import("../app/components/post/PostHeader.vue")['default']>
    'LazyPostSurround': LazyComponent<typeof import("../app/components/post/PostSurround.vue")['default']>
    'LazyPostSlide': LazyComponent<typeof import("../app/components/post/Slide.vue")['default']>
    'LazyWidgetBlogLog': LazyComponent<typeof import("../app/components/widget/BlogLog.vue")['default']>
    'LazyWidgetBlogStats': LazyComponent<typeof import("../app/components/widget/BlogStats.vue")['default']>
    'LazyWidgetConnectivity': LazyComponent<typeof import("../app/components/widget/Connectivity.vue")['default']>
    'LazyWidgetEmpty': LazyComponent<typeof import("../app/components/widget/Empty.vue")['default']>
    'LazyWidgetGithubCard': LazyComponent<typeof import("../app/components/widget/GithubCard.vue")['default']>
    'LazyWidgetToc': LazyComponent<typeof import("../app/components/widget/Toc.vue")['default']>
    'LazyContentDoc': LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue")['default']>
    'LazyContentList': LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue")['default']>
    'LazyContentNavigation': LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue")['default']>
    'LazyContentQuery': LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue")['default']>
    'LazyContentRenderer': LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']>
    'LazyContentRendererMarkdown': LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue")['default']>
    'LazyContentSlot': LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue")['default']>
    'LazyDocumentDrivenEmpty': LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue")['default']>
    'LazyDocumentDrivenNotFound': LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.vue")['default']>
    'LazyMarkdown': LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/Markdown.vue")['default']>
    'LazyProseCode': LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue")['default']>
    'LazyProseBlockquote': LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue")['default']>
    'LazyProseEm': LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue")['default']>
    'LazyProseH1': LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue")['default']>
    'LazyProseH2': LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue")['default']>
    'LazyProseH3': LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue")['default']>
    'LazyProseH4': LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue")['default']>
    'LazyProseH5': LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']>
    'LazyProseH6': LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']>
    'LazyProseHr': LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue")['default']>
    'LazyProseImg': LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue")['default']>
    'LazyProseLi': LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue")['default']>
    'LazyProseOl': LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue")['default']>
    'LazyProseP': LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue")['default']>
    'LazyProseScript': LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']>
    'LazyProseStrong': LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue")['default']>
    'LazyProseTbody': LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue")['default']>
    'LazyProseTd': LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue")['default']>
    'LazyProseTh': LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue")['default']>
    'LazyProseThead': LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue")['default']>
    'LazyProseTr': LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue")['default']>
    'LazyProseUl': LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+image@1.9.0_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5/node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+image@1.9.0_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5/node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
    'LazyMDC': LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']>
    'LazyMDCRenderer': LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']>
    'LazyMDCSlot': LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']>
    'LazyIcon': LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+icon@1.11.0_magicast@0.3.5_vite@6.2.2_@types+node@22.13.10_jiti@2.4.2_sass@1.85.1_17513f5aa69cd99474a3bc7f34cbf1e5/node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
    'LazyColorScheme': LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+color-mode@3.5.2_magicast@0.3.5/node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
    'LazyOgImage': LazyComponent<typeof import("../node_modules/.pnpm/nuxt-og-image@5.0.3_@unhead+vue@2.0.0-rc.13_vue@3.5.13_typescript@5.8.2___magicast@0.3._f24d55df089b7868f004598e1227c90f/node_modules/nuxt-og-image/dist/runtime/app/components/OgImage/OgImage")['default']>
    'LazyOgImageScreenshot': LazyComponent<typeof import("../node_modules/.pnpm/nuxt-og-image@5.0.3_@unhead+vue@2.0.0-rc.13_vue@3.5.13_typescript@5.8.2___magicast@0.3._f24d55df089b7868f004598e1227c90f/node_modules/nuxt-og-image/dist/runtime/app/components/OgImage/OgImageScreenshot")['default']>
    'LazySchemaOrgDebug': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgDebug']>
    'LazySchemaOrgArticle': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgArticle']>
    'LazySchemaOrgBreadcrumb': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgBreadcrumb']>
    'LazySchemaOrgComment': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgComment']>
    'LazySchemaOrgEvent': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgEvent']>
    'LazySchemaOrgFoodEstablishment': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgFoodEstablishment']>
    'LazySchemaOrgHowTo': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgHowTo']>
    'LazySchemaOrgImage': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgImage']>
    'LazySchemaOrgJobPosting': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgJobPosting']>
    'LazySchemaOrgLocalBusiness': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgLocalBusiness']>
    'LazySchemaOrgOrganization': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgOrganization']>
    'LazySchemaOrgPerson': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgPerson']>
    'LazySchemaOrgProduct': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgProduct']>
    'LazySchemaOrgQuestion': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgQuestion']>
    'LazySchemaOrgRecipe': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgRecipe']>
    'LazySchemaOrgReview': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgReview']>
    'LazySchemaOrgVideo': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgVideo']>
    'LazySchemaOrgWebPage': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgWebPage']>
    'LazySchemaOrgWebSite': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgWebSite']>
    'LazySchemaOrgMovie': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgMovie']>
    'LazySchemaOrgCourse': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgCourse']>
    'LazySchemaOrgItemList': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgItemList']>
    'LazySchemaOrgBook': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgBook']>
    'LazySchemaOrgSoftwareApp': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgSoftwareApp']>
    'LazyShiki': LazyComponent<typeof import("../node_modules/.pnpm/@zinkawaii+nuxt-shiki@0.9.0_magicast@0.3.5/node_modules/@zinkawaii/nuxt-shiki/dist/runtime/component.vue")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const Alert: typeof import("../app/components/content/Alert.vue")['default']
export const Badge: typeof import("../app/components/content/Badge.vue")['default']
export const Blur: typeof import("../app/components/content/Blur.vue")['default']
export const CardList: typeof import("../app/components/content/CardList.vue")['default']
export const Chat: typeof import("../app/components/content/Chat.vue")['default']
export const Copy: typeof import("../app/components/content/Copy.vue")['default']
export const EmojiClock: typeof import("../app/components/content/EmojiClock.vue")['default']
export const FeedCard: typeof import("../app/components/content/FeedCard.vue")['default']
export const FeedGroup: typeof import("../app/components/content/FeedGroup.vue")['default']
export const Folding: typeof import("../app/components/content/Folding.vue")['default']
export const Key: typeof import("../app/components/content/Key.vue")['default']
export const LinkBanner: typeof import("../app/components/content/LinkBanner.vue")['default']
export const LinkCard: typeof import("../app/components/content/LinkCard.vue")['default']
export const Pic: typeof import("../app/components/content/Pic.vue")['default']
export const Poetry: typeof import("../app/components/content/Poetry.vue")['default']
export const ProseA: typeof import("../app/components/content/ProseA.vue")['default']
export const ProseCodeInline: typeof import("../app/components/content/ProseCodeInline.vue")['default']
export const ProsePre: typeof import("../app/components/content/ProsePre.vue")['default']
export const ProseTable: typeof import("../app/components/content/ProseTable.vue")['default']
export const Quote: typeof import("../app/components/content/Quote.vue")['default']
export const RenderWithRaw: typeof import("../app/components/content/RenderWithRaw.vue")['default']
export const Tab: typeof import("../app/components/content/Tab.vue")['default']
export const Timeline: typeof import("../app/components/content/Timeline.vue")['default']
export const Tip: typeof import("../app/components/content/Tip.vue")['default']
export const VideoEmbed: typeof import("../app/components/content/VideoEmbed.vue")['default']
export const ZArchive: typeof import("../app/components/partial/Archive.vue")['default']
export const ZArticle: typeof import("../app/components/partial/Article.vue")['default']
export const ZButton: typeof import("../app/components/partial/Button.vue")['default']
export const ZDropdown: typeof import("../app/components/partial/Dropdown.vue")['default']
export const ZError: typeof import("../app/components/partial/Error.vue")['default']
export const ZIconNavList: typeof import("../app/components/partial/IconNavList.vue")['default']
export const ZOrderToggle: typeof import("../app/components/partial/OrderToggle.vue")['default']
export const ZPagination: typeof import("../app/components/partial/Pagination.vue")['default']
export const ZRawLink: typeof import("../app/components/partial/RawLink.vue")['default']
export const ZSearchItem: typeof import("../app/components/partial/SearchItem.vue")['default']
export const ZhiluIcon: typeof import("../app/components/zhilu/Icon.vue")['default']
export const ZhiluIconOld: typeof import("../app/components/zhilu/IconOld.vue")['default']
export const ZhiluHeader: typeof import("../app/components/zhilu/ZhiluHeader.vue")['default']
export const SkipToContent: typeof import("../app/components/SkipToContent.vue")['default']
export const ThemeToggle: typeof import("../app/components/ThemeToggle.vue")['default']
export const ZAside: typeof import("../app/components/ZAside.vue")['default']
export const ZFooter: typeof import("../app/components/ZFooter.vue")['default']
export const ZPanel: typeof import("../app/components/ZPanel.vue")['default']
export const ZPopover: typeof import("../app/components/ZPopover.vue")['default']
export const ZSidebar: typeof import("../app/components/ZSidebar.vue")['default']
export const PopoverLightbox: typeof import("../app/components/popover/Lightbox.vue")['default']
export const PopoverSearch: typeof import("../app/components/popover/Search.vue")['default']
export const PostComment: typeof import("../app/components/post/Comment.vue")['default']
export const PostExcerpt: typeof import("../app/components/post/Excerpt.vue")['default']
export const PostFooter: typeof import("../app/components/post/PostFooter.vue")['default']
export const PostHeader: typeof import("../app/components/post/PostHeader.vue")['default']
export const PostSurround: typeof import("../app/components/post/PostSurround.vue")['default']
export const PostSlide: typeof import("../app/components/post/Slide.vue")['default']
export const WidgetBlogLog: typeof import("../app/components/widget/BlogLog.vue")['default']
export const WidgetBlogStats: typeof import("../app/components/widget/BlogStats.vue")['default']
export const WidgetConnectivity: typeof import("../app/components/widget/Connectivity.vue")['default']
export const WidgetEmpty: typeof import("../app/components/widget/Empty.vue")['default']
export const WidgetGithubCard: typeof import("../app/components/widget/GithubCard.vue")['default']
export const WidgetToc: typeof import("../app/components/widget/Toc.vue")['default']
export const ContentDoc: typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue")['default']
export const ContentList: typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue")['default']
export const ContentNavigation: typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue")['default']
export const ContentQuery: typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue")['default']
export const ContentRenderer: typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']
export const ContentRendererMarkdown: typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue")['default']
export const ContentSlot: typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue")['default']
export const DocumentDrivenEmpty: typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue")['default']
export const DocumentDrivenNotFound: typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.vue")['default']
export const Markdown: typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/Markdown.vue")['default']
export const ProseCode: typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue")['default']
export const ProseBlockquote: typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue")['default']
export const ProseEm: typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue")['default']
export const ProseH1: typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue")['default']
export const ProseH2: typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue")['default']
export const ProseH3: typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue")['default']
export const ProseH4: typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue")['default']
export const ProseH5: typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']
export const ProseH6: typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']
export const ProseHr: typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue")['default']
export const ProseImg: typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue")['default']
export const ProseLi: typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue")['default']
export const ProseOl: typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue")['default']
export const ProseP: typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue")['default']
export const ProseScript: typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']
export const ProseStrong: typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue")['default']
export const ProseTbody: typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue")['default']
export const ProseTd: typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue")['default']
export const ProseTh: typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue")['default']
export const ProseThead: typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue")['default']
export const ProseTr: typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue")['default']
export const ProseUl: typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/.pnpm/@nuxt+image@1.9.0_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5/node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/.pnpm/@nuxt+image@1.9.0_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5/node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const MDC: typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']
export const MDCRenderer: typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']
export const MDCSlot: typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']
export const Icon: typeof import("../node_modules/.pnpm/@nuxt+icon@1.11.0_magicast@0.3.5_vite@6.2.2_@types+node@22.13.10_jiti@2.4.2_sass@1.85.1_17513f5aa69cd99474a3bc7f34cbf1e5/node_modules/@nuxt/icon/dist/runtime/components/index")['default']
export const ColorScheme: typeof import("../node_modules/.pnpm/@nuxtjs+color-mode@3.5.2_magicast@0.3.5/node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
export const OgImage: typeof import("../node_modules/.pnpm/nuxt-og-image@5.0.3_@unhead+vue@2.0.0-rc.13_vue@3.5.13_typescript@5.8.2___magicast@0.3._f24d55df089b7868f004598e1227c90f/node_modules/nuxt-og-image/dist/runtime/app/components/OgImage/OgImage")['default']
export const OgImageScreenshot: typeof import("../node_modules/.pnpm/nuxt-og-image@5.0.3_@unhead+vue@2.0.0-rc.13_vue@3.5.13_typescript@5.8.2___magicast@0.3._f24d55df089b7868f004598e1227c90f/node_modules/nuxt-og-image/dist/runtime/app/components/OgImage/OgImageScreenshot")['default']
export const SchemaOrgDebug: typeof import("@unhead/schema-org/vue")['SchemaOrgDebug']
export const SchemaOrgArticle: typeof import("@unhead/schema-org/vue")['SchemaOrgArticle']
export const SchemaOrgBreadcrumb: typeof import("@unhead/schema-org/vue")['SchemaOrgBreadcrumb']
export const SchemaOrgComment: typeof import("@unhead/schema-org/vue")['SchemaOrgComment']
export const SchemaOrgEvent: typeof import("@unhead/schema-org/vue")['SchemaOrgEvent']
export const SchemaOrgFoodEstablishment: typeof import("@unhead/schema-org/vue")['SchemaOrgFoodEstablishment']
export const SchemaOrgHowTo: typeof import("@unhead/schema-org/vue")['SchemaOrgHowTo']
export const SchemaOrgImage: typeof import("@unhead/schema-org/vue")['SchemaOrgImage']
export const SchemaOrgJobPosting: typeof import("@unhead/schema-org/vue")['SchemaOrgJobPosting']
export const SchemaOrgLocalBusiness: typeof import("@unhead/schema-org/vue")['SchemaOrgLocalBusiness']
export const SchemaOrgOrganization: typeof import("@unhead/schema-org/vue")['SchemaOrgOrganization']
export const SchemaOrgPerson: typeof import("@unhead/schema-org/vue")['SchemaOrgPerson']
export const SchemaOrgProduct: typeof import("@unhead/schema-org/vue")['SchemaOrgProduct']
export const SchemaOrgQuestion: typeof import("@unhead/schema-org/vue")['SchemaOrgQuestion']
export const SchemaOrgRecipe: typeof import("@unhead/schema-org/vue")['SchemaOrgRecipe']
export const SchemaOrgReview: typeof import("@unhead/schema-org/vue")['SchemaOrgReview']
export const SchemaOrgVideo: typeof import("@unhead/schema-org/vue")['SchemaOrgVideo']
export const SchemaOrgWebPage: typeof import("@unhead/schema-org/vue")['SchemaOrgWebPage']
export const SchemaOrgWebSite: typeof import("@unhead/schema-org/vue")['SchemaOrgWebSite']
export const SchemaOrgMovie: typeof import("@unhead/schema-org/vue")['SchemaOrgMovie']
export const SchemaOrgCourse: typeof import("@unhead/schema-org/vue")['SchemaOrgCourse']
export const SchemaOrgItemList: typeof import("@unhead/schema-org/vue")['SchemaOrgItemList']
export const SchemaOrgBook: typeof import("@unhead/schema-org/vue")['SchemaOrgBook']
export const SchemaOrgSoftwareApp: typeof import("@unhead/schema-org/vue")['SchemaOrgSoftwareApp']
export const Shiki: typeof import("../node_modules/.pnpm/@zinkawaii+nuxt-shiki@0.9.0_magicast@0.3.5/node_modules/@zinkawaii/nuxt-shiki/dist/runtime/component.vue")['default']
export const NuxtPage: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyAlert: LazyComponent<typeof import("../app/components/content/Alert.vue")['default']>
export const LazyBadge: LazyComponent<typeof import("../app/components/content/Badge.vue")['default']>
export const LazyBlur: LazyComponent<typeof import("../app/components/content/Blur.vue")['default']>
export const LazyCardList: LazyComponent<typeof import("../app/components/content/CardList.vue")['default']>
export const LazyChat: LazyComponent<typeof import("../app/components/content/Chat.vue")['default']>
export const LazyCopy: LazyComponent<typeof import("../app/components/content/Copy.vue")['default']>
export const LazyEmojiClock: LazyComponent<typeof import("../app/components/content/EmojiClock.vue")['default']>
export const LazyFeedCard: LazyComponent<typeof import("../app/components/content/FeedCard.vue")['default']>
export const LazyFeedGroup: LazyComponent<typeof import("../app/components/content/FeedGroup.vue")['default']>
export const LazyFolding: LazyComponent<typeof import("../app/components/content/Folding.vue")['default']>
export const LazyKey: LazyComponent<typeof import("../app/components/content/Key.vue")['default']>
export const LazyLinkBanner: LazyComponent<typeof import("../app/components/content/LinkBanner.vue")['default']>
export const LazyLinkCard: LazyComponent<typeof import("../app/components/content/LinkCard.vue")['default']>
export const LazyPic: LazyComponent<typeof import("../app/components/content/Pic.vue")['default']>
export const LazyPoetry: LazyComponent<typeof import("../app/components/content/Poetry.vue")['default']>
export const LazyProseA: LazyComponent<typeof import("../app/components/content/ProseA.vue")['default']>
export const LazyProseCodeInline: LazyComponent<typeof import("../app/components/content/ProseCodeInline.vue")['default']>
export const LazyProsePre: LazyComponent<typeof import("../app/components/content/ProsePre.vue")['default']>
export const LazyProseTable: LazyComponent<typeof import("../app/components/content/ProseTable.vue")['default']>
export const LazyQuote: LazyComponent<typeof import("../app/components/content/Quote.vue")['default']>
export const LazyRenderWithRaw: LazyComponent<typeof import("../app/components/content/RenderWithRaw.vue")['default']>
export const LazyTab: LazyComponent<typeof import("../app/components/content/Tab.vue")['default']>
export const LazyTimeline: LazyComponent<typeof import("../app/components/content/Timeline.vue")['default']>
export const LazyTip: LazyComponent<typeof import("../app/components/content/Tip.vue")['default']>
export const LazyVideoEmbed: LazyComponent<typeof import("../app/components/content/VideoEmbed.vue")['default']>
export const LazyZArchive: LazyComponent<typeof import("../app/components/partial/Archive.vue")['default']>
export const LazyZArticle: LazyComponent<typeof import("../app/components/partial/Article.vue")['default']>
export const LazyZButton: LazyComponent<typeof import("../app/components/partial/Button.vue")['default']>
export const LazyZDropdown: LazyComponent<typeof import("../app/components/partial/Dropdown.vue")['default']>
export const LazyZError: LazyComponent<typeof import("../app/components/partial/Error.vue")['default']>
export const LazyZIconNavList: LazyComponent<typeof import("../app/components/partial/IconNavList.vue")['default']>
export const LazyZOrderToggle: LazyComponent<typeof import("../app/components/partial/OrderToggle.vue")['default']>
export const LazyZPagination: LazyComponent<typeof import("../app/components/partial/Pagination.vue")['default']>
export const LazyZRawLink: LazyComponent<typeof import("../app/components/partial/RawLink.vue")['default']>
export const LazyZSearchItem: LazyComponent<typeof import("../app/components/partial/SearchItem.vue")['default']>
export const LazyZhiluIcon: LazyComponent<typeof import("../app/components/zhilu/Icon.vue")['default']>
export const LazyZhiluIconOld: LazyComponent<typeof import("../app/components/zhilu/IconOld.vue")['default']>
export const LazyZhiluHeader: LazyComponent<typeof import("../app/components/zhilu/ZhiluHeader.vue")['default']>
export const LazySkipToContent: LazyComponent<typeof import("../app/components/SkipToContent.vue")['default']>
export const LazyThemeToggle: LazyComponent<typeof import("../app/components/ThemeToggle.vue")['default']>
export const LazyZAside: LazyComponent<typeof import("../app/components/ZAside.vue")['default']>
export const LazyZFooter: LazyComponent<typeof import("../app/components/ZFooter.vue")['default']>
export const LazyZPanel: LazyComponent<typeof import("../app/components/ZPanel.vue")['default']>
export const LazyZPopover: LazyComponent<typeof import("../app/components/ZPopover.vue")['default']>
export const LazyZSidebar: LazyComponent<typeof import("../app/components/ZSidebar.vue")['default']>
export const LazyPopoverLightbox: LazyComponent<typeof import("../app/components/popover/Lightbox.vue")['default']>
export const LazyPopoverSearch: LazyComponent<typeof import("../app/components/popover/Search.vue")['default']>
export const LazyPostComment: LazyComponent<typeof import("../app/components/post/Comment.vue")['default']>
export const LazyPostExcerpt: LazyComponent<typeof import("../app/components/post/Excerpt.vue")['default']>
export const LazyPostFooter: LazyComponent<typeof import("../app/components/post/PostFooter.vue")['default']>
export const LazyPostHeader: LazyComponent<typeof import("../app/components/post/PostHeader.vue")['default']>
export const LazyPostSurround: LazyComponent<typeof import("../app/components/post/PostSurround.vue")['default']>
export const LazyPostSlide: LazyComponent<typeof import("../app/components/post/Slide.vue")['default']>
export const LazyWidgetBlogLog: LazyComponent<typeof import("../app/components/widget/BlogLog.vue")['default']>
export const LazyWidgetBlogStats: LazyComponent<typeof import("../app/components/widget/BlogStats.vue")['default']>
export const LazyWidgetConnectivity: LazyComponent<typeof import("../app/components/widget/Connectivity.vue")['default']>
export const LazyWidgetEmpty: LazyComponent<typeof import("../app/components/widget/Empty.vue")['default']>
export const LazyWidgetGithubCard: LazyComponent<typeof import("../app/components/widget/GithubCard.vue")['default']>
export const LazyWidgetToc: LazyComponent<typeof import("../app/components/widget/Toc.vue")['default']>
export const LazyContentDoc: LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue")['default']>
export const LazyContentList: LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue")['default']>
export const LazyContentNavigation: LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue")['default']>
export const LazyContentQuery: LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue")['default']>
export const LazyContentRenderer: LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']>
export const LazyContentRendererMarkdown: LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue")['default']>
export const LazyContentSlot: LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue")['default']>
export const LazyDocumentDrivenEmpty: LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue")['default']>
export const LazyDocumentDrivenNotFound: LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.vue")['default']>
export const LazyMarkdown: LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/Markdown.vue")['default']>
export const LazyProseCode: LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5_nuxt_ee6042bc4605e727c085668dbcd7e2f7/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue")['default']>
export const LazyProseBlockquote: LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue")['default']>
export const LazyProseEm: LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue")['default']>
export const LazyProseH1: LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue")['default']>
export const LazyProseH2: LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue")['default']>
export const LazyProseH3: LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue")['default']>
export const LazyProseH4: LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue")['default']>
export const LazyProseH5: LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']>
export const LazyProseH6: LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']>
export const LazyProseHr: LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue")['default']>
export const LazyProseImg: LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue")['default']>
export const LazyProseLi: LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue")['default']>
export const LazyProseOl: LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue")['default']>
export const LazyProseP: LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue")['default']>
export const LazyProseScript: LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']>
export const LazyProseStrong: LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue")['default']>
export const LazyProseTbody: LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue")['default']>
export const LazyProseTd: LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue")['default']>
export const LazyProseTh: LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue")['default']>
export const LazyProseThead: LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue")['default']>
export const LazyProseTr: LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue")['default']>
export const LazyProseUl: LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+image@1.9.0_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5/node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+image@1.9.0_db0@0.3.1_better-sqlite3@11.8.1__ioredis@5.6.0_magicast@0.3.5/node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazyMDC: LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']>
export const LazyMDCRenderer: LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']>
export const LazyMDCSlot: LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']>
export const LazyIcon: LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+icon@1.11.0_magicast@0.3.5_vite@6.2.2_@types+node@22.13.10_jiti@2.4.2_sass@1.85.1_17513f5aa69cd99474a3bc7f34cbf1e5/node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
export const LazyColorScheme: LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+color-mode@3.5.2_magicast@0.3.5/node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
export const LazyOgImage: LazyComponent<typeof import("../node_modules/.pnpm/nuxt-og-image@5.0.3_@unhead+vue@2.0.0-rc.13_vue@3.5.13_typescript@5.8.2___magicast@0.3._f24d55df089b7868f004598e1227c90f/node_modules/nuxt-og-image/dist/runtime/app/components/OgImage/OgImage")['default']>
export const LazyOgImageScreenshot: LazyComponent<typeof import("../node_modules/.pnpm/nuxt-og-image@5.0.3_@unhead+vue@2.0.0-rc.13_vue@3.5.13_typescript@5.8.2___magicast@0.3._f24d55df089b7868f004598e1227c90f/node_modules/nuxt-og-image/dist/runtime/app/components/OgImage/OgImageScreenshot")['default']>
export const LazySchemaOrgDebug: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgDebug']>
export const LazySchemaOrgArticle: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgArticle']>
export const LazySchemaOrgBreadcrumb: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgBreadcrumb']>
export const LazySchemaOrgComment: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgComment']>
export const LazySchemaOrgEvent: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgEvent']>
export const LazySchemaOrgFoodEstablishment: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgFoodEstablishment']>
export const LazySchemaOrgHowTo: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgHowTo']>
export const LazySchemaOrgImage: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgImage']>
export const LazySchemaOrgJobPosting: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgJobPosting']>
export const LazySchemaOrgLocalBusiness: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgLocalBusiness']>
export const LazySchemaOrgOrganization: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgOrganization']>
export const LazySchemaOrgPerson: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgPerson']>
export const LazySchemaOrgProduct: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgProduct']>
export const LazySchemaOrgQuestion: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgQuestion']>
export const LazySchemaOrgRecipe: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgRecipe']>
export const LazySchemaOrgReview: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgReview']>
export const LazySchemaOrgVideo: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgVideo']>
export const LazySchemaOrgWebPage: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgWebPage']>
export const LazySchemaOrgWebSite: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgWebSite']>
export const LazySchemaOrgMovie: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgMovie']>
export const LazySchemaOrgCourse: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgCourse']>
export const LazySchemaOrgItemList: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgItemList']>
export const LazySchemaOrgBook: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgBook']>
export const LazySchemaOrgSoftwareApp: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgSoftwareApp']>
export const LazyShiki: LazyComponent<typeof import("../node_modules/.pnpm/@zinkawaii+nuxt-shiki@0.9.0_magicast@0.3.5/node_modules/@zinkawaii/nuxt-shiki/dist/runtime/component.vue")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_better-sqlite3@11.8.1_db0@0.3.1__a4d06e2c321f7af74b604f0676f09b10/node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
