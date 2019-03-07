<template>
    <div class="container">

        <app-header @toggleSidebar="toggleSidebar"></app-header>

        <div class="nuxt-render"><nuxt /></div>

        <div id="footer"><app-footer></app-footer></div>

        <div :class="{backdrop}">
            <div class="sidebar"><sidebar></sidebar></div>
        </div>

    </div>
</template>

<script>

    import AppHeader from '~/components/appHeader'
    import Sidebar from '~/components/sidebar'
    import AppFooter from '~/components/appFooter'

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
    @import '../assets/css/style.css'
</style>

