import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
  
  state: {
    windowWidth: window.outerWidth,
  },
  mutations: {
    setWindowWidth(state) {
      state.windowWidth = window.outerWidth;
      console.log(window.outerWidth);
    }
  },
});