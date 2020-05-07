import Vue from 'vue';
import Vuex from 'vuex';
import cons from '../constant';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    route: '/home',
    open: false,
    code: '',
  },
  mutations: {
    [cons.navigatePage](state, payload) {
      state.route = payload;
    },
    [cons.openImage](state, code) {
      state.open = code || false;
      state.open = code;
    },
  },
  actions: {},
  modules: {},
});
