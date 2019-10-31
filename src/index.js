import vueTimerCountdown from './vue-timer-countdown.vue'

vueTimerCountdown.install = (Vue, options = {}) => {
  Vue.component(options.component || 'timer-countdown', vueTimerCountdown)
}

export default vueTimerCountdown
