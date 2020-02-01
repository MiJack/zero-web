<template>
    <div>
        <a-table
                :columns="columns"
                :rowKey="record => record.id"
                :dataSource="accounts"
        >
            <a-row slot="accountType" slot-scope="accountType">
                <a-col span="2">
                    <img v-bind:src="accountType.iconUrl" class="icon"/>
                </a-col>
                <a-col span="10">
                    <span class="account-type-name">{{accountType.name}}
                     <a-tooltip slot="suffix" v-bind:title="accountType.billingType">
                        <a-icon type="info-circle" style="color: rgba(0,0,0,.45)"/>
                    </a-tooltip>
                    </span>

                </a-col>
            </a-row>
            <a-row slot="accountOp" align="right">
                <a-button type="link">查看交易</a-button>
                <a-button type="danger">注销账号</a-button>
            </a-row>
            <a-row slot="lastTransactionTime">
                -
            </a-row>
            <a-row slot="accountAddTime">
                <a-col align="right">
                    2020年2月1日
                </a-col>
                <a-col align="right">
                    12:12:12
                </a-col>
            </a-row>

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
            width: '2%',
        },
        {
            title: '账号名称',
            dataIndex: 'title',
            width: '13%',
        },
        {
            title: '账号类型',
            dataIndex: 'accountType',
            scopedSlots: {customRender: 'accountType'},
            width: '40%',

        },
        {
            title: '最近交易时间',
            dataIndex: 'lastTransactionTime',
            scopedSlots: {customRender: 'lastTransactionTime'},
            width: '10%',
        },
        {
            title: '添加时间',
            dataIndex: 'accountAddTime',
            scopedSlots: {customRender: 'accountAddTime'},
            width: '10%',
        },
        {
            title: '操作',
            dataIndex: 'accountOp',
            scopedSlots: {customRender: 'accountOp'},
            width: '20%',
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
