<template>
    <footer class="footer">
        <div class="water-relief">
            <h5>Water Relief Africa</h5>
            <small><a href="#" target="_blank">Developed @africInnovate</a></small>
        </div>
        <!--<div class="footer-menu">
            <nuxt-link class="footer-link" to="/">Home</nuxt-link>
            <nuxt-link class="footer-link" to="/about">About </nuxt-link>
            <nuxt-link class="footer-link" to="/volunteer">Get Involved</nuxt-link>
            <nuxt-link class="footer-link" to="/projects">Projects</nuxt-link>
            <nuxt-link class="footer-link" to="/team">Our Team</nuxt-link>
            <nuxt-link class="footer-link" to="/contact">Contact us</nuxt-link>
        </div>-->
        <!--<p class="copy">All rights reserved &copy; 2018</p>-->
        <div class="socials">
            <a href="https://www.facebook.com/Waterreliefafrica"> <i class="fa fa-facebook fa-lg social-icons"></i></a>
            <a href="https://www.twitter.com/Waterreliefafrica"> <i class="fa fa-twitter fa-lg social-icons"></i></a>
            <a href="tel:2347051120971"> <i class="fa fa-whatsapp fa-lg social-icons"></i></a>
        </div>
    </footer>
</template>

<style scoped>
    footer{
        display: grid;
        position: relative;
        grid-template-columns: auto 150px;
        justify-content: space-between;
        align-items: center;
        background: #312a3d;
        color: #898989;
        padding: 10px 48px;
    }
    a{
        color: #898989;
        transition: 1s ease-in;
        text-decoration: none;
    }
    a:hover{
        color: rgba(137, 137, 137, 0.67);
    }
    .socials{
        display: grid;
        grid-template-columns: repeat(3, auto);
        justify-content: space-between;
    }
    @media(max-width: 480px) {
        footer{
            padding: 10px 16px;
            grid-template-columns: 1fr;
            justify-items: center;
        }
        .water-relief
        {
            display: grid;
            justify-items: center;
        }
        .socials{
            width: 150px;
            margin: 16px 0;
        }
    }
</style>