export const state = () => ({
    users: ''
})

export const mutations = {


    GET_USERS (state, users) {
        state.users = users
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
    }

}

// getters
export const getters = {
    users: state => state.users,
    
}