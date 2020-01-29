<template>
    <div>

        <div id="components-form-demo-normal-login">

            <a-form class="login-form" @submit="submit">
                <a-form-item>
                    <a-input v-model="userName" placeholder="User Name">
                        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-input v-model="userEmail" placeholder="User Email">
                        <a-icon slot="prefix" type="mail" style="color: rgba(0,0,0,.25)"/>
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-input v-model="userPassword" type="password" placeholder="Password">
                        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" html-type="submit" class="login-form-button">注册</a-button>
                </a-form-item>
            </a-form>
        </div>

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
