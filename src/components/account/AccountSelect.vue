<template>
    <div>
        <ul>
            <li>
                <span>账号类型</span>
                <AccountTypeSelect/>
            </li>
            <li>
                <span>账号</span>
            </li>

        </ul>
    </div>
</template>

<script>
    import AccountTypeSelect from "@/components/account/AccountTypeSelect";

    export default {
        name: "AccountSelect",
        components: {AccountTypeSelect}
    }
</script>

<style scoped>



</style>
