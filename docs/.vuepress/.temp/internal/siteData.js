export const siteData = JSON.parse("{\"base\":\"/ai-reading-daily/\",\"lang\":\"zh-CN\",\"title\":\"AI Reading Hub\",\"description\":\"All in AI，看见未来。 每天精选最值得读的AI文章，帮你筛掉时代的噪音。 以简讯见广度，以深读见洞察。 技术、趋势、思考，一站式掌握AI世界。\",\"head\":[[\"meta\",{\"name\":\"referrer\",\"content\":\"same-origin\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
