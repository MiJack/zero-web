<template>
    <div>
        <form @submit.prevent="submit">
            用户名： <input name="user"> <br/>
            密码： <input name="password" type="password"> <br/>
            <button type="submit">登录</button>
        </form>
        <router-link to="/user/register">注册</router-link>

    </div>


</template>

<script>

    import axios from 'axios'
    import {csrf_head} from "@/static/constans"


    export default {
        name: "UserLogin",
        methods: {
            submit: function () {
                axios.post("/api/user/login", {
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
