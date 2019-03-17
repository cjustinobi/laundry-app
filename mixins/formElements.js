export default {
    data() {
        return {
            isLoading: false,
            sendBtnTxt: 'Send'
        }
    },

    methods: {
        clearFields(obj) {
            Object.keys(obj).forEach( function(item) {
                obj[item] = ''
            })
        }
    }
}