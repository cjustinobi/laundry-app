export const state = () => ({
    users: '',
    userAddresses: []
})

export const mutations = {

    GET_USERS (state, users) {
        state.users = users
    },

    USER_ADDRESSES (state, addresses) {
        state.userAddresses = addresses
    }
}

export const actions = {
    async getUsers({ commit }) {
        try {
            let { data } = await this.$axios.$get('users')
            commit ('GET_USERS', data)
        }
        catch (err) {
            return err
        }
    },

    async getUserAddresses({ commit }, addresses = null) {
        if (addresses) {
            return commit('USER_ADDRESSES', addresses)
        }
        const res = await this.$axios.$get('addresses')
        commit('USER_ADDRESSES', res)
    }

}

// getters
export const getters = {
    users: state => state.users,
    userAddresses: state => state.userAddresses,

}