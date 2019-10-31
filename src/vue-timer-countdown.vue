<template>
  <span>
    <slot :day="day" :hour="hour" :minute="minute" :second="second">
      <template v-if="!ignoreDay">{{ day }}:</template>{{ hour }}:{{ minute }}:{{ second }}
    </slot>
  </span>
</template>

<script>
// 格式化数字格式
const FORMAT_NUMBER = (number, completeZero) => {
  if (number < 10 && completeZero) {
    return '0' + number
  } else {
    return number.toString()
  }
}

// 周期执行（构造函数）
const SET_INTERVAL = function (func, millisecond) {
  let setIntervalId

  if (typeof func === 'function') {
    setIntervalId = setTimeout(function self () {
      setIntervalId = setTimeout(self, millisecond)

      func()
    }, millisecond)
  }

  this.stop = () => {
    clearTimeout(setIntervalId)
  }
}

export default {
  props: {
    deadline: { // 倒计时剩余时间（秒）
      type: Number,
      required: true
    },
    completeZero: { // 补全0
      type: Boolean,
      default: true
    },
    leftSecond: {  // 提前到期（秒）
      type: Number,
      default: 0
    },
    ignoreDay: {  // true：展示到小时；false：展示到天
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,

      // 每秒执行（实例）
      setIntervalInstance: { stop () {} }
    }
  },
  computed: {
    deadlineTimestamp () {  // 倒计时剩余时间的时间戳
      return Date.now() + this.deadline * 1000
    }
  },
  watch: {
    deadline: {
      handler (val) {
        this.render()

        if (this.getRestTime(val) > this.leftSecond) {
          this.setIntervalInstance.stop()

          this.setIntervalInstance = new SET_INTERVAL(() => {
            this.render()

            if (this.getRestTime() <= this.leftSecond) {
              this.setIntervalInstance.stop()
              this.$nextTick(() => {
                this.$emit('done')
              })
            }
          }, 1000)
        } else {
          this.$nextTick(() => {
            this.$emit('done')
          })
        }
      },
      immediate: true
    }
  },
  beforeDestroy () {
    this.setIntervalInstance.stop()
  },
  methods: {
    render () {
      const restTime = this.getRestTime()

      if (this.ignoreDay) {
        this.hour = FORMAT_NUMBER(Math.floor(restTime / (60 * 60)), this.completeZero)
      } else {
        this.day = FORMAT_NUMBER(Math.floor((restTime / (24 * 60 * 60))), this.completeZero)
        this.hour = FORMAT_NUMBER(Math.floor((restTime / (60 * 60)) % 24), this.completeZero)
      }
      this.minute = FORMAT_NUMBER(Math.floor((restTime / 60) % 60), this.completeZero)
      this.second = FORMAT_NUMBER(restTime % 60, this.completeZero)

      this.$nextTick(() => {
        this.$emit('update', {
          day: this.day,
          hour: this.hour,
          minute: this.minute,
          second: this.second,

          restSecond: restTime  // 剩余时间（秒）
        })
      })
    },
    getRestTime () {  // 获取剩余时间（秒）
      return Math.max(Math.round((this.deadlineTimestamp - Date.now()) / 1000), 0)
    }
  }
}
</script>
