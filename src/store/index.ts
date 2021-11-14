import { createStore, storeKey } from 'vuex';

export default createStore({
  state: {
    jwt: 'jwt.string',
  },
  mutations: {
    setJWT(state, payload) {
      state.jwt = payload;
    },
  },
});
