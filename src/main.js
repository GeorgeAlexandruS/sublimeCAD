import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import '@/assets/css/animate.css'
import '@/assets/css/animate.min.css'
import '@/assets/css/bootstrap-v4.1.3.min.css'
import '@/assets/css/custom-animate.css'
import '@/assets/css/custom-animation.css'
import '@/assets/css/element.css'
import '@/assets/css/flaticon.css'
import '@/assets/css/font-awesome.min.css'
import '@/assets/css/global.css'
import '@/assets/css/jquery.bootstrap-touchspin.css'
import '@/assets/css/magnific-popup.css'
import '@/assets/css/mainmenu.css'
import '@/assets/css/nice-select.css'
import '@/assets/css/owl.carousel.min.css'
import '@/assets/css/responsive.css'
import '@/assets/css/style.css'
import '@/assets/css/timeline.min.css'
import '@/assets/css/tiny-slider.css'
import BootstrapVue from 'bootstrap-vue'
import moment from 'moment'

Vue.use(BootstrapVue);
Vue.config.productionTip = process.env.NODE_ENV === 'production';
Vue.filter('date', (value) => {
  if (!value) {
    return '';
  }

  return moment(value).format('MMM DD, YYYY');
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
