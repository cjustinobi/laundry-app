<template>
    <div class="notification" :style="myStyle">
        <div class="title"><h2>Notifications</h2></div>

        <div class="request">
            <i class="fa fa-bell fa-5x"></i>
            <h2>No Notification available!</h2>
            <nuxt-link to="/usernotification"><button class="request-btn">Request a Pick-up</button></nuxt-link>
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
    .notification{
        display: grid;
        grid-template-rows: 90px 1fr;
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
    .request{
        display: grid;
        align-content: center;
        justify-items: center;
        grid-gap: 15px;
        color: #114e9e;
    }
    .fa-bell{
        color: #919aa7;
    }
    .request-btn{
        width: 220px;
        height: 60px;
        border: 1px solid #fefefe;
        border-radius: 5px;
        background-color: #e7b83f;
        font-size: 20px;
        color: #fefefe;
        font-weight: bold;
        outline: none;
    }
    .request-btn:hover,
    .request-btn:active{
        background-color: #f58b13;
        transition: .7s ease-out;
        color: #fefefe;
    }
    
    @media (max-width: 767px) {
        
    }
</style>