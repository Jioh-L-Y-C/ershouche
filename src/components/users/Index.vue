<template>
    <div class="users">
        <Row v-if="$store.state.usersState.loding ">
            <Spin size="large"></Spin>
        </Row> 
        <Row>
            <Col span="2">查询：</Col>
            <Col span="12">
                <Input placeholder="请输入姓名或手机号查询" v-model="keyword"></Input>
                <b>共{{$store.state.usersState.count}} 条信息</b>
            </Col>
        </Row>

        <Table :columns="col" :data="$store.state.usersState.userData"></Table>

        <Page :total="$store.state.usersState.count" show-total show-elevator show-sizer 
             :current="$store.state.usersState.page"
             :page-size="$store.state.usersState.pagesize"
             :page-size-opts="[5,10,20,50,100]"
             @on-change="changePage"
             @on-page-size-change="changePageSize"
        />
    </div>
</template>

<script>
    export default {
        beforeCreate(){
            this.$store.dispatch('changeLoding',{l:true})
        },
        created(){
            this.$store.dispatch("user_init")
        },
        mounted(){
            this.$store.dispatch('changeLoding',{l:false})
        },
        data(){
            // 表格的列
            return {
                col:[
                    {title: '编号', key: 'id'},
                    {title: '姓名', key: 'name'},
                    {title: '年龄', key: 'age'},
                    {title: '电话', key: 'tel'}
                ]
            }
        },
        computed:{
            keyword:{
                get(){
                    return this.$store.state.usersState.keyword
                },
                set(v){
                    //先分空格
                    var keyword = v.replace(/\s/g,",")
                    this.$store.dispatch("changeUserKeyword", {keyword})
                }
            }
        },
        methods: {
            // 页面跳转
            changePage(page){
                this.$store.dispatch("changeUserPage", {page})
            },
            // 每页显示数量
            changePageSize(pagesize){
                this.$store.dispatch("changeUserPageSize", {pagesize})
            }
        }
    }
</script>

<style scoped>
.users{
    padding:20px;
}
</style>