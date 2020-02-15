import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../home/HomePage.vue';
import AboutMe from '../about/AboutMe.vue';

Vue.use(Router);


export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'AboutMe',
            component:  AboutMe
        },
    ]
});