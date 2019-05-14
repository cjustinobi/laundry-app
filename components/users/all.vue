<template>
    <div>
        <div class="users">
            <div class="user" v-for="(user, i) in users" :key="i">
                <h2>{{ user.fullname }}</h2>
                <actions class="action-fa" :itemId="user.id" :deleteEndPoint="deleteEndPoint"></actions>
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
        // position: relative;
        padding-bottom: 10px;
        display: grid;
        grid-template-columns: 1fr 20px;
    }
    .action-fa{
        // position: absolute;
        // left: 600px;
    }

    @media (max-width: 767px) {
        .action-fa{
            // left: 200px;
        }
    }
</style>

