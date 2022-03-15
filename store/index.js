
export const state = () => ({
  pages: []
})

export const getters = {
  getterValue: state => {
    return state.value
  }
}

export const mutations = {
  updatePages: (state, payload) => {
    state.pages = payload
  }
}

export const actions = {
  async getPagesData({ state, commit }) {
    if (state.pages.length) return

    try {
      const response = await fetch(`${process.env.API_URL}/api/pages`)
      const pages = await response.json()
      commit('updatePages', pages.data)
    } catch (err) {
      console.log(err)
    }
  }
}