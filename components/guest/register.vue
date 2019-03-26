<template> 
    <div class="sign-up">
        <small v-if="errors">{{ errors }}</small>
        <div class="elegant-image">
            <img src="~assets/images/EL_logo_3.png" alt="Elegant Laundry">
        </div>
        <div class="names">
            <label for="">First name <br>
                <input v-model="details.fullname" required>
            </label>
            <label for="" >Last Name <br>
                <input v-model="details.fullname" required>
            </label>
        </div>
        <label for="">Email <br>
            <input v-model="details.email" type="email" required>
        </label>
        <label for="">Mobile <br>
            <input v-model="details.phone" required>
        </label>
        <label for="">Plan ID <br>
            <input v-model="details.plan_id" required>
        </label>
        <div class="password-wrapper">
            <label for="">Password <br>
                <input type="password" v-model="details.password">
                <i class="fa fa-eye pw-icon"></i>
            </label>
        </div>
        <p class="terms">
            By creating an account, you agree to our <nuxt-link to="/">terms and conditions</nuxt-link>
            and that you have read our <nuxt-link to="/">priavcy policy</nuxt-link>
        </p>
        <div class="sign-up-sect">
            <button @click.prevent="signUp" class="sign-up-button">
                <i class="fa fa-user"></i> Create account
            </button>
            <small class="account" @click.prevent="$emit('toggleLogin')">
                Already have an account?
            </small>
        </div>
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
                    plan_id: '',
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
                    alert(this.errors = e.response.data.error)
                }
            }
        },
        mounted() {
            document.body.style.background = "#fefefe";
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
    .sign-up{
        display: grid;
        width: 600px;
        margin: 40px auto;
        padding: 30px;
        grid-gap: 20px;
        border: 1px solid #e2e2e2;
        box-shadow: 0 5px 5px 5px #a5a5a5;
    }
    a{
        color: #114e9e;
        cursor: pointer;
        transition: 0.6s ease-in;
        text-decoration: none;
        font-weight: 700;
    }
    a:hover{
        color: #042552;
    }
    .names{
        display: grid;
        grid-template-columns: 200px 200px;
        justify-content: space-between;
        grid-gap: 20px;
    }
    .names input{
        width: 162px;
    }
    input{
        width: 530px;
        padding: 10px;
        border: none;
        border-bottom: 1px solid rgb(133, 126, 126);
        height: 50px;
        font-size: 25px;
        outline-style: none;
    }
    .elegant-image{
        display: grid;
        justify-content: center;
    }
    img{
        width: 80px;
    }
    .password-wrapper{
        display: grid;
        position: relative;
    }
    .pw-icon{
        position: absolute;
        right: 40px;
        bottom: 4px;
        cursor: pointer;
    }
    .login-reg{
        color: black;
        text-decoration: underline;
    }
    .create{
        font-size: 50px;
        margin-bottom: 40px;
    }
    .terms{
        text-align: justify; 
        width: 530px; 
        margin: 10px 0;
    }
    .sign-up-sect{
        display: grid;
        grid-template-columns: 340px 200px;
        grid-gap: 30px;
        align-items: center;
        margin-top: 10px;
    }
    .sign-up-button{
        height: 50px;
        padding: 10px;
        background-color: #114e9e;
        color: #fefefe;
        font-size: 18px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: 0.6s ease-in;
    }
    .sign-up-button:hover{
        background-color: #052b5e;
    }
    .account{
        color: #114e9e;
        font-weight: 700;
        cursor: pointer;
        transition: 0.6s ease-in;
    }
    .account:hover{
        color: #042552;
    }
    

    @media (max-width: 767px) {
        .create{
            text-align: center;
        }
        .sign-up{
        width: 420px;
        grid-gap: 10px;
        padding: 15px;
    }
    .names{
        grid-template-columns: 142px 142px;
        /* grid-gap: 10px; */
    }
    .names input{
        width: 100px;
    }
    input{
        width: 370px;
        padding: 10px;
        border: none;
        border-bottom: 1px solid rgb(133, 126, 126);
        height: 50px;
        font-size: 20px;
        outline-style: none;
    }
    .elegant-image{
        display: grid;
        justify-content: center;
    }
    img{
        width: 80px;
    }
    .password-wrapper{
        display: grid;
        position: relative;
    }
    .pw-icon{
        position: absolute;
        right: 40px;
        bottom: 4px;
        cursor: pointer;
    }
    .login-reg{
        color: black;
        text-decoration: underline;
    }
    .create{
        font-size: 50px;
        margin-bottom: 40px;
    }
    .terms{
        width: 370px
    }
    .sign-up-sect{
        display: grid;
        grid-template-columns: 190px 200px;
        grid-gap: 20px;
        align-items: center;
        margin-top: 10px;
    }
    .sign-up-button{
        height: 50px;
        padding: 10px;
        background-color: #114e9e;
        color: #fefefe;
        font-size: 18px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: 0.6s ease-in;
    }
    .sign-up-button:hover{
        background-color: #052b5e;
    }
    .account{
        color: #114e9e;
        font-weight: 700;
        cursor: pointer;
        transition: 0.6s ease-in;
    }
    .account:hover{
        color: #042552;
    }
    }
</style>



