<template>
  <div>
    <div class="box1">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item>境内自由行</el-breadcrumb-item>
        <el-breadcrumb-item>三亚6日自由行(5钻)·新年惠！【2晚+3晚·双酒店任选】</el-breadcrumb-item>
        <el-divider></el-divider>
        <div class="lb">
          <video id="myVideo" class="video-js">
            <source src="../../static/video1.mp4" type="video/mp4">
          </video>
        </div>
        <div class="js">
          <h1>三亚6日自由行(5钻)·新年惠！【2晚+3晚·双酒店任选】『小红书力荐 网红酒店燃爆朋友圈』亚特兰蒂斯/天域/仁恒皇冠等可选 | B款·3+2可选 | 【0元可换购三亚旅行摄影体验】</h1>
          <div class="box2"> <div class="price"><span>¥&nbsp3300/人</span></div>
            <div class="yh">已享</div>
            <div class="discount"><span>【亚特兰蒂斯春节指定日限时惠 12.11起下单可享】预订1.22-1.28期间出行，每单立减200元！</span>
              <br>
              <span class="log-yh"><a href="http://localhost:8080/#/Login" target="_blank">登陆</a>后查看更多优惠</span>
            </div>
          </div>
        </div>
      </el-breadcrumb>
    </div>
  <FourthDetails></FourthDetails>
  </div>
</template>

<script>
  import FourthDetails from './FourthDetails'
  export default {
    name: 'FourthPage' ,
    components:{
      FourthDetails,
    },
  data() {
    return {};
  },
  mounted() {
    this.initVideo();
  },
  methods: {
    initVideo () {
      let myPlayer = this.$video(myVideo, {
        controls: true,
        autoplay: "muted",
        preload: "auto",
        width: "440px",
        height: "240px"
      });
    }
  }
  }
</script>

<style scoped>
  .log-yh{
    margin:0  35px;
    font-size: 17px;
  }
  .yh{
    border: red solid;
    border-width: 1px;
    color: red;
    font-size: 3px;
    width: 25px;
    margin: 0 auto;
    float: left;
  }
  .js{
    text-align: left;
    width: 60%;
    margin: 0 auto;
    float: left;
    overflow:scroll;
  }
  .box2{
    background: rgba(236, 183, 0, 0.09);
    height: 80px;
  }
  .price{
    color: rgb(236, 129, 0);
    font-size: 40px;
  }
  .box1{
    width: 80%;
    text-align: center;
    margin: 0 auto;
    border:3px solid rgba(0, 0, 0, 0.15)
  }
  .lb{
    width: 40%;
    float: left;
  }
</style>
