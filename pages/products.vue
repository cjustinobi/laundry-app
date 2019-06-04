<template>
    <div class="product-page">
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
            <div class="fa" @click.prevent="toggleTab('time')"
                :class="{'addColor': time}">
                <i class="fa fa-check-circle"></i> Time
            </div>
            <div class="demarcator"></div>
            <div class="fa" @click.prevent="toggleTab('paymentPage')"
                :class="{'addColor': paymentPage}">
                <i class="fa fa-check-circle"></i> Payment
            </div>
        </div>

        <AllProducts v-if="products" @nextTab="toggleTab" />
        <UserAddresses v-if="address" @nextTab="toggleTab" class="insert-margin"/>
        <editPassword v-if="time" @nextTab="toggleTab" class="insert-margin"/>
        <PaymentPage v-if="paymentPage" class="insert-margin"/>
    </div>
</template>

<script>
    import AllProducts from '~/components/products/list'
    import UserAddresses from '~/components/shared/userAddresses'
    import EditPassword from '~/components/guest/editPassword'
    import PaymentPage from '~/components/guest/paymentPage'

    export default {

        layout: 'dashboard',

        components: { AllProducts, UserAddresses, EditPassword, PaymentPage },

        data() {
            return {
                products: true,
                address: false,
                time: false,
                paymentPage: false
            }
        },
        methods: {
            toggleTab(val) {
                if(val == 'products') {
                    this.address =false
                    this.time = false
                    this.paymentPage = false
                    return this.products = true
                }
                if(val == 'address') {
                    this.time =false
                    this.paymentPage =false
                    this.products = false
                    return this.address = true
                }
                if(val == 'time') {
                    this.paymentPage =false
                    this.products =false
                    this.address = false
                    return this.time = true
                }
                if(val == 'paymentPage') {
                    this.products =false
                    this.address = false
                    this.time = false
                    return this.paymentPage = true
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


