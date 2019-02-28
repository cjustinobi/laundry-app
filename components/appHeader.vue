<template>
    <header>

        <nuxt-link to='/' class="brand-name">
            <h1 class='wr-logo'>GPAT</h1>
        </nuxt-link>

        <div class="app-links"><app-links></app-links></div>

        <!-- <donate></donate> -->

        <a class='toggle-icon' @click.prevent="$emit('toggleSidebar')">
            <i class='fa fa-bars'></i>
        </a>

    </header>
</template>

<script>

    import Donate from '~/components/donate'
    import AppLinks from '~/components/appLinks'

    export default {

        components: {
            Donate,
            AppLinks
        }

    }

</script>

<style scoped>
    .header a
    {
        text-decoration: none;
    }

    @media(max-width: 767px) {
        .hide-donate{
            display: none;
        }
    }
</style>