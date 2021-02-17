import TextEllipsis from "./components/TextEllipsis"
import Sticky from "./components/Sticky"

const components = [
  TextEllipsis,
  Sticky
]

const install = function(Vue) {
  components.forEach(Comp => Vue.use(Comp))
}

/* 直接引入组件库 */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  TextEllipsis,
  Sticky
}