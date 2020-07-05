new Vue({
  el:"#vue-app",

  data: {
    name: "Jordy",
    job: "Ninja",
    website: "https://github.com/jkinathan",
    websiteTag:'<a href="https://github.com/jkinathan">jordan Github</a>',
  },
  methods:{
    greet(time){

      return "Good "+time+" "+this.name;
    }
  }
});
