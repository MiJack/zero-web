import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCookies from 'vue-cookies'
import App from './App.vue'
import routes from './routes'
import axios from 'axios'
import {host} from './static/constans'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false

Vue.use(VueCookies)
Vue.use(VueRouter)
Vue.use(Antd);


const router = new VueRouter({
    mode: 'history',
    routes,
})
axios.defaults.baseURL = host
axios.defaults.headers.post['Content-Type'] = 'applicaiton/json';


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
