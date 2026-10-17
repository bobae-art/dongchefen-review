<script setup lang="ts">
const asset = useAsset()
const { charCount } = useReviewForm()
/* 트랙 폭 62.2rem 기준, 300자 달성 시 100% */
const fillRatio = computed(() => Math.min(1, charCount.value / BONUS_CHARS))
</script>

<template>
  <section class="guide" aria-label="작성 안내 진행 표시">
    <div class="hint-row">
      <img :src="asset('hint-bubble.svg')" alt="" class="hint-bubble">
      <p class="hint-text">多写300字，可获更多曝光机会</p>
    </div>
    <div class="bar">
      <div class="track" />
      <div class="track-fill" :style="{ width: `${fillRatio * 62.2}rem` }" />
      <img :src="asset('progress-stripe.svg')" alt="" class="stripe">
      <img :src="asset('progress-dot.svg')" alt="" class="dot dot-1">
      <img :src="asset('progress-dot.svg')" alt="" class="dot dot-2">
      <img :src="asset('car.png')" alt="" class="car" :style="{ transform: `translateX(${fillRatio * 46}rem)` }">
      <img :src="asset('gift.png')" alt="" class="gift">
    </div>
    <div class="steps">
      <span class="step-text">通过即有机会评为精华</span>
      <span class="spacer" />
      <span class="step-text">评为超级精华，获得更多曝光机会</span>
    </div>
  </section>
</template>

<style scoped>
.guide {
  width: 73.1rem;
  height: 11.9rem;
  flex-shrink: 0;
  background: var(--dcd-background);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 0.3rem;
}
.hint-row {
  position: relative;
  width: 73.1rem;
  height: 4.6rem;
}
.hint-bubble {
  position: absolute;
  left: 2.5rem;
  top: 0;
  width: 26.1rem;
  height: 4.5rem;
}
.hint-text {
  position: absolute;
  left: 3.3rem;
  top: 0.4rem;
  font-size: 1.8rem;
  line-height: 2.8rem;
  color: var(--dcd-caption);
  white-space: nowrap;
}
.bar {
  position: relative;
  width: 73.1rem;
  height: 3.1rem;
}
.track {
  position: absolute;
  left: 4.3rem;
  top: 1.5rem;
  width: 62.2rem;
  height: 1.4rem;
  background: var(--dcd-track);
}
.track-fill {
  position: absolute;
  left: 4.3rem;
  top: 1.5rem;
  height: 1.4rem;
  background: var(--dcd-yellow);
  transition: width 0.25s ease;
}
.stripe {
  position: absolute;
  left: 65.5rem;
  top: 1.5rem;
  width: 4.9rem;
  height: 1.4rem;
}
.dot {
  position: absolute;
  top: 1.8rem;
  width: 1.2rem;
  height: 1.2rem;
}
.dot-1 { left: 13.3rem; }
.dot-2 { left: 57.9rem; }
.car {
  position: absolute;
  left: 1.9rem;
  top: -0.1rem;
  width: 9.1rem;
  height: 3.2rem;
  object-fit: cover;
  pointer-events: none;
  transition: transform 0.25s ease;
}
.gift {
  position: absolute;
  left: 56.8rem;
  top: -2.7rem;
  width: 3.4rem;
  height: 3.4rem;
  object-fit: cover;
  pointer-events: none;
}
.steps {
  display: flex;
  align-items: flex-start;
  width: 73.1rem;
  height: 2.9rem;
  padding: 0 1.1rem 0 4.9rem;
}
.step-text {
  font-size: 1.8rem;
  line-height: 2.8rem;
  color: var(--dcd-secondary);
  white-space: nowrap;
}
</style>
