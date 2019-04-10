<template>
    <div class="ticket-container" :style="myStyle">
        <app-header @toggleSidebar="toggleSidebar"></app-header>
        <div class="sign-up-message">
            <h2>Thank you for signing up!</h2>
            <p>
                A confirmation email has been sent to you to authorize your account, once 
                you have confirmed, you can schedule your first pickup and delivery.
            </p>
            <p>Didn't get the email after a few minutes, click <nuxt-link to="/">here</nuxt-link></p>
        </div>
        
        <div><quick-links/></div>

        <div id="footer"><app-footer></app-footer></div>
        <div :class="{backdrop}">
            <div id="sidebar-link" class="sidebar"><sidebar></sidebar></div>
        </div>
    </div>
</template>

<script>
    // import AppHeader from '~/components/guest/appHeader'
    // import Sidebar from '~/components/guest/sidebar'
    // import QuickLinks from '~/components/guest/quickLinks'
    // import AppFooter from '~/components/guest/appFooter'

    export default {
        // components: { AppHeader, Sidebar, QuickLinks, AppFooter  },        

        data() {
            return {
                myStyle: {
                    backgroundColor: "#f0faff"
                },
                category: 'Select category',
                backdrop: false
            } 
        },
         methods: {

            toggleSidebar() {
                let x = document.getElementById("sidebar")
                if (x.style.display === 'block') {
                    this.backdrop = false
                    x.style.display = "none"
                } else {
                    this.backdrop = true
                    x.style.display = 'block'
                }
            }

        },
        watch: {
            '$route': function(e) {
                if (e && window.innerWidth < 768) {
                    this.backdrop = false
                    document.getElementById("sidebar").style.display = "none"
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
    .ticket-container{
        display: grid;
        min-height: 100vh;
        position: relative;
        grid-template-rows: auto 1fr auto / 1fr;
    }
    .sign-up-message{
        display: grid;
        grid-template-rows: 50px 100px 50px;
        align-items: center;
        grid-gap: 10px;
        background-color: #fefefe;
        margin: 60px auto;
        max-width: 500px;
        color: #114e9e;
        padding: 90px 20px;
        text-align: center;
        
    }
    a{
        color: #e7b83f;
        text-decoration: none;
    }
   

    @media (max-width: 767px) {
        .sign-up-message{
            grid-template-rows: 50px 100px 50px;
            align-items: center;
            grid-gap: 10px;
            background-color: #fefefe;
            margin: 0 auto;
            max-width: 400px;
            color: #114e9e;
            padding: 90px 20px;
            height: 400px;
        }
    }
</style>