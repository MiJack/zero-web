<template>
    <div>
        <h1>账号</h1>


        <a-divider/>
        <h1>消费统计</h1>
        <AccountOverview/>

        <DateSelector/>
        <!--        <a-statistic title="Active Users" :value="112893" style="margin-right: 50px"/>-->
        <!--        <a-statistic title="Account Balance (CNY)" :precision="2" :value="112893"/>-->


        <a-divider/>
        <AccountStatistic/>


        <a-divider/>
        <h1>消费明细</h1>
        <AccountCostList/>

    </div>
</template>

<script>
    import DateSelector from "@/components/common/DateSelector";
    import AccountStatistic from "@/components/account/AccountStatistic";
    import AccountCostList from "@/components/account/AccountCostList";
    import AccountOverview from "@/components/account/AccountOverview";

    export default {
        name: "UserAccountInfo",
        components: {AccountCostList, AccountStatistic, DateSelector,AccountOverview},
        props: ['id'],

    }
</script>

<style scoped>

</style>
