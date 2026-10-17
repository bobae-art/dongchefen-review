<script setup lang="ts">
const { toast } = useReviewForm()
</script>

<template>
  <main class="screen">
    <StatusBar />
    <TopNav />
    <ProgressGuide />
    <div class="gap-top" />
    <div class="form">
      <CarSelectCard />
      <div class="gap-13" />
      <RatingCard />
      <div class="gap-14" />
      <ReviewCard />
    </div>
    <div class="gap-bottom" />
    <div class="system-area" />

    <Transition name="toast">
      <div v-if="toast" class="toast" role="status">{{ toast }}</div>
    </Transition>
  </main>
</template>

<style scoped>
.screen {
  width: 73.1rem;
  margin: 0 auto;
  min-height: 100vh;
  background: var(--dcd-background);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.gap-top { height: 1.7rem; width: 73.1rem; flex-shrink: 0; }
.form {
  width: 70.3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
}
.gap-13 { height: 1.3rem; width: 70.3rem; }
.gap-14 { height: 1.4rem; width: 70.3rem; }
.gap-bottom { height: 10.8rem; width: 73.1rem; flex-shrink: 0; }
.system-area {
  width: 73.1rem;
  height: 8.4rem;
  flex-shrink: 0;
  background: var(--dcd-surface);
}
.toast {
  position: fixed;
  left: 50%;
  bottom: 14rem;
  transform: translateX(-50%);
  background: rgba(32, 33, 38, 0.88);
  color: #fff;
  font-size: 2.34rem;
  line-height: 3.4rem;
  padding: 1.6rem 3rem;
  border-radius: 1.2rem;
  white-space: nowrap;
  z-index: 60;
}
.toast-enter-active, .toast-leave-active { transition: opacity 0.2s; }
.toast-enter-from, .toast-leave-to { opacity: 0; }
</style>
