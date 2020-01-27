<template>
    <div>
        <ul>
            <li class="select" :key="index" v-for="(account,index) in accounts">
                <span class="account-id">{{account.id}}</span>
                <span class="account-title">{{account.title}}</span>
                <span>
                    <img v-bind:src="account.accountType.iconUrl" class="icon"/>
                    <span class="account-type-name">{{account.accountType.name}}</span>
                    <span class="account-type-billingType">{{account.accountType.billingType}}</span>
                </span>
                <span class="account-number">{{account.number}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from "axios";
    import {api_head} from "@/static/constans";

    export default {
        name: "UserAccountList",
        data: function () {
            return {
                accounts: []
            }
        },
        mounted: function () {
            axios.get('/api/user/account/list', {
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
                    this.accounts = data
                }).catch(reason => {
                alert(reason);
            })
        }
    }
</script>

<style scoped>

</style>
