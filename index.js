// index.js
import Vue from 'vue';
import moment from 'moment';
import app from './app.vue';
import router from './src/router';

console.log("Hello from JavaScript!");
console.log(moment().startOf('day').fromNow());
if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!'); 
}

var name = "Visitor", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);

new Vue({
    render: h => h(app),
    router,
}).$mount('#app');