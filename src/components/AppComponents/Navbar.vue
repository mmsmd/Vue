<template>

  <el-menu theme="dark"
           :default-active="activeIndex"
           class="el-menu-demo"
           mode="horizontal"
           text-color="white"
           background-color="black"
           router
           @select="handleSelect">
    <el-menu-item index="/"><img src="../../assets/12.png" height="64" width="257"/></el-menu-item>
    <el-menu-item index="/">主页</el-menu-item>
    <el-menu-item index="/GT1">自由行</el-menu-item>
    <el-submenu index="3">
      <template slot="title">住宿</template>
      <el-menu-item index="/DomesticHotel">国内酒店</el-menu-item>
      <el-menu-item index="/OverseasHotels">海外酒店</el-menu-item>
      <el-menu-item index="/HomeStay">民宿客栈</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">旅游</template>
      <el-menu-item index="/WeekendTour">周末游</el-menu-item>
      <el-menu-item index="/GroupTravel">跟团游</el-menu-item>
      <el-menu-item index="/FreeTravel">自由行</el-menu-item>
    </el-submenu>
    <el-menu-item index="/Login">登陆</el-menu-item>
    <el-menu-item index="/About">关于我们</el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style scoped>
  .el-menu.el-menu--horizontal {
    border-bottom: 0;
  }
  .el-menu-item {
    font-size: 20px;
  }
  .el-submenu__title {
    font-size: 20px;
  }


</style>
