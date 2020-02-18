// index.js
import Vue from 'vue';
import moment from 'moment';
import app from './app.vue';
import router from './src/router';
import store from './store.js';


var name = "Visitor";
var timePassed =  moment("2020-02-17T21").fromNow();

console.log("Hello from Jess " + timePassed + "!");
if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!'); 
}

console.log(`Hello ${name}, how are you today?`);

new Vue({
    render: h => h(app),
    router,
    store
}).$mount('#app');