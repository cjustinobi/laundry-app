<template>
    <div class="product-page">
        <productNavbar/>
    </div>
</template>

<script>
    import productNavbar from '~/components/dashboard/user/productNavbar'

    export default {

        layout: 'dashboard',

        components: {productNavbar},
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


