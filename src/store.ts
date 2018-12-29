import Vue from 'vue';
import Vuex from 'vuex';
import questions from './questions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions,
  },
  mutations: {
    setUserAnswer(state, payload) {
      state.questions[payload.contentIndex].questionItems[payload.questionIndex].userAnswer = payload.userAnswer;
    },
  },
  actions: {

  },
  getters: {
    getQuestions: (state, getters) => () => {
      return state.questions;
    },
  },
});
