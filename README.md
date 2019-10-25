# vue-timer-countdown

Vue的倒计时组件

1. npm：<https://www.npmjs.com/package/vue-timer-countdown>
2. demo：<https://realgeoffrey.github.io/vue-timer-countdown/demo/index.html>

### 安装
1. node安装

    ```bash
    npm install vue-timer-countdown --save
    ```
2. 浏览器引用

    ```html
    <!-- 需要先引入vue：<script src="//unpkg.com/vue"></script> -->
    <script src="//unpkg.com/vue-timer-countdown"></script>
    ```

### 注册指令
1. 全局注册

    1. node

        ```javascript
        import Vue from 'vue'
        import vueTimerCountdown from 'vue-timer-countdown'

        // 全局注册
        Vue.use(vueTimerCountdown, { component: 'TimerCountdown' }) // 组件名默认是：TimerCountdown
        ```
    2. 浏览器

        ```html
        <!-- 需要先引入vue：<script src="//unpkg.com/vue"></script> -->
        <!-- 需要先引入vue-timer-countdown：<script src="//unpkg.com/vue-timer-countdown"></script> -->

        <script>
        // 全局注册
        Vue.use(vueTimerCountdown, { component: 'TimerCountdown' }) // 组件名默认是：TimerCountdown
        </script>
        ```
2. 局部注册

    1. node

        ```javascript
        import vueTimerCountdown from 'vue-timer-countdown'

        export default {
          components: {
            // 局部注册
            TimerCountdown: vueTimerCountdown.component
          }
        }
        ```
    2. 浏览器

        ```html
        <!-- 需要先引入vue：<script src="//unpkg.com/vue"></script> -->
        <!-- 需要先引入vue-timer-countdown：<script src="//unpkg.com/vue-timer-countdown"></script> -->

        <script>
        new Vue({
          components: {
            // 局部注册
            TimerCountdown: vueTimerCountdown.component
          }
        })
        </script>
        ```

### 用法
1. 参数

    ```vue
    <TimerCountdown
      :deadline="倒计时时间戳"
      :complete-zero="补全0（true）"
      :left-second="提前到期-秒（0）"
      :ignore-day="true：展示到小时；false：展示到天（true）"
      @done="倒计时结束后回调的方法"
    />
    ```
2. 插槽

    ```vue
    <TimerCountdown
      :deadline="倒计时时间戳"
      v-slot="time"
    >
      {{ time.day }}天
      {{ time.hour }}时
      {{ time.minute }}分
      {{ time.second }}秒
    </TimerCountdown>
    ```
