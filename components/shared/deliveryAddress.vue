<template>
    <div class="add-address">
        <div class="address-container">
            <div class="address-heading">
                <h4 class="address-head">Pick-up Address</h4>
                <div class="add-sect">
                    <button 
                        v-if="$route.path == '/profile' && addresses.length == 0" 
                        class="add-button" 
                        @click.prevent="showAddressForm = true"
                    > Add Address
                    </button>
                    <button v-else class="add-button" @click.prevent="showAddressForm = true"> Add Address</button>
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
                            <h4 v-if="ad.defaultAddress" class="address-head">Default Address</h4>              
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
        <div class="pre-next-btn">
            <button v-if="$route.path === '/products'" @click.prevent="$emit('nextTab', 'products')"
                    class="previous-btn"
            >
                <i class="fa fa-angle-double-left"></i> &nbsp; Previous 
            </button>
            <button v-if="$route.path === '/products'" @click.prevent="$emit('nextTab', 'time')"
                    class="next-btn"
            >
                <span>Next</span> &nbsp; <i class="fa fa-angle-double-right"></i>
            </button>
        </div>

        <div :class="{'backdrop': showAddressForm}">
            <div :class="[{'show-form': showAddressForm, 'hide-form': !showAddressForm}]">
                <AddressEditor
                        :defAddress="defaultAddress"
                        :address="address"
                        :editMode="editMode"
                        @cancelForm="showAddressForm = false"
                />
            </div>
        </div>
        
    </div>
</template>

<script>

    import AddressEditor from '~/components/shared/addressEditor'

    export default {

        components: { AddressEditor },

        data() {
            return {
                editMode: false,
                showAddressForm: false,
                checkCircle: false,
                address: '',
                useDefaultAddress: true,
                defaultAddress: this.$route.path.includes('profile') // User personal address is his default address.
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
        }

    }
</script>

<style scoped>
    .make-default-add{
        background: #5c55dc;
        padding: 5px;
    }
    .add-address{
        display: grid;
    }
    .address-container{
        display: grid;
        grid-template-rows: 40px 1fr;
        background-color: #fefefe;
        margin: 0 200px 40px 200px;
        padding: 20px;
        box-shadow: 5px 5px 15px grey;
        grid-gap: 10px;
    }
    .address-heading{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
    .add-wrapper{
        display: grid;
        grid-template: 155px / repeat(auto-fit, minmax(250px, 300px));
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
        /* justify-content: space-between; */
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
        /* justify-content: flex-end; */
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
        height: 40px;
        width: 150px;
        background-color: #01355f;
        color: #fefefe;
        font-size: 13px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: 0.6s ease-in;
    }
    .other-address:hover{
        background-color: #011f49;
    }
    .pre-next-btn{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 20px;
    }
    .previous-btn{
        height: 40px;
        width: 120px;
        background-color: #01355f;
        color: #fefefe;
        font-size: 12px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: 0.6s ease-in;
        justify-self: flex-end;
    }
    .next-btn{
        justify-self: flex-start;
        height: 40px;
        width: 120px;
        background-color: #e7b83f;
        color: #fefefe;
        font-size: 12px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: 0.6s ease-in;
    }

    @media (max-width: 767px) {
        .address-container{
            grid-template-rows: 40px 1fr;
            margin: 0 20px 40px 20px;
            padding: 10px;
        }
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
            height: 40px;
            width: 120px;
            font-size: 11px;
        }
        .previous-btn{
            height: 35px;
            width: 100px;
        }
        .next-btn{
            height: 35px;
            width: 100px;
        }
    }
    @media (max-width: 400px) {
        .address-container{
            grid-template-rows: 40px 1fr;
            margin: 0 20px 40px 20px;
            padding: 10px;
        }
        .address-heading{
            grid-gap: 10px;
        }
        .add-button{
            width: 100px;
            height: 40px;
            font-size: 10px;
        }
        .other-address{
            height: 40px;
            width: 120px;
            font-size: 10px;
        }
    }
</style>