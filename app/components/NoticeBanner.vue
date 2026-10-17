<script setup lang="ts">
defineProps<{ text: string; height?: string; textTop?: string }>()
const emit = defineEmits<{ close: [] }>()
const asset = useAsset()
</script>

<template>
  <div class="banner" :style="{ height: height ?? '7.2rem' }">
    <img :src="asset('tooltip-tail.svg')" alt="" class="tail">
    <div class="body">
      <div class="text-wrap" :style="{ paddingTop: textTop ?? '1.25rem' }">
        <p class="text">{{ text }}</p>
      </div>
      <span class="spacer" />
      <button type="button" class="close" aria-label="关闭提示" @click="emit('close')">
        <img :src="asset('close-small.svg')" alt="" class="ic-close">
      </button>
    </div>
  </div>
</template>

<style scoped>
.banner {
  position: relative;
  width: 65.8rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.1rem;
}
.tail {
  position: absolute;
  left: 59.5rem;
  top: 0;
  width: 2.6rem;
  height: 1.1rem;
}
.body {
  width: 65.8rem;
  height: 6.1rem;
  flex-shrink: 0;
  background: var(--dcd-tooltip);
  border-radius: var(--dcd-radius-tooltip);
  display: flex;
  align-items: center;
  padding: 0 2.6rem 0 2.16rem;
}
.text-wrap {
  width: 56rem;
  height: 6.1rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.text {
  font-size: 2.16rem;
  line-height: 3.2rem;
  color: var(--dcd-primary);
  white-space: nowrap;
}
.close { width: 2rem; height: 2rem; flex-shrink: 0; }
.ic-close { width: 2rem; height: 2rem; }
</style>
