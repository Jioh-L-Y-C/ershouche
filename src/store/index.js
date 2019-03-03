import Vue from "vue"
import Vuex from "vuex"
import createLogger from "vuex/dist/logger"

import picshowState from "./picshow/state"
import picshowMutations from "./picshow/mutations"
import picshowActions from "./picshow/actions"
import picshowGetters from "./picshow/getters"

import carlistState from "./carlist/state"
import carlistMutations from "./carlist/mutations"
import carlistActions from "./carlist/actions"
import carlistGetters from "./carlist/getters"

import usersState from "./users/state"
import usersMutations from "./users/mutations"
import usersActions from "./users/actions"
import usersGetters from "./users/getters"

import loginState from "./login/state"
import loginMutations from "./login/mutations"
import loginActions from "./login/actions"
import loginGetters from "./login/getters"


Vue.use(Vuex)
// 全局数据
const store = new Vuex.Store({
    state:{
        picshowState,
        carlistState,
        usersState,
        loginState
    },
    mutations:{
        ...picshowMutations,
        ...carlistMutations,
        ...usersMutations,
        ...loginMutations
    },
    actions:{
        ...picshowActions,
        ...carlistActions,
        ...usersActions,
        ...loginActions
    },
    getters:{
        ...picshowGetters,
        ...carlistGetters,
        ...usersGetters,
        ...loginGetters
    },
    plugins: [createLogger()]
})

export default store;