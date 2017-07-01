<template>
  <header class="header navbar navbar-inverse">
    <div class="container">
      <div class="logo-bar navbar-brand">
        <router-link to="/">   
        <img class="logo" src="./logo.png" alt="">
        </router-link>
         Vue.js
      </div>
     <form action="/" class="navbar-form navbar-left">
       <div class="form-group">
          <input type="text" class="form-control">
        </div>
        </form>
      <ul class="nav navbar-right">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="">VUE2.0</router-link></li>
        <li><router-link to="">参考资料</router-link></li>        
        <li><router-link to="">API</router-link></li>
        <li><router-link to="/about" >关于</router-link></li>
        <li><router-link to="">注册</router-link></li>
        <li><router-link to="/login">登录</router-link></li>
      </ul>
    </div>
  </header>
</template>
<script>
    export  default {
        name:'header'
    }
</script>

<style lang="scss">
  @import '../../scss/_common.scss';
  .navbar {
   
  }
  .header {
    width: 100%;
    margin-bottom: 0;
    background: #1c6132;
    border: 0;
    border-radius: 0;
    /*padding: 11px 0;*/
    @include clearfix;
    .logo-bar {
      float: left;
      padding: 15px 20px;
      font-size: 20px;
      color: #fff;
      @include clearfix;
      img {
        float: left;
        width: 45px;
        height: 45px;
        margin-top: -10px;
      }
     
    }
     input {
        float: left;
        height: 26px;
        padding: 3px 5px 3px 22px;
        margin-top: 5px;
        border: 0;
        background: url(./search.png) no-repeat 4px 4px #4f9639;
        color: #666;
        outline: none;
        @include css3(border-radius, 15px);
      }
    .nav {
      margin-top: 10px;
      float: right;
      li {
        float: left;
        a {
          color: #ccc;
          font-size: 13px;
        }
         a:active,
        a:hover {
          background: none;
        }
       
      }
    }
  }

</style>
