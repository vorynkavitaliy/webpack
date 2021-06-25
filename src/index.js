import './assets/styles/styles.sass'
import Vue from 'vue'
import App from './App/App.vue'
// import router from './App/router/'
import store from './App/store/'
import ui from './ui-components'
import '@/App/plugins/lazy-load.plugin'

Vue.config.productionTip = false
Object.entries(ui).forEach(([name, component]) => Vue.component(name, component))
new Vue({
    // router,
    store,
    render: (h) => h(App),
}).$mount('#app')
