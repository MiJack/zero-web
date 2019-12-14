import axios from 'axios'
import host from "@/static/constans"

function get(url,
             // eslint-disable-next-line no-unused-vars
             success = function (data) {
             },
             error = function (code, message) {
                 alert("code = " + code + ", message = " + message)
             }) {
    axios.get(host + url, {})
        .then(response => {
            let result = response.data;
            let code = result.code;
            let message = result.message;
            let data = result.data;
            if (code === 200) {
                success(data)
            } else {
                error(code, message)
            }
        })
}

export default get
