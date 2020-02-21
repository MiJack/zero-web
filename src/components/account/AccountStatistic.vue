<template>
    <div>
        <a-row gutter="16">
            <a-col :span="4">
                <CurrencyStatistic/>
            </a-col>
            <a-col :span="4">
                <CurrencyStatistic/>
            </a-col>
            <a-col :span="4">
                <CurrencyStatistic/>
            </a-col>
            <a-col :span="4">
                <CurrencyStatistic/>
            </a-col>

        </a-row>


        <a-row>
            <a-col :span="4">
                <a-statistic
                        title="支出同比"
                        :value="11.28"
                        :precision="2"
                        suffix="%"
                        :valueStyle="{color: '#3f8600'}"
                        style="margin-right: 50px">
                    <template v-slot:prefix>
                        <a-icon type="arrow-up"/>
                    </template>
                </a-statistic>

            </a-col>
            <a-col :span="4">
                <a-statistic
                        title="收入同比"
                        :value="11.28"
                        :precision="2"
                        suffix="%"
                        :valueStyle="{color: '#3f8600'}"
                        style="margin-right: 50px"
                >
                    <template v-slot:prefix>
                        <a-icon type="arrow-up"/>
                    </template>
                </a-statistic>

            </a-col>
            <a-col :span="4">
                <a-statistic
                        title="收益同比"
                        :value="11.28"
                        :precision="2"
                        suffix="%"
                        :valueStyle="{ color: '#cf1322' }"
                        style="margin-right: 50px"
                >
                    <template v-slot:prefix>
                        <a-icon type="arrow-down"/>
                    </template>
                </a-statistic>
            </a-col>
        </a-row>


    </div>
</template>

<script>
    export default {
        name: "AccountStatistic"
    }
</script>

<style scoped>

</style>
