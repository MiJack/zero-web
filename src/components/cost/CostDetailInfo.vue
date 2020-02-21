<template>
    <div>
        <a-card>

            花费详情
            {{costName}}
            {{costContent}}
            <div>
                <template v-for="(tag) in tags">
                    <a-tag :key="tag" :closable="true" :afterClose="() => handleClose(tag)">
                        <span class="tag tag-content"> {{tag}}</span>
                    </a-tag>
                </template>
                <a-input
                        v-if="inputVisible"
                        ref="input"
                        type="text"
                        :value="inputValue"
                        @change="handleInputChange"
                        @blur="handleInputConfirm"
                        @keyup.enter="handleInputConfirm"
                />
                <a-tag v-else @click="showInput" style="background: #fff; borderStyle: dashed;">
                    <a-icon type="plus"/>
                    New Tag
                </a-tag>
            </div>
        </a-card>


    </div>

</template>

<script>
    export default {
        name: "CostDetailInfo",
        data: function () {
            return {
                inputVisible: false,
                inputValue: '',

                "costId": 1,
                "costName": "买菜",
                "costContent": "买菜内容",
                "tags": ["sss", "sss22"],
                "relatedAccountList": [
                    {
                        "id": 111,
                        "name": 111,
                        "type": 111,
                        "icon": 111,
                    }
                ],
                "relatedTransactionList": [{
                    "id": 1,
                    "account": {
                        "id": 111,
                        "name": 111,
                        "type": 111,
                        "icon": 111,
                    },
                    "transactionCost": "11111",
                    "transactionType": "1",
                    "transactionCurrency": "$",
                    "transactionCurrencyIcon": "http://sssss",
                    "transactionCurrencyCode": "USD",
                    "transactionTime": "2020年1月3日 12:20:11"
                }],
            }
        },
        methods: {
            handleClose(removedTag) {
                const tags = this.tags.filter(tag => tag !== removedTag);
                // eslint-disable-next-line no-console
                console.log(tags);
                this.tags = tags;
            },

            showInput() {
                this.inputVisible = true;
                this.$nextTick(function () {
                    this.$refs.input.focus();
                });
            },

            handleInputChange(e) {
                this.inputValue = e.target.value;
            },

            handleInputConfirm() {
                const inputValue = this.inputValue;
                let tags = this.tags;
                if (inputValue && tags.indexOf(inputValue) === -1) {
                    tags = [...tags, inputValue];
                }
                // eslint-disable-next-line no-console
                console.log(tags);
                Object.assign(this, {
                    tags,
                    inputVisible: false,
                    inputValue: '',
                });
            },
        },
    }
</script>

<style scoped>
    .tag-content {
    }
</style>
