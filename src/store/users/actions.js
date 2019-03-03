async function load(commit, state){
    var page = state.usersState.page
    var pagesize = state.usersState.pagesize
    var sortby = state.usersState.sortby
    var sortdirection = state.usersState.sortdirection
    var keyword = state.usersState.keyword
    // 请求用户接口的数据
    var { count, data } = await fetch(`/api/users?page=${page}&pagesize=${pagesize}&sortby=${sortby}&sortdirection=${sortdirection}&keyword=${keyword}`).then(data => data.json())
    // 触发mutations
    commit("user_init", { count, data })
}

export default {
    async user_init({ commit,  state}){
        await load(commit, state)
    },

    async changeUserPage({ commit, state }, {page}) {
        // 触发mutations
        commit("changeUserPage", { page })
        
        await load(commit, state)
    },

    async changeUserPageSize({ commit, state }, { pagesize }) {
        // 触发mutations
        commit("changeUserPageSize", { pagesize })

        await load(commit, state)
    },

    // 关键词
    async changeUserKeyword({ commit, state }, { keyword }) {
        // 触发mutations
        commit("changeUserPage", { page:1 })
        commit("changeUserKeyword", { keyword })

        await load(commit, state)
    },
    changeLoding({commit},l){
        console.log(l)
        commit('changeLoding',l)
    }
}