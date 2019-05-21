<template>
    <div class="add-address">
        <!-- <div v-if="addresses && addresses.length > 0" v-for="(ad, i) in addresses" :key="i">
            <p>{{ ad.address }}</p>
            <p>{{ ad.city }}</p>
            <p>{{ ad.state }}</p>
        </div> -->
        <div class="add-wrapper">
            <div class="add-addresss-inner">
                <h4 class="address-head">Address (1)</h4>
                <div class="add-form">
                    <div class="font-folder">
                        <i class="fa fa-trash"></i>
                        <i class="fa fa-edit"></i>
                    </div>
                    <!-- <p>{{ ad.address }}</p>
                    <p>{{ ad.landmark  }}</p>
                    <p>{{ ad.state  }}</p>
                    <p>{{ ad.city }}</p> -->

                    <p>{{ address }}</p>
                    <p>{{ landmark  }}</p>
                    <p>{{ state  }}</p>
                    <p>{{ city }}</p>
                </div>
            </div>
        </div>
         <div class="add-sect">
            <button @click.prevent="signUp" class="add-button">
                Add Address
            </button>
        </div>
        <div>
            <AddressEditor/>
        </div>
        
    </div>
</template>

<script>
    import AddressEditor from '~/components/shared/addressEditor'
    export default {
            components: {AddressEditor},
            data() {
                return {
                    address: '30 Afaha Uqua, Road',
                    landmark: 'Mobil Mart',
                    state: 'Akwa Ibom State',
                    city: 'Eket'
                }
            },

        asyncComputed: {
            async addresses() {
                const res = await this.$axios.$get('addresses')
                this.$store.dispatch('users/getUserAddresses', res)
                return res
            }
        }

    }
</script>

<style scoped>
    .add-address{
        display: grid;
        /* height: 100%; */
        min-height: 100vh;
    }
    .add-wrapper{
        display: grid;
        /* grid-template-rows: 1fr 60px; */
        grid-template: 200px / repeat(auto-fit, minmax(250px, 300px));
        background-color: #fefefe;
        margin: 0 200px 0 200px; 
        padding: 20px;
        box-shadow: 5px 5px 15px grey;
        grid-gap: 10px;
        justify-items: center;
        justify-content: center;
    }
    .add-addresss-inner{
        display: grid;
        grid-template-rows: 30px 1fr;
        /* padding-top: 15px; */
    }
    .add-addresss-layout{
        /* display: grid;
        grid-template: 200px / repeat(auto-fit, minmax(250px, 300px));
        grid-gap: 20px; */
    }
    .address-head{
        /* margin-top: 30px; */
        color: #114e9e;
        display: grid;
        align-items: center;
        /* padding-left: 10px; */
    }
    .add-form{
        display: grid;
        grid-template-rows: 30px repeat(4, 20px);
        grid-gap: 10px;
        color: #114e9e;
        padding: 10px;
        border: 1px solid rgb(207, 207, 207);
        width: 300px;
    }
    .font-folder{
        display: grid;
        justify-content: flex-end;
        grid-template-columns: 30px 30px;
        border-bottom: 1px solid rgb(207, 207, 207);
        cursor: pointer;
    }
    .add-sect{
        display: grid;
        align-items: center;
        margin: 0 200px;
    }
    .add-button{
        height: 50px;
        /* width: 250px; */
        /* padding: 10px; */
        background-color: #01355f;
        color: #fefefe;
        font-size: 18px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: 0.6s ease-in;
    }
    .add-button:hover{
        background-color: #00122b;
    }

    @media (max-width: 767px) {
        .add-wrapper{
            /* grid-template-rows: 50px 30px 250px 50px; */
            /* width: 500px; */
            margin: 0 20px 40px 20px;
            padding: 20px;
            /* height: 450px; */
        }
        .add-form{
            grid-gap: 10px;
        }
        .address-head{
            margin-top: 10px;
        }
        .add-sect{
            margin: 10px 0;
        }
        .add-button{
            width: 200px;
            font-size: 14px;
        }
    }
</style>