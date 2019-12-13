<template>
    <div>
        <form method="post" action="/api/user/register">
            用户名： <input name="user"> <br/>
            邮箱：<input name="email"> <br/>
            密码： <input name="password" type="password"> <br/>
            <button type="submit">注册</button>
        </form>
        <router-link to="/user/login">登录</router-link>

    </div>

</template>

<script>
    export default {
        name: "UserRegister",
        method: {

        }
    }
</script>

<style scoped>

</style>
