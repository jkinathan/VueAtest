import Vue from 'vue'
import App from './App.vue'


//creating our new event bus which is just an instance of vue

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
