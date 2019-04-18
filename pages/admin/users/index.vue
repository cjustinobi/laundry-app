<template>
    <div class="product" :style="myStyle">
        
        <div>
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
    .product{
        display: grid;
        grid-template-rows: 50px 70px 90px 40px;
        min-height: 100vh;
    }
    
</style>


