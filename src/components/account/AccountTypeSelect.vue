<template>
    <div>
        <ul style="float: left">
            <a-select class="account-type-select" @change="handleAccountTypeChange" v-model="selectAccountType">
                <a-select-option v-bind:value="accountType.id" :key="index" v-for="(accountType,index) in accountTypes"
                                 firstActiveValue="true">
                    <img v-bind:src="accountType.iconUrl" class="icon"/>
                    {{accountType.name}}
                </a-select-option>
            </a-select>

        </ul>
    </div>
</template>

<script>
    import axios from "axios";
    import {api_head} from "@/static/constans";

    export default {
        name: "AccountTypeSelect",
        data: function () {
            return {
                accountTypes: [],
                selectAccountType: null
            }
        },
        methods: {
            getSelectAccountType: function () {
                return this.selectAccountType;
            },
            handleAccountTypeChange: function () {

            }
        },
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
                    this.accountTypes = data
                }).catch(reason => {
                alert(reason);
            })
        }
    }
</script>

<style scoped>
    .account-type-select {
        width: 300px;
    }

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
