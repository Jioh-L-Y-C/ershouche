<template>
    <div>
        <h1>网站首页</h1>
        <h2>梁永灿的 Vue作品</h2>
        <div>
            <p>面试官，你好，我在工作中自学Vue，下面是我的作品</p>
            <ul>
                <li>
                     <Spin></Spin>
                    <router-link to="/carlist">1. 汽车列表页面</router-link>
                    <small>使用了VUeX,iview-ui，练习v-model与vuex双向数据绑定,实现分页排序功能,筛选功能</small>
                     <small> 点击汽车图片可以查看汽车详情</small>      
                </li>
                <li>
                     <Spin></Spin>
                    <router-link to="/users">2. 用户查询中心</router-link>
                    <small>实现了模糊查询，前后端分离</small>
                </li>
                <li>
                     <Spin></Spin>
                    <router-link to="/login">3. 登录功能</router-link>
                    <small>用户名:admin ,密码:a123456 (使用Vue-router全局导航守卫,路由添加mate属性,实现了拦截访问,身份验证,普通用户和管理员权限)</small>
                    <p> 普通用户:用户名:xiaoming ,密码:a123456  普通用户没有用户中心权限</p>
                   
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        created(){
            this.$store.dispatch("fetchUserInfo")
        }
    }
</script>

<style scoped>
    h1,h2{margin: 10px;}
    h1{text-align: center}
    p{font-size:18px;margin:20px;}
    ul{list-style: none;padding:20px;}
    li{font-size:22px;line-height: 40px;}
</style>