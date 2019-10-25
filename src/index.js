import vueCountdowntimer from './vue-countdowntimer.vue'

export default {
  // 全局注册
  install (Vue, options = {}) {
    Vue.component(options.component || 'Countdowntimer', vueCountdowntimer)
  },

  // 局部注册
  component: vueCountdowntimer
}
