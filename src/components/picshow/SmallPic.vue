<template>
    <div>
        <div class="smallpics" ref="smallpics">
            <div class="huoche" ref="huoche" :style="{left: nowPage * -330 + 'px'}">
                <ul v-for="i in allPage">
                    <li v-for="(pic,index) in nowPicsArr.slice((i-1) * 4, i * 4)"
                        @click="changeIdx((i-1) * 4 + index)"
                        :class="{cur: (i-1) == nowPage && info.idx % 4 == index}"
                    >
                        <img :src="`/api/img_small/${info.id}/${info.album}/${pic}`">
                    </li>
                </ul>
            </div>

            <ol class="navs" ref="navs">
                <li v-for="i in allPage" :style="{width: 100 / allPage-4 + '%'}"
                    :class="{cur:nowPage == (i-1)}"
                >
                </li>
            </ol>
        </div>
       
    </div>
</template>
<script>
    import $ from 'jquery'
    export default {
        computed:{
            nowPicsArr(){
                // 获取当前album组所有的图片
                var album = this.$store.state.picshowState.album;
                return this.$store.state.picshowState.info.images[album]
            },
            allPage(){
                // 计算当前小图的总页数（向上取整），然后生成ul的个数
                return Math.ceil(this.nowPicsArr.length / 4);
            },
            info(){
                // 获取车辆的信息
                return this.$store.state.picshowState;
            },
            nowPage(){
                // 计算当前所在页（idx / 4）
                return parseInt(this.info.idx / 4)
            }
        },
        methods:{
            changeIdx(idx){
                this.$store.commit('changeIdx', {idx})
            }
        },
        // DOM上树之后的生命周期
        mounted(){
            var self = this;
            // 使用时间委托给li，动画火车式切换小图导航
            $(this.$refs.navs).on('click','li', function(){
                $(self.$refs.huoche).css('left', -320 * $(this).index())
                $(this).addClass('cur').siblings().removeClass('cur')
            })
            // 离开大盒子回到初始位置
            $(this.$refs.smallpics).mouseleave(function() {
                $(self.$refs.huoche).css('left', -320 * self.nowPage)
                $(self.$refs.navs).find('li').eq(self.nowPage).addClass('cur').siblings().removeClass('cur')
            })
        }
    }
</script>
<style scoped>
    .smallpics{overflow:hidden;width:330px;margin:20px 0;}
    .smallpics ul{float:left;width:330px;}
    .smallpics li{
        float:left;width:48%;
        margin:0 6px 6px 0;
        position:relative;
    }
    .smallpics ul li::before{
        content: "";
        position:absolute;
        width:100%;height:100%;
        background: rgba(0,0,0,.6);
    }
    .smallpics ul li.cur::before{ background: rgba(0,0,0,0);}
    .huoche{
        position:relative;left:0px;
        width:888888px;
        transition:all 0.4s;
    }
    .navs{width:320px;}
    .navs li{
        float:left;margin-right:4px;
        width:32%;height:6px;
        background:orange;
        cursor: pointer;
    }
    .navs li.cur{background: red;}
</style>