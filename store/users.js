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
    },

    ADD_UPDATE_ADDRESS ( state, { editMode, address }) {
        if (editMode) {
            const addressIndex = state.userAddresses.findIndex(item => item.id === address.id)
            return state.userAddresses[addressIndex] = address
        }
        state.userAddresses.push(address)
    },

    REMOVE_ADDRESS (state, addressId) {
        state.userAddresses = state.userAddresses.filter(address => address.id !== addressId)
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

    async storeAddress({ commit }, { editMode, data}) {
        try {
            let address
            if (editMode) {
                address = await this.$axios.$put(`addresses/${data.id}`, data)
            } else {
                address = await this.$axios.$post('addresses', data)
            }
            commit('ADD_UPDATE_ADDRESS', { editMode, address })
        } catch (e) {
            return e
        }
    },

    async getUserAddresses({ commit }, addresses = null) {
        if (addresses) {
            return commit('USER_ADDRESSES', addresses)
        }
        const res = await this.$axios.$get('addresses')
        commit('USER_ADDRESSES', res)
    },

    async deleteAddress({ commit }, addressId) {
        try {
            await this.$axios.$delete(`addresses/${addressId}`)
            commit('REMOVE_ADDRESS', addressId)
        } catch (e) {
            return e
        }
    }

}

// getters
export const getters = {
    users: state => state.users,
    userAddresses: state => state.userAddresses,

}