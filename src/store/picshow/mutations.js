export default {
    changeInfo(state, payload){
        // 将请求回来的数据赋值给state的info
        state.picshowState.info = payload.info
    },
    changeAlbum(state, payload){
        state.picshowState.album = payload.album
    },
    changeIdx(state, payload) {
        state.picshowState.idx = payload.idx
    },
    changeCarlike(state,payload){
        // 更多相似车
        state.picshowState.carlike = payload.results
    },
    changeId(state,paylaod){
        state.picshowState.id = paylaod.id
    },
    changeShowPic(state, paylaod){
        state.picshowState.isShowPic = paylaod.isShowPic
    }
}