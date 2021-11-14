import { createStore } from 'vuex';

export default createStore({
  state: {
    jwt: localStorage.getItem('accessToken'),
  },
  getters: {
    isAuthenticated(state) {
      return !!state.jwt;
    },
    jwt(state) {
      return state.jwt;
    },
  },
  actions: {},
  mutations: {
    setJWT(state, payload) {
      state.jwt = payload;
    },
  },
});
