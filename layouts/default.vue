<template>
    <div class="container">

        <AppHeader id="nav" class="nav" :class="{ 'hidden-navb': !showNavb }" @toggleSidebar="toggleSidebar"/>

        <div class="nuxt-render">
            <notification/>
            <nuxt/>
        </div>

        <div><QuickLinks/></div>

        <div id="footer"><AppFooter/></div>

        <div :class="{backdrop}">
            <div id="sidebar-link" class="sidebar"><Sidebar/></div>
        </div>

    </div>
</template>

<script>

    import AppHeader from '~/components/guest/appHeader'
    import Sidebar from '~/components/guest/sidebar'
    import QuickLinks from '~/components/guest/quickLinks'
    import AppFooter from '~/components/guest/appFooter'

    export default {

        components: { AppHeader, Sidebar, QuickLinks, AppFooter  },

        data() {
            return {
                backdrop: false, 
                showNavb: true,
                lastScrollPosition: 0,
                scrollValue: 0            
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
            },
            onScroll () {
                const OFFSET = 68
                if (window.pageYOffset < 0) {
                    return
                }
                if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
                    return
                }
                this.showNavb = window.pageYOffset < this.lastScrollPosition
                this.lastScrollPosition = window.pageYOffset
                if(window.pageYOffset > 70){
                    nav.style.background = '#01355f'
                    nav.style.boxShadow = '0 4px 12px 0 rgba(0,0,0,0.4)'
                } else {
                    nav.style.background = 'transparent'
                    nav.style.boxShadow = 'none'
                }
            }
        },

        watch: {
            '$route': function(e) {
                if (e && window.innerWidth < 768) {
                    this.backdrop = false
                    document.getElementById("sidebar").style.display = "none"
                }
            },
            // 'window.onScroll': function(){
            //     let nav = document.getElementById('nav')
            //     if(window.pageYOffset > 100){
            //         nav.style.background = 'red'
            //     } else {
            //         nav.style.background = 'transparent'
            //     }
            // }
        },
        mounted () {
            this.lastScrollPosition = window.pageYOffset
            window.addEventListener('scroll', this.onScroll)
            const viewportMeta = document.createElement('meta')
            viewportMeta.name = 'viewport'
            viewportMeta.content = 'width=device-width, initial-scale=1'
            document.head.appendChild(viewportMeta)
        },

        beforeDestroy () {
            window.removeEventListener('scroll', this.onScroll)
        },

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

    .nav{
        transform: translate3d(0, 0, 0);
        transition: 0.1s all ease-out;
    }
    .hidden-navb {
        box-shadow: none;
        transform: translate3d(0, -100%, 0);
    }


     @media(max-width: 767px) {
        .sidebar{
            right: 0;
            width: 100%;
        }
    }
</style>

