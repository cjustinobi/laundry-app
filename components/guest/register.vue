<template>
    
    <div class="sign-up">
        <small v-if="errors">{{ errors }}</small>
        <h2 class="create">Create a new account</h2>
        <input v-model="details.fullname" placeholder="John Doe" required>
        <input v-model="details.email" type="email" placeholder="johndoe@example.com" required>
        <input v-model="details.phone" placeholder="johndoe@example.com" required>
        <input type="password" v-model="details.password" placeholder="secret things">
        <button @click.prevent="signUp" class="sign-up-button">Sign Up</button>
        <span class="account">
            Already have an account? <nuxt-link to="/login" class="login-reg">Login</nuxt-link>
        </span>
    </div>

</template>

<script>


    export default {
        name: 'signUp',
        data: function() {
            return {
                details: {
                    fullname: '',
                    email: '',
                    phone: '',
                    password: '',
                },
                errors: ''
            }
        },
        methods: {
            async signUp() {
                try {
                    let res = await this.$axios.$post('/api/register', this.details)
                    console.log(res)
                } catch (e) {
                    this.errors = e.response.data.error
                }
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
        margin-bottom: 40px;
    }
    .sign-up{
        display: grid;
        grid-template-rows: repeat(6, auto);
        grid-template: repeat(4, auto) / auto;
        justify-items: center;
        grid-gap: 10px;
        margin-top: 60px;
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
        width: 30%;
        height: 70px;
        border-radius: 10px;
        padding: 10px;
        border: 6px solid rgb(247, 124, 175);
        font-size: 18px;
    }
    .account{
        margin-top: 0;
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
            border: 5px solid rgb(247, 124, 175);
            font-size: 16px;
        }
        .create{
            text-align: center;
        }
    }
</style>



