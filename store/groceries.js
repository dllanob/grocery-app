
import axios from 'axios'

export const state = () => ({
  groceries: null,
  error: null
})

export const actions = {
  fetchGroceries: async ({ commit }) => {
    commit('SET_ERROR', '')
    await axios.get(`${process.env.BASE_URL}grocery`)
      .then((response) => {
        commit('SET_GROCERIES', response.data)
      })
  }
}

export const mutations = {
  SET_ERROR: (state, error) => (state.error = error),
  SET_GROCERIES: (state, groceries) => (state.groceries = groceries)
}

export const getters = {
  groceries: state => state.groceries
}
