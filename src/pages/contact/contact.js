import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import contact from './contact.vue'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './../../style/fullpage.min.css'

Vue.use(VueFullPage)
Vue.use(BootstrapVue)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(contact)
})
