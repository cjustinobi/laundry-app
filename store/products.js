export const state = () => ({
    allProducts: []
})

export const mutations = {
    ALL_PRODUCTS (state, payload) {
        state.allProducts = payload
        alert(state.allProducts)
    },
    ADD_PRODUCTS (state, payload) {
        state.allProducts.push(payload)
    },
    REMOVE_ITEM (state, i) {
        state.allProducts = state.allProducts.filter(product => product.id !== i)
    }

}

export const actions = {
    async store({ commit, dispatch }, payload) {
        let fd = new FormData()
        fd.append('name', payload.name)
        fd.append('price', payload.price)
        fd.append('category_id', payload.category_id)
        fd.append('file', payload.file)

        const config = { header: { 'content-type': 'multipart/form-data' }}
        try {
            return await this.$axios.$post('/api/products', fd, config)
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
    },

    removeItem({ commit }, i) {
        commit('REMOVE_ITEM', i)
    }
}

export const getters = {
    allProducts: state => state.allProducts
}