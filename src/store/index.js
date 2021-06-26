import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const baseURL = "https://api.stackexchange.com/2.2/";

export default new Vuex.Store({
  state: {
    tags: [],
    qusetions: [],
    target: '',
  },
  mutations: {
    setTag(state, payload) {
      state.tags = payload;
    },
    setQuestions(state, payload) {
      state.qusetions = payload;
    },
    setTarget(state, value) {
      state.target = value;
    }
  },
  actions: {
    async getTags(state) {
      axios({
        method: "GET",
        url: baseURL + "tags",
        params: {
          page: 1,
          pagesize: 10,
          order: 'desc',
          sort: 'popular',
          site: 'stackoverflow',
        },
      }).then(res => {
        state.commit("setTag", res.data.items);
      }).catch(e => {
        console.log(e);
      });
    }, 
    async getQuestions(state, target) {
      axios({
        method: "GET",
        url: baseURL + "questions",
        params: {
          page: 1,
          pagesize: 20,
          tagged: target,
          order: 'desc',
          sort: 'activity',
          site: 'stackoverflow',
        },
      }).then(res => {
        state.commit("setQuestions", res.data.items);
      }).catch(e => {
        console.log(e);
      });
    }
  },
  getters: {
    showAllTag: (state) => state.tags,
    showAllQuestion: (state) => state.qusetions,
    showTarget: (state) => state.target,
  }
})
