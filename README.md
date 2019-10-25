# vue-countdowntimer

Vue的倒计时组件

1. npm：<https://www.npmjs.com/package/vue-countdowntimer>
2. demo：<https://realgeoffrey.github.io/vue-countdowntimer/demo/index.html>

### 安装
1. node安装

    ```bash
    npm install vue-countdowntimer --save
    ```
2. 浏览器引用

    ```html
    <!-- 需要先引入vue：<script src="//unpkg.com/vue"></script> -->
    <script src="//unpkg.com/vue-countdowntimer"></script>
    ```

### 注册指令
1. 全局注册

    1. node

        ```javascript
        import Vue from 'vue'
        import vueCountdowntimer from 'vue-countdowntimer'

        // 全局注册
        Vue.use(vueCountdowntimer, { component: 'Countdowntimer' }) // 组件名默认是：Countdowntimer
        ```
    2. 浏览器

        ```html
        <!-- 需要先引入vue：<script src="//unpkg.com/vue"></script> -->
        <!-- 需要先引入vue-countdowntimer：<script src="//unpkg.com/vue-countdowntimer"></script> -->

        <script>
        // 全局注册
        Vue.use(vueCountdowntimer, { component: 'Countdowntimer' }) // 组件名默认是：Countdowntimer
        </script>
        ```
2. 局部注册

    1. node

        ```javascript
        import vueCountdowntimer from 'vue-countdowntimer'

        export default {
          components: {
            // 局部注册
            Countdowntimer: vueCountdowntimer.component
          }
        }
        ```
    2. 浏览器

        ```html
        <!-- 需要先引入vue：<script src="//unpkg.com/vue"></script> -->
        <!-- 需要先引入vue-countdowntimer：<script src="//unpkg.com/vue-countdowntimer"></script> -->

        <script>
        new Vue({
          components: {
            // 局部注册
            Countdowntimer: vueCountdowntimer.component
          }
        })
        </script>
        ```

### 用法
1. 参数

    ```vue
    <Countdowntimer
      :deadline="倒计时时间戳"
      :complete-zero="补全0（true）"
      :left-second="提前到期-秒（0）"
      :ignore-day="true：展示到小时；false：展示到天（true）"
      @done="倒计时结束后回调的方法"
    />
    ```
2. 插槽

    ```vue
    <Countdowntimer
      :deadline="倒计时时间戳"
      v-slot="time"
    >
      {{ time.day }}天
      {{ time.hour }}时
      {{ time.minute }}分
      {{ time.second }}秒
    </Countdowntimer>
    ```
