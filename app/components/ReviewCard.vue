<script setup lang="ts">
const asset = useAsset()
const { content, charCount, showGuideTip, showToast } = useReviewForm()
const t = useT()
const empty = computed(() => content.value.length === 0)
const reached = computed(() => charCount.value >= MIN_CHARS)
</script>

<template>
  <section class="card card-review" aria-label="의견 작성">
    <h2 class="title card-title">{{ t.reviewTitle }} <span class="required">*</span></h2>
    <div class="editor" :class="{ empty }">
      <img v-if="empty" :src="asset('pencil.svg')" alt="" class="pencil">
      <textarea
        v-model="content"
        class="textarea"
        :placeholder="t.placeholder"
        :aria-label="t.reviewTitle"
        spellcheck="false"
      />
    </div>
    <div class="count-row">
      <p v-if="!reached" class="count-text">{{ t.countBefore.pre }}<span class="num">{{ MIN_CHARS }}</span>{{ t.countBefore.post }}</p>
      <p v-else class="count-text">{{ t.countAfter.pre }}<span class="num">{{ charCount }}</span>{{ t.countAfter.post }}</p>
      <span class="spacer" />
      <button type="button" class="guide-link" @click="showToast(t.guideToast)">
        <img :src="asset('help-icon-2.svg')" alt="" class="guide-icon">
        <span class="guide-text">{{ t.guideLink }}</span>
      </button>
    </div>
    <div class="bottom-tip">
      <NoticeBanner
        v-if="showGuideTip"
        :text="t.guideTip"
        height="7.1rem"
        text-top="1.1rem"
        @close="showGuideTip = false"
      />
    </div>
  </section>
</template>

<style scoped>
.card-review {
  height: 71.1rem;
  padding-top: 2.1rem;
}
.title {
  width: 70.3rem;
  height: 4.3rem;
  padding-left: 2.92rem;
  margin-bottom: 4.4rem;
}
.editor {
  position: relative;
  width: 70.3rem;
  height: 45.1rem;
  padding-left: 2.92rem;
  padding-right: 2.3rem;
}
.pencil {
  position: absolute;
  left: 2.92rem;
  top: 0.9rem;
  width: 2.88rem;
  height: 2.88rem;
  pointer-events: none;
}
.textarea {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  outline: 0;
  resize: none;
  background: transparent;
  font-family: var(--font-sc);
  font-size: 2.88rem;
  line-height: 4.3rem;
  color: var(--dcd-primary);
  word-break: break-all;
}
.editor.empty .textarea { text-indent: 3.96rem; }
.textarea::placeholder {
  color: var(--dcd-placeholder);
  opacity: 1;
}
.count-row {
  display: flex;
  align-items: center;
  width: 70.3rem;
  height: 4.3rem;
  padding: 0 2.3rem 0 2.92rem;
  margin-bottom: 2.3rem;
}
.count-text {
  font-size: 2.16rem;
  line-height: 3.2rem;
  color: var(--dcd-secondary);
  white-space: nowrap;
}
.count-text .num { color: var(--dcd-gold); }
.guide-link {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.54rem;
  height: 3.8rem;
  min-width: 13.5rem; /* 원본 폭. 긴 번역 문구는 내용만큼 늘어남 */
  flex-shrink: 0;
}
.guide-icon { width: 2.4rem; height: 2.4rem; }
.guide-text {
  font-size: 2.52rem;
  line-height: 3.8rem;
  color: var(--dcd-link);
  white-space: nowrap;
}
.bottom-tip {
  width: 70.3rem;
  height: 7.1rem;
  padding-left: 2.2rem;
}
</style>
