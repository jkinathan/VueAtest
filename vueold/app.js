new Vue({
  el:"#vue-app",

  data: {
    namer:"jack",
    characters:['Mario','Luigi','Yoshi','Bowser'],
    ninjas:[
      {name:"Ryu",age:25},
      {name:"Yoshi",age:35},
      {name:"Ken",age:55}
    ],

    error: false,
    success: false,

    available: false,
    nearby: false,
    a:0,
    b:0,
    name2: "",
    age2: "",
    name: "Jordy",
    x:0,
    y:0,
    age:20,
    job: "Ninja",
    website: "https://github.com/jkinathan",
    websiteTag:'<a href="https://github.com/jkinathan">jordan Github</a>',
  },
  computed:{
    compClasses(){
      return {
        available: this.available,
        nearby: this.nearby
      }
    },
    addToA(){
      console.log("addToA");
      return this.a + this.age;
    },
    addToB(){
      console.log("addToB");
      return this.b + this.age;
    },
  },
  methods:{
    clicker(){
      alert("You Clicked me");
    },
    // addToA(){
    //   return this.a + this.age;
    // },
    // addToB(){
    //   return this.b + this.age;
    // },
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
