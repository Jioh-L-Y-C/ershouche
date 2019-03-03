<template>
    <div>
        <Table :columns="col" :data="$store.state.carlistState.results" @on-sort-change="changeSort">
        </Table>
    </div>
</template>
<script>
    export default {
        methods: {
            changeSort(a){
                var sortdirection = a.order == "asc" ? 1 : -1
                this.$store.dispatch("changeSort", {sortby:a.key, sortdirection})
            },
            // changeShowPic(v){
            //     this.$store.dispatch("changeShowPic", {v: v.id})
            // }
        },
        data () {
            return {
                col: [
                    {title: '编号', key: 'id',width:90, sortable: 'custom' },
                    {title: '图片', key: 'images',
                        render(h, {row, col, index}){
                            return h({
                                data(){
                                    return {row}
                                },
                                template:"<img width='100' @click='changeShowPic(row)' :src='`/api/img_small/${row.id}/view/${row.images.view[0]}`' />",
                                methods:{
                                    changeShowPic(v){
                                        this.$store.dispatch("changeShowPic", {id: v.id})
                                    }
                                }
                            })
                        }
                    },
                    {title: '品牌', key: 'brand', width:80},
                    {title: '车系', key: 'series', width:90},
                    {title: '颜色', key: 'color', width:60},
                    {title: '级别', key: 'type', width:90},
                    {title: '价格', key: 'price',width:90, sortable: 'custom',
                        render(h, {row, col, index}){
                            return h({
                                template:`<div>${row.price}万</div>`
                            })
                        }
                    },
                    {title: '公里', key: 'km', width:110, sortable: 'custom',
                        render(h, {row, col, index}){
                            return h({
                                template:`<div>${row.km}公里</div>`
                            })
                        }
                    },
                    {title: '变速箱', key: 'gearbox',width:90},
                    {title: '动力', key: 'displacement',width:60},
                    {title: '环保', key: 'environmental',width:60},
                    {title: '能源', key: 'fuel' ,width:85},
                    {title: '购买时间', key: 'buydate',
                        render(h, {row, col, index}){
                            return h({
                                template:`<div>
                                    ${new Date(row.buydate).getFullYear()}年
                                    ${new Date(row.buydate).getMonth() + 1}月
                                    ${new Date(row.buydate).getDate()}日
                                </div>`
                            })
                        }
                    },
                    {title: '是否上牌', key: 'licence', width:60,
                        render(h, {row, col, index}){
                            return h({
                                template:`<div>
                                    <span v-if="${row.locality}">是</span>
                                    <span v-if="${!row.locality}">否</span>
                                </div>`
                            })
                        }
                    },
                    {title: '是否本地车', key: 'locality',width:75,
                        render(h, {row, col, index}){
                            return h({
                                template:`<div>
                                    <span v-if="${row.locality}">是</span>
                                    <span v-if="${!row.locality}">否</span>
                                </div>`
                            })
                        }
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>