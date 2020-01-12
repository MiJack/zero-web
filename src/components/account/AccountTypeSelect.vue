<template>
    <div>
        <ul style="float: left">
            <li class="select">
                <input name="accountType" type="radio"> 支付宝
            </li>
            <li class="select">
                <input name="accountType" type="radio"> 支付宝
            </li>
            <li class="select">
                <input name="accountType" type="radio"> 支付宝<br/>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from "axios";
    import {api_head} from "@/static/constans";

    export default {
        name: "AccountTypeSelect",
        mounted: function () {
            axios.get('/api/account/type/list', {
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
                        alert("获取数据异常")
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

    .select {
        float: left;
        list-style-type: none;
        text-decoration: none;
    }
</style>
