<template>
    <div>
        <div class="account-info-card">
            <div>
                <a-row>
                    <a-col :span="3">
                        <div class="icon-background">
                            <img v-bind:src="accountTypeIcon" class="icon-large"/>
                        </div>
                    </a-col>
                    <a-col :span="6">
                        <div>
                            <div style="margin-bottom: 18px">
                                <span class="accountOrganization">{{accountOrganization}}</span>
                            </div>
                            <div>
                                <span class="accountType"> {{accountType}}</span>
                                <a-tooltip slot="suffix" v-bind:title="accountTypeTip">
                                    <a-icon type="info-circle" class="accountType"/>
                                </a-tooltip>
                            </div>

                        </div>
                    </a-col>
                    <a-col :span="12" :offset="3">
                        <div style="text-align:right;margin-bottom: 18px">
                            <span class="account-name account-name-hide">****</span>
                            <div style="width: 8px;display: inline-block"/>
                            <span class="account-name account-name-show">2333</span>
                        </div>
                        <div style="text-align:right">
                            <span class="account-name-mark">{{accountMark}}</span>

                        </div>
                    </a-col>
                </a-row>

            </div>
            <a-divider/>

            <div>
                <a-row>
                    <a-col :span="6" class="account-overview-item">
                        <div class="account-overview-item-name account-overview-item-content">支出</div>
                        <div>
                            <span class="account-overview-item-currency account-overview-item-content">￥</span>
                            <span class="account-overview-item-money account-overview-item-content">9090.99</span>
                            <span class="account-overview-item-percent account-overview-item-content"> +2.0%</span>
                        </div>
                    </a-col>
                    <a-col :span="6" class="account-overview-item">
                        <div class="account-overview-item-name account-overview-item-content">收入</div>
                        <div>
                            <span class="account-overview-item-currency account-overview-item-content">￥</span>
                            <span class="account-overview-item-money account-overview-item-content">9090.99</span>
                            <span class="account-overview-item-percent account-overview-item-content"> +2.0%</span>
                        </div>
                    </a-col>
                    <a-col :span="6" class="account-overview-item">
                        <div class="account-overview-item-name account-overview-item-content">买入</div>
                        <div>
                            <span class="account-overview-item-currency account-overview-item-content">￥</span>
                            <span class="account-overview-item-money account-overview-item-content">9090.99</span>
                            <span class="account-overview-item-percent account-overview-item-content"> +2.0%</span>
                        </div>
                    </a-col>
                    <a-col :span="6" class="account-overview-item">
                        <div class="account-overview-item-name account-overview-item-content">收益</div>
                        <div>
                            <span class="account-overview-item-currency account-overview-item-content">￥</span>
                            <span class="account-overview-item-money account-overview-item-content">9090.99</span>
                            <span class="account-overview-item-percent account-overview-item-content"> +2.0%</span>
                        </div>
                    </a-col>
                    <a-col :span="6" class="account-overview-item">
                        <div class="account-overview-item-name account-overview-item-content">卖出</div>
                        <div>
                            <span class="account-overview-item-currency account-overview-item-content">￥</span>
                            <span class="account-overview-item-money account-overview-item-content">9090.99</span>
                            <span class="account-overview-item-percent account-overview-item-content"> +2.0%</span>
                        </div>
                    </a-col>
                    <a-col :span="6" class="account-overview-item">
                        <div class="account-overview-item-name account-overview-item-content">预支</div>
                        <div>
                            <span class="account-overview-item-currency account-overview-item-content">￥</span>
                            <span class="account-overview-item-money account-overview-item-content">9090.99</span>
                            <span class="account-overview-item-percent account-overview-item-content"> +2.0%</span>
                        </div>
                    </a-col>
                    <a-col :span="6" class="account-overview-item">
                        <div class="account-overview-item-name account-overview-item-content">还款</div>
                        <div>
                            <span class="account-overview-item-currency account-overview-item-content">￥</span>
                            <span class="account-overview-item-money account-overview-item-content">9090.99</span>
                            <span class="account-overview-item-percent account-overview-item-content"> +2.0%</span>
                        </div>
                    </a-col>
                </a-row>
                <div style="text-align:right;margin-top: 10px">
                    <div style="color: white">
                        统计时间：{{startDate}}~{{endDate}}
                    </div>
                </div>
            </div>
        </div>

        <a-divider/>
        <h1>消费趋势</h1>
        <AccountCostOverview/>
        <!--        <a-statistic title="Active Users" :value="112893" style="margin-right: 50px"/>-->
        <!--        <a-statistic title="Account Balance (CNY)" :precision="2" :value="112893"/>-->
        <a-divider/>
        <h1>消费明细</h1>
        <AccountCostList/>

    </div>
</template>

<script>
    import AccountCostList from "@/components/account/AccountCostList";
    import AccountCostOverview from "@/components/account/AccountCostOverview";

    export default {
        name: "UserAccountInfo",
        components: {AccountCostList, AccountCostOverview},
        props: ['id'],
        data: function () {
            return {
                "name": "asdasd",
                "accountType": "中国招商银行（借记卡）",
                "accountOrganization": "中国招商银行",
                "accountTypeIcon": "http://localhost:9092/imgs/account/cmb.png",
                "accountTypeTip": "余额类型",
                "accountMark": "账号备注（暂不支持）",
                "startDate": "2020-01-01",
                "endDate": "2020-02-01",
            }
        }

    }
</script>

<style scoped>
    .icon-large {
        width: auto;
        height: 80px;
        left: 50%;
        transform: translateX(-0%);
        align-content: center;
    }

    .icon-background {
        display: inline-block;
        padding: 8px;
        border-radius: 48px;
        align-content: center;
        background: white;
    }

    .accountOrganization {
        font-weight: bolder;
        font-size: xx-large;
        color: white;
    }

    .accountType {
        /*font-weight: bolder;*/
        /*font-size: xx-large;*/
        color: #ffffff;
    }

    .account-name {
        font-weight: bolder;
        font-size: xx-large;
        color: white;
    }

    .account-name-hide {
        color: #cccccc;
    }

    .account-name-hide {
        color: #efefef;
    }

    .account-name-mark {
        color: #efefef;
    }

    .account-info-card {
        padding: 48px;
        border-radius: 24px;

        background: #fd5852;
    }

    .account-overview {
        background: white;
    }

    .account-overview-item-content {
        color: white;
    }


    .account-overview-item-name {
        font-weight: bolder;
        font-size: xx-large;
        margin-bottom: 8px;
    }

    .account-overview-item-currency {
        font-weight: bolder;
        font-size: xx-large;
        margin-bottom: 8px;
    }

    .account-overview-item-money {
        font-size: xx-large;
        margin-bottom: 8px;
    }

</style>
