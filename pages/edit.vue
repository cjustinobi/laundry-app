<template>
    <div class="edit-profile" :style="myStyle">
        <div class="my-account"><h2>My Account</h2></div>
        <div class="edit-wrapper">
            <ul class="edit-list">
            <li class="edit-links"><nuxt-link to="/edit">Profile</nuxt-link></li>
            <li class="edit-links"><nuxt-link to="/edit">Address</nuxt-link></li>
            <li class="edit-links"><nuxt-link to="/edit">Change Password</nuxt-link></li>
        </ul>
        <div class="names">
            <label for="">First name <br>
                <input type="text" required>
            </label>
            <label for="" >Last Name <br>
                <input type="text" required>
            </label>
            <label for="" >Mobile <br>
                <input type="number" required>
            </label>
            <div class="sign-up-sect">
            <button @click.prevent="signUp" class="sign-up-button">
                <i class="fa fa-user"></i> Create account
            </button>
        </div>
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
            }
        }
    },
    mounted() {
        document.body.style.background = "#e1f5fe";
    },
    destroyed() {
        document.body.style.background = "none";
    }
}
</script>

<style scoped>
    .edit-profile{
        display: grid;

    }
    .my-account{
        display: grid;
        justify-items: center;
        align-content: center;
        height: 80px;
        background-color: #f0faff;
        border-bottom: 1px solid grey;
    }
    a{
        text-decoration: none;
        color: #0f0c0c;
    }
    .edit-wrapper{
        display: grid;
        /* align-content: center;
        justify-items: center; */
        background-color: #fefefe;
        margin: 40px;
    }
    .edit-list{
        display: grid;
        grid-template-columns: repeat(3, 150px);
        /* align-content: center;
        justify-items: center; */
        /* width: 100px; */
        /* height: 30px; */
        padding: 10px;
        color: #0c0909;
        font-size: 18px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: 0.6s ease-in;
        list-style: none;
        padding: 0;
        
    }
    .names{
        display: grid;
        /* grid-template-columns: 200px 200px; */
        grid-gap: 20px;
    }
    .names input{
        width: 162px;
        padding: 10px;
        border: none;
        border-bottom: 1px solid rgb(133, 126, 126);
        height: 50px;
        font-size: 25px;
        outline-style: none;
    }
    .sign-up-sect{
        display: grid;
        /* grid-template-columns: 340px 200px; */
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
</style>