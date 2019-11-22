import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
// import Test from './Test.vue'
import axios from 'axios';
import './plugins/element.js'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
require('./mock/TabMock.js')
import store from './store/store';
import 'font-awesome/css/font-awesome.css'
import vueJsonp from 'vue-jsonp';
import BaiduMap from 'vue-baidu-map'
import router from './router'
Vue.use(Element);
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(vueJsonp);
Vue.use(BaiduMap,{
  ak: 'xe7FGtrTZ3pd6TjQNa0oTytSZA2nGyZO',
})

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
