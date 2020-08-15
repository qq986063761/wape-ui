
const install = function(Vue) {
  
}

/* 直接引入组件库 */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue)
}

export default {
  install
}