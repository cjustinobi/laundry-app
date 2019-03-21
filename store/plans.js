export const state = () => ({
    plans: ''
})

export const mutations = {
    ALL_PLANS (state, payload) {
        state.plans =payload
    },
    ADD_PLAN (state, payload) {
        state.plans.push(payload)
    }

}

export const actions = {
    async store({ commit }, payload) {

        try {
            let res = await this.$axios.$post('/api/plans', payload)
            commit('ADD_PLAN', res)
            return 'success'
        }
        catch(e) {
            return e
        }
    },

    async getPlans({ commit }) {
        try {
            let plans = await this.$axios.$get('/api/plans')
            commit('ALL_PLANS', plans)
            return 'success'
        }
        catch (e) {
            return e
        }
    }
}

export const getters = {
    allPlans: state => state.plans
}
