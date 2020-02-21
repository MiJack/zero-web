<template>
    <div>
        <a-input :min="0" :max="10" :step="0.1" >
            <a-select slot="addonBefore" style="width: 180px" v-model="selectCurrency">
                <a-select-option v-bind:value="currency.id" :key="index" v-for="(currency,index) in currencyList"
                                 firstActiveValue="true">
                    <span class="">{{currency.name}}</span>
                    <span class="">({{currency.code}})</span>
                </a-select-option>
            </a-select>
        </a-input>
    </div>
</template>

<script>
    export default {
        name: "CurrencyInput",
        data: function () {
            return {
                selectCurrency: null,
                currencyList: [
                    {id: 1, code: "CNY", name: "人民币", minor: 0.01},
                    {id: 2, code: "USD", name: "美元", minor: 0.01},
                    {id: 3, code: "JPY", name: "日元", minor: 1}
                ]
            }
        },
        methods: {
            getCurrency: function () {
                return this.selectCurrency;
            }
        }
    }
</script>

<style scoped>

</style>
