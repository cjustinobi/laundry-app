<template> 
    <div class="sign-up">
        <div class="elegant-image">
            <img src="~assets/images/EL_logo_3.png" alt="Elegant Laundry">
        </div>
        <div class="names">
            <label for="fullname">First name
                <input v-model="details.fullname" id="fullname" required>
            </label>
        </div>
        <label for="email">Email
            <input v-model="details.email" id="email" type="email" required>
        </label>
        <label for="phone">Mobile
            <input v-model="details.phone" id="phone" required>
        </label>
        <div class="password-wrapper">
            <label for="password">Password
                <input type="password" v-model="details.password" id="password">
                <i class="fa fa-eye-slash pw-icon" v-if="!eyeSlash" @click.prevent="toggleEyeSlash(false)"></i>
                <i class="fa fa-eye pw-icon" v-if="eyeSlash" @click.prevent="toggleEyeSlash(true)"></i>
            </label>
        </div>
        <p class="terms">
            By creating an account, you agree to our <nuxt-link to="/terms">terms and conditions</nuxt-link>
            and that you have read our <nuxt-link to="/policy">privacy policy</nuxt-link>
        </p>
        <div class="sign-up-sect">
            <button @click.prevent="signUp" class="sign-up-button">
                <span v-if="!loading" ><i class="fa fa-user"></i> Register</span>
                <img v-else class="loading" src="~/assets/images/loading.gif" alt="">
            </button>
            <small class="account">
                <nuxt-link to="/login">Already have an account?</nuxt-link>
            </small>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                details: {
                    fullname: '',
                    email: '',
                    phone: '',
                    password: ''
                },
                eyeSlash: false,
                loading: false,
            }
        },
        methods: {
            async signUp() {
                this.loading = true
                try {
                    await this.$axios.$post('register', this.details)
                    this.$store.dispatch('notifications/setStatus', { messages: ['successfully registered'], state: 'success' })
                    this.$router.push('/login')
                } catch (e) {
                    this.loading = false
                    this.$store.dispatch('notifications/setStatus',
                        { messages: [e.response.data.error], state: 'error' }
                    )

                }
            },
            toggleEyeSlash() {
                let el = document.getElementById('password')
                if(el.type === 'password'){
                    el.type = 'text'
                    return this.eyeSlash = true
                }   
                el.type = 'password'
                return this.eyeSlash = false
            }
        },
        computed: {
            plans() {
                return this.$store.getters['plans/allPlans']
            }
        },
        mounted() {
            document.body.style.background = "#fefefe";
            this.$store.dispatch('plans/getPlans')
        }
    }
</script>

<style scoped>
    .sign-up{
        display: grid;
        position: relative;
        grid-template-rows: repeat(6, auto);
        justify-items: center;
        width: 580px;
        margin: 50px auto;
        padding: 20px 30px;
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
    input{
        width: 530px;
        padding: 10px;
        border: none;
        border-bottom: 1px solid rgb(207, 207, 207);
        height: 40px;
        outline-style: none;
        background: #fefefe;
    }
    label{
        color: #114e9e;
    }
    .elegant-image{
        display: grid;
        justify-content: center;
    }
    img{
        width: 50px;
    }

    .password-wrapper{
        display: grid;
        position: relative;
    }
    .pw-icon{
        position: absolute;
        right: 10px;
        bottom: 7px;
        cursor: pointer;
    }
    .loading{
        width: 24px;
    }
    .terms{
        text-align: justify; 
        width: 530px; 
        margin: 10px 0;
    }
    .sign-up-sect{
        display: grid;
        grid-template-columns: 300px 200px;
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

        .sign-up{
            width: 350px;
            grid-gap: 10px;
            padding: 10px;
        }
        .names input{
            width: 320px;
        }
        input{
            width: 320px;
        }
        .pw-icon{
            right: 6px;
        }
        .terms{
            width: 320px
        }
        .sign-up-sect{
            display: grid;
            grid-template-columns: 150px 160px;
            grid-gap: 20px;
            align-items: center;
            margin-top: 10px;
        }
        .sign-up-button{
            font-size: 14px;
        }
    }
</style>



