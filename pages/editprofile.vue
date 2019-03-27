<template>
    <div class="edit-profile" :style="myStyle">
        <div class="title"><h2>My Account</h2></div>
        <div class="edit-wrapper">
            <ul class="edit-list">
                <li class="edit-links"><nuxt-link to="/editprofile">Profile</nuxt-link></li>
                <li class="edit-links"><nuxt-link to="/editaddress">Address</nuxt-link></li>
                <li class="edit-links"><nuxt-link to="/editpassword">Change Password</nuxt-link></li>
            </ul>
            <div class="update-form">
                <label for="">First name <br>
                    <input type="text" required>
                </label>
                <label for="" >Last Name <br>
                    <input type="text" required>
                </label>
                <label for="" >Mobile <br>
                    <input type="text" required>
                </label>
                <div class="update-sect">
                    <button @click.prevent="signUp" class="update-button">
                        Update Profile
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
        // document.body.style.background = "#e1f5fe";
    },
    destroyed() {
        document.body.style.background = "none";
    }
}
</script>

<style scoped>
    .edit-profile{
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
        background-color: #fefefe;
        margin: 40px;
        padding: 0 50px;
    }
    .edit-list{
        display: grid;
        grid-template: 80px / repeat(3, 150px); 
        align-items: center; 
        padding: 0px;
        font-size: 18px;
        outline: none;
        border: none;
        cursor: pointer;
        list-style: none;
        border-bottom: 1px solid rgb(207, 207, 207);
    }
    .edit-links a{
        color: #114e9e;
        transition: 0.6s ease-in;
    }
    .edit-list a:hover,
    .edit-list a:active{
        color: #a0a0a0;
        
    }
    .update-form{
        display: grid;
        grid-template-rows: repeat(3, 20px), 90px;
        grid-gap: 20px;
        margin-top: 40px;
        color: #114e9e;
        
    }
    .update-form input{
        width: 100%;
        padding: 5px;
        border: none;
        border-bottom: 1px solid rgb(207, 207, 207);
        font-size: 25px;
        outline-style: none;
    }
    .update-sect{
        display: grid;
        align-items: center;
        margin: 20px 0 40px 0;
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
        .edit-list{
            font-size: 15px;
        }
        .update-form{
            grid-gap: 20px;
        }
        .update-form input{
            font-size: 20px;
        }
        .update-button{
            width: 200px;
            font-size: 14px;
        }
    }
</style>