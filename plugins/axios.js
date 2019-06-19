export default function ({ $axios, store }) {
    $axios.onRequest(config => {
        config.headers.common['access-token'] = store.state.auth.token
        config.headers.common['user_type'] = store.state.auth.user ? store.state.auth.user.user_type : null
        config.headers.common['user_id'] = store.state.auth.user ? store.state.auth.user.id : null
    })


    $axios.setHeader((config) => {
        config.headers.common['Access-Control-Allow-Origin'] = '*'
        config.headers.common['Access-Control-Allow-Credentials'] = 'true'
        config.headers.common['Access-Control-Allow-Methods'] = 'GET,HEAD,OPTIONS,POST,PUT'
        config.headers.common['Access-Control-Allow-Headers'] = `Access-Control-Allow-Headers, Origin,Accept, 
        X-Requested-With, Content-Type, 
        Access-Control-Request-Method, Access-Control-Request-Headers, user_id, user_type`
        return config
    })
}