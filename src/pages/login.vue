<template>
  <div class="container">
    <main class="main">
      <div class="crumbs">
        <a>主页</a> /
        <span>登录</span>
      </div>
      <div class="content">
        <form action="/">
          <label for="">用户名</label>
          <input class="" type="text">
          <br>
          <label for="">密码</label>
          <input type="text">
          <br>
          <button type="button" class="pri">登录</button>
          <button type="button">通过 Github 登录</button>
          <a href="#">忘记密码了？</a>
        </form>
      </div>
    </main>
    <div class="right-bar">
      <div class="about  right-content">
        <h2>关于</h2>
        <p>CNode：Node.js专业中文社区</p>
        <p>在这里你可以：</p>
        <ul class="topic-list">
          <li>
            向别人提出你遇到的问题
          </li>
          <li>
            帮助遇到问题的人
          </li>
          <li>
            分享自己的知识
          </li>
          <li>
            和其它人一起进步
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'login'
}
</script>
<style lang="scss">
@import '../scss/_common.scss';
// @import '../../static/bootstrap.css';
.main {
  float: left;
  width: 72%;
  .crumbs {
    width: 100%;
    padding: 15px 10px;
    border-bottom: 1px solid #e5e5e5;
    background: #f6f6f6;
    color: #ccc;
    @include css3(border-radius, 5px 5px 0 0);

    a {
      color: #80bd01;
      font-size: 14px;
    }
    span {
      color: #999;
      font-size: 14px;
    }
  }
  .content {
    background: #fff;
    padding: 50px 0;

    form {

      text-align: center;

      label {
        display: inline-block;
        width: 50px;
        font-size: 14px;
        text-align: right;
      }

      input {
        width: 270px;
        height: 30px;
        margin: 5px 0;
        border: 1px solid #ccc;
        @include css3(border-radius, 5px);
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

      button.pri {
        width: 50px;
        background-color: #08c;
      }

      a {
        margin-left: 10px;
        color: #778087;
        font-size: 14px;
      }
    }
  }
}

.right-bar {

  float: right;
  width: 23%;
  .right-content {
    width: 100%;
    margin-bottom: 13px;
    border-radius: 2px;
    background: #fff;
  }

  p {
    margin: 1em 10px;
    font-size: 15px;
    line-height: 1.7em;
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

h2 {
  background: #f6f6f6;
  line-height: 42px;
  text-indent: 10px;
  color: #333;
  font-size: 14px;
}

.about ul {
  padding: 0 10px 30px;
  li {
    padding-left: 20px;
    margin-top: 20px;
    a {
      color: #778087;
    }
  }
}
</style>