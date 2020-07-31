<template>

  <footer>
    <p>{{ copyright }}{{ titlec }}</p>
  </footer>

</template>

<script>
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
