<template>
  <div class="hello">
    <el-divider></el-divider>
    <search></search>
    <el-divider></el-divider>
    <carousel></carousel>
    <el-divider></el-divider>
    <h1 id="jnzyx">{{ msg }}</h1>
    <GroupTour></GroupTour>
    <el-divider class="fot1"></el-divider>
    <img src="../assets/fot1.png">

  </div>
</template>

<script>
import carousel from './Carousel'
import Search from './Search'
import GroupTour from './Travel/GroupTour'


export default {
  name: 'HelloWorld',
  components: {
    carousel,
    Search,
    GroupTour,
  },
  data () {
    return {
      msg: '境内自由行'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  width: 86%;
}
  .fot1{
    width: 85%;
    text-align: center;
    margin: 10px auto;
  }
</style>
