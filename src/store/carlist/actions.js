async function load(commit, { carlistState: { page, pagesize, sortby, sortdirection, carFilter}}) {
    // &color=["红","蓝"]
    // console.log(carFilter[0].k, carFilter[0].v)
    var str = "";
    for (var i = 0; i < carFilter.length; i++) {
        if (carFilter[i].v.length != 0) {
            str += "&" + carFilter[i].k + "=" + JSON.stringify(carFilter[i].v)
        }
    }

    // 根据state中的默认参数进行请求数据
    const { count, results } = await fetch(`/api/cars?page=${page}&pagesize=${pagesize}&sortby=${sortby}&sortdirection=${sortdirection}${str}`).then(data=>data.json())

    // 触发mutations
    commit("changeResults", { results, count})
}

export default {
    async carlist_init({commit,state}){
        await load(commit, state)
    },
    // 排序
    async changeSort({ commit, state }, { sortby, sortdirection}) {
        commit("changeSort", { sortby, sortdirection })
        await load(commit, state)
    },
    // 切换页码
    async changePage({ commit, state }, { page }) {
        commit("changePage", { page }) //改变page页码
        await load(commit, state)
    },
    async changePageSize({ commit, state }, { pagesize }) {
        commit("changePageSize", { pagesize }) //改变pagesize
        await load(commit, state)
    },
    async changeFilters({ commit, state }, { k,v }) {
        commit("changeFilters", { k, v }) //改变carFilters
        commit("changePage", { page:1 }) //改变pagesize
        await load(commit, state)
    },
}