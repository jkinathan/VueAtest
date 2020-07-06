new Vue({
  el:"#vue-app",

  data: {
    name2: "",
    age2: "",
    name: "Jordy",
    x:0,
    y:0,
    age:25,
    job: "Ninja",
    website: "https://github.com/jkinathan",
    websiteTag:'<a href="https://github.com/jkinathan">jordan Github</a>',
  },
  methods:{
    clicker(){
      alert("You Clicked me");
    },
    logname(){

    },
    logage(){
       
    },
    updatexy(event){
      //console.log(event);
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
    ,
    addyear(inc){

      this.age = this.age+inc;

    },
    subyear(dec){

      this.age = this.age-dec;

    },
    greet(time){

      return "Good "+time+" "+this.name;
    }
  }
});
