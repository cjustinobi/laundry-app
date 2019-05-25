<template>
    <div class="edit-address">
        <div class="edit-address-wrapper">
            <form class="update-form">
                <div class="close-package">
                    <a href="#" @click.prevent="$emit('cancelForm')"><i class="fa fa-window-close"></i></a>
                </div>
                <label for="address">
                    <input v-model="details.address" id="address" placeholder="Street Name" required>
                </label>
                <label for="landmark"> 
                    <input v-model="details.landmark" id="landmark" placeholder="Nearest Bus Stop" required>
                </label>
                <label for="state" >
                    <select class="state-select" v-model="details.state" @change="getLgas" id="state" required>
                        <option disabled>Select state</option>
                        <option v-if="states" :value="state.state.name" v-for="(state, i) in states" :key="i">{{ state.state.name }}</option>
                    </select>
                </label>
                <label for="city">
                    <select class="state-select" v-model="details.city" id="city" required>
                        <option v-if="editMode" :value="details.city">{{ details.city }}</option>
                        <option v-else disabled>Select city</option>
                        <option :value="lga.name" v-for="(lga, i) in lgas" :key="i">{{ lga.name }}</option>
                    </select>
                </label>
                <button v-if="!details.defaultAddress">Make default address</button>
                <div class="update-sect">
                    <button class="btn-cancel" @click.prevent="$emit('cancelForm')">Cancel</button>
                    <button @click.prevent="saveAddress" class="update-button">
                        <span v-if="!isLoading">Save Address</span>
                        <img class="loading" v-else src="~/assets/images/loading.gif" alt="elegant image">
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

    import ClearFields from '~/mixins/formElements'

    export default {

        props: ['editMode', 'address', 'defaultAddress'],

        mixins: [ClearFields],

        data() {
            return {
                details: {
                    address: '',
                    landmark: '',
                    state: 'Select state',
                    city: 'Select city',
                    defaultAddress: this.defaultAddress
                },
                lgas: []
            }
        },

        methods: {

            async saveAddress() {
                if(
                    this.details.address === '' ||
                    this.details.state === 'Select state' ||
                    this.details.city === 'Select state'
                ) {
                    return this.$store.dispatch('notifications/setStatus',
                        { messages: ['all fields are required'], state: 'error'
                    })
                }
                try {
                    this.details.userId = this.user.id
                    await this.$store.dispatch('users/storeAddress', { editMode: this.editMode, data: this.details })
                    this.isLoading = false
                    this.clearFields(this.details)
                    this.$store.dispatch('notifications/setStatus', {
                        messages: ['address created'], state: 'success'
                    })
                    this.$emit('cancelForm')
                } catch (e) {
                    this.isLoading = false
                    console.log(e)
                }
            },

            getLgas(e) {
                this.details.city = 'Select city'
                this.lgas = this.states.filter(state => state.state.name === e.target.value)[0].state.locals
            }
        },

        asyncComputed: {
            async states() {
                let res = await fetch('statesLgas.json')
                return res.json()
            }
        },

        watch: {
            editMode(e) {
                if (e) {
                    this.details = this.address
                    this.details.city = this.address.city
                }
            }
        },

        destroyed() {
            document.body.style.background = "none";
        }
    }
</script>

<style scoped>
    .edit-address{
        display: grid;
        /* min-height: 100vh; */
        /* height: 100%; */
    }
    a{
        text-decoration: none;
    }
    .edit-address-wrapper{
        display: grid;
        justify-content: center;
        align-items: center;
    }
    .update-form{
        display: grid;
        grid-template-rows: 20px repeat(5, 40px);
        grid-gap: 12px;
        padding: 20px;
        background-color: #e9e9e9;
        border-radius: 5px;
        border: 1px solid grey;
        width: 400px;
        color: #114e9e;
    }
    .close-package{
        display: grid;
        justify-items: flex-end;
        align-content: center;
    }.close-package a{
        color: rgb(245, 100, 100);
    }
    .close-package a:hover{
        color: rgb(240, 59, 59);
        transition: 0.3s ease-in;
    }
    .update-form input{
        width: 100%;
        padding: 10px;
        border: none;
        border: 1px solid rgb(207, 207, 207);
        font-size: 14px;
        outline-style: none;
        height: 30px;
        /* color: #adadad; */
    }
    .form-label{
        height: 50px;
    }
    .state-select{
        height: 30px;
        width: 100%;
        border: 1px solid rgb(207, 207, 207);
        font-size: 14px;
        outline: none;
        /* color: #969696; */
    }
    .update-sect{
        display: grid;
        align-items: center;
        grid-template-columns: repeat(2, auto);
        grid-gap: 20px;
    }
    .btn-cancel{
        height: 40px;
        width: 140Px;
        color: #000;
        font-size: 16px;
        transition: 0.3s ease-in;
        background-color: #d8d8d8;
        outline: none;
        border: none;
        cursor: pointer;
    }
    .btn-cancel:hover{
        background-color: #b8b8b8;
    }
    .update-button{
        height: 40px;
        width: 192px;
        padding: 10px;
        background-color: #e7b83f;
        color: #fefefe;
        font-size: 16px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: 0.6s ease-in;
    }
    .update-button:hover{
        background-color: #f58b13;
    }

    @media (max-width: 767px) {
        .edit-address-wrapper{
            padding: 20px;
            margin: 0 20px 40px 20px;
        }
        .update-form{
            width: 300px;
            /* height: 300px;  */
        }
        .update-form input{
            font-size: 12px;
        }
        .state-select{
            font-size: 12px;
        }
        .update-sect{
            display: grid;
            align-items: center;
            margin: 0;
        }
        .form-label{
            height: 50px;
        }
        .btn-cancel{
            width: 100px;
        }
        .update-button{
            width: 132px;
            font-size: 14px;
        }
    }
</style>