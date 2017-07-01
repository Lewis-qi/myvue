<template>
  <footer>
    <div class="container">
      <a href="#">RSS</a> |
      <a href="#">源码地址</a>
      <p>
        服务器搭建在:
        <a href="#"><img class="one" src="./uc.png" alt=""></a>, 存储赞助商为:
        <a href="#"><img class="two" src="./yun.png" alt=""></a>
      </p>
      <p>声明：内容均来自于网络，如有侵权行为请发送邮件至vueclub@126.com,我们将在第一时间删除</p>
    </div>
  </footer>
</template>
<script>
    export default {
        name: 'footer'
    }
</script>

<style lang="scss">
  footer {
    padding: 20px 0;
    p {
      margin: 5px 0;
      line-height: 20px;
      color: #ababab;
      font-size: 14px;
    }
    a {
      color: #666;
      font-size: 13px;
      img {
        vertical-align: middle;
      }
      img.one {
        width: 158px;
        height: 45px;
      }
      img.two {
        width: 115px;
        height: 53px;
      }
      img.three {
        width: 166px;
        height: 54px;
      }
    }
    a.last {
      color: #08c;
      font-size: 14px;
    }
  }

</style>
