<template>
    <div>
        首页
        <ul>
            <li>
                <router-link to="/user/register">注册</router-link>
            </li>
            <li>
                <router-link to="/user/login">登录</router-link>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>
