import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import TeamsList from '../src/components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(_to, _from, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
  routes: [
    {
      path: '/',
      redirect: '/teams',
    },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: false },
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          path: ':teamId',
          component: TeamMembers,
          props: true,
          name: 'team-members',
        },
      ],
    },
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
    },

    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log(to, from);
  /*
  if (to.name === 'team-members') {
    next();
  } else {
    next({ name: 'team-members', params: { teamId: 't2' } });
  }
  */
  next();
});

router.afterEach((to, from) => {
  // sending analytics data to server
  console.log(to, from);
});

const app = createApp(App);
app.use(router);
app.mount('#app');
