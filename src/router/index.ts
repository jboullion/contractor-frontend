import { createWebHistory, createRouter } from 'vue-router';

// Lazy Load pages
const Home = () => import('../views/layouts/Home.vue');
const Authentication = () => import('../views/layouts/Authentication.vue');
const Application = () => import('../views/layouts/Application.vue');

const Login = () => import('../views/auth/Login.vue');
const Register = () => import('../views/auth/Register.vue');

const Dashboard = () => import('../views/app/Dashboard.vue');

const JobsList = () => import('../views/app/jobs/JobsList.vue');
const JobsCreate = () => import('../views/app/jobs/JobsCreate.vue');
const JobsView = () => import('../views/app/jobs/JobsView.vue');
const JobsEdit = () => import('../views/app/jobs/JobsEdit.vue');

// const Experiments = () => import("../components/pages/Experiments.vue");
// const Futurist = () => import("../components/pages/Futurist.vue");
// const Games = () => import("../components/pages/Games.vue");
const NotFound = () => import('../views/layouts/NotFound.vue');

const requiresAuth = {
  requiresAuth: true,
};

const redirectAuth = {
  redirectAuth: true,
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/auth',
    component: Authentication,
    meta: redirectAuth,
    children: [
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/register',
        component: Register,
      },
    ],
  },
  {
    path: '/app',
    name: 'Application',
    component: Application,
    meta: requiresAuth,
    children: [
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
    ],
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
const isAuthenticated = false;

// https://next.router.vuejs.org/guide/advanced/navigation-guards.html
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated) next('/login');
  else if (to.meta.redirectAuth && isAuthenticated) next('/dashboard');
  else next();
});

export default router;
