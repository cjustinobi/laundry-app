<template>
    <div class="dashboard-container">
        <div :class="[{'dashboard': !minimized},{'minimized': minimized}]">
            <aside :class="[{'sidebar': sidebar}, {'hide-sidebar': !sidebar}]" >
                <AdminSidebar v-if="(user !== undefined || null) && user.user_type === 3" @toggleMenu="adjustMenu"/>
                <Sidebar v-else @toggleMenu="adjustMenu"/>
            </aside>
            <div class="content">
                <DashHeader @showDrawer="hideDrawer = false"/>
                <div class="nuxt-rend">
                    <notification/>
                    <nuxt/>
                </div>
            </div>
        </div>

        <div class="footer-section">
            <QuickLinks/>
            <AppFooter/>
        </div>

        <div :class="[{'hide-drawer': hideDrawer}]">
            <Drawer id="draw-down" @hideDrawer="hideDrawer = true"/>
        </div>
    </div>
</template>

<script>
    import Sidebar from '~/components/dashboard/shared/sidebar'
    import AdminSidebar from '~/components/dashboard/shared/adminSidebar'
    import DashHeader from '~/components/dashboard/dashHeader'
    import QuickLinks from '~/components/guest/quickLinks'
    import AppFooter from '~/components/guest/appFooter'
    import Drawer from '~/components/dashboard/drawer'
    
    export default {
        components: { Sidebar, AdminSidebar, DashHeader, QuickLinks, AppFooter, Drawer },
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
            minimzeWindow(){
                window.onresize = () => {
                    this.windowWidth = window.innerWidth
                }
                this.windowWidth = window.innerWidth
            },
        },
        computed: {
            user() {
                return this.$store.getters['auth/user']
            }
        },
        watch: {
            windowWidth(e) {
                // Hides wider device sidebar.
                e < 768 ? this.sidebar = false : this.sidebar = true
            },
            // Hides the drawer on the Dashboard
            '$route': function(e) {
                this.hideDrawer = true
            }
        }
    }
</script>

<style scoped>
    .dashboard-container{
        display: grid;
        grid-template-rows: auto auto;
    }
    .nuxt-rend{
        background-color: #f0faff;
    }
    .dashboard{
        display: grid;
        grid-template-columns: 200px 1fr;
        background-color: #fefefe;
        min-height: 100vh;
    }
    .minimized{
        display: grid;
        grid-template-columns: 80px 1fr;
    }
    aside.sidebar{
        border-right: 1px solid rgb(238, 238, 238);
    }
    .content{
        display: grid;
        grid-template-rows: 60px 1fr;
    }
    .footer-section{
        display: grid;
        grid-template-rows: 1fr;
    }
    .sidebar{
        position: relative;
        background-color: #fefefe;

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
        .sidebar{
            display: none;
        }
    }
</style>