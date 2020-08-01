<template>

  <footer>
    <p>{{ copyright }}{{ titlec }}</p>
  </footer>

</template>

<script>
import { bus } from '../main';

export default {
  props:{
    titlec:{
      type: String,
      required: true
    }
  },
  data () {
    return {
      copyright: "Copyright 2020 "
    }
  },
  //life cycle hook... anything inside created hook is fired when the component is first created
  created(){
    //listening on the event bus sent after importing and use its name as first n second
    //argument is the data from that event bus
    //ES6 function which is going to change the title of the component
    bus.$on("titleChangedEventbusname",(data)=>{
      this.titlec = data
    })
  }
}
</script>

<style scoped>
  footer{
    background: black;
    padding: 6px;
  }
  p{
    color: blue;
    text-align: center;
  }

</style>
