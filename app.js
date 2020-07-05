new Vue({
  el:"#vue-app",

  data: {
    name: "Jordy",
    job: "Ninja",
  },
  methods:{
    greet(time){

      return "Good "+time+" "+this.name;
    }
  }
});
