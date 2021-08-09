
export const state = () => ({
  items: [],
  total: 0
})

export const actions = {
  addItemToCart: ({ commit }, item) => {
    const payload = {
      ...item
    }
    commit('ADD_ITEM', payload)
    commit('ADD_TOTAL')
  }
}

export const mutations = {
  ADD_ITEM: (state, item) => (state.items.push(item)),
  ADD_TOTAL: state => (state.total = state.total + 9),
  CLEAR_CART: state => (state.items = []),
  CLEAR_TOTAL: state => (state.total = 0)
}

export const getters = {
  items: state => state.items,
  total: state => state.total
}
