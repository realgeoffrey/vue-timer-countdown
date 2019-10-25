'use strict';

//
//
//
//
//
//
//
//
// 格式化数字格式
var FORMAT_NUMBER = function FORMAT_NUMBER(number, completeZero) {
  if (number < 10 && completeZero) {
    return '0' + number;
  } else {
    return number.toString();
  }
}; // 周期执行（构造函数）


var SET_INTERVAL = function SET_INTERVAL(func, millisecond) {
  var setIntervalId;

  if (typeof func === 'function') {
    setIntervalId = setTimeout(function self() {
      setIntervalId = setTimeout(self, millisecond);
      func();
    }, millisecond);
  }

  this.stop = function () {
    clearTimeout(setIntervalId);
  };
};

var script = {
  props: {
    deadline: {
      // 时间戳
      type: Number,
      required: true
    },
    completeZero: {
      // 补全0
      type: Boolean,
      "default": true
    },
    leftSecond: {
      // 提前到期（秒）
      type: Number,
      "default": 0
    },
    ignoreDay: {
      // true：展示到小时；false：展示到天
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
      setIntervalInstance: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.render();
    this.setIntervalInstance = new SET_INTERVAL(function () {
      var restTime = _this.getRestTime();

      if (restTime < (_this.leftSecond || 0)) {
        _this.setIntervalInstance.stop();

        _this.$emit('done');

        return;
      }

      _this.render();
    }, 1000);
  },
  beforeDestroy: function beforeDestroy() {
    this.setIntervalInstance.stop();
  },
  methods: {
    render: function render() {
      var restTime = this.getRestTime(this.deadline);

      if (this.ignoreDay) {
        this.hour = FORMAT_NUMBER(Math.floor(restTime / (60 * 60)), this.completeZero);
      } else {
        this.day = FORMAT_NUMBER(Math.floor(restTime / (24 * 60 * 60)), this.completeZero);
        this.hour = FORMAT_NUMBER(Math.floor(restTime / (60 * 60) % 24), this.completeZero);
      }

      this.minute = FORMAT_NUMBER(Math.floor(restTime / 60 % 60), this.completeZero);
      this.second = FORMAT_NUMBER(restTime % 60, this.completeZero);
    },
    getRestTime: function getRestTime() {
      // 获取剩余时间
      return Math.round((this.deadline - Date.now()) / 1000);
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "span",
    [
      _vm._t(
        "default",
        [
          !_vm.ignoreDay ? [_vm._v(_vm._s(_vm.day) + ":")] : _vm._e(),
          _vm._v(
            _vm._s(_vm.hour) +
              ":" +
              _vm._s(_vm.minute) +
              ":" +
              _vm._s(_vm.second) +
              "\n  "
          )
        ],
        { day: _vm.day, hour: _vm.hour, minute: _vm.minute, second: _vm.second }
      )
    ],
    2
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var vueCountdowntimer = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

var index = {
  // 全局注册
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Vue.component(options.component || 'Countdowntimer', vueCountdowntimer);
  },
  // 局部注册
  component: vueCountdowntimer
};

module.exports = index;
