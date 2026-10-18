export type Locale = 'zh' | 'ko'
export type RatingKey = 'exterior' | 'interior' | 'space' | 'options' | 'driving' | 'fuel'
export const RATING_KEYS: RatingKey[] = ['exterior', 'interior', 'space', 'options', 'driving', 'fuel']

export interface Messages {
  htmlLang: string
  title: string
  description: string
  brand: string
  publish: string
  toastClose: string
  toastSwitch: string
  hint: string
  step1: string
  step2: string
  carTitle: string
  addCar: string
  changeCar: string
  sheetTitle: string
  cancel: string
  carModels: string[]
  ratingTitle: string
  ratingHelp: string
  ratingHelpToast: string
  ratingTip: string
  items: Record<RatingKey, string>
  reviewTitle: string
  placeholder: string
  countBefore: { pre: string; post: string }
  countAfter: { pre: string; post: string }
  guideLink: string
  guideToast: string
  guideTip: string
  toastNeedCar: string
  toastNeedRating: string
  toastNeedChars: (n: number) => string
  toastPublished: string
}

export const messages: Record<Locale, Messages> = {
  zh: {
    htmlLang: 'zh-CN',
    title: '懂车分 · 写评价',
    description: '懂车分 모바일 평가 작성 화면 · Figma 시안 재현',
    brand: '懂车分',
    publish: '发布',
    toastClose: '已关闭（演示）',
    toastSwitch: '切换类型（演示）',
    hint: '多写300字，可获更多曝光机会',
    step1: '通过即有机会评为精华',
    step2: '评为超级精华，获得更多曝光机会',
    carTitle: '选择车型',
    addCar: '添加车型',
    changeCar: '点击更换车型',
    sheetTitle: '选择车型',
    cancel: '取消',
    carModels: ['比亚迪 秦PLUS DM-i', '特斯拉 Model 3', '丰田 凯美瑞', '大众 朗逸', '理想 L7', '小米 SU7'],
    ratingTitle: '综合评分',
    ratingHelp: '评分说明',
    ratingHelpToast: '评分说明：1-5星，星越多评价越高',
    ratingTip: '懂车分怎么评才合理？一篇教你轻松搞定！',
    items: { exterior: '外观', interior: '内饰', space: '空间', options: '配置', driving: '动力操控', fuel: '油耗' },
    reviewTitle: '观点综述',
    placeholder: '语言简洁、对车型进行描述和评价。如果您的分项评分有4.5分以上或3分以下，建议对该分项进行重点描述。',
    countBefore: { pre: '写满', post: '字，才能发布成功哦～' },
    countAfter: { pre: '已写', post: '字，可以发布啦～' },
    guideLink: '精华攻略',
    guideToast: '精华攻略：真实体验 + 优缺点 + 具体场景',
    guideTip: '看精华攻略，写精华懂车分，轻松赚取上万积分！',
    toastNeedCar: '请先选择车型',
    toastNeedRating: '请完成 6 项综合评分',
    toastNeedChars: (n) => `还需写 ${n} 字才能发布`,
    toastPublished: '发布成功！',
  },
  ko: {
    htmlLang: 'ko',
    title: '카평점 · 오너 리뷰 작성',
    description: '내 차 오너 리뷰 작성 화면 · 한국어 현지화 버전',
    brand: '카평점',
    publish: '등록',
    toastClose: '작성을 닫았어요 (데모)',
    toastSwitch: '리뷰 유형 전환 (데모)',
    hint: '300자 이상 쓰면 더 많이 노출돼요',
    step1: '검수 통과 시 베스트 리뷰 후보',
    step2: '우수 베스트 선정 시 노출 혜택 추가',
    carTitle: '차량 선택',
    addCar: '차량 추가',
    changeCar: '눌러서 차량 변경',
    sheetTitle: '내 차량 선택',
    cancel: '취소',
    carModels: ['현대 그랜저', '기아 쏘렌토', '제네시스 G80', '현대 아이오닉 5', '기아 EV6', '테슬라 모델 Y', '벤츠 E클래스', 'BMW 5시리즈'],
    ratingTitle: '종합 평점',
    ratingHelp: '평점 기준',
    ratingHelpToast: '평점 기준: 별 1~5개, 별이 많을수록 높은 평가예요',
    ratingTip: '평점, 어떻게 매겨야 할까요? 가이드로 한 번에 끝!',
    items: { exterior: '외관', interior: '실내', space: '공간', options: '옵션', driving: '주행 성능', fuel: '연비' },
    reviewTitle: '총평',
    placeholder: '간결하게 차량의 특징과 느낌을 적어 주세요. 항목 평점이 4.5점 이상이거나 3점 이하라면 그 이유를 중점적으로 설명해 주세요.',
    countBefore: { pre: '', post: '자 이상 작성해야 등록할 수 있어요~' },
    countAfter: { pre: '', post: '자 작성, 이제 등록할 수 있어요~' },
    guideLink: '베스트 리뷰 팁',
    guideToast: '베스트 리뷰 팁: 실제 경험 + 장단점 + 구체적인 상황',
    guideTip: '팁 보고 베스트 리뷰 쓰면 포인트가 쏟아져요!',
    toastNeedCar: '먼저 차량을 선택해 주세요',
    toastNeedRating: '6개 항목 평점을 모두 매겨 주세요',
    toastNeedChars: (n) => `${n}자 더 작성해야 등록할 수 있어요`,
    toastPublished: '리뷰가 등록되었습니다!',
  },
}
