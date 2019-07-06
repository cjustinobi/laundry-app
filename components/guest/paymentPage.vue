<template>
    <div class="payment-container">
        <div class="address-time-container">
            <div class="address-inner">
                <div class="pick-address">
                    <div>
                        <div class="address-heading">
                            <h4 class="address-head">Pick-up Address</h4>
                            <div class="add-sect">
                                <button v-if="$route.path !== '/profile'" class="other-address"
                                        @click.prevent="useDefaultAddress = !useDefaultAddress"
                                >
                                    <span v-if="useDefaultAddress">See Other Addresses</span>
                                    <span v-if="!useDefaultAddress">Use Default Address</span>
                                </button>
                            </div>
                        </div>
                        <div class="add-wrapper" ref="add-wrapper">
                            <div
                                    class="add-addresss-layout"
                                    v-if="addresses && addresses.length > 0"
                                    v-for="(ad, i) in addresses"
                                    :ref="`address-layout-${ad.id}`"
                                    @click="setPickUpAddress(ad)"
                                    :key="i"
                            >
                                <div class="add-form">
                                    <div class="font-folder">
                                        <h4 v-if="ad.defaultAddress" class="address-head-default">Default Address</h4>
                                        <div class="edit-trash">
                                            <i @click.prevent="editAddress(ad)" class="fa fa-edit"></i>
                                            <i @click="delAddress(ad.id)" class="fa fa-trash"></i>
                                        </div>
                                    </div>
                                    <p>{{ ad.address }}</p>
                                    <p>{{ ad.landmark  }}</p>
                                    <p>{{ ad.state  }}</p>
                                    <p>{{ ad.city }}</p>
                                </div>
                            </div>
                            <div v-else>
                                <h4>You have not created address</h4>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="address-heading">
                            <h4 class="address-head"> Delivery Address</h4>
                            <div class="add-sect">
                                <!-- <button
                                    v-if="$route.path == '/profile' && addresses.length == 0"
                                    class="add-button"
                                    @click.prevent="showAddressForm = true"
                                > Add Address
                                </button>
                                <button v-else class="add-button" @click.prevent="showAddressForm = true"> Add Address</button> -->
                                <button v-if="$route.path !== '/profile'" class="other-address"
                                        @click.prevent="useDefaultAddress = !useDefaultAddress"
                                >
                                    <span v-if="useDefaultAddress">See Other Addresses</span>
                                    <span v-if="!useDefaultAddress">Use Default Address</span>
                                </button>
                            </div>
                        </div>
                        <div class="add-wrapper" ref="add-wrapper">
                            <div
                                    class="add-addresss-layout"
                                    v-if="addresses && addresses.length > 0"
                                    v-for="(ad, i) in addresses"
                                    :ref="`address-layout-${ad.id}`"
                                    @click="setPickUpAddress(ad)"
                                    :key="i"
                            >
                                <div class="add-form">
                                    <div class="font-folder">
                                        <h4 v-if="ad.defaultAddress" class="address-head-default">Default Address</h4>
                                        <div class="edit-trash">
                                            <i @click.prevent="editAddress(ad)" class="fa fa-edit"></i>
                                            <i @click="delAddress(ad.id)" class="fa fa-trash"></i>
                                        </div>
                                    </div>
                                    <p>{{ ad.address }}</p>
                                    <p>{{ ad.landmark  }}</p>
                                    <p>{{ ad.state  }}</p>
                                    <p>{{ ad.city }}</p>
                                </div>
                            </div>
                            <div v-else>
                                <h4>You have not created address</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="line-demarcator"></div>
                <div class="pick-address">
                    <div>
                        <div class="edit-address"><h4>Estimated collection time</h4> <i class="fa fa-edit"></i></div>
                        <p>02:00PM - 04:00PM on 19th Mar, 2019</p>
                    </div>
                    <div>
                        <div class="edit-address"><h4>Estimated delivery time</h4> <i class="fa fa-edit"></i></div>
                        <p>02:00PM - 04:00PM on 19th Mar, 2019</p>
                    </div>
                </div>
                <div class="payment-method">
                    <div class="payment-inner">
                        <h4>Payment Method</h4>
                        <div class="select-payment">
                            <div class="card-payment" :class="{'change-color': cardPayment}"
                                 @click.prevent="togglePayment('cardPayment')">
                                <i class="fa fa-check-circle"></i> Card Payment
                            </div>
                            <div class="bank-transfer" :class="{'change-color': bankTransfer}"
                                 @click.prevent="togglePayment('bankTransfer')">
                                <i class="fa fa-check-circle"></i> Bank Transfer
                            </div>
                            <div class="pod" :class="{'change-color': payOnDelivery}"
                                 @click.prevent="togglePayment('payOnDelivery')">
                                <i class="fa fa-check-circle"></i> Pay on delivery
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cart-summary">
                <OrderSummary/>
            </div>
        </div>
        <Cart/>
    </div>
</template>

<script>

    import Cart from '~/components/dashboard/user/cart'
    import OrderSummary from '~/components/dashboard/user/orderSummary'

    export default {

        components: { Cart, OrderSummary },

        data() {
            return {
                address: '',
                useDefaultAddress: true,
                defaultAddress: this.$route.path.includes('profile'),
                cardPayment: true,
                bankTransfer: false,
                payOnDelivery: false
            }
        },
        methods: {

            editAddress(address) {
                this.editMode = true
                this.showAddressForm = true
                this.address = address
            },

            async delAddress(id) {
                try {
                    await this.$store.dispatch('users/deleteAddress', id)
                    this.$store.dispatch('notifications/setStatus', {
                        messages: ['address deleted'], state: 'success'
                    })
                } catch (e) {
                    console.log(e)
                }
            },

            setPickUpAddress(address) {
                const clickedEl = this.$refs[`address-layout-${address.id}`]
                if (clickedEl[0].style.backgroundColor === 'rgb(172, 228, 172)') {
                    // Add background to the clicked element.
                    clickedEl[0].style.backgroundColor = '#fefefe'
                    // None is selected.
                    this.$store.dispatch('cart/pickUpAddress', null)
                } else {
                    // Remove background from elements.
                    const parentEl = document.querySelector('.add-wrapper')
                    // const parentEl = this.$refs['add-wrapper']
                    for (let i = 0; i < parentEl.children.length; i++) {
                        if (parentEl.children[i].style.backgroundColor === 'rgb(172, 228, 172)') {
                            parentEl.children[i].style.backgroundColor = '#fefefe'
                        }
                    }
                    // Add background to the clicked element.
                    clickedEl[0].style.backgroundColor = 'rgb(172, 228, 172)'
                    // Store the pickup address.
                    this.$store.dispatch('cart/pickUpAddress', address)
                }
            },
            togglePayment(val){
                if(val == 'cardPayment') {
                    this.bankTransfer = false
                    this.payOnDelivery = false
                    return this.cardPayment = true
                }
                if(val == 'bankTransfer') {
                    this.payOnDelivery = false
                    this.cardPayment = false
                    return this.bankTransfer = true
                }
                if(val == 'payOnDelivery') {
                    this.cardPayment = false
                    this.bankTransfer = false
                    return this.payOnDelivery = true
                }
            }
        },

        computed: {
            addresses() {
                const addresses = this.$store.getters['users/userAddresses']
                return this.$route.path.includes('profile') || this.useDefaultAddress ?
                    addresses.filter(ad => ad.defaultAddress) : addresses
            },
            pickUpAddress() {
                return this.$store.getters['cart/pickUpAddress']
            }
        },

        beforeMount() {
            this.$store.dispatch('users/getUserAddresses')
        },

        mounted() {
            if (this.useDefaultAddress) {
                console.log('mounted ' + this.addresses)
            }
        },

        watch: {
            addresses() {
                // Selects and stores default address by default.
                if(!this.pickUpAddress && this.addresses.length > 0 && this.useDefaultAddress) {
                    const addresses = this.addresses
                    if (addresses[0].defaultAddress) {
                        this.$nextTick(() => {
                            const defaultAd = this.$refs[`address-layout-${addresses[0].id}`]
                            defaultAd[0].style.backgroundColor = 'rgb(172, 228, 172)'
                            this.$store.dispatch('cart/pickUpAddress', addresses[0])
                        })
                    }
                }
            }
        },

        destroyed() {
            document.body.style.background = "none";
        }
    }
</script>

<style scoped>
    .payment-container{
        display: grid;
        font-size: 14px;
    }
    .address-time-container{
        display: grid;
        grid-template-columns: 1fr auto;
        grid-gap: 50px;
    }
    a{
        text-decoration: none;
    }
    .address-inner{
        display: grid;
        color: #114e9e;
        background-color: #fefefe;
        border-bottom: 1px solid rgb(207, 207, 207);
        box-shadow: 5px 5px 15px grey;
        margin: 0 0 40px 40px;
        padding: 15px;
        grid-gap: 10px;
    }
    .pick-address{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        padding-top: 5px;
    }
    .edit-address{
        display: grid;
        grid-template-columns: 1fr 50px;
        margin-bottom: 8px;
    }
    .fa-edit{
        color: #e7b83f;
        cursor: pointer;
    }
    .line-demarcator{
        background-color: rgb(194, 194, 194);
        height: 1px;
    }
    .payment-method{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .select-payment{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        font-size: 13px;
        margin-top: 8px;
    }
    .payment-inner{
        grid-column: 2 / 3;
        padding-left: 10px;
    }
    .card-payment{
        cursor: pointer;
    }
    .bank-transfer{
        cursor: pointer;
    }
    .pod{
        cursor: pointer;
    }
    .change-color{
        color: #e7b83f;
    }
    .cart-summary{
        display: grid;
        grid-template-rows: 40px 1fr;
        height: 300px;
        color: #114e9e;
        background-color: #fefefe;
        border-bottom: 1px solid rgb(207, 207, 207);
        box-shadow: 5px 5px 15px grey;
        margin-right: 40px;
        font-size: 14px;
    }
    .cart{
        display: grid;
        align-items: center;
        background-color: rgb(241, 241, 241);
        padding-left: 15px;
    }
    .cart-inner{
        padding: 15px;
        display: grid;
        grid-template-rows: 90px 30px 30px 50px;
        align-items: center;
        grid-gap: 8px;
    }
    .total{
        display: grid;
        grid-template: repeat(3, 30px) / 1fr 60px;
    }
    .gift{
        color: #e7b83f;
    }
    img{
        width: 20px;
    }
    .pay-now{
        height: 40px;
        width: 200px;
        padding: 10px;
        background-color: #e7b83f;
        color: #fefefe;
        font-size: 17px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: 0.6s ease-in;
        box-shadow: 5px 5px 15px grey;
    }
    .pay-now:hover{
        background-color: #f58b13;
    }


    .address-heading{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
    .add-wrapper{
        display: grid;
        /* grid-template: 155px / repeat(auto-fit, minmax(250px, 300px)); */
        grid-template-rows: repeat(auto-fit, 155px);
        grid-gap: 15px;
        justify-items: center;
        justify-content: center;
        padding: 10px 0;
    }
    .add-addresss-layout{
        display: grid;
        grid-template-rows: 30px 120px;
        border: 1px solid rgb(207, 207, 207);
        cursor: pointer;
    }
    .address-head{
        color: #e7b83f;
        display: grid;
        align-items: center;
    }
    .address-head-default{
        color: #114e9e;
        display: grid;
        align-items: center;
    }
    .add-form{
        display: grid;
        grid-template-rows: 20px repeat(4, 20px);
        grid-gap: 8px;
        color: #114e9e;
        padding: 10px;
        width: 250px;
        font-size: 14px;
    }
    .font-folder{
        display: grid;
        grid-template-columns: 1fr;
        position: relative;

    }
    .fa-trash{
        color: indianred;
        cursor: pointer;
    }
    .fa-edit{
        color: darkblue;
        cursor: pointer;
    }
    .edit-trash{
        display: grid;
        grid-template-columns: 30px 30px;
        cursor: pointer;
        position: absolute;
        right: 0;
    }
    .add-sect{
        display: grid;
        align-items: center;
        justify-self: flex-end;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
    }
    .add-button{
        height: 40px;
        width: 150px;
        background-color: #01355f;
        color: #fefefe;
        font-size: 14px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: 0.6s ease-in;
    }
    .add-button:hover{
        background-color: #011f49;
    }
    .other-address{
        height: 30px;
        width: 120px;
        background-color: #01355f;
        color: #fefefe;
        font-size: 11px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: 0.6s ease-in;
    }
    .other-address:hover{
        background-color: #011f49;
    }


    @media (max-width: 1124px) {
        .payment-container{
            grid-template-rows: 1fr;
        }
        .address-time-container{
            grid-template: 1fr / 1fr;
            grid-gap: 30px;
            height: 100%;
        }
        .address-inner{
            margin: 0 20px;
            font-size: 12px;
        }
        .pick-address{
            grid-gap: 10px;
            grid-template-columns: 1fr;
        }
        .payment-method{
            grid-template-columns: 1fr;
        }
        .select-payment{
            font-size: 11px;
        }
        .payment-inner{
            grid-column-start: 1;
            padding: 0;
        }
        .cart-summary{
            margin: 0 20px 20px 20px;
        }
    }

    @media (max-width: 767px) {
        .address-heading{
            grid-gap: 10px;
        }
        .add-wrapper{
            grid-template: 157px / repeat(auto-fit, minmax(250px, 300px));
        }
        .add-button{
            width: 100px;
            height: 40px;
            font-size: 11px;
        }
        .other-address{
            height: 30px;
            width: 120px;
            font-size: 11px;
        }
    }

    @media (max-width: 400px) {
        .address-heading{
            grid-gap: 10px;
        }
        .add-button{
            width: 100px;
            height: 40px;
            font-size: 10px;
        }
        .other-address{
            height: 3   0px;
            width: 120px;
            font-size: 10px;
        }
    }
</style>