export const state = () => ({
    benefits: ''
})

export const mutations = {
    ALL_BENEFITS (state, payload) {
        state.benefits = payload
    },
    ADD_BENEFITS (state, payload) {
        payload.forEach(item => state.benefits.push(item))
    }

}

export const actions = {
    async store({ commit }, { payload, editMode }) {
        try {
            if (editMode) {
                await this.$axios.$put(`benefits/${payload[0].id}`, { benefit: payload[0].name })

            } else {
                let res = await this.$axios.$post('benefits', { benefits: payload })
                commit('ADD_BENEFITS', res)
            }
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