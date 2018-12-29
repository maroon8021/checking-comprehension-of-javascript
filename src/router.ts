import Vue from 'vue';
import Router from 'vue-router';
import Questions from './views/Questions.vue';
import Answer from './views/Answer.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'questions'},
    },
    {
      path: '/questions',
      name: 'questions',
      component: Questions,
    },
    {
      path: '/answer',
      name: 'answer',
      component: Answer,
    },
  ],
});
