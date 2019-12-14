<template>
    <div>
        <form method="post" action="/api/user/register" @submit.prevent="submit($event)">
            用户： <input id="user" name="user"> <br/>
            邮箱： <input id="email" name="email"> <br/>
            密码： <input id="password" name="password" type="password"> <br/>
            <button type="submit">注册</button>
        </form>
        <router-link to="/user/login">登录</router-link>

    </div>

</template>

<script>
    export default {
        name: "UserRegister",
        method: {
        //     submit: function (event) {
        //
        //         // var formData = new FormData(event.target);
        //
        //
        //     }
        }
    }
</script>

<style scoped>

</style>
