import { createStore } from "vuex";

interface State {
  invoiceModal: null | boolean;
}

export const store = createStore<State>({
  state: {
    invoiceModal: null,
  },
  mutations: {
    TOGGLE_INVOICE(state) {
      state.invoiceModal = !state.invoiceModal;
    },
  },
  actions: {},
  modules: {},
});
