<script setup lang="ts">
import { messages } from '~/i18n/messages'

useLocale().value = 'ko'
const m = messages.ko
useHead({
  htmlAttrs: { lang: m.htmlLang },
  title: m.title,
  meta: [{ name: 'description', content: m.description }],
})
</script>

<template>
  <ReviewScreen />
</template>
