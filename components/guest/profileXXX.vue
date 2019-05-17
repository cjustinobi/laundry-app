<template>
    <div class="edit-profile" :style="myStyle">
        <div class="edit-wrapper">
            <div class="profile-img"><img src="~assets/images/profile_pic.jpg" alt="Profile Avatar"></div>
            <div class="update-form">
                <p>{{ firstName }}</p>
                <p>{{ lastName }}</p>
                <p>{{ email }}</p>
                <p>{{ mobileNumber }}</p>
                <div class="update-sect">
                    <button @click.prevent="signUp" class="update-button">
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            myStyle: {
                backgroundColor: "#f0faff"
            },
            firstName: 'Glory',
            lastName: 'Agatevure',
            email: 'agatevureglory@gmail.com',
            mobileNumber: 2348037303414
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
    a{
        text-decoration: none;
    }
    .edit-wrapper{
        display: grid;
        grid-template-rows: 80px 270px;
        background-color: #fefefe;
        margin: 0 160px 80px 160px;
        padding: 80px 70px 0 70px;
        box-shadow: 5px 5px 15px grey;
        grid-gap: 10px;
        height: 470px;
    }
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .profile-img{
        display: grid;
        justify-content: center;
        cursor: pointer;
    }
    .update-form{
        display: grid;
        grid-template-rows: repeat(4, 20px), 40px;
        grid-gap: 10px;
        margin-top: 40px;
        color: #114e9e;
    }
    .update-sect{
        display: grid;
        justify-content: center;
        margin: 20px 0;
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
            grid-template-rows: 70px 250px;
            height: 430px;
            padding: 30px 20px 0 20px;
            margin: 0 20px 40px 20px;
        }
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