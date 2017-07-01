<template>
  <div class="tag">
    <span class="up" v-if="topic.top">置顶</span>
    <span class="up" v-if="topic.good&&!topic.top">精华</span>
    <span class="gray" v-if="topic.tab==='ask'&&!topic.top&&!topic.good">问答</span>
    <span class="gray" v-if="topic.tab==='share'&&!topic.top&&!topic.good">分享</span>
    <span class="gray" v-if="topic.tab==='weex'&&!topic.top&&!topic.good">weex</span>
    <span class="gray" v-if="topic.tab==='job'&&!topic.top&&!topic.good">招聘</span>
  </div>
</template>
<script>
    export default {
        props:['topic']
    }
</script>
<style lang="scss">
@import '../../scss/_common.scss';
   .up {
        padding: 2px 4px;
        margin-right: 5px;
        background: #369219;
        color: #fff;
        @include css3(border-radius, 3px);
      }
      .gray {
        padding: 2px 4px;
        margin-right: 5px;
        background: #e5e5e5;
        color: #999;
        @include css3(border-radius, 3px);
      }

</style>
