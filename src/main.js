import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

Vue.config.productionTip = false
Vue.component('mi-header', Header)
Vue.component('mi-footer', Footer)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')