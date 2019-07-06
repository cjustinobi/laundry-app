export default {
    methods: {
        payWithPaystack({ cartId, orderId, totalAmount }){
           const self = this
            let handler = PaystackPop.setup({
                key: process.env.paystackKey,
                email: this.userEmail,
                currency: 'NGN',
                amount: parseInt(totalAmount + '00'),
                ref: ''+Math.floor((Math.random() * 1000000000) + 1),
                metadata: {
                    custom_fields: [
                        {
                            display_name: "IRIS",
                            variable_name: "mobile_number",
                            value: "+2348012345678"
                        }
                    ]
                },
                callback: function({status, message, reference, transaction }) {
                    if(status === 'success' && message === 'Approved') {
                            self.$axios.$put(`orders/${orderId}`,
                                {
                                    amount: totalAmount,
                                    reference,
                                    message,
                                    transaction,
                                    cartId
                                })
                                .then(res => {

                                self.$store.dispatch('cart/clearCart')
                                self.$store.dispatch('notifications/setStatus',
                                    { messages: ['payment is successful'], state: 'success' })
                                // self.$router.push('/adverts')
                            })
                                .catch(err => {
                                    self.$store.dispatch('notifications/setStatus',
                                        { messages: [err], state: 'error' })
                                })
                    } else {
                        self.$store.dispatch('notifications/setStatus',
                            { messages: [status], state: 'error' })
                    }
                },
                onClose: function(){
                    // Do something when closed.
                }
            });
            handler.openIframe();
        }
    },

    computed: {
        userEmail() {
            return this.$store.getters['auth/user'].email
        }
    }
}