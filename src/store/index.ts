import { createStore } from 'vuex';

export default createStore({
  state: {
    accessToken: localStorage.getItem('accessToken'),
    refreshToken: localStorage.getItem('refreshToken'),
  },
  getters: {
    isAuthenticated(state) {
      return !!state.accessToken;
    },
    jwt(state) {
      return state.accessToken;
    },
  },
  actions: {},
  mutations: {
    setAccessToken(state, payload) {
      state.accessToken = payload;
    },
    setRefreshToken(state, payload) {
      state.refreshToken = payload;
    },
  },
});
