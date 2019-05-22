<template>
    <div>
        <div v-if="addresses && addresses.length > 0" v-for="(ad, i) in addresses" :key="i">
            <p>{{ ad.address }}</p>
            <p>{{ ad.city }}</p>
            <p>{{ ad.state }}</p>
            <span class="make-default-add" v-if="!ad.defaultAddress">Make default address</span>
        </div>
        <div v-else>
            <p><button>Add Address</button></p>
        </div>
    </div>
</template>

<script>
    export default {

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
</style>