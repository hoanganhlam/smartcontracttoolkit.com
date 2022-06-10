export default {
  namespaced: true,
  state: () => ({

  }),
  mutations: {
    'SET_PRICE' (state, payload) {
      state.prices = payload
    },
  },
  actions: {
    nuxtServerInit ({ commit }, { req }) {
      if (req.session.user) {
        commit('user', req.session.user)
      }
    },
    openModal ({ commit }, modal) {
      commit('SET_MODAL', modal)
    },
  },
  getters: {}
}
