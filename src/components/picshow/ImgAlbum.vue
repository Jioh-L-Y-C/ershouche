<template>
    <div>
        <div class="album">
            <h2>{{info.brand}} {{info.series}} [{{info.id}}]</h2>
            <p>{{info.color}}色 {{info.km}}万公里 {{info.displacement}}售价{{info.price}}万</p>
            <ul class="albumList">
                <li @click="changeAlbum('view')" :class="{cur:album == 'view'}">
                    外观（{{info.images.view.length}}）
                </li>
                <li @click="changeAlbum('inner')" :class="{cur:album == 'inner'}">
                    内饰（{{info.images.inner.length}}）
                </li>
                <li @click="changeAlbum('engine')" :class="{cur:album == 'engine'}">
                    结构（{{info.images.engine.length}}）
                </li>
                <li @click="changeAlbum('more')" :class="{cur:album == 'more'}">
                    更多（{{info.images.more.length}}）
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        computed:{
            info(){
                return this.$store.state.picshowState.info;
            },
            album(){
                return this.$store.state.picshowState.album;
            }
        },
        methods:{
            changeAlbum(album){
                this.$store.commit('changeAlbum', {album})
                this.$store.commit('changeIdx', {idx:0})
            }
        }
    }
</script>
<style scoped>
    .album{margin:10px 0;}
    .albumList{overflow: hidden;}
    .album .albumList li{
        float:left;width:45%;height:50px;line-height: 50px;text-align: center;
        margin:0 5px 5px 0;background:gold;cursor: pointer;
    }
    .album .albumList li.cur{background:red;}
</style>