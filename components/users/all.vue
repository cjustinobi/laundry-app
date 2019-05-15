<template>
    <div>
        <div class="users">
            <div class="user" v-for="(user, i) in users" :key="i">
                <img class="user-img" src="~assets/images/profile_pic.jpg" alt="Profile Image">
                <h2 class="username">{{ user.fullname }}</h2>
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
    .users{
        display: grid;
        grid-template: 1fr / repeat(auto-fit, minmax(200px, 300px));
        grid-gap: 50px;
        justify-content: center;
    }
    .user{
        display: grid;
        grid-template-columns: 50px 1fr 20px;
    }
    .user-img{
        width: 50px;
        height: 50px;
        background-size: contain;
    }
    .username{
        display: grid;
        align-items: center;
        padding-left: 20px;
    }

    @media (max-width: 767px) {
        .users{
            grid-gap: 20px;
            
            // justify-items: center;
        }
        .user{
            grid-template-columns: 30px 1fr 20px;
            font-size: 13px;
        }
        .user-img{
            width: 30px;
            height: 30px;
        }
    }
</style>

