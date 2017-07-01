<template>
  <div class="container">
    <main class="main">
      <div class="crumbs">
        <a>主页</a>
      </div>
      <div class="content">
        <div class="info">
            <img :src="userDetail.avatar_url"><span>{{userDetail.loginname}}</span>
            <p>{{userDetail.score}}积分</p>
            <p>注册时间：<create-time :time="userDetail.create_at"></create-time></p>
        </div>
        <div class="cent-topic">
            <h3>最近创建的话题</h3>
         <!--<div v-for="item in userDetail.recent_topics">
            <div>
                <img :src="item.author.avatar_url">
            </div>
            </div>-->
        </div>
        <div class="cent-join">

        </div>
      </div>
    </main>
  </div>
  
</template>
<script>
import time from '../components/time/time';
export default {
    data() {
        return {
            loginname: this.$route.params.loginname,
            userDetail:{}
        }
    },
    components:{
      'create-time': time,
    },
    created(){
        this.$http.get('https://cnodejs.org/api/v1/user/'+this.loginname)
            .then(data=>{
                var result=data.body;
                if(result.success){
                    this.userDetail=result.data;
                    console.log(this.userDetail)
                }
            })
    }
}
</script>
<style>

</style>
