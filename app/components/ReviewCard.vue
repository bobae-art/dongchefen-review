<script setup lang="ts">
const asset = useAsset()
const { content, charCount, showGuideTip, showToast } = useReviewForm()
const PLACEHOLDER = '语言简洁、对车型进行描述和评价。如果您的分项评分有4.5分以上或3分以下，建议对该分项进行重点描述。'
const empty = computed(() => content.value.length === 0)
const reached = computed(() => charCount.value >= MIN_CHARS)
</script>

<template>
  <section class="card card-review" aria-label="의견 작성">
    <h2 class="title card-title">观点综述 <span class="required">*</span></h2>
    <div class="editor" :class="{ empty }">
      <img v-if="empty" :src="asset('pencil.svg')" alt="" class="pencil">
      <textarea
        v-model="content"
        class="textarea"
        :placeholder="PLACEHOLDER"
        aria-label="观点综述"
        spellcheck="false"
      />
    </div>
    <div class="count-row">
      <p v-if="!reached" class="count-text">写满<span class="num">{{ MIN_CHARS }}</span>字，才能发布成功哦～</p>
      <p v-else class="count-text">已写<span class="num">{{ charCount }}</span>字，可以发布啦～</p>
      <span class="spacer" />
      <button type="button" class="guide-link" @click="showToast('精华攻略：真实体验 + 优缺点 + 具体场景')">
        <img :src="asset('help-icon-2.svg')" alt="" class="guide-icon">
        <span class="guide-text">精华攻略</span>
      </button>
    </div>
    <div class="bottom-tip">
      <NoticeBanner
        v-if="showGuideTip"
        text="看精华攻略，写精华懂车分，轻松赚取上万积分！"
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
  gap: 0.54rem;
  height: 3.8rem;
  width: 13.5rem;
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
