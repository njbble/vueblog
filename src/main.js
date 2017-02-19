//vue core
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
//router
import routes from './router/index'
import App from './App'

Vue.use(VueRouter)
Vue.use(Vuex)

//vue-awesome
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'
Vue.component('icon', Icon)


const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
