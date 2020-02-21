<template>
    <div>
        <a-form>
            <a-form-item label="项目名称">
                <a-input name="name" v-model="name"/>
            </a-form-item>
            <a-form-item label="项目备注">
                <a-input name="mark" v-model="mark"/>
            </a-form-item>
            <a-form-item label="选择账户">
                <AccountSelect/>
            </a-form-item>
            <a-form-item label="金额">
                <CurrencyInput/>
            </a-form-item>
            <a-button type="submit">提交</a-button>
        </a-form>
    </div>
</template>

<script>
    import AccountSelect from "@/components/account/AccountSelect";
    import CurrencyInput from "@/components/currency/CurrencyInput";

    export default {
        name: "UserTransactionAdd",
        components: {CurrencyInput, AccountSelect},
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
