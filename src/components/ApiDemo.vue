<template>
    <div>
        {{ info }}
    </div>
</template>

<script>
    import axios from 'axios'
    import {host} from "@/static/constans";

    export default {
        name: "ApiDemo",
        data() {
            return {
                info: null
            }
        },
        mounted() {
            axios.get(host + "/api/users/list", {})
                .then(response => (this.info = response))
        }
    }
</script>

<style scoped>

</style>
