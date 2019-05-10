<template>
    <div class="ticket-container" >
        <div class="contact">
            <div class="title"><h2>Refer a Friend</h2></div>
            <div class="refer-head"><h3>You earn 25% for every friend you introduce</h3></div>
            <img src="~assets/images/refer.jpg" alt="">
            <div class="referral-section">
                <div class="referral-inner share">
                    <h3>Share Code</h3>
                    <p>Sign and head to your account or find the referral code at the bottom of 
                        your registration confirmation mail
                    </p>
                </div>
                <div class="referral-inner give">
                    <h3>Give 25%</h3>
                    <p>We give your friends 25% for using the referral code at checkout</p>
                </div>
                <div class="get">
                    <h3>Get 25%</h3>
                    <p>Once their first order has been delivered, you will 25% off your next order</p>
                </div>
            </div>

            <div class="enter-details"><h2>Enter your details below to share</h2></div>
            <div class="share-box">
                <div class="input-details">
                    <input type="text" placeholder="Full Name" class="input-name">
                    <input type="text" placeholder="Referral code" class="input-referral">
                </div>
                <div class="invitation-msg">
                    <p>
                        Hi there, <br><br>
                        Your friend just sent you a 25% voucher to use on <br>  
                        ELaundry! If you are not familiar, ELaundry collects, <br>
                        clean and deliver your laundry straight at your door, <br>
                        saving you both time and money. <br><br>
                        It is really simple to use, just sign up on our <nuxt-link to="/login">website.</nuxt-link><br>
                        Then use code to get 25% of your first order. <br><br>
                        Find out why thousands across Nigeria are switching <br>
                        their laundry, dry cleaning and ironing to ELaundry. <br><br>
                        Happy ELaundry!
                    </p>
                    <div class="ticket-btn">
                        <nuxt-link  to="/">
                            <button class="invite-btn">
                                <i class="fa fa-paper-plane"></i> Share Invite links to friends
                            </button>
                        </nuxt-link>
                    </div>
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
                category: 'Select category'
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
    .ticket-container{
        display: grid;
        /* grid-template-rows: 1fr 1fr 1fr; */
        min-height: 100vh;
    }
    .contact{
        display: grid;
        /* grid-template-rows: 80px 50px 5px auto; */
    }
    .title{
        display: grid;
        justify-items: center;
        align-content: center;
        height: 80px;
        color: #114e9e;
        border-bottom: 1px solid rgb(207, 207, 207);
    }
    a{
        text-decoration: none;
        color: #f8b711;
    }
    img{
        background-size: cover;
        width: 100%;
    }
    .refer-head{
        display: grid;
        justify-items: center;
        align-content: center;
        height: 50px;
        color: #022047;
        background-color: #f0faff;
    }
    .referral-section{
        display: grid;
        grid-template-columns: repeat(3, auto);
        margin: 40px 50px;
        grid-gap: 20px;
        color: #225392;
    }
    .referral-inner{
        border-right: 1px solid rgb(189, 189, 189);
    }
    .enter-details{
        display: grid;
        justify-items: center;
        align-content: center;
        height: 50px;
        color: #114e9e;
    }
    .share-box{
        display: grid;
        margin: 20px auto;
        max-width: 500px;
        background-color: #f0faff;
        border: 1px solid rgb(233, 233, 233);
    }
    .input-details{
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 20px;
        margin: 20px 40px;
    }
    .input-name {
        padding: 10px;
        height: 35px;
        border: 1px solid rgb(233, 233, 233);
        color: #225392;
    }
    .input-referral{
        padding: 10px;
        height: 35px;
        border: 1px solid rgb(233, 233, 233);
        color: #225392;
    }
    .invitation-msg{
        display: grid;
        margin: 20px 80px;
        padding: 20px;
        border: 1px solid rgb(233, 233, 233);
        background-color: #fefefe;
        color: #225392;
    }
    .invite-btn{
        height: 40px;
        width: 250px;
        margin-top: 15px;
        background-color: #225392;
        color: #fefefe;
        outline: none;
        border: none;
    }
    

    @media (max-width: 767px) {
        .referral-section{
            grid-template: 1fr / 1fr;
            grid-gap: 0;
            margin: 40px 20px;
            grid-gap: 30px;
        }
        .referral-inner{
            border: none;
        }
        .input-details{
            grid-gap: 20px;
            margin: 20px;
        }
        .invitation-msg{
            margin: 20px;
            padding: 20px;
        }
    }
</style>