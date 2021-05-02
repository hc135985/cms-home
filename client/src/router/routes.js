import Index from '../containers/index'
import Login from '../containers/user/Login'
import Wq from '../containers/user/Wq'
//二级路由


export default [{
    path: '/index',
    name: 'index',
    component: Index,
    token: true,
}, {
    path: '/login',
    name: 'login',
    component: Login
},
{
    path: '/wq',
    name: 'wq',
    component: Wq
},
]
