import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/drivers',
      name: 'Drivers',
      component: () => import('../views/DriversView.vue'),
    },
    {
      path: '/teams',
      name: 'Teams',
      component: () => import('../views/TeamsView.vue'),
    },
    {
      path: '/events',
      name: 'Events',
      component: () => import('../views/EventsView.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `Vue Boilerplate - ${to.name}`;
  next();
});

export default router;
