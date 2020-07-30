<template>

  <footer>
    <p>{{ copyright }}</p>
  </footer>

</template>

<script>
export default {

  data () {
    return {
      copyright: "Copyright 2020 Vue ninjas"
    }
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
