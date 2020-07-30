Vue.component("greeting",{
  template: "<p>Hey There, I am {{name}}.<button v-on:click='changename'>Change Name</button></p>",
  data(){
    return{
      name:'Jordan'
    }
  },
  methods:{
    changename(){
      this.name = "Kinathan"
    }
  }
});

new Vue({
  el: "#vue-app-one"
});

new Vue({
  el:"#vue-app-two"
});
