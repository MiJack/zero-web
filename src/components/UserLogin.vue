<template>
    <div>
        <form method="post" action="/api/user/login">
            用户名： <input name="user"> <br/>
            密码： <input name="password" type="password"> <br/>
            <button type="submit">登录</button>
        </form>
        <router-link to="/user/register">注册</router-link>

    </div>


</template>

<script>
    export default {
        name: "UserLogin"
    }
</script>

<style scoped>

</style>
