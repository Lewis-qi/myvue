<template>
  <div class="container">
    <main class="main">
      <div class="crumbs">
        <a>主页</a> / <span>关于</span>
      </div>
      <div class="content">
        <div class="about cont">
          <h3>关于</h3>
          <p>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
          <p>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</p>
          <p>CNode 的 SLA 保证是，一个9，即 90.000000%。</p>
          <p>社区目前由 <a href="#">@alsotang</a> 在维护，有问题请联系：<a href="#">https://github.com/alsotangp</a></p>
          <p>请关注我们的官方微博：<a href="#">http://weibo.com/cnodejs</a></p>
        </div>
        <div class="mobile cont">
          <h3>移动客户端</h3>
          <p>客户端由 <a href="#">@soliury</a> 开发维护。</p>
          <p>源码地址： <a href="#">https://github.com/soliury/noder-react-native</a> 。</p>
          <p>立即体验 CNode 客户端，直接扫描页面右侧二维码。</p>
          <p>另，安卓用户同时可选择：<a href="#">https://github.com/TakWolf/CNode-Material-Design</a> ，这是 Java 原生开发的安卓客户端。</p>
        </div>
        <div class="links cont">
          <h3>友情链接</h3>
          <a href="#"><img src="./img/huoban.png" alt=""></a>
          <a href="#"><img src="./img/offer.png" alt=""></a>
          <a href="#"><img src="./img/tem.gif" alt=""></a>
          <a href="#"><img src="./img/wise.png" alt=""></a>
          <a href="#"><img src="./img/jiguang.png" alt=""></a>
          <a href="#"><img src="./img/sf.png" alt=""></a>
          <a href="#"><img src="./img/ionichina.png" alt=""></a>
        </div>
        <div class="logo cont">
          <h3>LOGO</h3>
          <P>白底： <a href="#">/public/images/cnodejs.svg</a></P>
          <P>黑底： <a href="#">/public/images/cnodejs_light.svg</a></P>
        </div>
      </div>
    </main>
    <right-bar></right-bar>
  </div>
</template>
<script>
import rightBar from '../components/rightBar/rightBar'
    export  default {
         components:{
        'right-bar':rightBar
       }
    }
</script>
<style lang="scss">
  @import '../scss/_common.scss';
  .main{
      float: left;
      width:72%;
     .crumbs {
            width:100%;
            padding:15px 10px;
            border-bottom:1px solid #e5e5e5;
            background: #f6f6f6;
            color:#ccc;
            @include css3(border-radius, 5px 5px 0 0);
        
            a {
                color:#80bd01;
                font-size:14px;
            }
            span {
                color:#999;  
                font-size:14px;
            }
        }
      .content {
          background: #fff;
          padding-left: 15px;
          padding-top:25px;
          .cont {
              padding:10px 15px;
               h3 {
                  margin-bottom:15px;
                  border-bottom: 1px solid #eee;
                  line-height:40px;
                  font-size:25px;
              }
              p {
                  margin:1em 0;
                  font-size: 15px;
                  line-height: 1.7em;
                  a {
                      color:#08c;
                      font-size:14px;
                     
                  }
                   a:hover{
                          text-decoration:underline;
                     }
                    
              }
             img {
                     width: 250px;
                     height: 60px;
                 }  
          }
           .logo {
                    p {
                         a {
                         color:#778087;
                     }
                    }
                 }
      }
  }

</style>
