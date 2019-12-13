<template>
    <div>
        {{ info }}
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "ApiDemo",
        data() {
            return {
                info: null
            }
        },
        mounted() {
            axios.get("http://localhost:8080/api/users/list", {
                // headers: {'X-Custom-Header': 'foobar'}
            })
                .then(response => (this.info = response))
        }
    }
</script>

<style scoped>

</style>
