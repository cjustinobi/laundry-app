<template>
    <div class="terms-container">
        <div class="touch"><h2>Terms and Conditions</h2></div>
        <div class="terms-body">
            <p class="pb">Elegant Online Services. ("Elegant.com") welcomes you to its online platform (including all
                 content and functionality available through the http://www.elegant.com domain name, the "Site") and/or 
                 mobile application (the "App"). Elegant.com is delighted to provide you with access to its platform, 
                 related data, Elegant.com's proprietary software, and content and related documentation and information 
                 through the App in connection with certain on-demand dry-cleaning and laundry delivery services provided
                  by Elegant.com (collectively the "Services").
            </p>
            <p class="pb">By visiting, downloading, registering for an account (an "account") on the site and/or 
                app, accessing or using any part of the site or the app, you (the terms "you", "your", and "yours"
                 shall refer to any and all users of the site and/or app (the "user")) expressly agree to and 
                 consent to be bound by.
            </p>
            <p class="pb">
                If you do not agree to the terms of this agreement and/or the policy, you do not have safi.ng's 
                authorization to use any of the services and you may not access or use any portion of the site or app. 
                Safi.ng may modify this agreement at any time, and such modification shall be effective immediately upon 
                either posting of the modified agreement or notifying you. You agree to review this agreement periodically 
                to ensure that you are aware of any modifications. Your continued access or use of the site shall be deemed
                 your conclusive acceptance of the modified agreement
            </p>

            <h5 class="pad-head">Placing an Order</h5>
            <p class="pbl">
                Please ensure that you check the details of your Order before submitting it as We will not be liable to you 
                for any errors you make. For example, please check carefully that you correctly identify each Item. If you 
                think that you may have made a mistake. We will confirm any changes to your Order by email.
            </p>
            <p class="pbl">
                Submission of an Order does not create a contract between us. The contract arises when We send you an email/sms 
                confirming acceptance of your Order. The email will include your billing information.
            </p>

            <h5 class="pad-head">Pickup and redelivery</h5>
            <p class="pbl">
                We will use reasonable endeavours to collect and re-deliver Items at the times specified
                 in the Order but we cannot guarantee to do so. We will use reasonable endeavours to communicate any delay to 
                 you by phone or email.
            </p>
            <p class="pbl">
                If you are not available to accept redelivery of Items, we will contact you by phone or email to arrange 
                redelivery at your convenience.
            </p>

        </div>
    </div>
</template>
<script>
    export default {
        
        data() {
            return {
                
            }
        },
        methods: {
            
        },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        mounted() {
            document.body.style.background = "#fefefe";
        },                                                                                                                                                                                                                                                                          
        destroyed() {
            document.body.style.background = "none";
        }
    }
</script>
<style scoped>
    .terms-container{
        display: grid;
        min-height: 100vh;
        grid-template-rows: 80px 1fr;
        color: #114e9e;
    }
    .touch{
        display: grid;
        align-items: center;
        justify-items: center;
        text-align: center;
        padding: 10px;
        width: 70%;
        border-bottom: 1px solid #e7b83f;
        margin: 0 auto 10px auto;
    }
    .terms-body{
        grid-template-rows: 90px;
        text-align: left;
        padding: 10px;
        width: 70%;
        margin: 0 auto;
    }
    .pb{
        padding-bottom: 20px;
    }
    .pbl{
        padding: 0 0 20px 15px;
    }
    .pad-head{
        padding-bottom: 5px;
    }
    .regard{
        padding-bottom: 12px;
    }
    .pad-list{
        padding: 0 0 5px 30px;
    }
    .sources{
        padding: 10px 0 20px 15px;
    }
    

    @media (max-width: 767px) {
        .terms-container{
            grid-template-rows: 100px 1fr;
        }
        .touch{
            padding: 10px;
            width: 90%;
        }
    }
</style>
