import 'bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import './styles/mystyles.less';
import 'font-awesome/css/font-awesome.css';
Vue.use(VueRouter);

const routes = [
    { path: '/', component: require('./components/home/home.vue.html') },
    { path: '/shop', component: require('./components/shop/shop.vue.html') },
    { path: '/contact', component: require('./components/contact/contact.vue.html') },
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(require('./components/app/app.vue.html'))
});
