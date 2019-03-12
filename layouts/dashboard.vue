<template>
    <div class="dashboard" >
        <div id="sidebar" :class="[{'sidebar': sidebar}]" >
            <sidebar class="sidebar-backdrop" :class="{backdrop}"></sidebar>
        </div>

        <div class="content" >
            <dash-header @toggleSidebar="toggleSidebar"></dash-header>
            <div class="nuxt-rend"><nuxt/></div>
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
                backdrop: false
            }
        },

        methods: {
            // toggleSidebar() {
            //     console.log(this)
            // },
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
            watch: {
            '$route': function(e) {
                if (e && window.innerWidth < 768) {
                    this.backdrop = false
                    document.getElementById("sidebar").style.display = "none"
                }
             }
           }
        }

    }

</script>

<style scoped>
    .dashboard{
        display: grid;
        grid-template-columns: 200px 1fr;
        background-color: rgb(233, 233, 233);
        
    }
    .content{
        display: grid;
        grid-template-rows: 60px 1fr;
    }
    .sidebar{
        position: relative;
        top: 0;
        left: 0;
        min-height: 100vh;
        background: #fffcfc;
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
        /* width: 200px; */
    }
    .sidebar-backdrop{
        /* width: 200px; */
    }
}
</style>
