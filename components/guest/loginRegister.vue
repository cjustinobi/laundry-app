<template>
    <div>
        <login v-if="loginState" @toggleLogin="toggleLogin"></login>
        <register v-if="!loginState" @toggleLogin="toggleLogin"></register>
    </div>
</template>

<script>

    import Login from '~/components/guest/login'
    import Register from '~/components/guest/register'

    export default {

        components: {
            'login': Login, 
            'register': Register
        },
        
        data() {
            return {
                loginState: true,
        
            }
        },
        methods: {
            toggleLogin() {
                this.loginState ? this.loginState = false : this.loginState = true
                
            }
        }
      

    }

</script>

<style scoped>
    .loginReg{
        display: none;
    }
</style>
