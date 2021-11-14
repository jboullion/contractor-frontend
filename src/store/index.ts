import { createStore, storeKey } from 'vuex';

export default createStore({
  state: {
    jwt: 'jwt.string',
    isAuthenticated: false,
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
    jwt(state) {
      return state.jwt;
    },
  },
  mutations: {
    setJWT(state, payload) {
      state.jwt = payload;
    },
    authenticated(state) {
      state.isAuthenticated = true;
    },
  },
});
