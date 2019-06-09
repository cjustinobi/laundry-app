<template>
    <div class="edit-password" >
        <div class="edit-wrapper">
            <div class="password-wrapper">
                <label for="" class="pw-input">Old Password
                    <input type="password">
                </label>
                <label for="" class="pw-input">New Password 
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
        <div class="pre-next-btn">
            <button v-if="$route.path === '/products'" @click.prevent="$emit('nextTab', 'address')"
                    class="previous-btn"
            >
                <i class="fa fa-angle-double-left"></i> &nbsp; Previous 
            </button>
            <button v-if="$route.path === '/products'" @click.prevent="$emit('nextTab', 'paymentPage')"
                    class="next-btn"
            >
                <span>Next</span> &nbsp; <i class="fa fa-angle-double-right"></i>
            </button>
        </div>

        <!-- <MonthPickerInput :no-default="true" ></MonthPickerInput> -->
    </div>
</template>

<script>
    // import MonthPicker from 'vue-month-picker'
    // import MonthPickerInput from 'vue-month-picker'
export default {
    // components: {MonthPickerInput},
    data() {
        return {
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
        /* min-height: 100vh; */
    }
    a{
        text-decoration: none;
    }
    .edit-wrapper{
        display: grid;
        grid-template-rows: auto 50px;
        background-color: #fefefe;
        align-items: center;
        margin: 0 200px 40px 200px;
        padding: 40px 70px 20px 70px;
        box-shadow: 5px 5px 15px grey;
        grid-gap: 10px;
        /* height: 400px;    */
    }
    .password-wrapper{
        display: grid;
        grid-template-rows: 60px 60px;
        grid-gap: 8px;
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
    .pw-input{
        height: 50px;
    }
    .pw-icon{
        position: absolute;
        right: 8px;
        top: 110px;
        cursor: pointer;
    }
    .update-sect{
        display: grid;
        grid-template-rows: 50px;
        align-items: center;
        /* margin: 20px 0; */
        /* height: 90px; */
    }
    .update-button{
        height: 50px;
        width: 250px;
        /* padding: 10px;    */
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
    .pre-next-btn{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 20px;
    }
    .previous-btn{
        height: 40px;
        width: 120px;
        background-color: #01355f;
        color: #fefefe;
        font-size: 12px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: 0.6s ease-in;
        justify-self: flex-end;
    }
    .next-btn{
        justify-self: flex-start;
        height: 40px;
        width: 120px;
        background-color: #e7b83f;
        color: #fefefe;
        font-size: 12px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: 0.6s ease-in;
    }

    @media (max-width: 767px) {
        .edit-wrapper{
            /* height: 300px; */
            padding: 20px;
            margin: 0 20px;
        }
        .edit-list{
            font-size: 14px;
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
        .previous-btn{
            height: 35px;
            width: 100px;
        }
        .next-btn{
            height: 35px;
            width: 100px;
        }
    }
</style>