<template>
    <div class="add-address">
        <div class="address-container">
            <div class="address-heading">
                <h4 class="address-head">Address</h4>
                <div class="add-sect">
                    <button 
                        v-if="$route.path == '/profile' && addresses.length == 0" 
                        class="add-button" 
                        @click.prevent="showAddressForm = true"
                    > Add Address
                    </button>
                    <button v-if="$route.path !== '/profile'" class="other-address"
                            @click.prevent="useDefaultAddress = !useDefaultAddress"
                    >
                        <span v-if="useDefaultAddress">See other addresses</span>
                        <span v-if="!useDefaultAddress">See default</span>
                    </button>
                </div>
            </div>
            <div class="add-wrapper" >  
                <div class="add-addresss-layout" v-if="addresses && addresses.length > 0" v-for="(ad, i) in addresses" :key="i">   
                    <div class="add-form">             
                        <div class="font-folder">
                            <h4 v-if="ad.defaultAddress" class="address-head">Default address</h4>              
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
                    console.log('hghe')
                }
            }
        },

        computed: {
            addresses() {
                const addresses = this.$store.getters['users/userAddresses']
                return this.$route.path.includes('profile') || this.useDefaultAddress ? 
                addresses.filter(ad => ad.defaultAddress) : addresses
                 
            }
        },

        beforeMount() {
            this.$store.dispatch('users/getUserAddresses')
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
        /* height: 100%; */
        /* min-height: 100vh; */
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
    }
    .add-wrapper{
        display: grid;
        grid-template: 155px / repeat(auto-fit, minmax(250px, 300px));
        grid-gap: 15px;
        justify-items: center;
        justify-content: center;
    }
    .add-addresss-layout{
        display: grid;
        grid-template-rows: 30px 110px;
        border: 1px solid rgb(207, 207, 207);
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
    }
    .add-button{
        height: 45px;
        width: 150px;
        background-color: #01355f;
        color: #fefefe;
        font-size: 14px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: 0.6s ease-in;
    }
    .other-address{
        height: 40px;
        width: 150px;
        background-color: #054579;
        color: #fefefe;
        font-size: 13px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: 0.6s ease-in;
    }
    .other-address{
        background-color: #011f49;
    }

    @media (max-width: 767px) {
        .address-container{
            grid-template-rows: 40px 1fr;
            margin: 0 20px 40px 20px;
            padding: 10px;
        }
        .add-button{
            width: 100px;
            height: 40px;
            font-size: 13px;
        }
    }
</style>