<template>

  <div class="bx1">
    <div class="outer_label">
      <img class="inner_label login_logo" src="../assets/login_1.png">
    </div>
    <div class="login_form">
      <input type="text"  class="qxs-ic_user qxs-icon"  placeholder="用户名" v-model="userName">
      <br>
      <input type="text"  class="qxs-ic_password qxs-icon"  placeholder="密码" v-model="password">
      <br>
      <el-button class="login_btn" @click.native="login" type="primary" round :loading="isBtnLoading">登录</el-button>
      <div style="margin-top: 10px">
        <span class="phone" style="color: #000099;" @click="login">手机号登陆</span>
        <span class="forget" style="float: right;color: #A9A9AB">忘记密码？</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
      data() {
        return {
          userName: '',
          password: '',
          isBtnLoading: false
        }
      },
      created () {
        if(JSON.parse( localStorage.getItem('user')) && JSON.parse( localStorage.getItem('user')).userName){
          this.userName = JSON.parse( localStorage.getItem('user')).userName;
          this.password = JSON.parse( localStorage.getItem('user')).password;
        }
      },
      computed: {
        btnText() {
          if (this.isBtnLoading) return '登录中...';
          return '登录';
        }
      },
      methods: {
        login() {
          if (!this.userName) {
            this.$message.error('请输入用户名');
            return;
          }
          if (!this.password) {
            this.$message.error('请输入密码');
            return;
          }
        }
      }
  }
</script>

<style scoped>
  .login_form {
    padding-top: 2%;
    padding-left: 10%;
    padding-right: 10%;
  }
  .qxs-ic_user.qxs-icon{
    width: 280px;
    height: 50px;
  }
  .qxs-ic_password.qxs-icon{
    width: 280px;
    height: 50px;
  }
  .qxs-ic_user {
    background-size: 13px 15px;
    background-position: 3%;
  }
  .qxs-ic_password {
    background-size: 13px 15px;
    background-position: 3%;
    margin-bottom: 20px;
  }
  .login_logo {
    height: 100%;
  }
  .login_btn {
    width: 40%;
    font-size: 16px;
    background: -webkit-linear-gradient(left, #000099, #2154FA);
    background: -o-linear-gradient(right, #000099, #2154FA);
    background: -moz-linear-gradient(right, #000099, #2154FA);
    background: linear-gradient(to right, #000099 , #2154FA);
    filter: brightness(1.4);
  }
  span.phone{
    float: left;
  }
  span.forget{
    float: right;
  }

</style>
