<template>
    <div>
        <a-row>
            <a-col :span="4">
                <a-avatar shape="square" :size="120"
                          src="https://avatars3.githubusercontent.com/u/4158061?s=460&v=4"
                          v-bind:alt="info.name"/>

            </a-col>
            <a-col :span="18">
                <a-row>
                    用户名： {{ info.name}}<br/>
                </a-row>
                <a-row>
                    邮箱： {{ info.email }}<br/>
                </a-row>
            </a-col>
        </a-row>


    </div>
</template>

<script>
    import {api_head, host} from "@/static/constans";
    import axios from "axios";

    export default {
        name: "UserProfile",
        data() {
            return {info: {id: null, name: null, email: null}}
        },
        mounted() {
            let url;
            if (this.id === undefined) {
                url = host + "/api/user/info";
            } else {

                url = host + "/api/users/" + this.id;
            }

            axios.get(url, {
                headers: {
                    "X-ZERO-API-TOKEN": this.$cookies.get(api_head)
                }
            })
                .then(response => {
                    let result = response.data;
                    let code = result.code;
                    let message = result.message;
                    let data = result.data;
                    if (code === -200) {
                        alert("用户未找到")
                        return
                    }
                    if (code !== 200) {
                        alert(message);
                        return
                    }
                    this.info = {
                        id: data.id,
                        name: data.name,
                        email: data.email
                    }
                }).catch(reason => {
                alert(reason);
            });
        }
    }
</script>

<style scoped>

</style>
