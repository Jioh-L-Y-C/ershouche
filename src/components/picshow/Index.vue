<template>
    <div class="picshow">
        <div class="close" @click="changeShowPic">
            <Icon type="ios-close-circle" class="closeIcon" />
        </div>
        <div class="leftPart">
            <BigPic></BigPic>
        </div>
        <div class="rightPart">
            <ImgAlbum></ImgAlbum>
            <MoreCar></MoreCar>
            <SmallPic></SmallPic>
        </div>
    </div>
</template>
<script>
    import BigPic from "./BigPic.vue";
    import ImgAlbum from "./ImgAlbum.vue";
    import MoreCar from "./MoreCar.vue";
    import SmallPic from "./SmallPic.vue";

    export default {
        // 组件还没上树发出异步请求数据，保存到Vuex中
        created(){
            this.$store.dispatch('init')
        },
        methods:{
            changeShowPic(){
                this.$store.commit('changeShowPic', {isShowPic:false})
            }
        },
        components:{
            BigPic,
            ImgAlbum,
            MoreCar,
            SmallPic
        }
    }
</script>
<style>
    .picshow{
        width:100%;height:100%;position:fixed;z-index:99;top:50%;left:50%;
        background:#000;color:white;transform: translate(-50%,-50%);
        overflow: hidden;
    }
    .leftPart{width: 75%;height:100%;float: left;}
    .rightPart{float: right;width:25%;height:100%;}    
    .close{position: fixed;top:5px;right:10px;cursor: pointer;}
    .closeIcon{font-size:35px;}
</style>