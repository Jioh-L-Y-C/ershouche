export default {
    fetchUserInfo(state,payload){
        state.loginState.username = payload.username
        state.loginState.nickname = payload.nickname
        state.loginState.type = payload.type
        state.loginState.login = payload.login
    }
}