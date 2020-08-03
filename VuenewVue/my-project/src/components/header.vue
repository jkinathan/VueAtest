<template>

  <Header>
    <h1 v-on:click="changeTitle">{{ titlep }}</h1>
  </Header>

</template>

<script>
import { bus } from '../main';
export default {
  // first in the props we pass in the name of the prop and open it as an object and define some attributes
  props:{
    titlep:{
      type: String,
      required: true
    }
  },
  data () {
    return {

    }
  },
  methods:{
    changeTitle(){
      //this.titlep = "Vue my Wizards"
      //emitting an event called changetitleEvent and passing in another parameter which the root element will listen to

      // this.$emit("changetitleEvent", "Vue Wizzardds")
      //now we emit from the event bus
      this.titlep = 'Vue2 Wizards header'//this one changes for this component
      bus.$emit('titleChangedEventbusname','Vue2 Wizards footer ');//this one changes for second component footer coz it waits to listen from it
    }
  }
}
</script>

<style scoped>
  header{
    background: lightgreen;
    padding: 10px;
  }
  h1{
    color: darkgray;
    text-align: center;
  }

</style>
