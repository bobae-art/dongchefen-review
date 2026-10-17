<script setup lang="ts">
import type { RatingItem } from '~/composables/useReviewForm'

const props = defineProps<{ item: RatingItem }>()
const asset = useAsset()
const { ratings, setRating } = useReviewForm()
const value = computed(() => ratings.value[props.item])
const starUrl = `url(${asset('star.svg')})`
</script>

<template>
  <div class="row" role="radiogroup" :aria-label="item">
    <div class="label">
      <span class="label-text">{{ item }}</span>
      <span class="required">*</span>
    </div>
    <span class="spacer" />
    <div class="stars">
      <button
        v-for="n in 5"
        :key="n"
        type="button"
        class="star"
        :class="{ on: n <= value }"
        :style="{ '--star-url': starUrl }"
        role="radio"
        :aria-checked="n === value"
        :aria-label="`${n}星`"
        @click="setRating(item, n)"
      >
        <img :src="asset('star.svg')" alt="" class="star-img">
      </button>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  align-items: center;
  width: 65.8rem;
  height: 6.82rem;
  padding-right: 0.6rem;
  flex-shrink: 0;
}
.label {
  display: flex;
  align-items: center;
  gap: 0.24rem;
  height: 3.8rem;
  padding-bottom: 0.3rem;
  font-size: 2.52rem;
  line-height: 3.8rem;
  white-space: nowrap;
}
.label-text { color: var(--dcd-secondary); }
.stars {
  display: flex;
  align-items: flex-start;
  gap: var(--dcd-spacing-stars);
  width: 25.6rem;
  height: 4rem;
  flex-shrink: 0;
}
.star {
  position: relative;
  width: 4rem;
  height: 4rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  transition: transform 0.12s;
}
.star:active { transform: scale(0.9); }
.star-img { width: 4rem; height: 4rem; }
/* 선택된 별: 동일한 별 벡터를 마스크로 써서 노란색으로 채움 */
.star.on {
  background: var(--dcd-yellow);
  -webkit-mask: var(--star-url) center / 100% 100% no-repeat;
  mask: var(--star-url) center / 100% 100% no-repeat;
}
.star.on .star-img { opacity: 0; }
</style>
