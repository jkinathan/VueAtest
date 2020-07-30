<template>

  <div id="ninjas">
    <ul>
      <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show">
        <h2>{{ ninja.name }}</h2>
        <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
      </li>
    </ul>
  </div>

</template>

<script>
export default {

  data () {
    return {
      ninjas: [
        {name: 'Jordan', speciality: 'developer', show:false},
        {name: 'murvin', speciality: 'Java wizard', show:false},
        {name: 'danny', speciality: 'civil engineer', show:false},
        {name: 'Patricia', speciality: 'Lawyer', show:false},
        {name: 'Gemmy', speciality: 'doctor', show:false},
      ]
    }
  }
}
</script>

<style scoped>


</style>
