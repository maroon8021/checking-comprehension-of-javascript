import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Questions from "./views/Questions.vue";
import Answer from "./views/Answer.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: { name: 'questions'}
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/questions',
      name: 'questions',
      component: Questions
    },
    {
      path: '/answer',
      name: 'answer',
      component: Answer
    }
  ],
});
