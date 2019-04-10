export const state = () => ({
    allProducts: []
})

export const mutations = {
    ALL_PRODUCTS (state, payload) {
        state.allProducts = payload
    },
    ADD_PRODUCTS (state, payload) {
        state.allProducts.push(payload)
    }

}

export const actions = {
    async store({ commit }, payload) {
        try {
            let res = await this.$axios.$post('/api/products', payload)
            commit('ADD_PRODUCTS', res)
            return 'success'
        }
        catch(e) {
            return e
        }
    },

    async getProducts({ commit }) {
        try {
            let products = await this.$axios.$get('/api/products')
            commit('ALL_PRODUCTS', products)
            return 'success'
        }
        catch (e) {
            return e
        }
    }
}

export const getters = {
    allProducts: state => state.allProducts
}