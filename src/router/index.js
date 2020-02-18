import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);


const HomePage = () =>
    import(/* webpackChunkName: "home"*/'../home/HomePage.vue');
const AboutMe = () =>
    import(/* webpackChunkName: "about"*/'../about/AboutMe.vue');

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/about',
            name: 'AboutMe',
            component:  AboutMe
        },
    ]
});