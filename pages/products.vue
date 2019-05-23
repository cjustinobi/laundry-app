<template>
    <div class="product-page" :style="myStyle">
        <div class="product-tabs">
            <div class="fa"
                @click.prevent="toggleTab('products')" 
                :class="{'addColor': products}">
                <i class="fa fa-check-circle"></i> Items
            </div>
            <div class="demarcator"></div>
            <div class="fa" @click.prevent="toggleTab('address')"
                :class="{'addColor': address}">
                <i class="fa fa-check-circle"></i> Address
            </div>
            <div class="demarcator"></div>
            <div class="fa" @click.prevent="toggleTab('password')"
                :class="{'addColor': password}">
                <i class="fa fa-check-circle"></i> Time
            </div>
            <div class="demarcator"></div>
            <div class="fa" @click.prevent="toggleTab('paymentpage')"
                :class="{'addColor': paymentpage}">
                <i class="fa fa-check-circle"></i> Payment
            </div>
        </div>

        <AllProducts v-if="products" @nextTab="toggleTab" />
        <UserAddresses v-if="address" class="insert-margin"/>
        <editPassword v-if="password" class="insert-margin"/>
        <PaymentPage v-if="paymentpage" class="insert-margin"/>
        
        
    </div>
</template>

<script>
    import AllProducts from '~/components/products/list'
    import UserAddresses from '~/components/shared/userAddresses'
    import EditPassword from '~/components/guest/editPassword'
    import PaymentPage from '~/components/guest/paymentpage'

    export default {

        layout: 'dashboard',

        components: {
            AllProducts,
            UserAddresses, 
            EditPassword,
            PaymentPage
        },
        data() {
            return {
                myStyle: {
                    backgroundColor: "#f0faff"
                },
                products: true,
                address: false,
                password: false,
                paymentpage: false
            }
        },
        methods: {
           
            toggleTab(val) {
                if(val == 'products') {
                    this.address =false
                    this.password = false
                    this.paymentpage = false
                    return this.products = true
                }
                if(val == 'address') {
                    this.password =false
                    this.paymentpage =false
                    this.products = false
                    return this.address = true
                }
                if(val == 'password') {
                    this.paymentpage =false
                    this.products =false
                    this.address = false
                    return this.password = true
                }
                if(val == 'paymentpage') {
                    this.products =false
                    this.address = false
                    this.password = false
                    return this.paymentpage = true
                }
            },
        },
        computed: {
            users(){
                // return this.$store.getter['users/users']
            }
        },

        mounted() {
            // this.$store.dispatch('users/getUsers')
        }
    }
</script>

<style scoped>
    .product-page{
        display: grid;
        grid-template-rows: 50px;
        min-height: 100vh;
        /* grid-gap: 20px; */
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
    .insert-margin{
        margin-top: 60px;
    }
    
  

    @media (max-width: 767px) {
        .product-tabs{
            grid-template-columns: auto 20px auto 20px auto 20px auto;
            padding: 0 15px;
            grid-gap: 5px;
            font-size: 12px;
        }
        .demarcator{
            width: 20px;
        }
    }
</style>


