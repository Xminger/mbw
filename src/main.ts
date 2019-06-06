import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import elementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from '@/common/axios';
// Vue.config.productionTip = false;

Vue.prototype.axios = axios;
Vue.use(elementUI);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
