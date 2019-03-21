<template>
    <div class="container">

        <app-header @toggleSidebar="toggleSidebar"></app-header>

        <div class="nuxt-render"><nuxt /></div>

        <div id="footer"><app-footer></app-footer></div>

        <div :class="{backdrop}">
            <div id="sidebar-link" class="sidebar"><sidebar></sidebar></div>
        </div>

    </div>
</template>

<script>

    import AppHeader from '~/components/guest/appHeader'
    import Sidebar from '~/components/guest/sidebar'
    import AppFooter from '~/components/guest/appFooter'

    export default {

        components: { AppHeader, AppFooter, Sidebar },

        data() {
            return {
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
        }

    }

</script>

<style>
    @import '../assets/css/style.css';

     #sidebar-link{
        animation: alpha 4s;
    }
    @keyframes alpha{
        0%{
            width: 0%;
            background-color: blue;
        }
        100%{
            width: 100%;
            background-color: chartreuse;
        }
    }


     @media(max-width: 767px) {
        .sidebar{
            /* display: none; */
            /* position: relative; */
            right: 0;
            width: 100%;
        }
    }
</style>

