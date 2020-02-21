<template>
    <div>
        <a-range-picker>
            <template slot="renderExtraFooter">
                <a-row gutter="16">
                    <a-col :span="4">
                        <a-button value="last-day" type="link">近一天</a-button>
                    </a-col>
                    <a-col :span="4">
                        <a-button value="last-three-day" type="link">近三天</a-button>
                    </a-col>
                    <a-col :span="4">
                        <a-button value="last-week" type="link">近一周</a-button>
                    </a-col>
                    <a-col :span="4">
                        <a-button value="last-mouth" type="link">近一月</a-button>
                    </a-col>
                    <a-col :span="4">
                        <a-button value="last-season" type="link">近一季</a-button>
                    </a-col>
                    <a-col :span="4">
                        <a-button value="last-year" type="link">近一年</a-button>
                    </a-col>
                </a-row>
            </template>
        </a-range-picker>


    </div>
</template>

<script>
    export default {
        name: "DateSelector"
    }
</script>

<style scoped>

</style>
