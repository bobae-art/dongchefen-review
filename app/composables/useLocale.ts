import { messages, type Locale } from '~/i18n/messages'

export const useLocale = () => useState<Locale>('locale', () => 'zh')

/** 현재 로케일의 문구 묶음 */
export const useT = () => {
  const locale = useLocale()
  return computed(() => messages[locale.value])
}
