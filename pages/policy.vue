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
            <p class="pbl regard">
                With regard to each of your visits to our platform we may automatically collect the following information:
            </p>
            <li class="pad-list">
                technical information, including the Internet protocol (IP) address used to connect your computer 
            to the Internet, your login information, browser type and version, time zone setting, browser 
            plug-in types and versions, operating system and platform;
            </li>
            <li class="pad-list">
                information about your visit, including the full Uniform Resource Locators (URL) clickstream to,
                 through and from our site (including date and time); products you viewed or searched for; page 
                 response times, download errors, length of visits to certain pages, page interaction information 
                 (such as scrolling, clicks, and mouse-overs), and methods used to browse away from the page and any 
                 phone number used to call our customer service number.
            </li>
            <p class="pbl sources">
                Information we receive from other sources. We may receive information about you if you use any of 
                the other websites we operate or the other services we provide. We are also working closely with third 
                parties (including, for example, business partners, sub-contractors in technical, payment and delivery 
                services, advertising networks, analytics providers, search information providers, credit reference agencies)
                 and may receive information about you from them.
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
