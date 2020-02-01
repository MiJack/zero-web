<template>
    <div>

        <a-table
                :columns="columns"
                :rowKey="record => record.id"
                :dataSource="accounts"
        >
               <span slot="accountType" slot-scope="accountType">
                    <img v-bind:src="accountType.iconUrl" class="icon"/>
                    <span class="account-type-name">{{accountType.name}}</span>
                   <a-tooltip slot="suffix" v-bind:title="accountType.billingType">
                       <a-icon type="info-circle" style="color: rgba(0,0,0,.45)"/>
                   </a-tooltip>
                </span>
            <span slot="accountOp">
                <a-button type="link">查看交易</a-button>
                <a-button type="danger">删除账号</a-button>
            </span>

        </a-table>
    </div>
</template>

<script>
    import axios from "axios";
    import {api_head} from "@/static/constans";

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            width: '5%',
        },
        {
            title: '账号名称',
            dataIndex: 'title',
            width: '20%',
        },
        {
            title: '账号类型',
            dataIndex: 'accountType',
            scopedSlots: {customRender: 'accountType'},
        },
        {
            title: '操作',
            dataIndex: 'accountOp',
            scopedSlots: {customRender: 'accountOp'},
        },
    ];
    export default {
        name: "UserAccountList",
        data: function () {
            return {
                accounts: [],
                columns
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
