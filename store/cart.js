export const state = () => ({
    items: [],
    eleToUpdate: null
})

export const mutations = {
    ADD_TO_CART (state, { item, elId }) {
        if (state.items.length > 0) {
            // Check if this particular item has been added.
            const itm = state.items.find(itm => itm.id == item.id)
            if (itm) {
                // Item exist already, so increase the quantity.
                itm.qty++
                state.eleToUpdate = { qty: itm.qty, elId }
            } else {
                // This item has not been added yet.
                item.qty = 1
                state.items.push(item)
            }
        } else {
            // First item to be added to cart.
            item.qty = 1
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
        }
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
    }
}

export const getters = {
    items: state => state.items,
    eleToUpdate: state => state.eleToUpdate
}