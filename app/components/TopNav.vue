<script setup lang="ts">
const asset = useAsset()
const { publish, showToast } = useReviewForm()
</script>

<template>
  <nav class="top-nav" aria-label="상단 내비게이션">
    <div class="nav-left">
      <button type="button" class="close-btn" aria-label="关闭" @click="showToast('已关闭（演示）')">
        <img :src="asset('close.svg')" alt="" class="ic-close">
      </button>
      <div class="logo" aria-label="懂车分">
        <span class="logo-text">懂车分</span>
        <img :src="asset('logo-curve.svg')" alt="" class="logo-curve">
      </div>
      <button type="button" class="switch-btn" aria-label="切换" @click="showToast('切换类型（演示）')">
        <img :src="asset('switch-arrow.svg')" alt="" class="ic-switch">
      </button>
    </div>
    <span class="spacer" />
    <button type="button" class="publish-btn" @click="publish">
      <img :src="asset('paper-plane.svg')" alt="" class="ic-plane">
      <span class="publish-text">发布</span>
    </button>
  </nav>
</template>

<style scoped>
.top-nav {
  width: 73.1rem;
  height: 8.1rem;
  flex-shrink: 0;
  background: var(--dcd-header);
  display: flex;
  align-items: center;
  padding: 0 1.4rem 0 2.8rem;
}
.nav-left {
  display: flex;
  align-items: center;
  height: 6.1rem;
  width: 20.6rem;
  flex-shrink: 0;
}
.close-btn { width: 3rem; height: 3rem; margin-right: 2.7rem; }
.ic-close { width: 3rem; height: 3rem; }
.logo {
  position: relative;
  width: 10rem;
  height: 6.1rem;
  margin-right: 2.3rem;
}
.logo-text {
  position: absolute;
  left: 0.15rem;
  top: 0.5rem;
  font-weight: 700;
  font-size: 3.24rem;
  line-height: 4.6rem;
  color: var(--dcd-primary);
  white-space: nowrap;
}
.logo-curve {
  position: absolute;
  left: 2.5rem;
  top: 4.2rem;
  width: 5.3rem;
  height: 2.2rem;
}
.switch-btn { width: 2.6rem; height: 2.5rem; }
.ic-switch { width: 2.6rem; height: 2.5rem; }
.publish-btn {
  width: 12.3rem;
  height: 6.1rem;
  flex-shrink: 0;
  background: var(--dcd-yellow);
  border-radius: var(--dcd-radius-button);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  transition: filter 0.15s;
}
.publish-btn:active { filter: brightness(0.95); }
.ic-plane { width: 3.3rem; height: 3.4rem; }
.publish-text {
  font-weight: 700;
  font-size: 2.34rem;
  line-height: 3.5rem;
  color: var(--dcd-primary);
  white-space: nowrap;
}
</style>
