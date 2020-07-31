<template>

  <div>
    <app-header v-bind:titlep="title" v-on:changetitleEvent="updateTitle($event)"></app-header>
    <myninja v-bind:ninjasp="ninjas"></myninja>
    <!-- ninjasp is the property name which will call the ninjas array -->
    <!-- <hr>
    <myninja v-bind:ninjasp="ninjas"></myninja> -->
    <app-footer v-bind:titlec="title"></app-footer>
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
      ],
      title:"Vue my Ninjas"
    }
  },
  methods: {
    updateTitle(updated){
      this.title = updated;
    }
  },
}
</script>

<style>

</style>
