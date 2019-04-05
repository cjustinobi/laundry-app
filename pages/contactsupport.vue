<template>
    <div class="contact-support" :style="myStyle">
        <div class="contact">
            <div class="title"><h2>Help and Support</h2></div>
            <div class="edit-wrapper">

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
    .contact-support{
        display: grid;
        min-height: 100vh;
    }
    .subscription{
        display: grid;
        grid-template-rows: 90px 300px;
        grid-gap: 20px;
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
        margin: 60px 40px 40px 40px;
        color: #114e9e;
        box-shadow: 5px 5px 15px grey;
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
        text-align: center;
    }
    .update-button:hover{
        background-color: #00122b;
    }

    @media (max-width: 767px) {
    }
</style>