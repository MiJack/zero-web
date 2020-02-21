import UserRegister from './components/user/UserRegister'
import UserLogin from './components/user/UserLogin'
import UserInfo from "./components/user/UserInfo";
import error404 from "./components/error/error404";
import Index from "./components/Index";
import ApiDemo from "./components/ApiDemo";
import UserAccountAdd from "./components/account/UserAccountAdd";
import UserTransactionAdd from "@/components/transaction/UserTransactionAdd";
import AccountTypeAdd from "@/components/account/AccountTypeAdd";
import HomePage from "./components/HomePage";
import UserAccountList from "@/components/account/UserAccountList";
import UserAccountInfo from "@/components/account/UserAccountInfo";
import CostDetailInfo from "@/components/cost/CostDetailInfo";

const routes = [
    {path: '/', component: Index},
    {path: '/home', component: HomePage},
    {path: '/demo', component: ApiDemo},
    {path: '/user/register', component: UserRegister},
    {path: '/user/login', component: UserLogin},
    {path: '/user/account/list', component: UserAccountList},
    {path: '/user/info', component: UserInfo},
    {path: '/user/:id', component: UserInfo, props: true},
    {path: '/user/account/:id/info', component: UserAccountInfo, props: true},
    {path: '/user/cost/:id/info', component: CostDetailInfo, props: true},
    {path: '/user/account/demo/info', component: UserAccountInfo, props: true},
    {path: '/user/account/add', component: UserAccountAdd, props: true},
    {path: '/manager/account/type/add', component: AccountTypeAdd, props: true},
    {path: '/user/transaction/add', component: UserTransactionAdd, props: true},
    {path: '*', component: error404, name: '404'}
]

export default routes
