import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
    createPersistedState({
        key: 'laundry',
        storage: window.sessionStorage,
        reducer: state => ({
            auth: state.auth,
            cart: state.cart
        })
    })(store)
}