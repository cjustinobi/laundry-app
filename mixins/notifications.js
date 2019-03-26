export default {

    data() {
        return {
            error: false,
            success: false,
            message: null,
        }
    },

    watch: {
        message(e) {
            if (e) {
                setTimeout(() => {
                    this.error = false
                    this.success = false
                    this.message = null
                }, 4000)
            }
        }
    }
}