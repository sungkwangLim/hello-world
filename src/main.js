import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';
import stock from './components/stock.vue';
import child from './components/child.vue';
import login from './components/Login.vue';
Vue.use(VueRouter);

export const router = new VueRouter({
  base: '/hello-world/',
  mode: 'history',
  routes: [
    { path: '/Child', component: child },
    { path: '/Home', component: Home },
    { path: '/Stock', component: stock },
    { path: '/Login', component: login }
  ]
});

Vue.config.productionTip = false

new Vue({
  router : router,
  render: h => h(App),
}).$mount('#app');