import UserRegister from './components/UserRegister'
import UserLogin from './components/UserLogin'
import UserInfo from "./components/UserInfo";
import error404 from "./components/error/error404";
import Index from "./components/Index";

const routes = [
    {path: '/', component: Index},
    {path: '/user/register', component: UserRegister},
    {path: '/user/login', component: UserLogin},
    {path: '/user/info', component: UserInfo},
    {path: '/user/:id', component: UserInfo, props: true},
    {path: '*', component: error404, name: '404'}
]

export default routes
