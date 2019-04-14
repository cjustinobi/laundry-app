<template>
    <div>
        <div class="product" v-for="(product, i) in products" :key="i">
            <p>{{ product.name }}</p>
            <p>{{ product.price }}</p>
            <p>{{ product.category.name }}</p>
            <actions
                    @editItem="editItem"
                    @removeItem="removeItem"
                    :itemId="product.id" :api="api">
            </actions>
        </div>
    </div>
</template>

<script>

import Actions from '~/components/shared/actions'

export default {

    components: { Actions },

    data() {
        return {
            api: '/api/products/'
        }
    },

    methods: {
        editItem(i) {
            this.showForm = true;
            this.editDetail = this.products.find(product => product.id === i)
        },
        removeItem(i) {
            this.$store.dispatch('products/removeItem', i)
        }
    },

    computed: {
        products() {
            return this.$store.getters['products/allProducts']
        }
    },
    beforeMount() {
        this.$store.dispatch('products/getProducts')
    }
}
</script>

<style lang="scss" scoped>
    .product{
        position: relative;
    }
</style>

