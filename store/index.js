import cookie from 'cookie'
import Axios from 'axios'

export const strict = false

export const actions = {
    async nuxtServerInit ({commit}, {req}) {
            const cookies = cookie.parse(req.headers.cookie || '')
            if (cookies.hasOwnProperty('x-access-token')) {
                commit('auth/SET_TOKEN', cookies['x-access-token'])
            } else {
                // resetAuthToken()

            }

    }
}
