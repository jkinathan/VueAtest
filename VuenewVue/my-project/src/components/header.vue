<template>

  <Header>
    <h1>{{ title }}</h1>
  </Header>

</template>

<script>
export default {

  data () {
    return {
      title: "Vue Ninjas"
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
