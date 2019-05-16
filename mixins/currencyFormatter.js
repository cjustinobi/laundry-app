export default {
    computed: {
        currency() {
            return new Intl.NumberFormat('en-US', {
                currency: 'NGN',
                minimumFractionDigits: 2
            })
        }
    }
}   