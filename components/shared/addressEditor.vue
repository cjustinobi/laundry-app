<template>
    <div class="edit-address">
        <form class="edit-wrapper">
            <div class="update-form">
                <label for="address">Street name <br>
                    <input v-model="details.address" id="address" required>
                </label>
                <label for="landmark">Nearest Bus stop <br>
                    <input v-model="details.landmark" id="landmark" required>
                </label>
                <label for="state" >State <br>
                    <select v-model="details.state" @change="getLgas" id="state" required>
                        <option disabled>Select state</option>
                        <option :value="state.state.name" v-for="(state, i) in states" :key="i">{{ state.state.name }}</option>
                    </select>
                </label>
                <label for="city">City <br>
                    <input v-model="details.city" id="city" required>
                </label>
                <div class="update-sect">
                    <!-- <nuxt-link to="/addaddress"> -->
                        <button @click.prevent="saveAddress" class="update-button">
                            <span v-if="!isLoading">Save Address</span>
                            <img class="loading" v-else src="~/assets/images/loading.gif" alt="elegant image">
                        </button>
                    <!-- </nuxt-link>    -->
                </div>
            </div>
        </form>
    </div>
</template>

<script>

    import ClearFields from '~/mixins/formElements'

    export default {

        mixins: [ClearFields],

        data() {
            return {
                details: {
                    address: '',
                    landmark: '',
                    city: 'Select city',
                    state: 'Select state'
                }
            }
        },

        methods: {

            async saveAddress() {
                try {
                    this.details.userId = this.user.id
                    await this.$axios.$post('addresses', this.details)
                    this.isLoading = false
                    this.clearFields(this.details)
                    this.$store.dispatch('notifications/setStatus', {
                        messages: ['address created'], state: 'success'
                    })
                } catch (e) {
                    this.isLoading = false
                    console.log(e)
                }
            },

            getLgas(e) {
                console.log(e.target.value)
            }
        },

        asyncComputed: {
            async states() {
                let res = await fetch('statesLgas.json')
                return res.json()
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
    }
    .title{
        display: grid;
        justify-items: center;
        align-content: center;
        height: 80px;
        color: #114e9e;
        background-color: #f0faff;
        border-bottom: 1px solid rgb(207, 207, 207);
    }
    a{
        text-decoration: none;
    }
    .edit-wrapper{
        display: grid;
        background-color: #fefefe;
        margin: 0 200px 40px 200px;
        padding: 30px;
        box-shadow: 5px 5px 15px grey;
        grid-gap: 10px;
    }
    .update-form{
        display: grid;
        grid-template-rows: repeat(4, 20px), 70px;
        grid-gap: 10px;
        /* margin-top: 40px; */
        color: #114e9e;

    }
    .update-form input{
        width: 100%;
        padding: 5px;
        border: none;
        border-bottom: 1px solid rgb(207, 207, 207);
        font-size: 16px;
        outline-style: none;
        height: 20px;
    }
    .form-label{
        height: 50px;
    }
    .update-sect{
        display: grid;
        align-items: center;
        /* margin: 20px 0 40px 0; */
    }
    .update-button{
        height: 50px;
        width: 250px;
        padding: 10px;
        background-color: #01355f;
        color: #fefefe;
        font-size: 18px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: 0.6s ease-in;
    }
    .update-button:hover{
        background-color: #06316d;
    }

    @media (max-width: 767px) {
        .edit-wrapper{
            /* height: 500px; */
            padding: 30px 20px 20px 20px;
            margin: 0 20px 40px 20px;

        }
        .update-form{
            grid-template-rows: repeat(3, 20px), 40px;
            grid-gap: 10px;

        }
        .update-form input{
            font-size: 14px;
        }
        .update-sect{
            display: grid;
            align-items: center;
            margin: 0;
        }
        .form-label{
            height: 50px;
        }
        .update-button{
            width: 200px;
            font-size: 14px;
        }
    }
</style>