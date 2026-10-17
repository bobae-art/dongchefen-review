# 懂车分 · 모바일 평가 작성 화면 (Nuxt)

Figma 시안 [懂车分 모바일 평가 화면 · 캡처 재현](https://www.figma.com/design/vCkLSht7edavAX7Me4h7Fb/?node-id=2-19) 을 Nuxt 4 로 재현한 프로젝트입니다.

- 디자인 폭 731px 기준으로 `1rem = 10px` 로 작성했고, 좁은 화면에서는 `html { font-size: calc(100vw / 73.1) }` 로 비례 축소됩니다.
- 모든 아이콘·이미지는 Figma 에서 내려받은 원본 에셋(`public/assets`)을 그대로 사용합니다.
- 별점 선택, 차량 선택 바텀시트, 의견 입력(글자 수·진행 막대 연동), 안내 배너 닫기, 발행 검증 토스트가 동작합니다.

## 개발

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm generate   # 정적 빌드 → .output/public
```

## 배포

`.github/workflows/deploy-pages.yml` 이 `main` 브랜치 푸시 시 정적 빌드를 `gh-pages` 브랜치로 푸시합니다.
저장소 Settings → Pages → Source 가 **Deploy from a branch / gh-pages / (root)** 인지 확인해 주세요.
배포 주소: https://bobae-art.github.io/dongchefen-review/
다른 호스팅(Vercel, Netlify 등)에서는 `pnpm generate` 결과물 `.output/public` 을 그대로 올리면 됩니다.
배포 경로가 루트가 아니면 `NUXT_APP_BASE_URL=/경로/` 환경변수로 지정합니다.
