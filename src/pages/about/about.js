import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import about from './about.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(about)
})
