import Vue from 'vue'
import App from './App.vue'

// 引入 store 对象
import store from './store.js'

new Vue({
  el: '#app',

  // 注入到根实例
  store,
  render: h => h(App)
});
