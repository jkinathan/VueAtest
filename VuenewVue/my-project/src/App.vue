<template>

  <div>
    <app-header></app-header>
    <myninja></myninja>
    <app-footer></app-footer>
  </div>

</template>

<script>
import Header from './components/header'
import footer from './components/footer'
import ninjac from './components/ninjas'

export default {
  components:{
    'app-header':Header,
    'app-footer':footer,
    'myninja':ninjac
  },

  data () {
    return {

    }
  }
}
</script>

<style>

</style>
