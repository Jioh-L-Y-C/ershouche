<template>
    <div class="login_page">
        <div class="login_box">
            {{formData}}
            <Form :model="formData">
                <FormItem prop="user">
                    <Input type="text" v-model="formData.username" placeholder="Username">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" v-model="formData.password" placeholder="Password">
                        <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" :disabled="!(formData.username && formData.password)" @click="submitForm()">
                        登录
                    </Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>
<script>
    import axios from "axios";
    export default {
        data () {
            return {
                formData: {
                    username:'',
                    password:''
                }
            }
        },
        methods: {
            submitForm(){
                // 发起登录请求，把账号密码传递给服务端验证
                axios.post("/api/login", this.formData).then(res=>{
                    if(res.data.result == 1){
                        this.$router.push("/")
                    }else{
                        alert("登录失败，请检查用户名和密码！")
                    }
                })
            }
        }
    }
</script>
<style scoped>
    .login_page{
        position: fixed;
        top:0;left:0;z-index: 999;
        width: 100%;height: 100%;
        background: #333;
    }
    .login_box{
        position: absolute;
        width: 500px;height: 300px;
        background: #fff;
        top:0;left:0;right:0;bottom:0;
        margin:auto;
        border-radius: 10px;
        box-sizing: border-box;
        padding:50px;
    }
</style>