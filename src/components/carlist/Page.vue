<template>
    <div>
        <Page :total="$store.state.carlistState.count" show-total show-elevator show-sizer 
             :current="$store.state.carlistState.page"
             :page-size="$store.state.carlistState.pagesize"
             :page-size-opts="[5,10,20,50,100]"
             @on-change="changePage"
             @on-page-size-change="changePageSize"
        />
        <br>
    </div>
</template>

<script>
    export default {
        methods:{
            // 页面跳转
            changePage(page){
                this.$store.dispatch("changePage", {page})
            },
            // 每页显示数量
            changePageSize(pagesize){
                this.$store.dispatch("changePageSize", {pagesize})
            }
        }
    }
</script>

<style scoped>

</style>