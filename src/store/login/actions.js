import axios from "axios"
export default {
    async fetchUserInfo({commit}){
        var { username, nickname, type, login} = await axios.get("/api/userinfo").then(res=>res.data)
        commit("fetchUserInfo", { username, nickname, type, login})
    }
}