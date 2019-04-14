<template>
    <div class="edit-password" :style="myStyle">
        <div class="edit-wrapper">
            <div class="password-wrapper">
                <label for="" class="pw-input">Old Password <br>
                    <input type="password">
                </label>
                <label for="" class="pw-input">New Password <br>
                    <input type="password" id="password">
                    <i class="fa fa-eye-slash pw-icon" v-if="!eyeSlash" @click.prevent="toggleEyeSlash()"></i>
                    <i class="fa fa-eye pw-icon" v-if="eyeSlash" @click.prevent="toggleEyeSlash()"></i>
                </label>
            </div>
            <div class="update-sect">
                <button @click.prevent="signUp" class="update-button">
                    Update Password
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
    layout: 'dashboard',

    data() {
        return {
            myStyle: {
                backgroundColor: "#f0faff"
            },
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
                el.type === 'text'
                el.type = 'password'
                this.eyeSlash = false
            } 
        }
    },
    mounted() {
        // document.body.style.background = "#e1f5fe";
    },
    destroyed() {
        document.body.style.background = "none";
    }
}
</script>

<style scoped>
    .edit-password{
        display: grid;
        min-height: 100vh;
    }
    .title{
        display: grid;
        justify-items: center;
        align-content: center;
        height: 80px;
        color: #114e9e;
        background-color: #f0faff;
        border-bottom: 1px solid rgb(207, 207, 207);
    }
    a{
        text-decoration: none;
    }
    .edit-wrapper{
        display: grid;
        grid-template-rows: 200px 80px;
        background-color: #fefefe;
        align-items: center;
        margin: 0 160px 40px 160px;
        padding: 80px 70px 0 70px;
        box-shadow: 5px 5px 15px grey;
        grid-gap: 10px;
        height: 400px;
    }
    .password-wrapper{
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 20px;
        position: relative;
        color: #114e9e;
    }
    .password-wrapper input{
        width: 100%;
        padding: 5px;
        border: none;
        border-bottom: 1px solid rgb(207, 207, 207);
        font-size: 25px;
        outline-style: none;
    }
    .pw-icon{
        position: absolute;
        right: 8px;
        top: 110px;
        cursor: pointer;
    }
    .update-sect{
        display: grid;
        align-items: center;
        /* margin: 20px 0; */
        height: 90px;
    }
    .update-button{
        height: 50px;
        width: 250px;
        padding: 10px;
        background-color: #01355f;
        color: #fefefe;
        font-size: 18px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: 0.6s ease-in;
    }
    .update-button:hover{
        background-color: #00122b;
    }

    @media (max-width: 767px) {
        .edit-wrapper{
            height: 400px;
            padding: 0 70px;
        }
        .edit-list{
            font-size: 15px;
        }
        .pw-icon{
            right: 8px;
            top: 100px;
        }
        .password-wrapper input{
            font-size: 20px;
        }
        .update-button{
            width: 200px;
            font-size: 14px;
        }
    }
</style>