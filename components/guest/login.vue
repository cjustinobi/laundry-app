<template>
    <div class="login">
        <small v-if="errors">{{ errors }}</small>
        <div class="elegant-image">
            <img src="~assets/images/EL_logo_3.png" alt="Elegant Laundry">
        </div>

        <label for="">Email <br>
            <input type="text" v-model="email" required><br>
        </label>
        <div class="password-wrapper">
            <label for="" class="pw-input">Password <br>
                <input type="password" v-model="password">
                <i class="fa fa-eye pw-icon"></i>
            </label>
        </div>

        <div class="login-sect">
            <button @click="signIn" class="login-button ">
                <i class="fa fa-sign-in"></i> 
                {{LoginText}}
            </button>
            <span class="pw">Forgot your password?</span>
        </div>

        <div class="create-account">
            <small class="no-account">Not yet a customer?</small>  
            <small class="create" @click.prevent="$emit('toggleLogin')">Create account</small>
        </div> 
    </div>

</template>

<script>

export default {
    components: {
    },
    name: 'login',
    data() {
        return {
            email: '',
            password: '',
//            user: '',
            LoginText: 'Login',
            errors: null
        }
    },

    methods: {
        signIn() {
            this.LoginText = 'loading ...'
            this.$store.dispatch('auth/signIn', { email: this.email, password: this.password })
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
    .login{
        display: grid;
        width: 450px;
        margin: 20px auto 0 auto;
        align-items: center;
        padding: 30px;
        grid-gap: 20px;
        border: 1px solid #e2e2e2;
        box-shadow: 0 5px 5px 5px #a5a5a5;
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
        grid-template-columns: 1fr;
        position: relative;
    }
    .pw-icon{
        position: absolute;
        right: 20px;
        bottom: 4px;
        cursor: pointer;
    }
    input{
        width: 380px;
        padding: 10px;
        border: none;
        border-bottom: 1px solid rgb(133, 126, 126);
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
            padding: 30px;
            grid-gap: 10px;
        }
        .login-button{
            font-size: 16px;
        }
        .login{
        width: 350px;
        padding: 20px;
        grid-gap: 20px;
       }
       input{
        width: 300px;
        height: 40px;
        font-size: 20px; 
       }
       .pw{
           font-size: 15px;
       }
       .pw-icon{
        right: 30px;
        }
       .login-sect{
        grid-template-columns: 150px 150px;
        grid-gap: 30px;
       }
       .login-button{
        height: 50px;
        padding: 10px;
        font-size: 16px;
       }
       .no-account {
        font-size: 14px;
       }
       .create{
        font-size: 14px;
       }
    }
</style>

