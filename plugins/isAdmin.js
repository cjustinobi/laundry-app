import Vue from 'vue'

Vue.mixin({

    computed: {
        isAdmin() {
            const user = this.$store.state.auth.user
            if (user) {
                return user.user_type === 1
            }
        }
    }

})