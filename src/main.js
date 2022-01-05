import Vue from 'vue'
import App from './App.vue'

import marked from 'marked'
import router from './router/index'
import store from './store/index'
import 'material-design-icons-iconfont'

import Vuelidate from 'vuelidate'



import VueRouter from 'vue-router'


Vue.filter('marked', marked)
Vue.use(VueRouter)
Vue.use(Vuelidate)

new Vue({
  render: h => h(App),
  el: '#app',
  router,
  store,
})
