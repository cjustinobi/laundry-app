
export const state = () => ({
    allTransactions: ''
})

export const mutations = {
    ALL_TRANSACTIONS (state, transactions) {
        state.allTransactions = transactions
    }
}

export const actions = {
    async getTransactions({ commit }) {
        try {
            const res = await this.$axios.$get('orders')
            commit('ALL_TRANSACTIONS', res)
        } catch (e) {
            return e
        }
    }
}

export const getters = {
    allTransactions: state => state.allTransactions
}