import TextEllipsis from "./components/TextEllipsis"

const install = function(Vue) {
  Vue.use(TextEllipsis)
}

/* 直接引入组件库 */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  TextEllipsis
}