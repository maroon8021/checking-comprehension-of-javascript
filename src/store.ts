import Vue from 'vue';
import Vuex from 'vuex';
import questions from './questions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions: questions
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    getQuestions: (state, getters) => () =>{
      return state.questions;
    }
  }
});
