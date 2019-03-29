<template>
    <div class="drawer-container">
        <div class="hide-drawer">
            <a href="#" @click.prevent="$emit('hideDrawer')"><i class="fa fa-times-circle fa-2x"></i></a>
        </div>
        <div id="sidebar-nav" :class="[{'sidebar-nav': sidebarNav}]" >
            <nuxt-link to='/dashboard' class='logo'>
                <i class="fa fa-dashcube" title="Dashboard"></i> 
                <span>Dashboard</span>
            </nuxt-link>
            <nuxt-link to='/pickupform' class='logo'>
                <i class="fa fa-suitcase" title="My Orders"></i>
                <span>My Orders</span>
            </nuxt-link>
            <nuxt-link to='/mysubscription' class='logo'>
                <i class="fa fa-hashtag" title="Subscription"></i>
                <span>My subscription</span>
            </nuxt-link>
            <nuxt-link  to='/transaction' class='logo'>
                <i class="fa fa-history" title="Transaction History"></i> 
                <span>Transaction History</span>
            </nuxt-link>
            <nuxt-link to='/notifications' class='logo'>
                <i class="fa fa-bell" title="Notifications"></i>
                <span>Notifications</span>
            </nuxt-link>
            
            
            <nuxt-link to='/referafriend' class='logo'>
                <i class="fa fa-user-plus" title="Refer a Friend"></i> 
                <span>Refer a Friend</span>
            </nuxt-link>
            <nuxt-link to='/addpackage' class='logo'>
                <i class="fa fa-plus-circle" title="Add Package"></i>
                <span>Add Package</span>
            </nuxt-link>
            <nuxt-link to='/createbenefits' class='logo'>
                <i class="fa fa-ellipsis-v" title="Create Benefit"></i>
                <span>Create Benefits</span>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                sidebarNav: true
            }
        },
        methods: {
            hideDrawDown(e) {
                let x = document.getElementById("sidebar-nav")
                if (x.style.display === 'block') {
                    this.sidebarNav = false
                    x.style.display = "none"
                } else {
                    this.sidebarNav = true
                    x.style.display = 'block'

                    }
                },
            }
        }
    
</script>

<style scoped>
    .drawer-container{
        height: 100vh;
        position: fixed;
        top: 0;
        width: 100%;
        background-color: #01355f;
        display: grid;
        grid-template-rows: auto 1fr;
    }
    .hide-drawer{
        display: grid;
        margin-top: 20px;
        justify-self: end;
    }
    .hide-drawer a{
        text-decoration: none;
        color: #fefefe;
        /* font-size: 40px; */
        padding-right: 15px;
    }
    .sidebar-nav {
        display: grid;
        grid-auto-rows: 1fr;
        width: 100%;
        margin-top: 20px;
        align-items: center;
        justify-content: center;
    }
    .sidebar-nav a{
        text-decoration: none;
        color: #fefefe;
        padding: 14px 10px;
        font-size: 25px;
        transition: .7s ease-out;
    }
    .logo{
        display: grid;
        grid-template-columns: 50px 1fr;
    }

</style>