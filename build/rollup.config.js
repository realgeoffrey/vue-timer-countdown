import VuePlugin from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import babelrc from 'babelrc-rollup'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from "rollup-plugin-terser"

const config = {
  input: 'src/index.js',
  plugins: [
    VuePlugin(),
    babel({
      ...babelrc({
        addExternalHelpersPlugin: false
      }),
      exclude: 'node_modules/**'
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    terser()
  ]
}

export default [
  {
    ...config,
    output: {
      format: 'cjs',  // CommonJS
      file: 'dist/vue-timer-countdown.cjs.js'
    }
  },
  {
    ...config,
    output: {
      format: 'esm',  // ES6 module
      file: 'dist/vue-timer-countdown.esm.js'
    }
  },
  {
    ...config,
    output: {
      format: 'iife', // <script>引用
      file: 'dist/vue-timer-countdown.iife.js',
      name: 'vueTimerCountdown'
    }
  }
]
