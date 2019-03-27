<template>
    <div :class="[{'dashboard': !minimized},{'minimized': minimized}]">
        <aside :class="[{'sidebar': sidebar}, {'hide-sidebar': !sidebar}]" >
            <sidebar @toggleMenu="adjustMenu"></sidebar>
        </aside>
        <div class="content">
            <dash-header @showDrawer="hideDrawer = false"></dash-header>
            <div class="nuxt-rend"><nuxt/></div>
        </div>
        
        <div :class="[{'hide-drawer': hideDrawer}]">
            <drawer id="draw-down" @hideDrawer="hideDrawer = true"></drawer>
        </div>
    </div>
</template>

<script>
    import Sidebar from '~/components/dashboard/sidebar'
    import DashHeader from '~/components/dashboard/dashHeader'
    import Drawer from '~/components/dashboard/drawer'

    export default {

        components: { Sidebar, DashHeader, Drawer },
        middleware: ['check-auth'],

        data() {
            return {
                sidebar: true,
                backdrop: false,
                minimized: false,
                hideDrawer: true,
                windowWidth: ''
            }
        },

        methods: {
            adjustMenu(e) {
                if (window.innerWidth > 767) {
                    // Toggles the grid class on wider device.
                    e ? this.minimized = false : this.minimized = true
                } else {
                    // Show the drawer.
                    this.hideDrawer = false
                }
            },
            // toggleSidebar(e) {
            //     let x = document.getElementById("sidebar")
            //     if (x.style.display === 'block') {
            //         this.backdrop = false
            //         x.style.display = "none"
            //     } else {
            //         this.backdrop = true 
            //         x.style.display = 'block'
            //     }
            // },

            minimzeWindow(){
                window.onresize = () => {
                    this.windowWidth = window.innerWidth
                }
                    this.windowWidth = window.innerWidth
            },
        },
        mounted() {
            this.minimzeWindow()
            
            },
            
            
        watch: {
            windowWidth(e) {
                // Hides wider device sidebar.
                e < 768 ? this.sidebar = false : this.sidebar = true
            },
                // Hides the drawer on the Dashboard
            '$route': function(e) {
                // let slideDrawUp = document.getElementById('draw-down')
                // slideDrawUp.style.animationName = "hide"
                this.hideDrawer = true
            }
        }
   
    }

</script>

<style scoped>
    .dashboard{
        display: grid;
        grid-template-columns: 200px 1fr;
        background-color: #fefefe;
        position: relative;
        min-height: 100vh;
    }
    .minimized{
        display: grid;
        grid-template-columns: 80px 1fr;
    }
    .content{
        display: grid;
        grid-template-rows: 60px 1fr;
    }
    .sidebar{
        position: relative;
        background-color: #01355f;
        
    }
    #draw-down{
        -webkit-animation-name: show;
        -webkit-animation-duration: 1s;
        animation-name: show;
        animation-duration: 1s;
    }

    @-webkit-keyframes show {
        0% {
            height: 0%;
            opacity: 0.5;
        }
        100% {
            height: 100%;
            opacity: 1;
        }
    }
    @keyframes show {
        0% {
            height: 0%;
            opacity: 0.5;
        }
        100% {
            height: 100%;
            opacity: 1;
        }
    }

    /* @keyframes hide {
        0% {
            height: 100%;
            opacity: 1;
        }
        50%{
            opacity: 0.5;
        }
        100% {
            height: 0%;
            opacity: 0;
        }
    } */

    .hide-sidebar{
        display: none;
    }
    .hide-drawer{
        display: none;
        position: relative;
        top: 0;
        height: 100%;
    }

    @media (max-width: 767px) {
        .dashboard{
            grid-template-columns: 1fr;
            width: 100%
        }
        .minimized{
            grid-template-columns: 1fr;
        }
    }
</style>
