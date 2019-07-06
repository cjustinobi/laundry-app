export default {

    methods: {
        incrementItem(product, i) {
            let el = this.$refs[`qty-${i}`]
            if (this.items.length > 0) {
                // Check if this particluar item has been added.
                const item  = this.items.find(item => item.id == product.id)
                if (item) {
                    // Item exist already, so increase the quantity.
                    item.qty++
                    el[0].innerText = item.qty
                    // Sync the store qty.
                    this.$store.dispatch('cart/updateItemQty', { itemId: product.id, qty: item.qty })
                } else {
                    // This item has not been added yet.
                    product.qty++
                    // this.items.push(product)
                    this.$store.dispatch('cart/addToCart', { item: product, elId: i })
                }

            } else {
                // No item has been added yet.
                product.qty++
                this.$store.dispatch('cart/addToCart', { item: product, elId: i })
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
        },
        getQty(productId) {
            let items = this.$store.state.cart.items
            if (items.length > 0) {
                const item = items.filter(item => item.id === productId)
                if (item.length > 0) {
                    return item[0].qty
                }
            }
            return 1
        },
        async checkout() {
            await this.$axios.$post('order')
        }
    },

    mounted() {
        this.getQty()
    },

    computed: {
        eleToUpdate() {
            return this.$store.getters['cart/eleToUpdate']
        },
        items() {
            return this.$store.getters['cart/items']
        },
        itemsInCart(){
            let cart = this.$store.getters['cart/items']
            return cart.reduce((accum, item) => accum + item.qty, 0)
        },
        subTotal(){
            let subTotal = this.$store.getters['cart/items']
            return subTotal.reduce((accum, item) => accum + item.subTotal, 0)
        },
    },

    watch: {
        eleToUpdate(e) {
            if (e != null) {
                let el = this.$refs[`qty-${e.elId}`]
                if (el) {
                    el[0].innerText = e.qty
                }
            }
        }
    }
}