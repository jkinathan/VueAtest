<template>

  <Header>
    <h1 v-on:click="changeTitle">{{ titlep }}</h1>
  </Header>

</template>

<script>
export default {
  // first in the props we pass in the name of the prop and open it as an object and define some attributes
  props:{
    titlep:{
      type: String
    }
  },
  data () {
    return {

    }
  },
  methods:{
    changeTitle(){
      this.titlep = "Vue my Wizards"
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
