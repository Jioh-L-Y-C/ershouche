<template>
    <div>
        <CarFilter></CarFilter>
        <TableList></TableList>
        <br>
        <my-page></my-page>

        <PicShow v-if="$store.state.picshowState.isShowPic"></PicShow>
    </div>
</template>

<script>
    import PicShow from "../picshow/Index.vue"
    import TableList from "./TableList.vue"
    import Page from "./Page.vue"
    import CarFilter from "./CarFilter.vue"
    export default {
        created(){
            // 请求汽车数据
            this.$store.dispatch("carlist_init")
        },
        components:{
            TableList,
            'my-page':Page,
            CarFilter,
            PicShow
        }
    }
</script>

<style scoped>

</style>