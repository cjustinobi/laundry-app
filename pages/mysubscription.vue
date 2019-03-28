<template>
    <div class="edit-profile" :style="myStyle">
        <div class="title"><h2>My Subscriptions</h2></div>
        <div class="edit-wrapper">
            <div class="sub-heading"><h4>Current Subscription</h4></div>
            <div class="update-sect">
                <h4>You currently do not have a subscription</h4>
                <nuxt-link to="/subscriptionpage" class="update-button">
                    <i class="fa fa-shopping-bag"></i>Subscribe Now
                </nuxt-link>
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
        color: #114e9e;
        box-shadow: 5px 5px 15px grey;
    }
    .sub-heading{
        display: grid;
        height: 40px;
        align-items: center;
        background-color: rgb(241, 241, 241);
        padding-left: 40px;
        color: #114e9e;
    }
    .update-sect{
        display: grid;
        align-items: center;
        justify-items: center;
        margin: 20px 0 40px 0;
        
        /* padding: 0 50px; */
    }
    .update-button{
        display: grid;
        grid-template: 80px / 20px 130px;
        justify-items: center; 
        align-content: center;
        height: 60px;
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
        .update-button{
            width: 200px;
            font-size: 14px;
        }
    }
</style>