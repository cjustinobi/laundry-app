import Vue from 'vue'

Vue.mixin({

    computed: {
        user() {
            if (this.$store.state.auth.user) {
                return this.$store.state.auth.user
            }
        }
    }

})