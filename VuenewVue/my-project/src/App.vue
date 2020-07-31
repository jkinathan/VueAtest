<template>

  <div>
    <app-header></app-header>
    <myninja v-bind:ninjasp="ninjas"></myninja>
    <!-- ninjasp is the property name which will call the ninjas array -->
    <app-footer></app-footer>
  </div>

</template>

<script>
import Header from './components/header'
import footer from './components/footer'
import mydoll from './components/ninjas'

export default {
  components:{
    'app-header':Header,
    'app-footer':footer,
    'myninja':mydoll
  },

  data () {
    return {
      ninjas: [
        {name: 'Jordan', speciality: 'developer', show:false},
        {name: 'murvin', speciality: 'Java wizard', show:false},
        {name: 'danny', speciality: 'civil engineer', show:false},
        {name: 'Patricia', speciality: 'Lawyer', show:false},
        {name: 'Germinah', speciality: 'doctor', show:false},
      ]
    }
  }
}
</script>

<style>

</style>
