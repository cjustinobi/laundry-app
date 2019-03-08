
import cookies from 'js-cookie'

export const state = () => ({
    token: '',
    user: ''
})

export const mutations = {
    SET_TOKEN (state, token) {
        state.token = token
    },

    SET_USER (state, user) {
        state.user = user
    }
}

export const actions = {
    async signIn({ commit }, payload) {
        try {
            let { user, token } = await this.$axios.$post('/api/login', payload)
            commit('SET_TOKEN', token)
            commit('SET_USER', user)
            cookies.set('x-access-token', token, {expires: 7})
            return this.$router.push('/dashboard')

        } catch (e) { console.log(e) }
    },

    logout({ commit }) {
        try {
            commit('SET_TOKEN', null)
            commit('SET_USER', null)
            cookies.remove('x-access-token')
            return this.$router.push('/login')

        } catch (e) { console.log(e) }
    }
}

export const getters = {
    token: state => state.token,
    user: user => state.user
}