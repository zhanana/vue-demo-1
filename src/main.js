import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 定义全局变量，当用户点击页面的元素时打印出‘可爱’，每个组件都可以用
Vue.directive('x',{
  inserted:function(el){
    el.addEventListener('click',()=>{console.log('可爱')})
  },
})

new Vue({
  render: h => h(App),
}).$mount('#app')
