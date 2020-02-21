<template>
    <div>
        <DateSelector/>
        <a-table :dataSource="cost">
            <a-table-column title="id" dataIndex="id" key="id"/>
            <a-table-column title="开销名称" dataIndex="name" key="name"/>
            <a-table-column title="资金变动类型" dataIndex="type" key="type"/>
            <a-table-column title="开销花费" dataIndex="cost" key="cost">
                <!--<template slot-scope="accountType">
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
                </template>-->
            </a-table-column>

            <a-table-column title="操作" dataIndex="happenTime" key="happenTime">
              <!--  <template slot-scope="record">
                    <span>
                        <a-button type="link" :href="'/user/account/'+record.id+'/info'">查看交易</a-button>
                        <a-button type="danger">注销账号</a-button>
                    </span>
                </template>-->
            </a-table-column>
        </a-table>
    </div>
</template>

<script>
    import DateSelector from "@/components/common/DateSelector";
    export default {
        name: "AccountCostList",
        components: {DateSelector},
        data: function () {
            return {
                cost: [
                    {
                        id: 1,
                        name: "开销名称",
                        type: "资金变动类型",
                        cost: "开销花费",
                        happenTime: "2020年",
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
