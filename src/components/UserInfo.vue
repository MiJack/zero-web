<template>
    <div>
        用户信息

        <p>id: {{id}}</p>
        <h1>info</h1>
        用户名： {{ info.name}}<br/>
        邮箱： {{ info.email }}<br/>


        <h1>账户管理</h1>
        账户列表
        <ul>
            <li>账户1</li>
            <li>账户2</li>
            <li>账户3</li>
            <li>账户4</li>
        </ul>
        分页
        <ul>
            <li>1</li>
            <li>...</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>...</li>
            <li>15</li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    import host from "@/static/constans";

    export default {
        props: ['id'],
        name: "UserInfo",
        data() {
            return {info: null}
        },
        mounted() {
            axios.get(host + "/api/user/" + this.id, {})
                .then(response => {
                    let result = response.data;
                    let code = result.code;
                    let message = result.message;
                    let data = result.data;
                    if (code === -200) {
                        alert("用户未找到")
                        return
                    }
                    if (code !== 200) {
                        alert(message);
                        return
                    }
                    this.info = {
                        name: data.name,
                        email: data.email
                    }
                })
        }
    }
</script>

<style scoped>

</style>
