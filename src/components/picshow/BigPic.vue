<template>
    <div class="bigPic">
        <img v-if="pic" :src="`/api/img/${info.id}/${info.album}/${pic}`">
        <button class="lBtn" @click="goPrev">上一张</button>
        <button class="rBtn" @click="goNext">下一张</button>
    </div>
</template>

<script>
    export default {
        computed:{
            info(){
                return this.$store.state.picshowState;
            },
            pic(){
                //获取当前显示的大图
                return this.info.info.images[this.info.album][this.info.idx]
            }
        },
        methods:{
            goNext(){
                // this.$store.commit('goNext')
                this.$store.dispatch('goNext')
            },
            goPrev(){
                this.$store.dispatch('goPrev')
            }
        }
    }
</script>
<style scoped>
    .leftPart .bigPic img{
        width: 90%;box-sizing: border-box;
        /* border: 2px solid #fff; */
        /* padding:2px; */
    }
    .leftPart .bigPic{padding:10px;}
    .leftPart .bigPic button{
        position: absolute;top:0;
        width: 200px;height: 100%;opacity:0;
    }
    .lBtn{
        left:0;
        cursor:url(http://icon.zol-img.com.cn/products/v3/picture-cursor-left.cur),auto;
    }
    .rBtn{
        left:700px;
        cursor:url(http://icon.zol-img.com.cn/products/v3/picture-cursor-right.cur),auto;
    }
</style>