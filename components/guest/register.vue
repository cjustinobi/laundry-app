<template>
        <div class="sign-up">
            <h2 class="create">Create a new account</h2>
            <input type="text" v-model="email" placeholder="Email" required><br>
            <input type="password" v-model="password" placeholder="Password"><br>
            <button v-on:click="signUp" class="sign-up-button">Sign Up</button><br>
            <span class="account">Already have an account? <router-link to="/login" class="login-reg">Login</router-link></span>
        </div>
    
</template>

<script>


export default {
    name: 'signUp',
    data: function() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        signUp: function() {

        }
    },
    mounted() {
        document.body.style.background = "#d0e0da";
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
    .login-reg{
        color: black;
        text-decoration: underline;
    }
    .create{
        font-size: 50px;
    }
    .sign-up{
        display: grid;
        grid-template: repeat(4, auto) / auto; 
        justify-items: center;
        grid-gap: 20px;
    }
    .sign-up input{
        width: 30%;
        padding: 10px;
        border: 1px solid rgb(233, 226, 226);
        border-radius: 10px;
        height: 50px;
        font-size: 25px;
    }
    .sign-up-button{
        width: 20%;
        height: 70px;
        border-radius: 10px;
        padding: 10px;
        border: 6px solid rgb(247, 124, 175);
        font-size: 18px;
    }
    .account a{
        font-size: 30px;
    }

    @media (max-width: 767px) {
        .sign-up{
            display: grid;
            grid-template: repeat(4, auto) / auto; 
            justify-items: center;
            grid-gap: 10px;
        }
        .sign-up input{
            width: 40%;
            margin: 10px 0;
            padding: 10px;
            border: 1px solid rgb(233, 226, 226);
            border-radius: 5px;
            height: 30px;
            font-size: 18px;
        }
        .sign-up-button{
            width: 20%;
            height: 70px;
            border-radius: 10px;
            padding: 10px;
            border: 5px solid rgb(247, 124, 175);
            font-size: 18px;
        }
        .create{
            text-align: center;
        }
    }
</style>



