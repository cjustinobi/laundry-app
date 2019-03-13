<template>
    <div
            :class="[{'dashboard': !minimized},{'minimized': minimized}]">
        <aside :class="[{'sidebar': sidebar}, {'hide-sidebar': !sidebar}]" >
            <sidebar @toggleMenu="adjustMenu"></sidebar>
        </aside>
        <div class="content">
            <dash-header @showDrawer="hideDrawer = false"></dash-header>
            <div class="nuxt-rend"><nuxt/></div>
        </div>
        <div :class="[{'hide-drawer': hideDrawer}]">
            <drawer @hideDrawer="hideDrawer = true"></drawer>
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
            toggleSidebar(e) {
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
        mounted() {
            window.onresize = () => {
                this.windowWidth = window.innerWidth
            }
            this.windowWidth = window.innerWidth
        },
        watch: {
            windowWidth(e) {
                // Hides wider device sidebar.
                e < 768 ? this.sidebar = false : this.sidebar = true
            }
        }

    }

</script>

<style scoped>
    .dashboard{
        display: grid;
        grid-template-columns: 200px 1fr;
        background: #fefefe;
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
        background: #fffcfc;
        
    }
    .hide-sidebar{
        display: none;
    }
    .hide-drawer{
        display: none;
    }
    .backdrop{
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba(51, 51, 51, 0.44);
        transition: 2s ease-in;
}

@media (max-width: 767px) {
    .dashboard{
        grid-template-columns: 1fr;
    }

}
</style>
