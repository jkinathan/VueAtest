<template>

  <div>
    <app-header></app-header>
    <app-footer></app-footer>
  </div>

</template>

<script>
import Header from './components/header'
import footer from './components/footer'

export default {
  components:{
    'app-header':Header,
    'app-footer':footer
  },

  data () {
    return {

    }
  }
}
</script>

<style>

</style>
