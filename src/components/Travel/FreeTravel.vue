<template>
  <div><h1>自由行</h1>
    <GroupTour></GroupTour>
    <el-divider></el-divider>
  </div>
</template>

<script>
  import GroupTour from './GroupTour'
  export default {
    name: 'FreeTravel',
    components:{
      GroupTour
    }
  }
</script>

<style scoped>

</style>
