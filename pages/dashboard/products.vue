<template>
    <div class="product" :style="myStyle">
        <div class="product-tabs">
            <div class="fa" :class="{'addColor': faCheckCircle, 'removeColor': !faCheckCircle}">
                <i class="fa fa-check-circle"></i> Items
            </div>
            <div class="demarcator"></div>
            <div class="fa">
                <i class="fa fa-check-circle"></i> Address
            </div>
            <div class="demarcator"></div>
            <div class="fa">
                <i class="fa fa-check-circle"></i> Time
            </div>
            <div class="demarcator"></div>
            <div class="fa">
                <i class="fa fa-check-circle"></i> Payment
            </div>
        </div>

        <div>
            <all-products/>
        </div>
        
        
    </div>
</template>

<script>
    import AllProducts from '~/components/products/list'
    export default {

        layout: 'dashboard',

        components: {
            AllProducts
        },
        data() {
            return {
                myStyle: {
                    backgroundColor: "#f0faff"
                },
                faCheckCircle: true
            }
        },
        computed: {
            users(){
                return this.$store.getter['users/users']
            }
        },

        mounted() {
            this.$store.dispatch('users/getUsers')
        }
    }
</script>

<style scoped>
    .product{
        display: grid;
        grid-template-rows: 50px 1fr;
        min-height: 100vh;
    }
    .product-tabs{
        display: grid;
        justify-content: center;
        color: #114e9e;
        background-color: #fefefe;
        grid-template-columns: auto 40px auto 40px auto 40px auto;
        align-items: center;
        grid-gap: 9px;
    }
    .demarcator{
        width: 40px;
        height: 1px;
        background-color: #898f97;
    }
    .fa{
        cursor: pointer;
    }
    .addColor{
        color: #e7b83f;
    }
    .removeColor{
        color: #114e9e;
    }
    
  

    @media (max-width: 767px) {
        
    }
</style>


