<template>
    <header>

        <nuxt-link to='/' class="brand-name">
            <!-- <h1 class='wr-logo'>GPAT</h1> -->
            <img src="~assets/images/EL_logo_2.png" class="elegant-image" alt="Elegant_Laundry_Picture">
        </nuxt-link>

        <div class="intro-request">
            <nuxt-link to="/usernotification"><button class="request-btn">Request a Pick-up</button></nuxt-link>
        </div>
        <div class="app-links"><app-links></app-links></div>
        

        <a class='toggle-icon' @click.prevent="$emit('toggleSidebar')">
            <i class='fa fa-bars'></i>
        </a>
        

    </header>
</template>

<script>

    import AppLinks from '~/components/guest/appLinks'

    export default {

        components: {
            AppLinks
        }

    }

</script>

<style scoped>
    .header a
    {
        text-decoration: none;
    }
    .elegant-image{
        width: 60px;
    }
    .brand-name{
        display: grid;
        align-items: center;
    }
    .intro-request{
        display: grid;
        height: 50px;
        align-content: center;
        justify-items: center;
        color: #fefefe;
        font-weight: 700;
        justify-self: end;
    }
    .request-btn{
        width: 150px;
        height: 40px;
        border: 1px solid #fefefe;
        border-radius: 5px;
        background-color: #f9a825;
        font-size: 15px;
        color: #fefefe;
    }
    .request-btn:hover,
    .request-btn:active{
        background-color: #f58b13;
        transition: .7s ease-out;
    }

    @media(max-width: 767px) {
        .hide-donate{
            display: none;
        }
        .brand-name{
            padding-top: 6px;
        }
        
    }

    @media(max-width: 360px) {
        .intro-request{
            display: none;
        }
    }

    @media(min-width: 768px) {
        .intro-request{
            display: none;
        }
    }
</style>