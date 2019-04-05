<template>
    <div>
        <h1>All users</h1>
        <div class="users">
            <div class="user" v-for="(user, i) in users" :key="i">
                <h1>{{ user.fullname }}</h1>
                <actions :itemId="user.id" :deleteEndPoint="deleteEndPoint"></actions>
            </div>
        </div>
    </div>
</template>

<script>
    import Actions from '~/components/shared/actions'
export default {

        components: { Actions },
    data(){
        return {
            deleteEndPoint: ''
        }
    },

    computed: {
        users(){
            return this.$store.getters['users/users']
        }
    },

    mounted() {
        this.$store.dispatch('users/getUsers')
    }
}
</script>

<style lang="scss" scoped>
    .user{
        position: relative;
    }
</style>

