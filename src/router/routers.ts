import Application from './../views/Application.vue';

export  default [
    {
        path: '/',
        name: 'application',
        component: Application
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./../views/login/login.vue')
    },
    {
        path: '/regist',
        name: 'regist',
        component: () => import('./../views/Regist.vue')
    }
];
