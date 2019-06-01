export default function ({ $axios, store }) {
    $axios.onRequest(config => {
        config.headers.common['access-token'] = store.state.auth.token
        config.headers.common['user_type'] = store.state.auth.user ? store.state.auth.user.user_type : null
        config.headers.common['user_id'] = store.state.auth.user ? store.state.auth.user.id : null
    })
}