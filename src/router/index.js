import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Episode from '@/views/Episode.vue';
import Character from '@/views/Character.vue';
import NotFound from '@/views/NotFound.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/episode/:id',
    name: 'Episode',
    component: Episode,
    props: (route) => ({ params: route.params }),
  },
  {
    path: '/character/:name',
    name: 'Character',
    component: Character,
    props: (route) => ({ params: route.params }),
  },
  {
    path: '/page-not-found',
    component: NotFound,
  },
  {
    path: '*',
    redirect: '/page-not-found',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
