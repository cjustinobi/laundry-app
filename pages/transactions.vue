<template>
    <TransactionHistory/>
</template>

<script>

import TransactionHistory from '~/components/dashboard/shared/transactionHistory'

    export default {

        layout: 'dashboard',

        components: { TransactionHistory },

        data() {
            return {
                paymode: 'Mode of Payment'
            }
        }
        
    }
</script>

<style scoped>

</style>