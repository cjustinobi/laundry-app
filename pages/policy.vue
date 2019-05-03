<template>
    <div class="policy-container">
        <div class="touch"><h2>Privacy Policy</h2></div>
        <div class="policy-body">
            <p class="pb">ELaundry is committed to protecting and respecting your privacy.</p>
            <p class="pb">The policy (together with our terms of use www.elaundry.com/terms and any other documents referred 
                to on it) sets out the basis on which any personal data we collect from you, or that you provide
                to us, will be processed by us. Please read the following carefully to understand our views and
                practices regarding your personal and ho we will treat it. <br>
                By visiting elaundry.com, you are accepting and consenting to the practices described in this
                policy.
            </p>
            <p class="pb">
                For the purpose of the Personal Information and Data Protection Act 2013 (the Act), elaundry.com of 
                Elegant Online Services, 1, Alaenyi Street, Owerri, Nigeria is the data owner
            </p>
            <h5 class="pad-head">Information we may collect from you</h5>
            <p class="pbl">We may collect and process the following data about you:</p>
            <h5 class="pad-head">Information you give us</h5>
            <p class="pbl">You may give us information about you by filling in forms on our site Elegant.com 
                (our platform) or by corresponding with us by phone, e-mail or otherwise. The information you give
                us may include your name, address, e-mail address and phone number.
            </p>
            <h5 class="pad-head">Information we collect about you </h5>
            <p class="pbl">
                With regard to each of your visits to our platform we may automatically collect the following information:
            </p>
            <p><i class="fa fa-"></i>
                technical information, including the Internet protocol (IP) address used to connect your computer 
                to the Internet, your login information, browser type and version, time zone setting, browser 
                plug-in types and versions, operating system and platform;
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
    .policy-container{
        display: grid;
        min-height: 100vh;
        grid-template-rows: 80px 1fr;
        /* grid-gap: 30px; */
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
    .policy-body{
        /* display: grid; */
        grid-template-rows: 90px;
        /* align-items: center; */
        /* justify-items: center; */
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
    

    @media (max-width: 767px) {
        .touch{
            display: grid;
            align-items: center;
            justify-items: center;
            text-align: center;
            padding: 20px;
            width: 90%;
            margin: 0 auto 10px auto;
        }
        .policy-body{
            text-align: left;
            padding: 20px;
            width: 90%;
            margin: 0 auto;
        }
    }
</style>
