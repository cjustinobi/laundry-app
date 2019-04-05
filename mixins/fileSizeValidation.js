export default {
    methods: {
        isLarge(e) {
            if (Math.round(e.target.files[0].size * 0.00000095367432) > 3) { // 3MB max for image
                this.messages.push('File size exceeds max limit of 5MB')
                this.error = true
                return true
            }
        }
    }
}