export const state = () => ({
    benefits: ''
})

export const mutations = {
    ALL_BENEFITS (state, payload) {
        state.benefits =payload
    },
    ADD_BENEFITS (state, payload) {
        state.benefits.push(payload)
    }

}

export const actions = {
    async store({ commit }, payload) {
        try {
            let res = await this.$axios.$post('benefits', { benefits: payload })
            commit('ADD_BENEFITS', res)
            return 'success'
        }
        catch(e) {
            return e
        }
    },

    async getBenefits({ commit }) {
        try {
            let benefits = await this.$axios.$get('benefits')
            commit('ALL_BENEFITS', benefits)
            return 'success'
        }
        catch (e) {
            return e
        }
    }
}

export const getters = {
    allBenefits: state => state.benefits
}