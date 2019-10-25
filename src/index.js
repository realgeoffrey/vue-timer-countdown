import vueTimerCountdown from './vue-timer-countdown.vue'

export default {
  // 全局注册
  install (Vue, options = {}) {
    Vue.component(options.component || 'timer-countdown', vueTimerCountdown)
  },

  // 局部注册
  component: vueTimerCountdown
}
