var e=function(e,t){return e<10&&t?"0"+e:e.toString()},t=function(e,t){var n;"function"==typeof e&&(n=setTimeout((function o(){n=setTimeout(o,t),e()}),t)),this.stop=function(){clearTimeout(n)}};var n=function(e,t,n,o,r,i,s,a,d,c){"boolean"!=typeof s&&(d=a,a=s,s=!1);var u,l="function"==typeof n?n.options:n;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,r&&(l.functional=!0)),o&&(l._scopeId=o),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,d(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=u):t&&(u=s?function(){t.call(this,c(this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),u)if(l.functional){var f=l.render;l.render=function(e,t){return u.call(t),f(e,t)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,u):[u]}return n};const o={props:{deadline:{type:Number,required:!0},completeZero:{type:Boolean,default:!0},leftSecond:{type:Number,default:0},ignoreDay:{type:Boolean,default:!0}},data:function(){return{day:0,hour:0,minute:0,second:0,setIntervalInstance:null}},mounted:function(){var e=this;this.render(),this.setIntervalInstance=new t((function(){if(e.getRestTime()<(e.leftSecond||0))return e.setIntervalInstance.stop(),void e.$emit("done");e.render()}),1e3)},beforeDestroy:function(){this.setIntervalInstance.stop()},methods:{render:function(){var t=this.getRestTime(this.deadline);this.ignoreDay?this.hour=e(Math.floor(t/3600),this.completeZero):(this.day=e(Math.floor(t/86400),this.completeZero),this.hour=e(Math.floor(t/3600%24),this.completeZero)),this.minute=e(Math.floor(t/60%60),this.completeZero),this.second=e(t%60,this.completeZero)},getRestTime:function(){return Math.round((this.deadline-Date.now())/1e3)}}};var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",[e._t("default",[e.ignoreDay?e._e():[e._v(e._s(e.day)+":")],e._v(e._s(e.hour)+":"+e._s(e.minute)+":"+e._s(e.second)+"\n  ")],{day:e.day,hour:e.hour,minute:e.minute,second:e.second})],2)};r._withStripped=!0;var i=n({render:r,staticRenderFns:[]},void 0,o,void 0,!1,void 0,void 0,void 0),s={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.component(t.component||"timer-countdown",i)}};export default s;export{i as vueTimerCountdown};
