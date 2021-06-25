import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: '../img/helpers/error.png',
    loading: '@/assets/images/helpers/loading.gif',
    attempt: 1,
})
