<template>
    <div class="more" ref="more">
        <h3>更多{{info.brand}} {{info.series}}供您选择</h3>
        <div class="moreCar" ref="moreCar">
            <ul>
                <li v-for="i in carlike" @click="changeId(i.id)">
                   {{i.brand}} {{i.series}} {{new Date(i.buydate).getFullYear()}}年
                   <!-- {{i.km}}万公里  -->
                   {{i.displacement}}排量 {{i.price}}万 {{i.color}}色
                </li> 
            </ul>
            <div class="bar" ref="bar"><b ref="move"></b></div>
        </div>
    </div>
</template>
<script>
    export default {
        computed:{
            info(){
                return this.$store.state.picshowState.info;
            },
            carlike(){
                return this.$store.state.picshowState.carlike;
            }
        },
        methods: {
            changeId(id){
                this.$store.dispatch('changeId',{id})
            }
        }
    }
</script>
<style scoped>
    .more h3{line-height: 35px;}
    .moreCar{
        position:relative;width: 92%;
        background:rgba(255,255,255,.2);
    }
    .moreCar ul{padding-left: 5px;}
    .moreCar li{line-height: 28px;cursor: pointer;}
    .bar{
        position:absolute;right:0;top:0;
        width:10px;height:100%;
        background:white;
    }
    .bar b{
        position:absolute;
        width:10px;height:40px;
        background:orange;
    }
</style>