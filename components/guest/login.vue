<template>
        <div class="login">
            <small v-if="errors">{{ errors }}</small>
            <h4 class="sign-in">Sign In</h4>
            <input type="text" v-model="email" placeholder="Email" required><br>
            <input type="password" v-model="password" placeholder="Password"><br>
            <button v-on:click="signIn" class="login-button ">{{LoginText}}</button>
            <small class="no-account" @click.prevent="$emit('toggleLogin')">
                You don't have an account? You can 
            </small>  
        </div>
    
</template>

<script>


export default {
    name: 'login',
    data() {
        return {
            email: '',
            password: '',
            user: '',
            LoginText: 'Login',
            errors: null
        }
    },

    methods: {
      
        async signIn() {
            try {
                this.LoginText = 'loading ...'
                let self = await this.$axios.$post('/api/login', { email: this.email, password: this.password })
                console.log(self)
            } catch (e) { this.errors = e.response.data.error}
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
body{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}
.login{
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

