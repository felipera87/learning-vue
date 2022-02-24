import Vue from 'vue'
import App from './App.vue'
import Counters from './Counters.vue'

Vue.config.productionTip = false

// register component as global
Vue.component('app-counters', Counters)

new Vue({
  render: h => h(App),
}).$mount('#app')
