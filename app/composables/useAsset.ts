/** public/assets 아래 정적 에셋 경로를 배포 baseURL 에 맞춰 돌려준다. */
export const useAsset = () => {
  const base = useRuntimeConfig().app.baseURL || '/'
  const prefix = base.endsWith('/') ? base : `${base}/`
  return (name: string) => `${prefix}assets/${name}`
}
