export default {
    computed: {
        user() {
            if (this.$store.state.auth.user) {
                return this.$store.state.auth.user
            }
        }
    }
}