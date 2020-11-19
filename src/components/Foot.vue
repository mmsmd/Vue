<template>
    <div class="foot">
      <span>
        Copyright © 2019 <a href="http://localhost:8080/#/About">关于我们</a>
      </span>
    </div>
</template>

<script>
  export default {
    name: 'Foot'
  }
</script>

<style scoped>
.foot{
  width: 100%;
  background: black;
  color: white;
}
a:link{
  color: white;
}
a:visited{
  color: white;
}
a{
  text-decoration: none
}
</style>
