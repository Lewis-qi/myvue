<template>
     <div class="container">
        <main class="main">
          <ul class="tabs">
            <li v-for="tab,index in tabs" :class="index===isActive?'active':''"><a href="#" @click="getTopic(tab.type,index)">{{tab.text}}</a></li>
          </ul>
          <topic  v-for="topic,index in topics" :topic="topic" :index="index"></topic>
        </main>
        <div class="right-bar ">
          <div class="login right-content">
            <h1>Vue：Vue.js专业中文社区</h1>
            <p>您可以
              <a href="#">登录</a> 或
              <a href="#">注册</a> , 也可以</p>
            <button type="button">通过 Github 登录</button>
          </div>
          <div class="adv right-content ">
            <a href="#">
              <img src="../assets/ad3.png" alt="fff">
            </a>
            <a href="#">
              <img src="../assets/ad4.png" alt="fff">
            </a>
             <a href="#">
              <img src="../assets/ad5.png" alt="fff">
            </a>
          </div>
          <div class="topic  right-content">
            <h2>无人回复的话题</h2>
            <ul class="topic-list">
              <li>
                <a href="#">luosimao人机验证 data-callback回调...</a>
              </li>
              <li>
                <a href="#">求助：vue-cli搭建的vue开发环境怎...</a>
              </li>
              <li>
                <a href="#">请问如何在vue项目中调用安卓的...</a>
              </li>
              <li>
                <a href="#">路由后如何刷新收据</a>
              </li>
              <li>
                <a href="#">路由切换界面遮罩</a>
              </li>
            </ul>
          </div>
          <div class="rank right-content">
            <h2>积分榜 &nbsp&nbsp &nbsp &nbsp
              <a href="#">TOP 100 >></a>
            </h2>
            <ul class="topic-list">
              <li>430 &nbsp&nbsp&nbsp&nbsp&nbsp
                <a href="#">bailicangdu</a>
              </li>
              <li>260 &nbsp&nbsp&nbsp&nbsp&nbsp
                <a href="#">lzxb</a>
              </li>
              <li>260 &nbsp&nbsp&nbsp&nbsp&nbsp
                <a href="#">ab8512</a>
              </li>
              <li>240 &nbsp&nbsp&nbsp&nbsp&nbsp
                <a href="#">liqi19930310</a>
              </li>
              <li>220 &nbsp&nbsp&nbsp&nbsp&nbsp
                <a href="#">hellomimi</a>
              </li>
              <li>185 &nbsp&nbsp&nbsp&nbsp&nbsp
                <a href="#">Hxvin</a>
              </li>
              <li>145 &nbsp&nbsp&nbsp&nbsp&nbsp
                <a href="#">onlyone</a>
              </li>
            </ul>
          </div>
            <div class="code right-content">
            <h2>社区交流群</h2>
            <img class="scan-code" src="../assets/code2.png" alt="fff">
            <p>扫码快速入群</p>
          </div>
          <div class="link right-content">
            <h2>友情社区</h2>
            <a href="#">
              微信小程序学习社群
            </a>
            <a href="#">
              CTOLib码库
            </a>
            <a href="#">
              汇智网
            </a>
          </div>
       
        </div>
      </div>
</template>

<script>
import topic from '../components/topic/topic';
var url='https://www.vue-js.com/api/v1/topics';


export default {
  name: 'app',
  data(){
    return {
      isActive:0,
      topics:[],
      tabs:[
        {
          text:'全部',
          type:'all'
        },
        {
          text:'精华',
          type:'good'
        },
         {
          text:'weex',
          type:'weex'
        },
        {
          text:'分享',
          type:'share'
        },
        {
          text:'问答',
          type:'ask'          
        },
        {
          text:'招聘',
          type:'job'
        }
      ]
    }
  },
  components:{
   
    topic:topic
  },
  methods: {
    getTopic:function(type,index){
         this.$http.get(url+'?tab='+type)
      .then(function (data) {
        // console.log(111,data);
        this.isActive=index;
        var result = data.body;
         this.topics = result.data;
      })
    }
  },
  created() {
    // console.log('组件创建完成，开始请求ajax数据');

    this.$http.get(url)
      .then(function (data) {
        console.log(data);
        var result = data.body;
        this.topics = result.data;
    
      })
  }
}
</script>

<style lang="scss">
  @import '../scss/_common.scss';
  .main {
      float: left;
      width: 72%;
      /*background: red;*/
      .tabs {
        @include clearfix;
        width: 100%;
        padding: 10px;
        background: #f6f6f6;
        @include css3(border-radius, 5px 5px 0 0);

        li {
          float: left;
          padding: 5px 4px;
          margin: 0 10px;
          a {
            color: #369219;
            font-size: 14px;
          }
        }
        li.active,
        li:hover {
          background: #369219;
          @include css3(border-radius, 3px);
          a {
            color: #fff;
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
        font-size: 13px;
      }
      .topic ul,
      .rank ul {
        padding: 0 10px 30px;
        li {
          margin-top: 20px;
          a {
            color: #778087;
          }
        }
      }
      .rank {
        ul {
          li {
            font-size: 13px;
            color: #778087;
          }
        }
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