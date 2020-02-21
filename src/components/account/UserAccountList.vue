<template>
    <div>
        <a-table :dataSource="accounts">
            <a-table-column title="id" dataIndex="id" key="id"/>
            <a-table-column title="账号名称" dataIndex="title" key="title"/>
            <a-table-column title="账户类型" key="accountType" dataIndex="accountType">
                <template slot-scope="accountType">
                    <a-row slot="accountType">
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
                </template>
            </a-table-column>

            <a-table-column title="操作" key="accountOp">
                <template slot-scope="record">
                    <span>
                        <a-button type="link" :href="'/user/account/'+record.id+'/info'">查看交易</a-button>
                        <a-button type="danger">注销账号</a-button>
                    </span>
                </template>
            </a-table-column>
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
    const data = [
        {
            key: '1',
            firstName: 'John',
            lastName: 'Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            firstName: 'Jim',
            lastName: 'Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            firstName: 'Joe',
            lastName: 'Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
    export default {
        name: "UserAccountList",
        data: function () {
            return {
                accounts: [],
                columns,
                data
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
