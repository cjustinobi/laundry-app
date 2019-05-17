<template>
    <div class="quick-links">
        <div class="about">
            <h4>About Us</h4>
            <nuxt-link to="/about">
                <img class="elegant-image" src="~assets/images/EL_logo_2.png" alt="Elegant Logo">
            </nuxt-link>
        </div>

        <div class="quick-ls">
            <h4>Quick Links</h4>
            <nuxt-link to="/pricing">Pricing</nuxt-link>
            <nuxt-link to="/services">Services</nuxt-link>
            <nuxt-link to="/faqList">FAQ</nuxt-link>
        </div>

        <div class="socials">
            <h4>Socials</h4>
            <div class="socials-links">
                <a href="https://www.facebook.com/elegantlaundry"> <i class="fa fa-facebook fa-lg social-icons"></i></a>
                <a href="https://www.twitter.com/elegantlaundry"> <i class="fa fa-twitter fa-lg social-icons"></i></a>
                <a href="tel:2347051120971"> <i class="fa fa-whatsapp fa-lg social-icons"></i></a>
            </div>
        </div>

        <div class="customer-care" >
            <h4>Contacts</h4>
            <p style="color: #b4b4b4">+2347032313948</p>
            <!-- <h4>Customer care</h4> -->
            <p style=""><a href="https://www.gmail.com/elegantlaundry">info@elegantlaundry.com</a></p>
        </div>

        <a href="#intro">
        <div :class="[{'angle-up': angleUp}, {'hide-angle-up': !angleUp}]">
            <i class="fa fa-angle-up fa-2x" style="color: #fefefe"></i>
        </div>
        </a>
        
    </div>    
</template>

<script>
export default {
    
    data() {
        return {
            angleUp: true,
            windowWidth: ''
        }
    },
    methods: {
        minimizedWindow(){
            window.onresize = () => {
                this.windowWidth = window.innerWidth
            }
                this.windowWidth = window.innerWidth
        }
    },
    mounted() {
            this.minimizedWindow()
        },
    watch: {
         windowWidth(e) {
            // Hides wider device sidebar.
            e < 768 ? this.angleUp = false : this.angleUp = true
        }
    }
}
</script>

<style scoped>
    .quick-links{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        background-color: #424242;
        color: #fefefe;
        padding: 20px 0px;
        justify-items: center;  
    }
    .about{
        display: grid;
    }
    .about h4{
        padding-bottom: 20px;
    }
    .elegant-image{
        width: 60px;
    }
    a{
        color: #b4b4b4;
        transition: 1s ease-in;
        text-decoration: none;
    }
    a:hover{
        color: rgba(137, 137, 137, 0.67);
    }
    .quick-ls{
        display: grid;
    }
    .quick-ls h4{
        padding-bottom: 15px;
    }
    .quick-ls a{
        font-size: 14px;
    }
    .socials{
        display: grid;
        grid-template-rows: 40px auto;
    }
    .socials-links{
        display: grid;
        grid-template-columns: repeat(3, 30px);
    }
    .angle-up{
        display: grid;
        justify-items: center;
        align-items: center;
        padding: 0;
        width: 40px;
        height: 40px;;
        border-radius: 50%;
        background-color: #e7b83f;
    }
    .angle-up a{
        color: #fefefe;
    }
    .angle-up:hover{
        background-color: #f58b13;
        transition: .7s ease-out;
    }
    .customer-care{
        display: grid;
        grid-template-rows: 40px 25px 25px;
        font-size: 14px;
    }

    @media (max-width: 767px) {
        .quick-links{
            grid-template: 1fr / 1fr;
            grid-gap: 20px;
            justify-items: start;
            padding-left: 30px;
            position: relative;
            top: 0;
            left: 0;
            right: 0;
        }
        .hide-angle-up{
            position: absolute;
            top: 350px;
            right: 30px;
            display: grid;
            justify-items: center;
            align-items: center;
            padding: 0;
            width: 40px;
            height: 40px;;
            border-radius: 50%;
            background-color: #e7b83f;
        }
        .hide-angle-up a{
            color: #fefefe;
        }
        .hide-angle-up:hover{
            background-color: #f58b13;
            transition: .7s ease-out;
        }
    }
</style>
