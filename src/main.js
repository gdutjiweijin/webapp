// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'common/css/reset.css';
import 'common/js/timeFormat'
import Vue from 'vue';
import router from './router/index';
import store from './store/index';
import App from './App';
import {DatetimePlugin} from 'vux';
import axios from 'axios';
import loading from './components/Loading/Loading.js';
import Loading from '@/components/Loading/Loading.vue';
import IconSvg from '@/components/icon/icon';

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./common/icon', false, /\.svg$/)
requireAll(req)

// 全局注册icon-svg
Vue.component('icon-svg', IconSvg);
Vue.component('loading', Loading);

Vue.use(loading);
Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/];
Vue.use(DatetimePlugin);
Vue.prototype.$http = axios;
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});
