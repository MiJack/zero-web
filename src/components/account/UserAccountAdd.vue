<template>
    <div>
      <!--  <form @submit.prevent="submit">
            <div class="item">
                <span style="float: left">账号类型：</span>

                <AccountTypeSelect ref="accountTypeSelect"/>
            </div>
            <div class="item">
                <span>  账号名称：</span>
                <input name="accountName" v-model="accountName"> <br/>
            </div>
            <div class="item">
                <span>   账号编号：</span>
                <input name="accountNumber" v-model="accountNumber"/> <br/>
            </div>
            <button type="submit">提交</button>
        </form>-->
        <a-form @submit="handleSubmit" layout="horizontal">

            <a-form-item label="账号类型">

                <AccountTypeSelect ref="accountTypeSelect"/>
            </a-form-item>

            <a-form-item label="账号名称">
                <a-input name="accountName" v-model="accountName"/>
            </a-form-item>

            <a-form-item label="账号编号">
                <a-input name="accountNumber" v-model="accountNumber"/>
            </a-form-item>

            <a-form-item>
                <a-button type="primary"  html-type="submit" >提交</a-button>
            </a-form-item>
        </a-form>


    </div>
</template>

<script>
    import AccountTypeSelect from "@/components/account/AccountTypeSelect";
    import axios from "axios";
    import {api_head, csrf_head} from "@/static/constans";

    export default {
        name: "UserAccountAdd",
        components: {AccountTypeSelect},
        data: function () {
            return {
                accountNumber: null,
                accountName: null
            }
        },
        methods: {
            handleSubmit: function () {
                const accountType = this.$refs.accountTypeSelect.getSelectAccountType();
                axios.post("/api/user/account/create", {
                    accountType: accountType,
                    accountNumber: this.accountNumber,
                    accountName: this.accountName
                }, {
                    headers: {
                        "X-XSRF-TOKEN": this.$cookies.get(csrf_head),
                        "X-ZERO-API-TOKEN": this.$cookies.get(api_head)
                    }
                })
                    .then(response => {
                        let result = response.data;
                        let code = result.code;
                        let message = result.message;
                        if (code !== 200) {
                            alert(message);
                            return
                        }
                        // this.$cookies.set(api_head, result.data.apiToken.token);
                    })
            }
        },
        mounted() {
            axios.get("/api/web/csrf", {
                headers: {'X-Requested-With': 'XMLHttpRequest'}
            })
                .then(response => {
                    let result = response.data;
                    let code = result.code;
                    let message = result.message;
                    // eslint-disable-next-line no-unused-vars
                    let data = result.data;
                    if (code !== 200) {
                        alert(message);
                        return
                    }
                    this.info = result;
                    this.$cookies.set(csrf_head, data.token)
                })
        }
    }
</script>

<style scoped>

    ul {
        margin: 0;
    }

    .item {
        display: block;
        clear: both;
    }
</style>
