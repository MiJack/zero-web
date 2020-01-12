<template>
    <div>
        <form>
            <div class="item">
                <span style="float: left">账号类型：</span>

                <AccountTypeSelect/>


                <br/>
            </div>
            <div class="item">
                <span>  账号名称：</span>
                <input name="password"> <br/>
            </div>
            <div class="item">
                <span>   账号编号：</span>
                <input name="password"> <br/>
            </div>
            <button type="submit">提交</button>
        </form>

        <router-link to="/manager/account/type/add">添加账号类型</router-link>



    </div>
</template>

<script>
    import AccountTypeSelect from "@/components/account/AccountTypeSelect";

    export default {
        name: "UserAccountAdd",
        components: {AccountTypeSelect}
    }
</script>

<style scoped>

    ul {
        margin: 0px
    }

    .item {
        display: block
    }
</style>
