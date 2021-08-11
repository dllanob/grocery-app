
import axios from 'axios'

export const state = () => ({
  groceries: null,
  favorites: null,
  error: null
})

export const actions = {
  fetchGroceries: async ({ commit }) => {
    commit('SET_ERROR', '')
    await axios.get(`${process.env.BASE_URL}grocery`)
      .then((response) => {
        commit('SET_GROCERIES', response.data)
      })
  },
  fetchGroceryData: async ({ commit }, { groceries, id }) => {
    const itemIndex = await groceries.findIndex(grocery => grocery.id === id)
    return groceries[itemIndex]
  },
  fetchFavoriteGroceries: async ({ commit }) => {
    commit('SET_ERROR', '')
    await axios.get(`${process.env.BASE_URL}grocery?favorite=1`)
      .then((response) => {
        commit('SET_FAVORITES', response.data)
      })
  },
  updateGroceryStock: async ({ commit }, { groceries, item, remove }) => {
    const itemIndex = groceries.findIndex(grocery => grocery.id === item.id)
    await axios.patch(`${process.env.BASE_URL}grocery/${item.id}`,
      {
        ...item,
        stock: remove ? item.stock - 1 : item.stock + 1
      })
      .then((response) => {
        groceries[itemIndex] = response
        commit('SET_GROCERIES', groceries)
      })
  },
  addGroceryToFavorites: async ({ commit }, { groceries, item }) => {
    const itemIndex = groceries.findIndex(grocery => grocery.id === item.id)
    await axios.patch(`${process.env.BASE_URL}grocery/${item.id}`,
      {
        ...item,
        favorite: item.favorite === 0 ? 1 : 1
      })
      .then((response) => {
        groceries[itemIndex] = response
        commit('SET_GROCERIES', groceries)
      })
  }
}

export const mutations = {
  SET_ERROR: (state, error) => (state.error = error),
  SET_GROCERIES: (state, groceries) => (state.groceries = groceries),
  SET_FAVORITES: (state, groceries) => (state.favorites = groceries)
}

export const getters = {
  groceries: state => state.groceries,
  favorites: state => state.favorites
}
