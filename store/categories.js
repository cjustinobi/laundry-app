export const state = () => ({
    allCategories: []
})

export const mutations = {
    ALL_CATEGORIES (state, payload) {
        state.allCategories =payload
    },
    ADD_CATEGORIES (state, payload) {
        state.allCategories.push(payload)
    },
    UPDATE_CATEGORY (state, payload) {
        const categoryIndex = state.allCategories.findIndex(category => category.id === payload.id)
        state.allCategories[categoryIndex] = payload
    }

}

export const actions = {
    async store({ commit }, { payload, editMode = false}) {
        try {
            let res = ''
            if (editMode) {
                res = await this.$axios.$put(`categories/${payload.id}`, { category: payload.name })
                commit('UPDATE_CATEGORY', res)
            } else {
                res = await this.$axios.$post('categories', { categories: payload })
                commit('ADD_CATEGORIES', res)
            }
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