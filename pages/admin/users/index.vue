<template>
    <div>
        <users></users>
    </div>
</template>

<script>

import Users from '~/components/users/all'
export default {

    layout: 'dashboard',

    components: {
        Users
    },

    computed: {
        users(){
            return this.$store.getter['users/users']
        }
    },

    mounted() {
        this.$store.dispatch('users/getUsers')
    }
}
</script>

