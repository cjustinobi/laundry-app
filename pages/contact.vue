<template>
    <div class="contact-container" :style="myStyle">
        <div class="touch"><h2>Get in Touch</h2></div>
        <div class="quick-response">
            <h2>Get a quick response from our team</h2>
            <p>Our team is always ready to respond to your enquiries and orders                                                                                                                                                                                                                                                         </p>
        </div>
        <div class="message-area">
            <form class="form-container">
                <h3 class="msg">Send us a message</h3>
                <input type="text" placeholder="Email">
                <input type="text" placeholder="Subject">
                <textarea name="" id="text-area" cols="30" rows="10" placeholder="Message"></textarea>
                <button class="send-msg-btn">Send message</button>
            </form>
            <div class="contact-details">
                <div class="contact-head"><h3>Contact details</h3></div>
                <div class="contact-info">
                    <i class="fa fa-phone"></i> <p>Phone: +2348037303414</p>
                    <i class="fa fa-envelope"></i> <p>Email: agatevureglory@gmsil.com</p>
                    <i class="fa fa-twitter"></i> <p>Twitter: @elaundry</p>
                    <i class="fa fa-map-marker"></i> <p>1, Alaenyi street, Owerri, Imo State</p>
                </div>
            </div>
        </div>
        <div class="input" :style="{backgroundColor: color}"></div>
        <div class="input" :style="myStyl"></div>
        <div class="input" v-bind:style="[myStyl, {height: width + 'px'}]"></div>
        <input type="text" v-model="color">
        <input type="text" v-model="width">
    </div>
</template>
<script>
    export default {
        
        data() {
            return {
                myStyle: {
                    backgroundColor: "#f0faff"
                },
                color: 'blue',
                width: '100'
            }
        },
        methods: {
           
        },       
        computed: {
            myStyl(){
                return{
                    backgroundColor: this.color,
                    width: this.width + 'px'
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
.input{
    width: 100px;
    height: 100px;
    background-color: blue;
    display: inline-block;
    margin: 10px;
}
    .contact-container{
        display: grid;
        min-height: 100vh;
        grid-template-rows: 60px 80px 1fr;
        grid-gap: 30px;
        color: #114e9e;
    }
    .touch{
        display: grid;
        align-items: center;
        text-align: center;
        background-color: #fefefe;
        padding: 10px;
    }
    .quick-response{
        display: grid;
        align-items: center;
        text-align: center;
        padding: 10px;
    }
    .message-area{
        display: grid;
        grid-template-columns: 500px 300px;
        grid-gap: 100px;
        justify-content: center;
        margin: 0 30px 30px 30px;
        padding: 10px;
    }
    .form-container{
        display: grid;
        grid-template-rows: 50px 30px 30px 150px 60px;
        grid-gap: 10px;
    }
    .msg{
        padding-bottom: 10px;
    }
    .contact-details{
        display: grid;
        grid-gap: 30px;
        grid-template-rows: 37px 1fr;
    }
    .contact-head{
        border-bottom: 1px solid rgb(212, 212, 212);
        width: 138px;
    }
    .contact-info{
        display: grid;
        grid-template: repeat(4, 40px) / 50px 300px;
    }
    input{
        width: 430px;
        height: 30px;
        padding: 5px;
        border: 1px solid rgb(238, 238, 238);
    }
    #text-area{
        width: 430px;
        height: 150px;
        padding: 5px;
        border: 1px solid rgb(238, 238, 238);
    }
    .send-msg-btn{
        width: 200px;
        height: 60px;
        background-color: #114e9e;
        color: #fefefe;
        outline: none;
        border: none;
        transition: 0.8s ease-in;
        font-size: 16px;
    }
    .send-msg-btn:hover{
        background-color: #083774;
    }

    @media (max-width: 767px) {
        .contact-container{
            grid-gap: 40px;
            font-size: 14px;
        }
        .quick-response{
            padding: 10px 15px;
        }
        .message-area{
            grid-template-columns: 1fr;
            grid-gap: 50px;
            margin: 0 10px 30px 10px;
        }
        input{
            width: 70%;
            height: 30px;
        }
        #text-area{
            width: 70%;
            height: 150px;
        }
    }
</style>
