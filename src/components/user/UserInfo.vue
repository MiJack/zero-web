<template>
    <div>
        <h1>用户信息</h1>
        <a-card>
            <h2>基本信息</h2>
            <UserProfile/>
        </a-card>
        <a-card>

            <h2>账户管理</h2>
            <a-button type="link" href="/user/account/add">添加账户</a-button>
            <UserAccountList/>
        </a-card>
        <a-card>

            <h2>消费管理</h2>
            <TransactionList/>
            <a-button type="link" href="/user/transaction/add">添加交易</a-button>
        </a-card>
    </div>
</template>

<script>
    import UserAccountList from "@/components/account/UserAccountList";
    import UserProfile from "@/components/user/UserProfile";
    import TransactionList from "@/components/transaction/TransactionList";

    export default {
        components: {UserProfile, UserAccountList, TransactionList},
        props: ['id'],
        name: "UserInfo",
        data() {
            return {info: {id: null, name: null, email: null}}
        }
    }
</script>

<style>
    .icon {
        /*width: 0px;*/
        height: 24px;
        align-content: center;
    }
</style>
