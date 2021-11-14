import { createWebHistory, createRouter } from 'vue-router';

// Lazy Load pages
const Login = () => import('../views/auth/Login.vue');

const Dashboard = () => import('../views/Dashboard.vue');

const JobsList = () => import('../views/jobs/JobsList.vue');
const JobsCreate = () => import('../views/jobs/JobsCreate.vue');
const JobsView = () => import('../views/jobs/JobsView.vue');
const JobsEdit = () => import('../views/jobs/JobsEdit.vue');

// const Experiments = () => import("../components/pages/Experiments.vue");
// const Futurist = () => import("../components/pages/Futurist.vue");
// const Games = () => import("../components/pages/Games.vue");
const NotFound = () => import('../views/NotFound.vue');

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard, // TODO: This should be the marketing / landing page eventually
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: JobsList,
  },
  {
    path: '/jobs/create',
    component: JobsCreate,
  },
  {
    path: '/jobs/:id',
    component: JobsView,
  },
  {
    path: '/jobs/:id/edit',
    component: JobsEdit,
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
});

// https://next.router.vuejs.org/guide/advanced/navigation-guards.html
// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && to.name !== 'Home' && !isAuthenticated) next({ name: 'Login' })
//   else next()
// })

export default router;
