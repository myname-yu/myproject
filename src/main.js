import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
// import Topcon from './components/Topcon.vue'

import axios from 'axios'


Vue.config.productionTip = false
Vue.component('mi-header', Header)
Vue.component('mi-footer', Footer)
    // Vue.component('mi-topcon', Topcon)
Vue.prototype.axios = axios;
axios.defaults.baseURL = 'http://localhost:3000'

new Vue({
    router,
    store,
    render: history => history(App)
}).$mount('#app')