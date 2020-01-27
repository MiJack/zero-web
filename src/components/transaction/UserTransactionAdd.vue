<template>
    <div>
        <form>
            <span>选择账户</span>
            <AccountSelect/>
            <br/>
            <br/>
            <span>项目名称</span><input v-model="name"> <br/>
            <span>项目备注</span><input v-model="mark"> <br/>
            <span>金额</span>
            <CurrencySelect/>
            <input v-model="money"><br/>
            <button type="submit">提交</button>
        </form>
    </div>
</template>

<script>
    import AccountSelect from "@/components/account/AccountSelect";
    import CurrencySelect from "@/components/transaction/CurrencySelect";

    export default {
        name: "UserTransactionAdd",
        components: {CurrencySelect, AccountSelect},
        data: function () {
            return {
                name: null,
                mark: null,
                money: null
            }
        }
    }
</script>

<style scoped>

</style>
