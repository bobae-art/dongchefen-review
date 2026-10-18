<script setup lang="ts">
const asset = useAsset()
const { car } = useReviewForm()
const t = useT()
const open = ref(false)

const pick = (model: string) => {
  car.value = model
  open.value = false
}
</script>

<template>
  <section class="card card-car" aria-label="차량 선택">
    <h2 class="title card-title">{{ t.carTitle }} <span class="required">*</span></h2>
    <button type="button" class="add-box" :class="{ selected: car }" @click="open = true">
      <template v-if="car">
        <span class="car-name">{{ car }}</span>
        <span class="car-change">{{ t.changeCar }}</span>
      </template>
      <template v-else>
        <img :src="asset('plus.svg')" alt="" class="plus">
        <span class="add-text">{{ t.addCar }}</span>
      </template>
    </button>

    <Transition name="sheet">
        <div v-if="open" class="sheet-mask" @click.self="open = false">
          <div class="sheet" role="dialog" :aria-label="t.sheetTitle">
            <div class="sheet-head">
              <span class="sheet-title">{{ t.sheetTitle }}</span>
              <button type="button" class="sheet-close" @click="open = false">{{ t.cancel }}</button>
            </div>
            <ul class="sheet-list">
              <li v-for="m in t.carModels" :key="m">
                <button type="button" class="sheet-item" :class="{ on: m === car }" @click="pick(m)">{{ m }}</button>
              </li>
            </ul>
          </div>
        </div>
    </Transition>
  </section>
</template>

<style scoped>
.card-car {
  height: 25.8rem;
  padding: 2.1rem 2.3rem 0 2.2rem;
}
.title {
  width: 65.8rem;
  height: 4.3rem;
  padding-left: 0.72rem;
  margin-bottom: 2.8rem;
}
.add-box {
  width: 65.8rem;
  height: 14.3rem;
  flex-shrink: 0;
  border: 0.15rem dashed var(--dcd-border);
  border-radius: 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  transition: background 0.15s;
}
.add-box:active { background: #fafbfe; }
.add-box.selected {
  border-color: var(--dcd-yellow);
  background: #fffdf5;
  padding-top: 3.6rem;
}
.plus {
  width: 4rem;
  height: 3.8rem;
  margin-bottom: 1.2rem;
}
.add-text {
  font-size: 2.52rem;
  line-height: 3.8rem;
  color: var(--dcd-secondary);
  white-space: nowrap;
}
.car-name {
  font-size: 2.88rem;
  line-height: 4.3rem;
  font-weight: 700;
  color: var(--dcd-primary);
}
.car-change {
  margin-top: 0.4rem;
  font-size: 1.8rem;
  line-height: 2.8rem;
  color: var(--dcd-secondary);
}

/* 차량 선택 바텀시트 */
.sheet-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 50;
}
.sheet {
  width: 73.1rem;
  max-height: 70vh;
  background: var(--dcd-surface);
  border-radius: 2rem 2rem 0 0;
  padding-bottom: env(safe-area-inset-bottom);
  display: flex;
  flex-direction: column;
}
.sheet-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem 3rem 1.6rem;
  border-bottom: 1px solid #eef0f5;
}
.sheet-title {
  font-weight: 700;
  font-size: 2.88rem;
  line-height: 4.3rem;
}
.sheet-close {
  font-size: 2.34rem;
  color: var(--dcd-secondary);
}
.sheet-list {
  list-style: none;
  overflow-y: auto;
}
.sheet-item {
  width: 100%;
  text-align: left;
  padding: 2.2rem 3rem;
  font-size: 2.52rem;
  line-height: 3.8rem;
  border-bottom: 1px solid #f2f3f7;
}
.sheet-item.on {
  color: var(--dcd-gold);
  font-weight: 700;
}
.sheet-enter-active, .sheet-leave-active { transition: opacity 0.2s; }
.sheet-enter-active .sheet, .sheet-leave-active .sheet { transition: transform 0.25s ease; }
.sheet-enter-from, .sheet-leave-to { opacity: 0; }
.sheet-enter-from .sheet, .sheet-leave-to .sheet { transform: translateY(100%); }
</style>
