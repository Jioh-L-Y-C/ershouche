<template>
    <div class="carFilter">
        <Row>
            <Col span="2">颜色：</Col>
            <Col span="22">
                <CheckboxGroup v-model="color">
                    <Checkbox label="红"></Checkbox>
                    <Checkbox label="黄"></Checkbox>
                    <Checkbox label="蓝"></Checkbox>
                    <Checkbox label="绿"></Checkbox>
                    <Checkbox label="黑"></Checkbox>
                    <Checkbox label="白"></Checkbox>
                    <Checkbox label="银"></Checkbox>
                    <Checkbox label="灰"></Checkbox>
                    <Checkbox label="橙"></Checkbox>
                    <Checkbox label="紫"></Checkbox>
                    <Checkbox label="银灰"></Checkbox>
                    <Checkbox label="香槟"></Checkbox>
                    <Checkbox label="咖啡"></Checkbox>
                </CheckboxGroup>
            </Col>
        </Row>

        <Row>
            <Col span="2">品牌：</Col>
            <Col span="22">
                <CheckboxGroup v-model="brand">
                    <Checkbox label="大众"></Checkbox>
                    <Checkbox label="宝马"></Checkbox>
                    <Checkbox label="奔驰"></Checkbox>
                    <Checkbox label="奥迪"></Checkbox>
                    <Checkbox label="现代"></Checkbox>
                    <Checkbox label="日产"></Checkbox>
                    <Checkbox label="路虎"></Checkbox>
                    <Checkbox label="本田"></Checkbox>
                    <Checkbox label="丰田"></Checkbox>
                    <Checkbox label="捷豹"></Checkbox>
                    <Checkbox label="标致"></Checkbox>
                    <Checkbox label="五菱"></Checkbox>
                    <Checkbox label="雪佛兰"></Checkbox>
                    <Checkbox label="特斯拉"></Checkbox>
                    <Checkbox label="MINI"></Checkbox>
                </CheckboxGroup>
            </Col>
        </Row>

        <Row>
            <Col span="2">级别：</Col>
            <Col span="22">
                <CheckboxGroup v-model="type">
                    <Checkbox label="经济轿车"></Checkbox>
                    <Checkbox label="中档轿车"></Checkbox>
                    <Checkbox label="高档轿车"></Checkbox>
                    <Checkbox label="中型SUV"></Checkbox>
                    <Checkbox label="大型SUV"></Checkbox>
                    <Checkbox label="跑车"></Checkbox>
                    <Checkbox label="面包车"></Checkbox>
                </CheckboxGroup>
            </Col>
        </Row>

        <Row>
            <Col span="2">环保：</Col>
            <Col span="22">
                <CheckboxGroup v-model="environmental">
                    <Checkbox label="国一"></Checkbox>
                    <Checkbox label="国二"></Checkbox>
                    <Checkbox label="国三"></Checkbox>
                    <Checkbox label="国四"></Checkbox>
                    <Checkbox label="国五"></Checkbox>
                    <Checkbox label="国六"></Checkbox>
                </CheckboxGroup>
            </Col>
        </Row>

        <Row>
            <Col span="2">排量：</Col>
            <Col span="22">
                <CheckboxGroup v-model="displacement">
                    <Checkbox label="1.0L"></Checkbox>
                    <Checkbox label="1.2L"></Checkbox>
                    <Checkbox label="1.6L"></Checkbox>
                    <Checkbox label="1.6T"></Checkbox>
                    <Checkbox label="2.0L"></Checkbox>
                    <Checkbox label="2.0T"></Checkbox>
                    <Checkbox label="5.0L"></Checkbox>
                </CheckboxGroup>
            </Col>
        </Row>

        <Row>
            <Col span="2">能源：</Col>
            <Col span="22">
                <CheckboxGroup v-model="fuel">
                    <Checkbox label="柴油车"></Checkbox>
                    <Checkbox label="汽油车"></Checkbox>
                    <Checkbox label="纯电动"></Checkbox>
                    <Checkbox label="油电混合"></Checkbox>
                </CheckboxGroup>
            </Col>
        </Row>

        <Row>
            <Col span="2">变速箱：</Col>
            <Col span="22">
                <CheckboxGroup v-model="gearbox">
                    <Checkbox label="手动挡"></Checkbox>
                    <Checkbox label="自动挡"></Checkbox>
                    <Checkbox label="手自一体"></Checkbox>
                </CheckboxGroup>
            </Col>
        </Row>

        <Row>
            <Col span="2">价格：</Col>
            <Col span="22">
                <Slider range v-model="price"></Slider>
                <Button type="info" @click="changePrice([0,5])">5万以内</Button>
                <Button type="info" @click="changePrice([5,10])">5万~10万</Button>
                <Button type="info" @click="changePrice([10,30])">10万~30万</Button>
                <Button type="info" @click="changePrice([30,100])">30万以上</Button>
            </Col>
        </Row>

        <Row>
            <Col span="2">公里：</Col>
            <Col span="22">
                <Slider range v-model="km"></Slider>
                <Button type="info" @click="changeKm([0,5])">5万以内</Button>
                <Button type="info" @click="changeKm([5,10])">5万~10万</Button>
                <Button type="info" @click="changeKm([10,30])">10万~30万</Button>
                <Button type="info" @click="changeKm([30,100])">30万以上</Button>
            </Col>
        </Row>

        <br>
        <Row>
            <Col>
                <b>根据条件共筛选出：{{$store.state.carlistState.count}}条信息，</b>
                <b>当前在第：{{$store.state.carlistState.page}}页</b>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                // color:["白"]
            }
        },
        computed:{
            color:{
               get(){
                   return this.$store.state.carlistState.carFilter.filter(i=>i.k == "color")[0].v
               },
               set(v){
                   this.$store.dispatch("changeFilters", {k:"color", v})
               }
            },
            brand:{  
                get(){
                    return this.$store.state.carlistState.carFilter.filter(i=>i.k == "brand")[0].v
                },
                set(v){
                    this.$store.dispatch("changeFilters", {k:"brand", v})
                }
            },
            type:{  
                get(){
                    return this.$store.state.carlistState.carFilter.filter(i=>i.k == "type")[0].v
                },
                set(v){
                    this.$store.dispatch("changeFilters", {k:"type", v})
                }
            },
            brand:{  
                get(){
                    return this.$store.state.carlistState.carFilter.filter(i=>i.k == "brand")[0].v
                },
                set(v){
                    this.$store.dispatch("changeFilters", {k:"brand", v})
                }
            },
            gearbox:{  
                get(){
                    return this.$store.state.carlistState.carFilter.filter(i=>i.k == "gearbox")[0].v
                },
                set(v){
                    this.$store.dispatch("changeFilters", {k:"gearbox", v})
                }
            },
            displacement:{  
                get(){
                    return this.$store.state.carlistState.carFilter.filter(i=>i.k == "displacement")[0].v
                },
                set(v){
                    this.$store.dispatch("changeFilters", {k:"displacement", v})
                }
            },
            fuel:{  
                get(){
                    return this.$store.state.carlistState.carFilter.filter(i=>i.k == "fuel")[0].v
                },
                set(v){
                    this.$store.dispatch("changeFilters", {k:"fuel", v})
                }
            },
            environmental:{  
                get(){
                    return this.$store.state.carlistState.carFilter.filter(i=>i.k == "environmental")[0].v
                },
                set(v){
                    this.$store.dispatch("changeFilters", {k:"environmental", v})
                }
            },
            price:{  
                get(){
                    return this.$store.state.carlistState.carFilter.filter(i=>i.k == "price")[0].v
                },
                set(v){
                    this.$store.dispatch("changeFilters", {k:"price", v})
                }
            },
            km:{  
                get(){
                    return this.$store.state.carlistState.carFilter.filter(i=>i.k == "km")[0].v
                },
                set(v){
                    var v = v.map(item=>item * 10000)
                    this.$store.dispatch("changeFilters", {k:"km", v})
                }
            }
        },
        methods:{
            changePrice(v){
                this.$store.dispatch("changeFilters", {k:"price", v})
            },
            changeKm(v){
                var v = v.map(item=>item * 10000)
                console.log(v)
                this.$store.dispatch("changeFilters", {k:"km", v})
            }
            // 发出修改（筛选）请求，并且附带参数k和v传递过去
            // changeColor(v){
            //     this.$store.dispatch("changeFilters", {k:"color", v})
            // },
            // changeBrand(v){
            //     this.$store.dispatch("changeFilters", {k:"brand", v})
            // }
        },
        // watch:{
        //     color(v){
        //         this.$store.dispatch("changeFilters", {k:"color", v})
        //     }
        // }
    }
</script>
<style scoped>
    .carFilter{padding:20px;font-size:16px;font-weight: bold;}
    .carFilter .ivu-row{margin-bottom:5px;}
    .carFilter .ivu-checkbox-wrapper{font-size:14px;}
</style>