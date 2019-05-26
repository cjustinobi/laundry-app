import Vue from 'vue'

export const state = () => ({
    items: [],
    eleToUpdate: null,
    pickUpAddress: '',
    pickUpTime: ''
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
    }
}

export const getters = {
    items: state => state.items,
    eleToUpdate: state => state.eleToUpdate,
    pickUpAddress: state => state.pickUpAddress
}