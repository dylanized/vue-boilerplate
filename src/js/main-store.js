import Vuex from 'vuex';

// build store
const store = new Vuex.Store({
  state: {
    count: 0,
    links: [
      { to: '/', text: 'Home' },
      { to: '/about', text: 'About' },
      { to: '/error', text: 'Error' },
    ],
    msg: 'Powered by Vue.js',
  },
  mutations: {
    ADDCOUNT(state) {
      state.count++;
    },
    SETMSG(state, msg) {
      state.msg = msg;
    },
  },
  actions: {
    addCount(context) {
      context.commit('ADDCOUNT');
    },
    setMsg(context, msg) {
      context.commit('SETMSG', msg);
    },
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
});

// export store
export default store;
