<template>
    <div>
        <div
                :class="[{'dashboard': !adjustDashboardSidebar},{'adjust-dashboard-sidebar': adjustDashboardSidebar}]">
            <div id="sidebar" :class="[{'sidebar': sidebar}]" >
                <sidebar class="sidebar-backdrop" @toggleMenu="adjustMenu"></sidebar>
            </div>

            <div class="content" >
                <dash-header @toggleSidebar=""></dash-header>
                <div class="nuxt-rend"><nuxt/></div>
            </div>

        </div>
    </div>
</template>

<script>
    import Sidebar from '~/components/guest/dashboard/sidebar'
    import DashHeader from '~/components/guest/dashboard/dashHeader'
    

    export default {

        components: {Sidebar, DashHeader},
        middleware: ['check-auth'],

        data() {
            return {
                sidebar: true,
                backdrop: false,
                adjustDashboardSidebar: false
            }
        },

        methods: {
            adjustMenu(e) {
                e ? this.adjustDashboardSidebar = false : this.adjustDashboardSidebar = true
            },
            toggleSidebar(e) {
                console.log(e)
                /*let x = document.getElementById("sidebar")
                if (x.style.display === 'block') {
                    this.backdrop = false
                    x.style.display = "none"
                } else {
                    this.backdrop = true
                    x.style.display = 'block'
                }*/
            },
           /* watch: {
            '$route': function(e) {
                if (e && window.innerWidth < 768) {
                    this.backdrop = false
                    document.getElementById("sidebar").style.display = "none"
                }
             }
           }*/
        }

    }

</script>

<style scoped>
    .dashboard{
        display: grid;
        grid-template-columns: 200px 1fr;
        background: #fefefe;
        
    }
    .adjust-dashboard-sidebar{
        display: grid;
        grid-template-columns: 70px 1fr;
        justify-items: center;
    }
    .content{
        display: grid;
        grid-template-rows: 60px 1fr;
        /* position: absolute;  */
        /* top: 0;
        right: 0; */
    }
    .sidebar{
        position: relative;
        top: 0;
        left: 0;
        background: green;
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
    .sidebar{
        display: none;
    }

}
</style>
