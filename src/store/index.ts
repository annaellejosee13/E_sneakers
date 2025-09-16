import { createStore } from 'vuex';

export interface RootState {
  cartCount: number;
}

export const store = createStore<RootState>({
  state: () => ({
    cartCount: 0,
  }),
  mutations: {
    incrementCart(state) {
      state.cartCount += 1;
    },
  },
  actions: {
    addToCart({ commit }) {
      commit('incrementCart');
    },
  },
  getters: {
    cartCount: (state) => state.cartCount,
  },
});

export default store;


