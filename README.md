# vue-timer-countdown

Vue的倒计时组件

1. npm：<https://www.npmjs.com/package/vue-timer-countdown>
2. demo：<https://realgeoffrey.github.io/vue-timer-countdown/demo/index.html>

### 安装
1. Node.js安装

    ```bash
    npm install vue-timer-countdown --save
    ```
2. 浏览器引用

    ```html
    <!-- 需要先引入vue：<script src="//unpkg.com/vue"></script> -->
    <script src="//unpkg.com/vue-timer-countdown"></script>
    ```

### 注册组件
1. Node.js注册

    1. 全局注册

        ```javascript
        import Vue from 'vue'
        import vueTimerCountdown from 'vue-timer-countdown'

        // 全局注册
        Vue.use(vueTimerCountdown, { component: 'TimerCountdown' }) // 组件名默认是：timer-countdown
        // 或：Vue.component('TimerCountdown', vueTimerCountdown)
        ```
    2. 局部注册

        ```javascript
        import vueTimerCountdown from 'vue-timer-countdown'

        export default {
          components: {
            // 局部注册
            TimerCountdown: vueTimerCountdown
          }
        }
        ```
2. 浏览器注册

    1. 全局注册

        ```html
        <!-- 需要先引入vue：<script src="//unpkg.com/vue"></script> -->
        <!-- 需要先引入vue-timer-countdown：<script src="//unpkg.com/vue-timer-countdown"></script> -->

        <script>
        // 全局注册
        Vue.use(vueTimerCountdown, { component: 'timer-countdown' }) // 组件名默认是：timer-countdown
        // 或：Vue.component('timer-countdown', vueTimerCountdown)
        </script>
        ```
    2. 局部注册

        ```html
        <!-- 需要先引入vue：<script src="//unpkg.com/vue"></script> -->
        <!-- 需要先引入vue-timer-countdown：<script src="//unpkg.com/vue-timer-countdown"></script> -->

        <script>
        new Vue({
          components: {
            // 局部注册
            'timer-countdown': vueTimerCountdown
          }
        })
        </script>
        ```

### 用法
1. 参数

    ```vue
    <TimerCountdown
      :deadline="倒计时剩余时间-秒（必填）"
      :complete-zero="补全0（true）"
      :left-second="提前到期-秒（0）"
      :ignore-day="true：展示到小时；false：展示到天（true）"
      @done="倒计时结束后回调的方法"
      @update="每秒渲染结束后回调的方法，带参数{ day, hour, minute, second, restSecond }（展示的天、小时、分钟、秒，总共剩余的秒）"
    />
    ```

    >任何时候（包括已经结束后触发`done`之后），修改`deadline`都可以让组件重新启动。
2. 插槽

    ```vue
    <TimerCountdown
      :deadline="倒计时剩余时间-秒（必填）"
      v-slot="time"
    >
      {{ time.day }}天
      {{ time.hour }}时
      {{ time.minute }}分
      {{ time.second }}秒
    </TimerCountdown>
    ```

### Tips
因为传递的`deadline`是剩余秒数，而不是时间戳，所以如果想要重启同一个秒数的倒计时，需要想办法触发，比如先设置`deadline`为其他值然后再设置回去。如果改为时间戳实现的话可以规避前面说的问题，但是使用者就要每次传入`倒计时秒数 + Date.now()`。
