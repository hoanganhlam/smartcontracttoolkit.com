const ABI = {
  ERC20: {
    name: "ERC20",
    show: true,
    uri: 'https://gist.githubusercontent.com/hoanganhlam/362d77a2352c84abfb971e4692061d6c/raw/39159b62337240aeea095899ba186efd2dd56be6/ABI-ERC20.json',
    content: null,
    schemas: []
  },
  ERC721: {
    name: "ERC721",
    show: false,
    uri: 'https://gist.githubusercontent.com/hoanganhlam/0fef79860e992cf3cabf7e8b8fb11ccf/raw/8175a9d95c6bb19e76c33b21c6131f1d45d1bc86/ABI-ERC721.json',
    content: null,
    schemas: []
  },
  ERC1155: {
    name: "ERC1155",
    show: false,
    uri: 'https://gist.githubusercontent.com/hoanganhlam/96c9012eb45f3c5b55592e53979727d9/raw/892627810d058e1d5cfedd366040b9244386c02f/ABI-ERC1155.json',
    content: null,
    schemas: []
  },
}
export default {
  state: () => ({
    ABI: {},
    CHAIN_LIST: []
  }),
  mutations: {
    'SET_ABI'(state, data) {
      state.ABI = data
    },
    'SET_CHAIN_LIST'(state, data) {
      state.CHAIN_LIST = data
    },
    'ADD_ABI'(state, {key, abi}) {
      state.ABI[key] = abi
    },
  },
  actions: {
    async nuxtServerInit({commit}, {req}) {
      const inters = []
      Object.keys(ABI).forEach(item => {
        inters.push(
          this.$axios.$get(ABI[item].uri)
        )
      })
      inters.push(
        this.$axios.$get('https://gist.githubusercontent.com/comficker/9803dc8419ec0a46b8046d73630fe8ac/raw/2c6b49f2d5b8d82e0246fe46849f96facf5199fe/chain_list.json')
      )
      const res = await Promise.all(inters)
      ABI["ERC20"].schemas = res[0]
      ABI["ERC721"].schemas = res[1]
      ABI["ERC1155"].schemas = res[2]
      commit('SET_ABI', ABI)
      commit('SET_CHAIN_LIST', res[3])
    },
  },
}
