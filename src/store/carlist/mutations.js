export default {
    changeResults(state,payload){
        state.carlistState.results = payload.results
        state.carlistState.count = payload.count
    },
    changeSort(state,payload){
        state.carlistState.sortby = payload.sortby
        state.carlistState.sortdirection = payload.sortdirection
    },
    changePage(state, payload) {
        state.carlistState.page = payload.page
    },
    changePageSize(state, payload) {
        state.carlistState.pagesize = payload.pagesize
    },
    changeFilters(state, payload){
        // 如果相等，k不改，只改v
        state.carlistState.carFilter = state.carlistState.carFilter.map(item=>item.k == payload.k ? {...item, v:payload.v} :item )
    }
}