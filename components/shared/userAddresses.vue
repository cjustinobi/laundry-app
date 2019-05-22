<template>
    <div class="add-address">
        <div class="address-container">
            <div class="add-sect">
                <button class="add-button">Add Address</button>
            </div>
            <div class="add-wrapper" >
                <div class="add-addresss-layout" 
                    v-if="addresses && addresses.length > 0" v-for="(ad, i) in addresses" :key="i"
                >
                    <h4 class="address-head">Address (1)</h4>
                    <div class="add-form">
                        <div class="font-folder">
                            <i class="fa fa-trash"></i>
                            <i class="fa fa-edit"></i>
                        </div>
                        <p>{{ ad.address }}</p>
                        <p>{{ ad.landmark  }}</p>
                        <p>{{ ad.state  }}</p>
                        <p>{{ ad.city }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div :class="{'show-address': showAddress}">
            <AddressEditor />
        </div>
       
    </div>
</template>

<script>
    import AddressEditor from '~/components/shared/addressEditor'
    export default {
            components: {AddressEditor},
            data() {
                return {
                    showAddress: true,
                }
            },

        computed: {
            addresses() {
                return this.$store.getters['users/userAddresses']
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
        grid-template-rows: 50px 1fr;
        background-color: #fefefe;
        margin: 0 200px 40px 200px; 
        padding: 20px;
        box-shadow: 5px 5px 15px grey;
        grid-gap: 10px;
    }
    .add-wrapper{
        display: grid;
        grid-template: 200px / repeat(auto-fit, minmax(250px, 300px));
        grid-gap: 15px;
        justify-items: center;
        justify-content: center;
    }
    .add-addresss-layout{
        display: grid;
        grid-template-rows: 30px 155px;
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
        border: 1px solid rgb(207, 207, 207);
        width: 250px;
        font-size: 14px;
    }
    .font-folder{
        display: grid;
        justify-content: flex-end;
        grid-template-columns: 30px 30px;
        border-bottom: 1px solid rgb(207, 207, 207);
        cursor: pointer;
    }
    .show-address{
        display: none;
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
    .add-button:hover{
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