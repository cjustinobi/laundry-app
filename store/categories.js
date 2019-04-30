export const state = () => ({
    allCategories: []
})

export const mutations = {
    ALL_CATEGORIES (state, payload) {
        state.allCategories =payload
    },
    ADD_CATEGORIES (state, payload) {
        state.allCategories.push(payload)
    }

}

export const actions = {
    async store({ commit }, payload) {
        try {
            let res = await this.$axios.$post('categories', { categories: payload })
            console.log('this is res from categories ' + res)
            commit('ADD_CATEGORIES', res)
            return 'success'
        }
        catch(e) {
            return e
        }
    },

    async getCategories({ commit }) {
        try {
            let categories = await this.$axios.$get('categories')
            commit('ALL_CATEGORIES', categories)
            return 'success'
        }
        catch (e) {
            return e
        }
    }
}

export const getters = {
    allCategories: state => state.allCategories
}