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
    path: '/city/:name',
    name: 'city-details',
    // route level code-splitting
    // this generates a separate chunk (city-details.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/city-details.vue'),
    props: (route) => ({
      ...route.params,
    }),
  },
];

const router = new VueRouter({
  routes,
  // always scroll to the tob of the page after routing
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
