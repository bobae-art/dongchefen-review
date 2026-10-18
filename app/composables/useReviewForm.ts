import { RATING_KEYS, type RatingKey } from '~/i18n/messages'

export { RATING_KEYS }
export type RatingItem = RatingKey

export const MIN_CHARS = 30
export const BONUS_CHARS = 300

export const useReviewForm = () => {
  const t = useT()
  const car = useState<string | null>('review.car', () => null)
  const ratings = useState<Record<RatingItem, number>>('review.ratings', () =>
    Object.fromEntries(RATING_KEYS.map((k) => [k, 0])) as Record<RatingItem, number>,
  )
  const content = useState<string>('review.content', () => '')
  const showRatingTip = useState<boolean>('review.tip.rating', () => true)
  const showGuideTip = useState<boolean>('review.tip.guide', () => true)
  const toast = useState<string>('review.toast', () => '')

  const charCount = computed(() => content.value.replace(/\s/g, '').length)
  const allRated = computed(() => RATING_KEYS.every((k) => ratings.value[k] > 0))
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
    if (!car.value) return showToast(t.value.toastNeedCar)
    if (!allRated.value) return showToast(t.value.toastNeedRating)
    if (charCount.value < MIN_CHARS) return showToast(t.value.toastNeedChars(MIN_CHARS - charCount.value))
    showToast(t.value.toastPublished)
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
