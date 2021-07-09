import Vue from 'vue';
import VueRouter from 'vue-router';

import Layout from '@/views/layout.vue';
import Index from '@/views/index.vue';
import Videos from '@/views/videos.vue';
import Pictures from '@/views/pictures.vue';
import GraphicDesign from '@/views/graphicDesign.vue';
import WebsiteLayout from '@/views/websiteLayout.vue';
import About from '@/views/about.vue';
// import Illustration from '@/views/illustration.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      component: Layout,
      children: [
        {
          name: 'Index',
          path: '',
          component: Index,
        },
        {
          name: 'Videos-collection',
          path: 'videos',
          component: Videos,
        },
        {
          name: 'Pictures-fix',
          path: 'pictures',
          component: Pictures,
        },
        {
          name: 'Graphic-design',
          path: 'graphic_design',
          component: GraphicDesign,
        },
        {
          name: 'Website-layout',
          path: 'website_layout',
          component: WebsiteLayout,
        },
        {
          name: 'About',
          path: 'about',
          component: About,
        },
      ],
    },
  ],
});
