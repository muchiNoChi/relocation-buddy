import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/office/:name',
    name: 'office-details',
    // route level code-splitting
    // this generates a separate chunk (office-details.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/office-details.vue'),
    props: (route) => ({
      ...route.params,
    }),
  },
];

const router = new VueRouter({
  // remove # from URL
  mode: 'history',
  routes,
});

export default router;
