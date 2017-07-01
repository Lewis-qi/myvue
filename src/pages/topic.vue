<template>
  <div class="container">

    <div class="left-bar">
      <div class="content">
        <div class="user-detail ">
          <div class="title">
            <tag :topic="topicDetail"></tag>
            <h3> {{topicDetail.title}}</h3>
          </div>
          <ul class="list-inline">
            <li>发布于
              <create-time :time="topicDetail.create_at"></create-time>
            </li>
            <li>作者:

              <router-link :to="'/user/'">
                {{topicDetail.author.loginname}}
              </router-link>
            </li>
            <li>
              {{topicDetail.visit_count}}次浏览
            </li>
            <li>
              最后一次编辑是 15 天前
            </li>
            <li>
              来自 {{tab}}
            </li>
          </ul>
        </div>
      </div>
      <div v-html="topicDetail.content"></div>

      <div class="replies">
        <div class="count">{{topicDetail.reply_count}} 回复</div>
        <reply v-for="reply,index in topicDetail.replies" :reply="reply" :index="index"></reply>

      </div>
    </div>

    <div class="right-bar ">
      <div class="userinfo right-content">
        <h2>作者</h2>
        <p>
           <img :src="user.avatar_url" alt="">
            <span>{{user.loginname}}</span>
        </p>
       <p>积分：{{user.score}}</p>
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
       <div class="other right-content">
        <h2>作者其他话题</h2>
        <ul class="topic-list" v-for="other in user.recent_topics">
          <li>
            <a href="#">{{other.title}}</a>
          </li>
        </ul>
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
    </div>

  </div>
</template>
<script>
import tag from '../components/tag/tag';
import time from '../components/time/time';
import reply from '../components/reply/reply';
export default {
  data() {
    return {
      // replies: [],
      id: this.$route.params.id,
      user:{},
      topicDetail: {
        author: {
          loginname: ''
        }
      }
    }
  },
  components: {
    tag,
    'create-time': time,
    reply: reply
  },
  computed: {
    tab() {
      switch (this.topicDetail.tab) {
        case 'share':
          return '分享';
        case 'ask':
          return '问答';
      }
    }
  },
  created() {
    //  console.log(111);
    this.$http.get('https://www.vue-js.com/api/v1/topic/' + this.id)
      .then(function (data) {
        // console.log(data);
        var result = data.body;
        this.topicDetail = result.data;
        return this.$http.get('https://www.vue-js.com/api/v1/user/' + result.data.author.loginname)
      }).then(data => {
        var result = data.body;
        //  console.log(data);
         this.user=result.data;
         console.log(this.user)
      })
  }
}
</script>

<style lang="scss">
  @import '../scss/_common.scss';
  .left-bar {
    width: 74%;
    float: left;
    @include clearfix;
  }
  .content {
    /*float: left;*/
    /*width: 74%;*/
    background: #fff;
    .user-detail {
      padding: 15px 8px;
      h3 {
        font-weight: bold;
      }
      .tag {
        float: left;
        margin-top: 5px;
      }
      ul {
        li {
          font-size: 12px;
          color: #838383;
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
    .userinfo {
      /*padding: 10px;*/
     h2 {
      background: #f6f6f6;
      line-height: 42px;
      text-indent: 10px;
      color: #333;
      font-size: 13px;
    }
      img {
        width: 48px;
        height: 48px;
      }
      p {
        text-indent: 8px;
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
    .other ul,
    .topic ul {
      padding: 0 10px 30px;
      li {
        margin-top: 20px;
        a {
          color: #778087;
        }
      }
    }
  }

  .replies {
    /*width: 74%;*/
    margin-top: 20px;
    background: #fff;
    .count {
      width: 100%;
      height: 40px;
      background: #f6f6f6;
      line-height: 40px;
      text-indent: 20px;
      @include css3(border-radius, 3px);
    }
  }

  .test {
    color: #000;
    border: none;
  }

  .markdown-text {
    /*width: 74%;*/
    padding: 15px;
    background: #fff;
    img {
      max-width: 100%;
    }
    code {
      @extend .test;
    }
  }

</style>
