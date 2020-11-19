<template>
  <div id="app">
    <mynavbar></mynavbar>
    <background v-show="!(path ==='/Login') "></background>
    <router-view/>
    <Foot></Foot>
  </div>
</template>

<script>
import mynavbar from './components/AppComponents/Navbar.vue'
import background from './components/AppComponents/BackGround.vue'
import carousel from './components/Carousel.vue'
import Foot from './components/Foot'

export default {
  name: 'App',
  components: {
    mynavbar,
    background,
    carousel,
    Foot
  },
  mounted() {
    this.path = this.$route.path;
    // console.log(this.$route.path)
  },
  watch:{
    $route(to,from){
      this.path = to.path
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background-size: cover;
  background: rgba(235,222,206,0.11);
}
body {
  margin: 0px;
}
.el-submenu__title {
  font-size: 20px;
}
</style>
