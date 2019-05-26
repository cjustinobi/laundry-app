<template>
    <div class="product-page">
        <ProductNavbar/>
    </div>
</template>

<script>
    import ProductNavbar from '~/components/dashboard/user/productNavbar'

    export default {

        layout: 'dashboard',

        components: { ProductNavbar },

        data() {
            return {
                
            }
        },
        methods: {
            
        },
        computed: {
           
        },

    }
</script>

<style scoped>
    .product-page{
        display: grid;
    }
  

    @media (max-width: 767px) {
       
    }
</style>


