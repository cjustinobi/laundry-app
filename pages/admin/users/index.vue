<template>
    <div class="users-containers" :style="myStyle">
        <div class="all-users">
            <users></users>
        </div>
        
    </div>
</template>

<script>

import Users from '~/components/users/all'
export default {

    layout: 'dashboard',

    components: {
        Users
    },
    data() {
        return {
            myStyle: {
                backgroundColor: "#f0faff"
            }
        }
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

<style scoped>
    .users-containers{
        display: grid;
        min-height: 100vh;
    }
    .all-users{
        margin: 30px 50px;
    }

     @media (max-width: 767px) {
        .all-users{
            margin: 30px 20px;
        }
    }
    
</style>


