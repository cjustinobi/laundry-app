<template>
    <div class="product-page" :style="myStyle">
        <div class="product-tabs">
            <div class="fa"
                @click.prevent="toggleTab('products')" 
                :class="{'addColor': faCheckCircle, 'removeColor': !faCheckCircle}">
                <i class="fa fa-check-circle"></i> Items
            </div>
            <div class="demarcator"></div>
            <div class="fa" @click.prevent="toggleTab('address')">
                <i class="fa fa-check-circle"></i> Address
            </div>
            <div class="demarcator"></div>
            <div class="fa" @click.prevent="toggleTab('password')">
                <i class="fa fa-check-circle"></i> Time
            </div>
            <div class="demarcator"></div>
            <div class="fa" @click.prevent="toggleTab('subscriptions')">
                <i class="fa fa-check-circle"></i> Payment
            </div>
        </div>

        <div><all-products v-if="products"/></div>
        <div><editAddress v-if="address"></editAddress></div>
        <div><editPassword  v-if="password"></editPassword></div>
        <div><subscriptions v-if="subscriptions"/></div>
        
        
    </div>
</template>

<script>
    import AllProducts from '~/components/products/list'
    import EditAddress from '~/components/guest/editAddress'
    import EditPassword from '~/components/guest/editPassword'
    import Subscriptions from '~/components/guest/subscriptions'

    export default {

        layout: 'dashboard',

        components: {
            AllProducts,
            EditAddress, 
            EditPassword,
            Subscriptions
        },
        data() {
            return {
                myStyle: {
                    backgroundColor: "#f0faff"
                },
                faCheckCircle: true,
                products: true,
                address: false,
                password: false,
                subscriptions: false,
                insertMargin: false
            }
        },
        methods: {
            toggleTab(val) {
                if(val == 'products') {
                    this.address =false
                    this.password = false
                    this.subscriptions = false
                    return this.products = true
                }
                if(val == 'address') {
                    this.password =false
                    this.subscriptions =false
                    this.products = false
                    return this.address = true
                }
                if(val == 'password') {
                    this.subscriptions =false
                    this.products =false
                    this.address = false
                    return this.password = true
                }
                if(val == 'subscriptions') {
                    this.products =false
                    this.address = false
                    this.password = false
                    return this.subscriptions = true
                }
            },
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
    .product-page{
        display: grid;
        grid-template-rows: 50px;
        min-height: 100vh;
        grid-gap: 20px;
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


