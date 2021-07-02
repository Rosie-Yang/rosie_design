import Vue from 'vue';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/all.scss';
import SplitCarousel from 'vue-split-carousel';
import 'vue-split-carousel/dist/vue-split-carousel.css';
import VueEasyLightbox from 'vue-easy-lightbox';
import 'video.js/dist/video-js.css';

import router from './router';
import App from './App.vue';

Vue.use(SplitCarousel);
Vue.use(VueEasyLightbox);
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
