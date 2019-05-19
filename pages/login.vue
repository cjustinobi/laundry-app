<template>
    <div class="login">
        <div class="elegant-image">
            <img src="~/assets/images/EL_logo_3.png" alt="Elegant Laundry">
        </div>

        <label for="email">Email <br>
            <input type="text" v-model="email" id="email" required><br>
        </label>
        <div class="password-wrapper">
            <label for="password" class="pw-input">Password <br>
                <input type="password" v-model="password" id="password">
                <i class="fa fa-eye-slash pw-icon" v-if="!eyeSlash" @click.prevent="toggleEyeSlash()"></i>
                <i class="fa fa-eye pw-icon" v-if="eyeSlash" @click.prevent="toggleEyeSlash()"></i>
            </label>
        </div>

        <div class="login-sect">
            <button @click="signIn" class="login-button ">
                <i class="fa fa-sign-in"></i> 
                <span v-if="!loading">Login</span>
                <img v-else="" src="~/assets/images/loading.gif" class="loading" alt="Loading gif">
            </button>
            <span class="pw">Forgot your password?</span>
        </div>

        <div class="create-account">
            <small class="no-account">Not yet a customer?</small>  
            <small class="create">
                <nuxt-link to="/register">Create account</nuxt-link>
            </small>
        </div> 
    </div>

</template>

<script>

export default {

    name: 'login',

    data() {
        return {
            email: '',
            password: '',
            loading: false,
            eyeSlash: false
        }
    },

    methods: {

        toggleEyeSlash() {
            let el = document.getElementById("password")
            if(el.type === 'password'){
                el.type = 'text'
                this.eyeSlash = true
            }else {
                if (el.type === 'text') {
                    el.type = 'password'
                    this.eyeSlash = false
                }
            }
        },
      
        async signIn() {
            this.loading = true
            const self = this
            try {
                await this.$store.dispatch('auth/signIn', {email: this.email, password: this.password})
                return this.$router.push('/dashboard')
            } catch (err) {
                this.loading = false
                console.log(JSON.stringify(err))
                this.$store.dispatch('notifications/setStatus',
                    { messages: ['incorrect details supplied'], state: 'error' }
                )
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


<style lang="scss" scoped>  
    .login{
        position: relative;
        display: grid;
        width: 460px;
        margin: 50px auto 10px auto;
        align-items: center;
        padding: 20px 30px;
        grid-gap: 20px;
        border: 1px solid #e2e2e2;
        box-shadow: 0 5px 5px 5px #a5a5a5;
    }
    .elegant-image{
        display: grid;
        justify-content: center;
    }
    img{
        width: 50px;
    }
    a{
        color: #114e9e;
        cursor: pointer;
        transition: 0.6s ease-in;
        text-decoration: none;
        font-weight: 700;
    }
    .password-wrapper{
        display: grid;
        grid-template-columns: 1fr;
        position: relative;
    }
    .pw-icon{
        position: absolute;
        right: 15px;
        bottom: 16px;
        cursor: pointer;
    }
    input{
        width: 400px;
        padding: 10px;
        border: none;
        border-bottom: 1px solid rgb(207, 207, 207);
        height: 50px;
        font-size: 25px;
        outline-style: none;  
    }
    label{
        color: #114e9e;
    }
    .login-sect{
        display: grid;
        grid-template-columns: 190px 190px;
        grid-gap: 20px;
        align-items: center;
    }
    .login-button{
        height: 50px;
        padding: 10px;
        background-color: #114e9e;
        color: #fefefe;
        font-size: 18px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: 0.6s ease-in;
        img{
            width: 19px;
        }
    }
    .login-button:hover{
        background-color: #052b5e;
    }
    .pw{
        color: #e7b83f;
        font-weight: 700;
        cursor: pointer;
        transition: 0.6s ease-in;
    }
    .pw:hover{
        color: #966e0a;
    }
    .create-account{
        display: grid;
        grid-template-columns: 150px 140px;
        grid-gap: 20px;
        align-items: center;
    }
    .no-account {
        font-size: 16px;
        /* margin-bottom: 20px; */
        color: gray;
    }
    .create{
        color: #114e9e;
        font-size: 16px;
        font-weight: 700;
        cursor: pointer;
        transition: 0.6s ease-in;
    }
    .create:hover{
        color: #042552;
    }

    @media (max-width: 767px) {
        .login{
            padding: 20px;
            grid-gap: 25px;
            width: 320px;
            grid-template-columns: 270px;
        }
        .login-button{
            font-size: 16px;
        }
       input{
            width: 270px;
            height: 40px;
            font-size: 20px; 
       }
       .pw{
           font-size: 15px;
       }
       .pw-icon{
            right: 20px;
        }
       .login-sect{
            grid-template-columns: 120px 130px;
            grid-gap: 15px;
       }
       .login-button{
            height: 40px;
            padding: 10px;
            font-size: 16px;
       }
       .no-account {
            font-size: 14px;
       }
       .create-account{
            grid-template-columns: 140px 120px;
            grid-gap: 20px;
        }
       .create{
            font-size: 14px;
       }
    }
</style>

