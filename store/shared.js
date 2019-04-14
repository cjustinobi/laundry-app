
// States
export const state = () =>({
    selectedIndex: ''
})

// mutations
export const mutations = {
    SELECTED_INDEX (state, payload) {
        state.selectedIndex = payload
    }
}

// actions

export const actions = {

    selectedIndex({ commit }, payload) {
        commit('SELECTED_INDEX', payload)
    },
    async deleteItem({ commit }, {i, api}) {
        try {
            await this.$axios.$delete(`${api}${i}`)
        } catch (err) {
            return console.log(`error ${err}`)
        }
    }
}

// Getters
export const getters = {
    selectedIndex: state =>  state.selectedIndex,
}
