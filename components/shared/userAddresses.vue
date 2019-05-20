<template>
    <div>
        <div v-if="addresses && addresses.length > 0" v-for="(ad, i) in addresses" :key="i">
            <p>{{ ad.address }}</p>
            <p>{{ ad.city }}</p>
            <p>{{ ad.state }}</p>
        </div>
        <div v-else>
            <p><button>Add Address</button></p>
        </div>
    </div>
</template>

<script>
    export default {

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

</style>