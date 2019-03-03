<template>
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed',zIndex:99, width: '100%'}">
                <Row>
                    <Col span="16">
                        <Menu mode="horizontal" theme="dark" active-name="/" @on-select="changeMenu">
                            <div class="layout-nav">
                                <MenuItem name="/" >
                                    <Icon type="ios-navigate"></Icon>
                                    首页
                                </MenuItem>
                                <MenuItem name="/carlist">
                                    <Icon type="ios-keypad"></Icon>
                                    汽车列表
                                </MenuItem>
                                <MenuItem name="/users" v-if="$store.state.loginState.type == 'manager'">
                                    <Icon type="ios-analytics"></Icon>
                                    用户中心
                                </MenuItem>
                                <MenuItem name="/login" v-if="!$store.state.loginState.login">
                                    <Icon type="ios-paper"></Icon>
                                    登录
                                </MenuItem>
                            </div>
                        </Menu>
                    </Col>
                    <Col span="8">
                        <div class="user">
                            欢迎您！{{$store.state.loginState.nickname}}，
                            您的身份为：{{$store.state.loginState.type}}
                            <a href="###"  @click="logout">退出</a>
                        </div>

                    </Col>
                </Row>
            </Header>
            <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
                <!-- <CarList></CarList> -->
                <!-- <Users></Users> -->
				<router-view></router-view>
            </Content>
            <Footer class="layout-footer-center">2011-2019 &copy;汽车销售平台</Footer>
        </Layout>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        methods:{
            changeMenu(name){
                this.$router.push(`${name}`)
            },
            // 退出
            logout(){
                axios.get("/api/logout").then(res=>{
                    this.$router.push("/login")
                })
            }
        }
    }
</script>

<style scoped>
    .user{color:#fff;}
	.ivu-menu-item-active{background: orange;}
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 820px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
    }
</style>