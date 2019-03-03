import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

import Index from "../components/Index.vue"
import CarList from "../components/carlist/Index.vue"
import Users from "../components/users/Index.vue"
import Login from "../components/login/Login.vue"

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: "/", name: "首页", component: Index,
            meta: { needLogin: true, authority: ["manager", "user"] }
        },
        {
            path: "/carlist", name: "汽车列表", component: CarList,
            meta: { needLogin: true, authority: ["manager", "user"] }
        },
        {
            path: "/users", name: "用户中心", component: Users,
            meta: { needLogin: true, authority: ["manager"] }
        },
        { path: "/login", name: "登录", component: Login },
        { path: "*", redirect: "/" },
    ]
})

// 当用户切换路由的时候，执行这里的语句
router.beforeEach(async (to, from, next) => {
    // needLogin为真的路由，说明要登录才能访问
    if (to.meta.needLogin) {
        // 开始验证用户是否登录了
        console.log("本页面需要验证登录！")
        // 如果接口返回的不是true，则未登录
        var { login, type } = await axios.get("/api/checklogin").then(res => res.data)

        // 如果请求login的结果为真，说明登录了
        if (login) {
            console.log("你通过了登录验证，现在开始验证你的身份", to.meta.authority)
            if (to.meta.authority.includes(type)) {
                next(); //身份通过，放行
            } else {
                alert("普通用户无访问权限，请用管理员账号登录")
                router.push('/login')
            }
        } else {
            alert("没有通过验证，自动跳转到登录页面")
            router.push('/login')
        }
    } else {
        // 路由身上没有needLogin值，不需要验证登录的，直接放行
        next()
    }
})


export default router;