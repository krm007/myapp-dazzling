// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router/appindex'
import myHeader from "@/components/MyHeader"
import myTabBar from "@/components/MyTabBar"
import axios from "axios"
import Qs from "qs"

Vue.prototype.a=axios;
Vue.prototype.q=Qs;
Vue.prototype.servername="http://kangruoman:81/";



FastClick.attach(document.body)

Vue.config.productionTip = false;
Vue.component('myHeader', myHeader);
Vue.component('myTabBar', myTabBar);

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
