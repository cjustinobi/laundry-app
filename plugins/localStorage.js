import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
    window.onNuxtReady(() => {
        createPersistedState({
            key: 'laundry',
            storage: window.sessionStorage,
            reducer: state => ({
                auth: state.auth,
                cart: state.cart
            })
        })(store)
    })
}