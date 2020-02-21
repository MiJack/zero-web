<template>
    <div>


        <a-card>
            <a-col>
                <a-row>

             <span class="title">
                    {{title}}
             </span>
                </a-row>
                <a-row>
                <span class="money currency">
                    {{currency}}
                </span>
                <span class="value money">
                     {{value}}
                    <a-icon type="arrow-up" style="display: inline-block"/>
                </span>

                </a-row>
                <a-row>
            <span class="precision">
                   ( +{{precision}}%)
                </span>
                </a-row>
            </a-col>
        </a-card>
    </div>
</template>

<script>
    export default {
        name: "CurrencyStatistic",
        data: function () {
            return {
                title: "当前余额（ 同比）",
                currency: "￥",
                icon: '',
                value: "1111.11",
                precision: "11.11"
            }
        }
    }
</script>

<style scoped>
    .title {
        /*font-weight: bold;*/
        /*font-size: x-large;*/
    }

    .money {
        font-weight: lighter;
        font-size: xx-large;
    }
</style>
