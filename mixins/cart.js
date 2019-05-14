export default {
    methods: {
        incrementItem(product, i) {
            let el = this.$refs[`qty-${i}`]
            if (this.items.length > 0) {
                // Check if this particluar item has been added.
                const item  = this.items.find(item => item.id == product.id)
                if (item) {
                    // Item exist already, so increase the quantity.
                    
                    el[0].innerText = item.qty
                    // Sync the store qty.
                    this.$store.dispatch('cart/updateItemQty', { itemId: product.id, qty: item.qty })
                } else {
                    // This item has not been added yet.
                    product.qty = ++el[0].innerText
                    this.items.push(product) 
                }
                
            } else {
                // No item has been added yet.
                product.qty = ++el[0].innerText
                this.items.push(product)
            }
        },
        decrementItem(itemId, i) {
            let el = this.$refs[`qty-${i}`]
            if (this.items.length > 0) {
                // Check if this particluar item has been added.
                const item  = this.items.find(item => item.id == itemId)
                if (item && item.qty > 1) {
                    item.qty--
                    el[0].innerText = item.qty
                    // Sync the store qty.
                    this.$store.dispatch('cart/updateItemQty', { itemId, qty: item.qty })
                }
            }
        }
    },

    computed: {
        eleToUpdate() {
            return this.$store.getters['cart/eleToUpdate']
        }
    },

    watch: {
        eleToUpdate(e) {
            if (e != null) {
                let el = this.$refs[`qty-${e.elId}`]
                el[0].innerText = e.qty
            }
        }
    }
}