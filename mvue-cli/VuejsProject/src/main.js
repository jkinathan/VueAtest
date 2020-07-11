import Vue from 'vue'
import App from './App.vue'
import ninjas from './Ninja.vue'

Vue.component("ninjasc",ninjas)

new Vue({
  el: '#app',
  render: h => h(App)
})
