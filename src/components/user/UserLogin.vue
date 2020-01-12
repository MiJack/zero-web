<template>
    <div>
        <form @submit.prevent="submit">
            邮箱： <input name="user" v-model="user_email"> <br/>
            密码： <input name="password" type="password" v-model="userPassword"> <br/>
            <button type="submit">登录</button>
        </form>
        <router-link to="/user/register">注册</router-link>
    </div>


</template>

<script>

    import axios from 'axios'
    import {csrf_head,api_head} from "@/static/constans"

    export default {
        name: "UserLogin",
        data: function () {
            return {
                user_email: null,
                userPassword: null
            }
        },
        methods: {
            submit: function () {
                axios.post("/api/user/login", {
                    loginType: 1,
                    identifiableValue: this.user_email,
                    password: this.userPassword
                }, {
                    headers: {
                        "X-XSRF-TOKEN": this.$cookies.get(csrf_head)
                    }
                })
                    .then(response => {
                        let result = response.data;
                        let code = result.code;
                        let message = result.message;
                        if (code !== 200) {
                            alert(message);
                            return
                        }
                        this.$cookies.set(api_head, result.data.apiToken.token)
                        window.location = '/user/info'
                    })
            }
        }, mounted() {
            axios.get("/api/web/csrf", {
                headers: {'X-Requested-With': 'XMLHttpRequest'}
            })
                .then(response => {
                    let result = response.data;
                    let code = result.code;
                    let message = result.message;
                    // eslint-disable-next-line no-unused-vars
                    let data = result.data;
                    if (code !== 200) {
                        alert(message);
                        return
                    }
                    this.info = result;
                    this.$cookies.set(csrf_head, data.token)
                })
        }
    }

</script>

<style scoped>

</style>
