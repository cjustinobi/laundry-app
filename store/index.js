import cookie from 'cookie'

export const strict = false

export const actions = {
    async nuxtServerInit ({commit}, {req}) {

            const cookies = cookie.parse(req.headers.cookie || '')
            if (cookies.hasOwnProperty('x-access-token')) {
                //let res = await this.$axios.$get('me')
                //commit('auth/SET_USER', res)
                commit('auth/SET_TOKEN', cookies['x-access-token'])
            } else {
                // resetAuthToken()

            }

    }
}
