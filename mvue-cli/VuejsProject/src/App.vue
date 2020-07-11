<template>
  <div>
    <h1> {{ title }}</h1>
    <p> {{ greeting() }}</p>
  </div>
</template>

<script>
export default {

  data () {
    return {
      title: "Your first Vue file, woohh "
    }
  },
  methods: {
    greeting(){
      return "Hey cowboy"
    }
  },
}
</script>

<style>

</style>
