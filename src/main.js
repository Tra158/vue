import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from "@/components/Pagination"
import {reqCategoryList} from '@/api'
import store from '@/store'
import VueTreeStr from 'vue-tree-str'
import 'vue-tree-str/vue-tree-str.css'

Vue.use(VueTreeStr)
Vue.config.productionTip = false
import '@/mock/mockServe'
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
reqCategoryList();
import "swiper/css/swiper.css"
import * as API from '@/api'
new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  router,
  store
}).$mount('#app')
