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

const requiresAuth = {
  requiresAuth: true,
};

const redirectAuth = {
  redirectAuth: true,
};

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard, // TODO: This should be the marketing / landing page eventually
  },
  {
    path: '/login',
    component: Login,
    meta: redirectAuth,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: requiresAuth,
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: JobsList,
    meta: requiresAuth,
  },
  {
    path: '/jobs/create',
    component: JobsCreate,
    meta: requiresAuth,
  },
  {
    path: '/jobs/:id',
    component: JobsView,
    meta: requiresAuth,
  },
  {
    path: '/jobs/:id/edit',
    component: JobsEdit,
    meta: requiresAuth,
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

// TODO: Update to pull from Vuex Store when that is setup
const isAuthenticated = true;

// https://next.router.vuejs.org/guide/advanced/navigation-guards.html
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated) next('/login');
  else if (to.meta.redirectAuth && isAuthenticated) next('/dashboard');
  else next();
});

export default router;
