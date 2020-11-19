<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in imagesbox" :key="item.id">
      <h3>
        <img :src="item.idView" class="image" />
      </h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      imagesbox: [
        { id: 0, idView: require("../assets/101.jpg") },
        { id: 1, idView: require("../assets/102.jpg") },
        { id: 2, idView: require("../assets/103.jpg") }
      ]
    };
  }
};
</script>

<style scoped>
</style>
