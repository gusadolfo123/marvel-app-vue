import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const initialState = {
  user: {
    name: "",
  },
  logged: false,
};

const checkStorage = () => {
  if (localStorage.getItem("state")) {
    return JSON.parse(localStorage.getItem("state"));
  } else {
    return initialState;
  }
};

export default new Vuex.Store({
  state: checkStorage(),
  mutations: {
    login(state, payload) {
      state.user = {
        name: payload,
      };
      state.logged = true;
      localStorage.setItem("state", JSON.stringify(state));
    },
    logout(state) {
      localStorage.removeItem("state");
      state = initialState;
    },
    updateName(state, payload) {
      state.user = {
        name: payload,
      };
    },
  },
  actions: {},
  modules: {},
});
