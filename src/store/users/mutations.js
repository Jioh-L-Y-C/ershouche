export default {
    user_init(state, payload){
        state.usersState.userData = payload.data
        state.usersState.count = payload.count
    },
    changeUserPage(state, payload){
        state.usersState.page = payload.page
    },
    changeUserPageSize(state, payload){
        state.usersState.pagesize = payload.pagesize
    },
    // 关键词查询
    changeUserKeyword(state,payload){
        state.usersState.keyword = payload.keyword
    },
    changeLoding(state,payload){
        console.log(payload)
            state.usersState.loding=payload.l
    }
}