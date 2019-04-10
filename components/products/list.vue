<template>
    <div>{{ products }}</div>
</template>

<script>
export default {
    computed: {
        products() {
            this.$store.getters['products/allProducts']
        }
    },
    beforeMount() {
        this.$store.dispatch('products/getProducts')
    }
}
</script>

