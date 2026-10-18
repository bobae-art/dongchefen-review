// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  ssr: true,
  css: ['~/assets/css/main.css'],
  app: {
    // 배포 경로에 맞춰 NUXT_APP_BASE_URL 로 덮어쓸 수 있습니다. (예: GitHub Pages → /dongchefen-review/)
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    // 일부 정적 호스팅이 '_' 로 시작하는 디렉터리를 예약어로 쓰므로 기본값 _nuxt 대신 nuxt 사용
    buildAssetsDir: '/nuxt/',
    head: {
      htmlAttrs: { lang: 'zh-CN' },
      title: '懂车分 · 写评价',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'theme-color', content: '#f3f4f9' },
        { name: 'description', content: '懂车分 모바일 평가 작성 화면 · Figma 시안 재현' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700&family=Noto+Sans+KR:wght@400;700&family=Roboto:wght@400&display=swap',
        },
      ],
    },
  },
  experimental: { payloadExtraction: false },
  nitro: { prerender: { routes: ['/', '/ko'] } },
})
