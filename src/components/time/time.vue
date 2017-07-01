<template>
  <span class="day">{{mytime}}</span>
</template>

<script>
    export default {
        props:['time'],
        computed:{
            mytime() {
            var shicha = Math.floor((Date.now() - Date.parse(this.time)) / 1000);
            var min = Math.floor(shicha / 60);
            // console.log(this.time)
            if (min >= 60) {
                var hour = Math.floor(min / 60);
                if (hour >= 24) {
                    var day = Math.floor(hour / 24);
                    if (day < 30) {
                        return day + '天前'
                    } else {
                        return Math.floor(day / 30) + '个月前'
                    }

                } else {
                    return hour + '小时前'
                }

             } else {
                return min + '分钟前'
             }
           }
        }
    }
</script>

<style lang="scss">


</style>
