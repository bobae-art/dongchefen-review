<script setup lang="ts">
const asset = useAsset()
</script>

<template>
  <header class="status-bar" aria-label="상태바">
    <span class="time">1:32</span>
    <span class="spacer" />
    <div class="status-icons" aria-label="연결 및 배터리 상태">
      <img :src="asset('signal.svg')" alt="" class="ic-signal">
      <img :src="asset('wifi.svg')" alt="" class="ic-wifi">
      <img :src="asset('battery.svg')" alt="" class="ic-battery">
      <span class="battery-text"><span class="num">31</span><span class="pct">%</span></span>
    </div>
  </header>
</template>

<style scoped>
.status-bar {
  width: 73.1rem;
  height: 6rem;
  flex-shrink: 0;
  background: var(--dcd-header);
  display: flex;
  align-items: center;
  padding: 1rem 3.7rem 0 3.9rem;
}
.time {
  font-family: var(--font-status);
  font-size: 2.4rem;
  line-height: 3.4rem;
  color: var(--dcd-primary);
  white-space: nowrap;
}
.status-icons {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  height: 3.6rem;
  width: 16.5rem;
  flex-shrink: 0;
}
.ic-signal { width: 3rem; height: 3rem; }
.ic-wifi { width: 3.4rem; height: 3rem; }
.ic-battery { width: 4.4rem; height: 2.6rem; }
.battery-text {
  width: 3.9rem;
  height: 3.4rem;
  font-family: var(--font-status);
  line-height: 3.4rem;
  color: var(--dcd-primary);
  white-space: nowrap;
}
.battery-text .num { font-size: 2.4rem; }
.battery-text .pct { font-size: 1.32rem; }
</style>
