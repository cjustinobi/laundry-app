export const state = () =>({
    success: false,
    error: false,
    messages: ''
})

export const mutations = {
    SET_STATUS (state, payload) {
        if (payload.state === 'success') {
            state.success = true
            state.messages = payload.messages
        }
        if (payload.state === 'error') {
            state.error = true
            state.messages = payload.messages
        }
        if (payload.state === null) {
            state.success = state.error = false
            state.messages = ''
        }
    }
}

export const actions = {
    setStatus({ commit}, payload) {
        commit ('SET_STATUS', payload)
    }
}

export const getters = {
    success: state => state.success,
    error: state => state.error,
    messages: state => state.messages
}