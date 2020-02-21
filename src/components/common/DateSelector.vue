<template>
    <div>
        <a-range-picker>
            <template slot="renderExtraFooter">
                <a-row gutter="16">
                    <a-col :span="4">
                        <a-button value="last-day" type="link" @click="selectLastDay()">近一天</a-button>
                    </a-col>
                    <a-col :span="4">
                        <a-button value="last-three-day" type="link" @click="selectLastThreeDay()">近三天</a-button>
                    </a-col>
                    <a-col :span="4">
                        <a-button value="last-week" type="link" @click="selectLastWeek()">近一周</a-button>
                    </a-col>
                    <a-col :span="4">
                        <a-button value="last-mouth" type="link" @click="selectLastMouth()">近一月</a-button>
                    </a-col>
                    <a-col :span="4">
                        <a-button value="last-season" type="link" @click="selectLastSeason()">近一季</a-button>
                    </a-col>
                    <a-col :span="4">
                        <a-button value="last-year" type="link" @click="selectLastYear()">近一年</a-button>
                    </a-col>
                </a-row>
            </template>
        </a-range-picker>


    </div>
</template>

<script>


    export default {
        name: "DateSelector",
        methods: {
            selectDayRange: function (startDayDelta, endDayDelta) {
                var todayTime = new Date();
                var startDay = new Date(todayTime.getDate()+ startDayDelta);
                var endDay = new Date(todayTime.getDate() + endDayDelta);
                // eslint-disable-next-line no-console
                console.log("startDay:" + startDay);
                // eslint-disable-next-line no-console
                console.log("endDay:" + endDay);
            },
            selectLastDay: function () {
                this.selectDayRange(-1, 0)
            },
            selectLastThreeDay: function () {
                this.selectDayRange(-3, 0)

            },
            selectLastWeek: function () {
                this.selectDayRange(-7, 0)

            },
            selectLastMouth: function () {
                this.selectDayRange(-30, 0)

            },
            selectLastSeason: function () {
                this.selectDayRange(-90, 0)

            },
            selectLastYear: function () {
                this.selectDayRange(-365, 0)
            }


        },
        mounted: function () {
            // this.selectLastDay()
        }
    }
</script>

<style scoped>

</style>
