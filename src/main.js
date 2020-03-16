import Vue from 'vue'
import App from './App.vue'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/router'
Vue.use(elementUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')