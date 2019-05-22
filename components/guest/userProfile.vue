<template>
    <div class="edit-user-profile">
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
    .edit-user-profile{
        display: grid;
        /* min-height: 100vh; */
    }
    .edit-wrapper{
        display: grid;
        grid-template-rows: auto;
        background-color: #fefefe;
        margin: 0 200px 80px 200px;
        padding: 40px 70px 20px 70px;
        box-shadow: 5px 5px 15px grey;
        grid-gap: 10px;
        /* height: 470px; */
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
        grid-template-rows: repeat(4, 20px), 50px;
        grid-gap: 10px;
        /* margin-top: 40px; */
        color: #114e9e;
    }
    .update-sect{
        display: grid;
        justify-content: center;
        grid-template-rows: 50px;
        /* margin: 20px 0; */
    }
    .update-button{
        height: 50px;
        width: 250px;
        padding: 10px;
        background-color: #01355f;
        color: #fefefe;
        font-size: 16px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: 0.6s ease-in;
    }
    .update-button:hover{
        background-color: #012a63;
    }

    @media (max-width: 767px) {
        .edit-wrapper{
            grid-template-rows: auto;
            /* height: 430px; */
            padding: 20px 20px 15px 20px;
            margin: 0 20px 40px 20px;
        }
        .edit-list{
            font-size: 15px;
        }
        img{
            width: 70px;
            height: 70px;
        }
        .update-form{
            grid-gap: 5px;
        }
        .update-sect{
            grid-template-rows: 40px;
        }
        .update-button{
            width: 200px;
            font-size: 14px;
            height: 40px;
        }
    }
</style>