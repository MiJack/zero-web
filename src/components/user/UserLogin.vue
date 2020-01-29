<template>
    <div id="components-form-demo-normal-login">

        <a-form id="components-form-demo-normal-login" class="login-form" @submit="handleSubmit">
            <a-form-item>
                <a-input v-model="userEmail" placeholder="User Email">
                    <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-input v-model="userPassword" type="password" placeholder="Password">
                    <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-checkbox v-model="remember">Remember me</a-checkbox>
                <a class="login-form-forgot" href="/user/forgotPwd">
                    Forgot password
                </a>
                <a-button type="primary" html-type="submit" class="login-form-button">
                    Log in
                </a-button>
                Or
                <router-link to="/user/register">register now!</router-link>

            </a-form-item>
        </a-form>
    </div>
</template>

<script>

    import axios from 'axios'
    import {csrf_head, api_head} from "@/static/constans"

    export default {
        name: "UserLogin",
        data: function () {
            return {
                userEmail: null,
                remember: false,
                userPassword: null
            }
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                axios.post("/api/user/login", {
                    loginType: 1,
                    identifiableValue: this.userEmail,
                    password: this.userPassword,
                    remember: this.remember
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

    #components-form-demo-normal-login {
        align-content: center;
    }

    #components-form-demo-normal-login .login-form {
        max-width: 300px;
    }

    #components-form-demo-normal-login .login-form-forgot {
        float: right;
    }

    #components-form-demo-normal-login .login-form-button {
        width: 100%;
    }
</style>
