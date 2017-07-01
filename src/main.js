import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource';
import router from './router/index'


Vue.config.productionTip = false

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
