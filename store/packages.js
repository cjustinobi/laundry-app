/*
export const state = () => ({
    packages: ''
})

export const mutations = {
    PACKAGES (state, payload) {
        state.packages = payload
    }
}

export const actions = {
    async store({ commit }, payload) {
        try {
            let res = await this.$axios.$post('/api/packages', payload)
            commit('PACKAGES', res)
            return 'success'
        }

        catch(e) {
            return e
        }
    }
}

export const getters = {
    state: state => state.packages
}*/
