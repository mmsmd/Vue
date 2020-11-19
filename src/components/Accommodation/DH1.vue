<template>
  <el-tabs type="border-card">
    <el-tab-pane label="xjp"><div class="ht">
      <img src="../../assets/ht1.png" height="257" width="350"/>
      <img src="../../assets/ht2.png" height="257" width="350"/>
      <img src="../../assets/ht3.png" height="257" width="350"/>
      <img src="../../assets/ht4.png" height="257" width="350"/>
      <img src="../../assets/ht6.png" height="257" width="350"/>
      <img src="../../assets/ht5.png" height="257" width="350"/>
    </div></el-tab-pane>
    <el-tab-pane label="曼谷"><div class="ht"></div></el-tab-pane>
    <el-tab-pane label="东京"><div class="ht"></div></el-tab-pane>
    <el-tab-pane label="吉隆坡"><div class="ht"></div></el-tab-pane>
  </el-tabs>
</template>

<script>
  export default {
    name: 'DH1'
  }
</script>

<style scoped>
  .ht{
    margin: 0 18px;
    float: left;
  }
  .el-tabs{
    width: 1230px;
    text-align:center;
    margin: 0 auto;
  }
</style>
