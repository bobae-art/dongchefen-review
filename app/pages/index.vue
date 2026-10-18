<script setup lang="ts">
import { messages } from '~/i18n/messages'

useLocale().value = 'zh'
const m = messages.zh
useHead({
  htmlAttrs: { lang: m.htmlLang },
  title: m.title,
  meta: [{ name: 'description', content: m.description }],
})
</script>

<template>
  <ReviewScreen />
</template>
