<template>
     <div class="right-bar ">
          <div class="login right-content">
            <h1>CNode：Node.js专业中文社区</h1>
            <p>您可以
              <a href="#">登录</a> 或
              <a href="#">注册</a> , 也可以</p>
            <button type="button">通过 Github 登录</button>
          </div>
          <div class="adv right-content ">
            <a href="#">
              <img src="./adv1.png" alt="fff">
            </a>
            <a href="#">
              <img src="./adv2.jpeg" alt="fff">
            </a>
          </div>
          <div class="link right-content">
            <h2>友情社区</h2>
            <a href="#">
              <img src="./link1.png" alt="fff">
            </a>
            <a href="#">
              <img src="./link2.png" alt="fff">
            </a>
            <a href="#">
              <img src="./link3.png" alt="fff">
            </a>
            <a href="#">
              <img src="./link4.png" alt="fff">
            </a>
          </div>
          <div class="code right-content">
            <h2>客户端二维码</h2>
            <img class="scan-code" src="./code.png" alt="fff">
            <p>客户端源码地址</p>
          </div>
        </div>
</template>
<script>
    export  default {
        name:'right-bar'
    }
</script>
<style lang="scss">
 @import '../../scss/_common.scss';
 .right-bar {

      float: right;
      width: 23%;
      .right-content {
        width: 100%;
        margin-bottom: 13px;
        border-radius: 2px;
        background: #fff;
      }
      .login {
        padding: 10px;
        h1 {
          margin: 19px 0 24px;
          font-size: 15px;
          color: #333;
        }
        p {
          color: #333;
          a {
            color: #778087;
          }
        }
        button {
          width: 149px;
          height: 34px;
          margin-top: 10px;
          border: none;
          border-radius: 2px;
          background-color: #5bc0de;
          font-size: 15px;
          color: #fff;
          cursor: pointer;
        }
      }
      .adv {
        width: 100%;
        padding: 10px;
        img {
          width: 100%;
        }
        a {
          display: inline-block;
          +a {
            margin-top: 10px;
          }
        }
      }
      h2 {
        background: #f6f6f6;
        line-height: 42px;
        text-indent: 10px;
        color: #333;
        font-size: 14px;
      }
      .link {
        a {
          display: block;
          padding: 10px;
          margin-top: 5px;
        }
        img {
          width: 70%;
        }
      }
      .code {
        /*text-align:center;
        h2 {

        }*/
        .scan-code {
          display: block;
          width: 60%;
          margin: 10px auto;
        }
        p {
          padding-bottom: 20px;
          text-align: center;
        }
      }
    }
</style>