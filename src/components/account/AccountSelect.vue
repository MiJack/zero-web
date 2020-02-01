<template>
    <div>
        <a-select v-model="selectAccount">
            <a-select-option v-bind:value="account.id" :key="index" v-for="(account,index) in accounts"
                             firstActiveValue="true">
                <img v-bind:src="account.accountType.iconUrl" class="icon"/>
                <span width="200px"></span>
                <span class="account-number">{{account.number}}</span>
            </a-select-option>
        </a-select>

    </div>
</template>

<script>
    import axios from "axios";
    import {api_head} from "@/static/constans";

    export default {
        name: "AccountSelect",
        data: function () {
            return {
                accounts: [],
                selectAccount: null
            }
        },
        methods: {
            getSelectAccount: function () {
                return this.selectAccount;
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
    .icon {
        /*width: 0px;*/
        height: 24px;
        align-content: center;
    }

    .select {
        float: left;
        list-style-type: none;
        text-decoration: none;
    }
</style>
