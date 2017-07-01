<template>
    <div>
        <div class="reply">
            <div class="reply-left">
                <router-link :to="'/user/'+reply.author.loginname">
                    <img class="img-rounded" :src="reply.author.avatar_url" alt="">
                </router-link>
                <div class="reply-cont">
                    <router-link :to="'/user/'+reply.author.loginname">
                        {{reply.author.loginname}}
                    </router-link>
                    <span>{{index+1}}楼</span>
                    <span>
                        <creat-time :time="reply.create_at"></creat-time>
                    </span>
                    <p v-html="reply.content"></p>
                </div>
            </div>
            <div class="reply-right">
    
            </div>
            <div class="ups">
                <span class="fa fa-thumbs-o-up fa-fw"></span>{{reply.ups.length}}
            </div>
        </div>
    </div>
</template>

<script>
import time from '../time/time';
export default {
    props: ['reply', 'index'],
    components: {
        'creat-time': time
    }
}
</script>

<style lang="scss">
@import '../../scss/_common.scss';
.reply {
    display: flex;
    padding: 15px;
    border-bottom:1px solid #eee;
    justify-content: space-between;
    .reply-left {
        display: flex;

        img {
            width: 30px;
            height: 30px;
            margin-right: 10px;
        }
    }
    .reply-right {}
}
</style>

