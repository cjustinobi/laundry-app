<template>
    <header>

        <nuxt-link to='/' class="brand-name">
            <!-- <h1 class='wr-logo'>GPAT</h1> -->
            <img src="~assets/images/EL_logo_2.png" class="elegant-image" alt="Elegant_Laundry_Picture">
        </nuxt-link>

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
        width: 80px;
        padding-top: 6px;
    }
    .brand-name{
        
    }
    

    @media(max-width: 767px) {
        .hide-donate{
            display: none;
        }
    }
</style>