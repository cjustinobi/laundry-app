<template>
        <div class="login">
            <h4 class="sign-in">Sign In</h4>
            <input type="text" v-model="email" placeholder="Email" required><br>
            <input type="password" v-model="password" placeholder="Password"><br>
            <button v-on:click="signIn" class="login-button">{{LoginText}}</button>
            <p class="no-account">You don't have an account? You can <router-link to="/register" class="register">create one</router-link></p>  
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
            LoginText: 'Login'
        }
    },
    methods: {
      
        signIn() {
            this.LoginText = 'loading ...'
            let self = this

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
    grid-template: repeat(4, auto) / auto; 
    justify-items: center;
    margin-top: 20px;
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
    width: 20%;
    height: 70px;
    border-radius: 10px;
    padding: 10px;
    border: 5px solid rgb(247, 124, 175);
    font-size: 18px;
}
.sign-in{
    font-size: 60px;
}
.register{
    text-decoration: underline;
    font-size: 20px;
}
.no-account {
    font-size: 17px;
}
.no-account a{
    font-size: 30px;
    color: black;
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
            width: 20%;
            height: 70px;
            border-radius: 10px;
            padding: 10px;
            border: 5px solid rgb(247, 124, 175);
            font-size: 18px;
        }
        .sign-in{
            text-align: center;
        }
    }
</style>

