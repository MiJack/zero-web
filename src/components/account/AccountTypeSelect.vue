<template>
<div>
    <ul style="float: left">
        <li class="select">
            <input name="accountType" type="radio"> 支付宝
        </li>
        <li class="select">
            <input name="accountType" type="radio"> 支付宝
        </li>
        <li class="select">
            <input name="accountType" type="radio"> 支付宝<br/>
        </li>
    </ul>
</div>
</template>

<script>
    export default {
        name: "AccountTypeSelect"
    }
</script>

<style scoped>

    .select {
        float: left;
        list-style-type: none;
        text-decoration: none;
    }
</style>
