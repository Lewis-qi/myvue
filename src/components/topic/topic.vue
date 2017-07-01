<template>
  <div class="list">
    <div class="list-left">
      <router-link :to="'/user/'+topic.author.loginname">
        <img :src="topic.author.avatar_url" alt="">
      </router-link>
      <p><span class="one">{{topic.reply_count}}</span >/<span class="two">{{topic.visit_count}}</span></p>
     <tag :topic="topic"></tag>
     <router-link :to="'/topic/'+topic.id">{{topic.title}}</router-link>
    </div>
    <div class="list-right">
      <img src="./face_sm.jpeg" alt="">
      <last-time :time="topic.last_reply_at"></last-time>
    </div>
  </div>
</template>

<script>
import tag from '../tag/tag';
import time from '../time/time';
    export default {
        props:['topic','index'],
        components:{
          tag: tag,
          'last-time': time
        },
    }
</script>

<style lang="scss">
  @import '../../scss/_common.scss';
  .list {
    display: flex;
    padding: 20px 10px;
    border-bottom: 1px solid #f0f0f0;
    background: #fff;
    align-items: center;
    justify-content: space-between;
    .list-left,
    .list-right {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .list-left {
      img {
        width: 30px;
        height: 30px;
        @include css3(border-radius, 3px);
      }
      .one {
        color: #9e78c0;
        font-size: 14px;
      }
      .two {
        color: #b4b4b4;
        font-size: 10px;
      }
      p {
        width: 70px;
        margin: 0 5px;
      }
      a {
        color: #333;
        font-size: 16px;
      }
    }
    .list-right {
      img {
        width: 18px;
        height: 18px;
        margin-right: 25px;
        @include css3(border-radius, 3px);
      }
    }
  }

</style>
