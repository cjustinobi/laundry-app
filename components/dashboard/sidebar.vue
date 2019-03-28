<template>
    <div class="sidebar-container">
        <div :class="[{'sidebar-head': side}, {'minimized-sidebar': !side}]">
            <nuxt-link to='/' class="brand-name">
                <i v-if="!wideMenu" class="fa fa-home" title="Home"></i>
                <img v-if="wideMenu" src="~assets/images/EL_logo_2.png" class="elegant-image" alt="Elegant_Laundry_Picture">
                <!-- <h1 v-if="wideMenu" class='wr-logo'>GPAT</h1> -->
            </nuxt-link>
            <a class='toggle-bar' @click.prevent="toggleMenu" title="Menu">
                <i class='fa fa-bars' style="color: #fefefe"></i>
            </a>
        </div>

        <div class='sidebar-nav' :class="{'center-nav': !wideMenu}">
            <nuxt-link to='/dashboard' class='logo'>
                <i class="fa fa-dashcube" title="Dashboard"></i> 
                <span v-if="wideMenu">Dashboard</span>
            </nuxt-link>
            <nuxt-link to='/transaction' class='logo'>
                <i class="fa fa-window-maximize" title="Transaction History"></i> 
                <span v-if="wideMenu">Transaction History</span>
            </nuxt-link>
            <nuxt-link to='/notifications' class='logo'>
                <i class="fa fa-bell" title="Notifications"></i>
                <span v-if="wideMenu">Notifications</span>
            </nuxt-link>
            <nuxt-link to='/mysubscription' class='logo'>
                <i class="fa fa-shopping-bag" title="Subscription"></i>
                <span v-if="wideMenu">My subscription</span>
            </nuxt-link>
            <nuxt-link to='/pickupform' class='logo'>
                <i class="fa fa-address-card" title="Pick-up Form"></i>
                <span v-if="wideMenu">Pick-up Form</span>
            </nuxt-link>
            <nuxt-link to='/referafriend' class='logo'>
                <i class="fa fa-user-plus" title="Refer a Friend"></i>
                <span v-if="wideMenu">Refer a Friend</span>
            </nuxt-link>
            <nuxt-link to='/addpackage' class='logo'>
                <i class="fa fa-plus-circle" title="Add Package"></i>
                <span v-if="wideMenu">Add Package</span>
            </nuxt-link>
            <nuxt-link to='/createbenefits' class='logo'>
                <i class="fa fa-ellipsis-v" title="Create Benefit"></i>
                <span v-if="wideMenu">Create Benefits</span>
            </nuxt-link>
        </div>

    </div>
</template>

<script>
    export default {

        data() {
            return{
                wideMenu: true,
                side: true,
            }
        },

        methods: {
            toggleMenu() {
                this.wideMenu = !this.wideMenu
                this.$emit('toggleMenu', this.wideMenu)
            }
        },

        // watch: {
        //     '$route': function(e) {
        //         if (e && window.innerWidth < 768) {
        //             this.backdrop = false
        //             document.getElementById("sidebar-head").style.display = "none"
        //         }
        //     }
        // }
    }

</script>

<style scoped>
    .sidebar-container{
        display: grid;
        min-height: 100vh;
        grid-template-rows: 60px 1fr;
        transition: .8s ease-out;
        /* position: relative; */

    }
    .sidebar-nav {
        display: grid;
        grid-auto-rows: 50px;
        margin-top: 40px;
        align-items: center;
        font-size: 17px;
        transition: .8s ease-out;
    }
    .sidebar-nav a{
        text-decoration: none;
        color: #fefefe;
        padding: 14px 10px;
        /* transition: .8s ease-out; */
    }
    .center-nav{
        display: grid;
        grid-auto-rows: 45px;
        /* align-items: center; */
    }
    .center-nav a{
        padding-left: 30px;
    }
    .elegant-image{
        width: 40px;
        padding-top: 6px;
    }
    .brand-name{
        display: grid;
        grid-template-columns: 10px 10px;
        
    }
    .fa-home{
        color: #fefefe;
    }
    .sidebar-nav a:hover,
    .sidebar-nav a:active{
        background-color: rgb(112, 109, 134);
        border-right: 1px solid;
    }
    .sidebar-nav a:active{
        color: #b4b4b4;
        
    }
    .sidebar-head{
        display: grid;
        grid-template-columns: auto 30px;
        align-items: center;
        padding-left: 12px;
        background-color: #01355f;
        border-right: 1px solid rgb(230, 224, 224);
        border-bottom: 1px solid rgb(230, 224, 224);
    }
    .sidebar-head a{
        color: #fefefe;
    }
    .logo{
        display: grid;
        grid-template-columns: 30px 1fr;
    }
    .toggle-bar{
        cursor: pointer;
    }

    @media (max-width: 767px){
        .sidebar-head{
            grid-template-columns: 145px 40px;
        }
        
    }

    @media (min-width: 768px) {
    }
</style>
