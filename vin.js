let one = new Vue({
  el:"#vue-app-one",
  data:{
    title: 'vue app one'
  },
  methods:{

  },
  computed:{
    greet(){
      return "Hello from App One"
    }
  }
});

let two = new Vue({
  el:"#vue-app-two",
  data:{
    title: 'vue app two'
  },
  methods:{
    changeTitle(){
      one.title = "Title changed "
    }
  },
  computed:{
    greet(){
      return "Yo dudes, this is app 2 speaking to you"
    }
  }
});

two.title = "Change from outside"
