import vueTimerCountdown from './vue-timer-countdown.vue'

const plugin = {
  install (Vue, options = {}) {
    Vue.component(options.component || 'timer-countdown', vueTimerCountdown)
  }
}

export {
  // 全局注册
  plugin as default,

  // 局部注册
  vueTimerCountdown as vueTimerCountdown
}
