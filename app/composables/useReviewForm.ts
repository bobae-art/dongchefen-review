export const RATING_ITEMS = ['外观', '内饰', '空间', '配置', '动力操控', '油耗'] as const
export type RatingItem = (typeof RATING_ITEMS)[number]

export const CAR_MODELS = [
  '比亚迪 秦PLUS DM-i',
  '特斯拉 Model 3',
  '丰田 凯美瑞',
  '大众 朗逸',
  '理想 L7',
  '小米 SU7',
]

export const MIN_CHARS = 30
export const BONUS_CHARS = 300

export const useReviewForm = () => {
  const car = useState<string | null>('review.car', () => null)
  const ratings = useState<Record<RatingItem, number>>('review.ratings', () =>
    Object.fromEntries(RATING_ITEMS.map((k) => [k, 0])) as Record<RatingItem, number>,
  )
  const content = useState<string>('review.content', () => '')
  const showRatingTip = useState<boolean>('review.tip.rating', () => true)
  const showGuideTip = useState<boolean>('review.tip.guide', () => true)
  const toast = useState<string>('review.toast', () => '')

  const charCount = computed(() => content.value.replace(/\s/g, '').length)
  const allRated = computed(() => RATING_ITEMS.every((k) => ratings.value[k] > 0))
  const canPublish = computed(() => !!car.value && allRated.value && charCount.value >= MIN_CHARS)

  let toastTimer: ReturnType<typeof setTimeout> | undefined
  const showToast = (msg: string) => {
    toast.value = msg
    if (toastTimer) clearTimeout(toastTimer)
    toastTimer = setTimeout(() => (toast.value = ''), 2200)
  }

  const setRating = (item: RatingItem, value: number) => {
    ratings.value = { ...ratings.value, [item]: ratings.value[item] === value ? 0 : value }
  }

  const publish = () => {
    if (!car.value) return showToast('请先选择车型')
    if (!allRated.value) return showToast('请完成 6 项综合评分')
    if (charCount.value < MIN_CHARS) return showToast(`还需写 ${MIN_CHARS - charCount.value} 字才能发布`)
    showToast('发布成功！')
  }

  return {
    car,
    ratings,
    content,
    showRatingTip,
    showGuideTip,
    toast,
    charCount,
    allRated,
    canPublish,
    setRating,
    publish,
    showToast,
  }
}
