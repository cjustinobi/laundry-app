<template> 
    <div class="sign-up">
        <notification :error="error" :success="success" :message="message"></notification>

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
                <input type="password" v-model="details.password" id="password">
                <i class="fa fa-eye-slash pw-icon" v-if="!eyeSlash" @click.prevent="toggleEyeSlash(false)"></i>
                <i class="fa fa-eye pw-icon" v-if="eyeSlash" @click.prevent="toggleEyeSlash(true)"></i>
            </label>
        </div>
        <p class="terms">
            By creating an account, you agree to our <nuxt-link to="/">terms and conditions</nuxt-link>
            and that you have read our <nuxt-link to="/">priavcy policy</nuxt-link>
        </p>
        <div class="sign-up-sect">
            <button @click.prevent="signUp" class="sign-up-button">
                <span v-if="!loading" ><i class="fa fa-user"></i> Register</span>
                <img v-else="" src="~/assets/images/loading.gif" alt="">
            </button>
            <small class="account">
                <nuxt-link to="/login">Already have an account?</nuxt-link>
            </small>
        </div>
    </div>

</template>

<script>

    import  Notifications  from '~/mixins/notifications'
    import  Notification  from '~/components/shared/notification'


    export default {
        name: 'signUp',
        mixins: [Notifications],

        components: { Notification },
        data() {
            return {
                details: {
                    fullname: '',
                    email: '',
                    phone: '',
                    password: '',
                    plan_id: '',
                },
                eyeSlash: false,
                loading: false,
            }
        },
        methods: {
            async signUp() {
                this.loading = true
                try {
                    await this.$axios.$post('/api/register', this.details)
                    this.$router.push('/login')
                } catch (e) {
                    this.loading = false
                    this.message = e.response.data.error
                    return this.error = true

                }
            },
            toggleEyeSlash() {
                let el = document.getElementById("password")
                if(el.type === 'password'){
                    el.type = 'text'
                    return this.eyeSlash = true
                }   
                el.type = 'password'
                return this.eyeSlash = false
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
        position: relative;
        grid-template-rows: repeat(6, auto);
        justify-items: center;
        width: 600px;
        margin: 50px auto;
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
        grid-template-columns: 250px 250px;
        justify-items: space-between;
        grid-gap: 30px;
    }
    .names input{
        width: 190px;
    }
    input{
        width: 530px;
        padding: 10px;
        border: none;
        border-bottom: 1px solid rgb(207, 207, 207);
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
        right: 10px;
        bottom: 17px;
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
        .create{
            text-align: center;
        }
        .sign-up{
            width: 420px;
            grid-gap: 10px;
            padding: 15px;
        }
        .names{
            grid-template-columns: 170px 170px;
        }
        .names input{
            width: 120px;
        }
        input{
            width: 370px;
            font-size: 20px;
        }
        .pw-icon{
            right: 6px;
            bottom: 17px;   
        }
        .terms{
            width: 370px
        }
        .sign-up-sect{
            display: grid;
            grid-template-columns: 160px 200px;
            grid-gap: 20px;
            align-items: center;
            margin-top: 10px;
        }
        .sign-up-button{
            font-size: 17px;
        }
    }
</style>



