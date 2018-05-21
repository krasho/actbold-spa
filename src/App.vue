<template>
  <div id="app" class="app">
    <header-html></header-html>
    <main id="main">       
       <router-view></router-view>
    </main>
    <footer-html></footer-html>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  components:{
     'header-html': Header,
     'footer-html': Footer,
  },
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">
  .app {
    font-family: 'Lato', sans-serif;
  }
</style>
