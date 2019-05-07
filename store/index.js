import cookie from 'cookie'

export const strict = false

export const actions = {
    async nuxtServerInit ({commit}, {req}) {

            const cookies = cookie.parse(req.headers.cookie || '')
            if (cookies.hasOwnProperty('x-access-token')) {
                // await this.$axios.$get('')
                commit('auth/SET_TOKEN', cookies['x-access-token'])
            } else {
                // resetAuthToken()

            }

    }
}