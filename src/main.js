import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';
import stock from './components/stock.vue';
import login from './components/Login.vue';
Vue.use(VueRouter);

export const router = new VueRouter({
  base: '',
  mode: 'history',
  routes: [
    { path: '/App', component: App },
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
