<script setup lang="ts">
const asset = useAsset()
const { showRatingTip, showToast } = useReviewForm()
const t = useT()
</script>

<template>
  <section class="card card-rating" aria-label="종합 평가">
    <div class="title-row">
      <h2 class="card-title">{{ t.ratingTitle }}</h2>
      <span class="spacer" />
      <button type="button" class="help-link" @click="showToast(t.ratingHelpToast)">
        <img :src="asset('help-icon.svg')" alt="" class="help-icon">
        <span class="help-text">{{ t.ratingHelp }}</span>
      </button>
    </div>
    <div class="tip-slot">
      <NoticeBanner
        v-if="showRatingTip"
        :text="t.ratingTip"
        @close="showRatingTip = false"
      />
    </div>
    <div class="rows">
      <RatingRow v-for="item in RATING_KEYS" :key="item" :item="item" />
    </div>
  </section>
</template>

<style scoped>
.card-rating {
  height: 58.3rem;
  padding: 2rem 2.3rem 0 2.2rem;
}
.title-row {
  display: flex;
  align-items: center;
  width: 65.8rem;
  height: 4.3rem;
  padding-top: 0.3rem;
  margin-bottom: 2.3rem;
}
.help-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 3.2rem;
  width: 11.3rem;
  flex-shrink: 0;
}
.help-icon { width: 2.2rem; height: 2.2rem; }
.help-text {
  font-size: 2.16rem;
  line-height: 3.2rem;
  color: var(--dcd-secondary);
  white-space: nowrap;
}
.tip-slot {
  height: 7.2rem;
  margin-bottom: 0.2rem;
}
.rows {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 65.8rem;
}
</style>
