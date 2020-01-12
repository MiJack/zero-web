<template>
    <div>
        <form>
            <input v-model="csrf" hidden/>
            账户类型名称：<input v-model="accountTypeName"><br/>
            账户类型特征：
        </form>
    </div>
</template>

<script>
    import axios from "axios";
    import {csrf_head} from "@/static/constans";

    export default {
        name: "AccountTypeAdd",
        data() {
            return {csrf: null, accountTypeName: null}
        },
        mounted: function () {
            axios.get("/api/web/csrf", {
                headers: {'X-Requested-With': 'XMLHttpRequest'}
            })
                .then(response => {
                    let result = response.data;
                    let code = result.code;
                    let message = result.message;
                    // eslint-disable-next-line no-unused-vars
                    let data = result.data;
                    if (code !== 200) {
                        alert(message);
                        return
                    }
                    this.info = result;
                    this.$cookies.set(csrf_head, data.token)
                })

            axios.get("/api/constant/info")
        }
    }
</script>

<style scoped>

</style>
