async function load(commit, state, id) {
    // 异步请求用户的id出来信息（8080跨3000）
    var { info } = await fetch(`/api/cars/${id}`).then(data => data.json())
    var { results } = await fetch(`/api/carlike/${id}`).then(data => data.json())

    // 数据请求成功后，存储到state中
    commit("changeInfo", { info })
    commit("changeCarlike", { results })
}

export default {
    async init ({commit, state}){
        // 获取state中的出来id
        const id = state.picshowState.id
       
        await load(commit, state, id)
    },
    goNext({commit, state}){
        var _state = state.picshowState

        if (_state.idx < _state.info.images[_state.album].length-1){
            commit("changeIdx", {idx: _state.idx+1})
        }else{
            console.log(_state.album)
            commit("changeIdx", {idx:0})
            switch (_state.album){
                case "view":
                    commit('changeAlbum', {album:'inner'})
                    break;
                case "inner":
                    commit('changeAlbum', { album: 'engine' })
                    break;
                case "engine":
                    commit('changeAlbum', { album: 'more' })
                    break;
                case "more":
                    commit('changeAlbum', { album: 'view' })
                    break;
            }
        }
    },
    goPrev({ commit, state }){
        var _state = state.picshowState
        if (_state.idx > 0 ) {
            commit("changeIdx", { idx: _state.idx - 1 })
        } else {
            var arr = ['view', 'inner', 'engine', 'more']
            // 检查数组中是否存在某项，存在返回当前项的下标
            var index = arr.indexOf(_state.album);
            index = index <= 0 ? 3 : index - 1
            var nowAlbum = arr[index]; //选择数组中图集的类型
   
            commit("changeIdx", { idx: _state.info.images[nowAlbum].length - 1 })
            commit('changeAlbum', { album: nowAlbum })
        }
    },
    async changeId({commit,state}, {id}){
        await load(commit, state, id)

        commit("changeId", {id})
        // 图片编号归一
        commit("changeIdx", {idx:0})
        // 视图回到外观
        commit("changeAlbum", {album:'view'})
    },
    async changeShowPic({commit, state}, {id}){
        await load(commit, state, id)

        commit("changeId", { id })
        // 图片编号归一
        commit("changeIdx", { idx: 0 })
        // 视图回到外观
        commit("changeAlbum", { album: 'view' })
        // 显示大图
        commit("changeShowPic", {isShowPic:true})
    }
}