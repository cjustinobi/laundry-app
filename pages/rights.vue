<template>
    <div class="rights-container">
        <div class="touch"><h2>Terms of Use</h2></div>
        <div class="rights-body">
            <p class="pb">
                Elegant Online Services (“Elegant.com“) is committed to protecting and respecting your privacy.
                 Please read these terms and conditions carefully before using our website.
            </p>

            <h5 class="pad-head">Terms of website use</h5>
            <li class="pbl">
                This terms of use (together with the documents referred to in it) tells you the terms of use on 
                which you may make use of our website safi.ng (our site), whether as a guest or a registered user.
                 Use of our site includes accessing, browsing, or registering to use our site.
            </li>
            <li class="pblt">
                Please read these terms of use carefully before you start to use our site, as these will apply to
                 your use of our site.
            </li>

            <h5 class="pad-head">Accessing our site</h5>
            <li class="pbl">
                Our site is made available free of charge
            </li>
            <li class="pblt">
                We do not guarantee that our site, or any content on it, will always be available or be uninterrupted. 
                Access to our site is permitted on a temporary basis. We may suspend, withdraw, discontinue or change all
                 or any part of our site without notice.
            </li>
            <h5 class="pad-head">Account and Password</h5>
            <li class="pbl">
                If you choose, or you are provided with, a user identification code, password or any other piece of
                 information as part of our security procedures, you must treat such information as confidential. 
                 You must not disclose it to any third party.
            </li>
            <li class="pblt">
                We have the right to disable any user identification code or password, whether chosen by you or 
                allocated by us, at any time, if in our reasonable opinion you have failed to comply with any of 
                the provisions of these terms of use.
            </li>
            <h5 class="pad-head">Intellectual property rights</h5>
            <li class="pbl">
                We are the owner or the licensee of all intellectual property rights in our site, and in 
                the material published on it. Those works are protected by copyright laws and treaties around the world. 
                All such rights are reserved.
            </li>
            <li class="pblt">
                You must not use any part of the content on our site for commercial purposes without obtaining a licence to 
                do so from us or our licensors.
            </li>

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
    .rights-container{
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
    .rights-body{
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
        padding: 0 0 7px 15px;
    }
    .pblt{
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
            padding: 20px;
            width: 90%;
            margin: 0 auto 10px auto;
        }
    }
</style>
