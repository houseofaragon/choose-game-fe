import { markdownToHtml } from "../lib/markdownToHtml"

export const state = () => ({
  pages: []
})

export const getters = {
  getterValue: state => {
    return state.value
  }
}

export const mutations = {
  async updatePages(state, payload) {
    const formattedPayload = await Promise.all(payload.map(async page => {
      const markdown = page.attributes.content
      const html = await markdownToHtml(markdown)

      return {
        ...page.attributes,
        content: html
      }
    }))

    state.pages = formattedPayload
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