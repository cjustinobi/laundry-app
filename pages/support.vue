<template>
    <div class="contact-support" :style="myStyle">
        <div class="contact">
            <div class="title"><h2>Help and Support</h2></div>
            <div class="ticket-btn">
                <nuxt-link  to="/"><button class="t-btn open-ticket">Opened Tickets</button></nuxt-link>
                <nuxt-link  to="/"><button class="t-btn close-ticket">Closed Tickets</button></nuxt-link>
                <nuxt-link class="create-link"  to="/createticket"><button class="t-btn create-ticket">Create Tickets</button></nuxt-link>
            </div>
            <div class="horizontal-line"></div>
            <div class="ticket-wrapper">
                <div class="recent-ticket">
                    <h4 class="rt-head">Recent Tickets</h4>
                </div>
                <div class="ticket-list">
                    <h4 class="tl-head">No Ticket has been opened</h4>
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
    .contact-support{
        display: grid;
        /* grid-template-rows: 1fr 1fr 1fr; */
        min-height: 100vh;
    }
    .contact{
        display: grid;
        grid-template-rows: 80px 50px 5px auto;
        grid-gap: 10px;
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
    .ticket-btn{
        display: grid;
        grid-template-columns: repeat(5, 180px);
        grid-gap: 30px;
        align-items: center;
        margin: 10px 40px;
        color: #114e9e;
    }
    .horizontal-line{
        border-bottom: 1px solid rgb(207, 207, 207);
        margin: 10px 40px 0 40px;
    }
    .ticket-wrapper{
        display: grid;
        grid-template-columns: 200px 1fr;
        background-color: #fefefe;
        height: 400px;
        /* width: 100%; */
        margin: 70px 40px 40px 40px;
        color: #114e9e;
        box-shadow: 5px 5px 15px grey;
        padding: 15px;
        grid-gap: 20px;
    }
    .t-btn{
        height: 35px;
        width: 160px;  
        padding: 10px;
        background-color: #eeeeee;
        color: #114e9e;
        font-size: 17px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: 0.6s ease-in;
        text-align: center;
        box-shadow: 1px 2px 3px grey;
    }
    .t-btn:hover{
        background-color: rgb(172, 172, 172);
        color: #f0f0f0;
    }
    .create-link{
        grid-column-start: 5;
    }
    .create-ticket{
        background-color: #114e9e;
        color: #fefefe;
    }
    .create-ticket:hover{
        background-color: #00122b;
    }
    .recent-ticket{
        border: 1px solid rgb(202, 202, 202);
    }
    .rt-head{
        background-color: #eeeeee;
        padding: 12px; 
        text-align: center; 
    }
    .tl-head{
        padding: 12px; 
        background-color: #e7b83f;
        color: #fefefe;
    }

    @media (max-width: 767px) {
        .ticket-btn{
            display: grid;
            grid-template-columns: repeat(4, 180px);
            grid-gap: 30px;
            align-items: center;
            margin: 10px 40px;
            color: #114e9e;
        }
        .ticket-wrapper{
            grid-template-columns: 1fr;
            /* height: 700px; */
            padding: 15px;
            grid-gap: 20px;
        }
        .t-btn{
            height: 30px;
            width: 150px;
            font-size: 16px;
        }
        .create-link{
            grid-column-start: 4;
        }
    }
</style>