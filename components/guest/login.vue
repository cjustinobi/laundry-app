<template>
        <div class="login">
            <notification :error="error" :success="success" :message="message"></notification>

            <h4 class="sign-in">Sign In</h4>
            <input type="text" v-model="email" placeholder="Email" required><br>
            <input type="password" v-model="password" placeholder="Password"><br>
            <button @click="signIn" class="login-button ">{{LoginText}}</button>
            <small class="no-account" @click.prevent="$emit('toggleLogin')">
                You don't have an account? Click to create one
            </small>  
        </div>
    
</template>

<script>
    import  Notifications  from '~/mixins/notifications'
    import  Notification  from '~/components/shared/notification'

export default {
    name: 'login',
    mixins: [Notifications],

    components: { Notification },
    data() {
        return {
            email: '',
            password: '',
            LoginText: 'Login',
        }
    },

    methods: {
      
        async signIn() {
            this.LoginText = 'loading ...'

            let res = await this.$store.dispatch('auth/signIn', {email: this.email, password: this.password})
            if (res === 'success') {
                return this.$router.push('/dashboard')
            }

            this.LoginText = 'Login'
            this.message = res.response.data.error
            this.error = true
        }
    },
    mounted() {
        document.body.style.background = "#94cfd1";
    },

    destroyed() {
        document.body.style.background = "none";
    }
}
</script>


<style scoped>  

    .login{
        position: relative;
        display: grid;
        grid-template-rows: repeat(5, auto); 
        justify-items: center;
        margin-top: 40px;
        grid-gap: 20px;
    }
    .login input{
        width: 30%;
        padding: 10px;
        border: 1px solid rgb(233, 226, 226);
        border-radius: 10px;
        height: 50px;
        font-size: 25px;
    }
    .login-button{
        width: 30%;
        height: 70px;
        border-radius: 10px;
        padding: 10px;
        border: 5px solid rgb(247, 124, 175);
        font-size: 18px;
    }
    .sign-in{
        font-size: 60px;
        margin-bottom: 30px;
    }
    .no-account {
        font-size: 17px;
        cursor: pointer;
    }

    @media (max-width: 767px) {
            .login{
                display: grid;
                grid-template: repeat(4, auto) / auto; 
                justify-items: center;
                grid-gap: 10px;
            }
            .login input{
                width: 40%;
                margin: 10px 0;
                padding: 10px;
                border: 1px solid rgb(233, 226, 226);
                border-radius: 5px;
                height: 30px;
                font-size: 18px;
            }
            .login-button{
                font-size: 16px;
            }
            .sign-in{
                text-align: center;
            }
    }
</style>

