<template>
    <div>
        <form @submit.prevent="submit">
            用户： <input v-model="userName"> <br/>
            邮箱： <input v-model="userEmail"> <br/>
            密码： <input v-model="userPassword" type="password"> <br/>
            <button type="submit">注册</button>
        </form>

        {{info}}

        <br/>
        <router-link to="/user/login">登录</router-link>

    </div>

</template>

<script>
    import axios from 'axios'
    import {csrf_head} from "@/static/constans"

    export default {
        name: "UserRegister",
        data: function () {
            return {
                userName: null,
                userEmail: null,
                userPassword: null,
                info: null
            }
        },
        methods: {
            submit: function () {
                axios.post("/api/user/register", {
                    name: this.userName,
                    email: this.userEmail,
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
                        }
                        this.info = result
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
