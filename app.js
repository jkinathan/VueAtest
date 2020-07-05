new Vue({
  el:"#vue-app",

  data: {
    name: "Jordy",
    age:25,
    job: "Ninja",
    website: "https://github.com/jkinathan",
    websiteTag:'<a href="https://github.com/jkinathan">jordan Github</a>',
  },
  methods:{
    addyear(){

      this.age= this.age+1;

    },
    subyear(){

      this.age= this.age-1;

    },
    greet(time){

      return "Good "+time+" "+this.name;
    }
  }
});
