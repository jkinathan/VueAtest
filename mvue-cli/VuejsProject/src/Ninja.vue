<template>
  <ul>
    <li v-for="ninja in ninjas"> {{ ninja }}</li>

  </ul>
</template>

<script>
export default {

  data () {
    return {
      ninjas:["murvin","jordan","tony"]
    }
  }
}
</script>

<style>

</style>
