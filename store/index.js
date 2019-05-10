import cookie from 'cookie'
import Axios from 'axios'

export const strict = false

export const actions = {
    async nuxtServerInit ({commit}, {req}) {
            console.log('from nuxt')
            const cookies = cookie.parse(req.headers.cookie || '')
            if (cookies.hasOwnProperty('x-access-token')) {
                // let result = await app.$axios.$get('me')
                // commit('auth/SET_USER', result)
                commit('auth/SET_TOKEN', cookies['x-access-token'])
            } else {
                // resetAuthToken()

            }

    }
}