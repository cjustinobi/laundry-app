<template>
    <div>
        <h1>All users</h1>
        <div class="users">
            <div v-for="(user, i) in users" :key="i">
                <h1>{{ user.fullname }}</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){

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

