import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('@/page/Index');
const Test1 = () => import('@/page/Test1');
const Test2 = () => import('@/page/Test2');
const Test3 = () => import('@/page/Test3');
const Test4 = () => import('@/page/Test4');
const Me = () => import('@/page/Me');
Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index,
            redirect: 'Test1',
            children: [
                {
                    path: '/Test1',
                    name: 'Test1',
                    component: Test1,
                    meta: {
                        keepAlive: true
                    }
                },
                {
                    path: '/Test2',
                    name: 'Test2',
                    component: Test2
                },
                {
                    path: '/Test3',
                    name: 'Test3',
                    component: Test3
                },
                {
                    path: '/Test4',
                    name: 'Test4',
                    component: Test4
                },
                {
                    path: '/Me',
                    name: 'Me',
                    component: Me
                }
            ]
        }
    ]
});
