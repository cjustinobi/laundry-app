export const state = () => ({
    users: ''
})

export const mutations = {


    SET_USERS (state, users) {
        state.users = users
    }
}

export const actions = {
    async getUsers({ commit }) {
        try {
            let users = await this.$axios.$get('/api/users')
            commit ('SET_USERS', users)
            return 'success'
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