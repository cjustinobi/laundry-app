
export const state = () => ({
    items: [],
    eleToUpdate: null,
    pickUpAddress: '',
    pickUpTime: '',
    order: ''
})

export const mutations = {
    ADD_TO_CART (state, { item, elId }) {
        if (state.items.length > 0) {
            // Check if this particular item has been added.
            const itm = state.items.find(itm => itm.id == item.id)
            if (itm) {
                // Item exist already, so increase the quantity.
                itm.qty++
                itm.subTotal = itm.price * itm.qty
                state.eleToUpdate = { qty: itm.qty, elId }
            } else {
                // This item has not been added yet.
                item.qty = 1
                item.subTotal = item.price * 1
                state.items.push(item)
            }
        } else {
            // First item to be added to cart.
            item.qty = 1
            item.subTotal = item.price * 1
            state.items.push(item)
        }
    },
    ELE_TO_UPDATE (state) {
        state.eleToUpdate = null
    },
    UPDATE_ITEM_QTY (state, { itemId, qty }) {
        const item = state.items.find(item => item.id == itemId)
        if (item) {
            item.qty = qty
            item.subTotal = item.price * item.qty
        }
    },
    DELETE_ITEM (state, itemId) {
        state.items = state.items.filter(item => item.id != itemId)
    },
    PICK_UP_ADDRESS (state, address) {
        state.pickUpAddress = address
    },
    PICK_UP_TIME (state, time) {
        state.pickUpTime = time
    },
    SET_ORDER (state, order) {
        state.order = order
    },
    CLEAR_CART (state) {
        state.items = []
        state.pickUpAddress = ''
        state.pickUpTime = ''
        state.order = ''
    }
}

export const actions = {
    addToCart({ commit }, payload) {
        commit('ADD_TO_CART', payload)
    },
    eleToUpdate({ commit }) {
        commit('ELE_TO_UPDATE')
    },
    updateItemQty({ commit }, payload) {
        commit('UPDATE_ITEM_QTY', payload)
    },
    deleteItem({ commit }, itemId) { 
        commit('DELETE_ITEM', itemId)
    },
    pickUpAddress({ commit }, payload) {
        commit('PICK_UP_ADDRESS', payload)
    },
    async createLead({ commit, rootState }, payload) {
        commit('PICK_UP_TIME', payload)
        const cartItems = rootState.cart.items.map(item => { return {
            product_id: item.id,
            qty: item.qty,
            price: item.price,
        }
        })

        const res = await this.$axios.$post('orders', {
            cartItems,
            pickup_time: rootState.cart.pickUpTime,
            pickup_address_id: rootState.cart.pickUpAddress.id
        })
        return commit('SET_ORDER', res)
    },
    clearCart({ commit }) {
        commit('CLEAR_CART')
    }
}

export const getters = {
    items: state => state.items,
    eleToUpdate: state => state.eleToUpdate,
    pickUpAddress: state => state.pickUpAddress
}