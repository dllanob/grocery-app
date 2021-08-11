
export const state = () => ({
  items: [],
  total: 0
})

export const actions = {
  addItemToCart: ({ commit }, item) => {
    const payload = {
      ...item,
      quantity: 1
    }
    commit('ADD_ITEM', payload)
    commit('ADD_TOTAL', payload.price)
    return payload
  },
  removeItemFromCart: ({ commit }, { cartItems, item }) => {
    const itemIndex = cartItems.findIndex(grocery => grocery.id === item.id)
    commit('SUBTRACT_TOTAL', item.price)
    commit('REMOVE_ITEM', itemIndex)
  },
  increaseItemOnCart: async ({ commit }, { cartItems, item }) => {
    console.log(cartItems)
    console.log(item)
    const itemIndex = await cartItems.findIndex(grocery => grocery.id === item.id)
    console.log(itemIndex)
    commit('INCREASE_ITEM_QUANTITY', itemIndex)
    commit('ADD_TOTAL', item.price)
  },
  subtractItemOnCart: ({ commit }, { cartItems, item }) => {
    const itemIndex = cartItems.findIndex(grocery => grocery.id === item.id)
    commit('DECREASE_ITEM_QUANTITY', itemIndex)
    commit('SUBTRACT_TOTAL', item.price)
  }
}

export const mutations = {
  ADD_ITEM: (state, item) => (state.items.push(item)),
  REMOVE_ITEM: (state, index) => (state.items.splice(index, 1)),
  ADD_TOTAL: (state, price) => (state.total = state.total + price),
  SUBTRACT_TOTAL: (state, price) => (state.total = state.total - price),
  INCREASE_ITEM_QUANTITY: (state, index) => (state.items[index].quantity++),
  DECREASE_ITEM_QUANTITY: (state, index) => (state.items[index].quantity--),
  CLEAR_CART: state => (state.items = []),
  CLEAR_TOTAL: state => (state.total = 0)
}

export const getters = {
  items: state => state.items,
  total: state => state.total
}
