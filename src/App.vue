<template>
  <div class="page">
    <myheader></myheader>
    <div class="wrapper">
        <router-view></router-view>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>

import header from './components/header/header';
import footer from './components/footer/footer';

  export default {
    components:{
    myheader:header,
    myfooter:footer
   }
  }
</script>


<style lang="scss">
  @import './scss/_common.scss';
  .page {
    @include clearfix;
  }

  .wrapper {
    @include clearfix;
    padding: 20px 0;
    background: #ddd;
  }

</style>
