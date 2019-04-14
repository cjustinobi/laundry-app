import cookie from 'cookie'


export const strict = false

export const state = () => ({

})


export const mutations = {

}

export const actions = {
    nuxtServerInit ({commit}, {req}) {

            const cookies = cookie.parse(req.headers.cookie || '')
            if (cookies.hasOwnProperty('x-access-token')) {
                commit('auth/SET_TOKEN', cookies['x-access-token'])
            } else {
                // resetAuthToken()

            }

    }
}