<template>
    <div>
        用户信息

        <p>id: {{id}}</p>
        <h1>info</h1>
        用户名： {{ info.name}}<br/>
        邮箱： {{ info.email }}<br/>


        <h1>账户管理</h1>
        账户列表
        <router-link to="/user/account/add">添加账户</router-link>

        <ul>
            <li>账户1</li>
            <li>账户2</li>
            <li>账户3</li>
            <li>账户4</li>
        </ul>
        分页
        <h1>消费管理</h1>
        消费记录列表
        <router-link to="/user/transaction/add">添加交易</router-link>

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
    import { api_head, host} from "@/static/constans";

    export default {
        props: ['id'],
        name: "UserInfo",
        data() {
            return {info: {name: null, email: null}}
        },
        mounted() {
            let url;
            if (this.id === undefined) {
                url = host + "/api/user/info";
            } else {

                url = host + "/api/users/" + this.id;
            }

            axios.get(url, {
                headers: {
                    "X-ZERO-API-TOKEN": this.$cookies.get(api_head)
                }
            })
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
                }).catch(reason => {
                alert(reason);
            })
        }
    }
</script>

<style scoped>

</style>
