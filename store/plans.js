export const state = () => ({
    plans: ''
})

export const mutations = {
    ALL_PLANS (state, payload) {
        state.plans =payload
    },
    ADD_PLAN (state, payload) {
        let index = state.plans.findIndex(plan => plan.id === payload.id)
        state.plans[index] = payload
    },
    REMOVE_ITEM (state, i) {
        state.plans = state.plans.filter(plan => plan.id !== i)
    }

}

export const actions = {
    async store({ commit }, { data, editMode}) {
        let res = ''
        try {
            if (editMode === undefined) {
                res = await this.$axios.$post('plans', data)
            } else {
                res = await this.$axios.$put(`plans/${data.id}`, data)
            }
            commit('ADD_PLAN', res)
            return 'success'
        }
        catch(e) {
            return e
        }
    },

    async getPlans({ commit }) {
        try {
            let plans = await this.$axios.$get('plans')
            commit('ALL_PLANS', plans)
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
    allPlans: state => state.plans
}
