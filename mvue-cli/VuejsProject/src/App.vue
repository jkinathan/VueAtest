<template>
  <div>
    <h1> {{ title }}</h1>
    <ninjasc></ninjasc>
  </div>
</template>

<script>
import ninjas from './Ninja.vue'
export default {
  components: {
    'ninjasc': ninjas
  },
  data () {
    return {
      title: "Ninja App"
    }
  }
}
</script>

<style>

</style>
