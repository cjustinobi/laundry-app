<template>
    <div class="sidebar-container">
        <div :class="[{'sidebar-head': side}, {'minimized-sidebar': !side}]">
            <nuxt-link to='/' class="brand-name">
                <i v-if="!wideMenu" class="fa fa-home" title="Home"></i>
                <img v-if="wideMenu" src="~assets/images/EL_logo_2.png" class="elegant-image" alt="Elegant_Laundry_Picture">
                <!-- <h1 v-if="wideMenu" class='wr-logo'>GPAT</h1> -->
            </nuxt-link>
            <a class='toggle-bar' @click.prevent="toggleMenu" title="Menu">
                <i class='fa fa-bars'></i>
            </a>
        </div>

        <div class='sidebar-nav' :class="{'center-nav': !wideMenu}">
            <nuxt-link to='/about' class='logo'>
                <i class="fa fa-window-maximize" title="Transaction History"></i> 
                <span v-if="wideMenu">Transaction History</span>
            </nuxt-link>
            <nuxt-link to='/contact' class='logo'>
                <i class="fa fa-bell" title="Notifications"></i>
                <span v-if="wideMenu">Notifications</span>
            </nuxt-link>
            <nuxt-link to='/volunteer' class='logo'>
                <i class="fa fa-address-card" title="Pick-up Form"></i>
                <span v-if="wideMenu">Pick-up Form</span>
            </nuxt-link>
            <nuxt-link to='/projects' class='logo'>
                <i class="fa fa-user-plus" title="Refer a Friend"></i>
                <span v-if="wideMenu">Refer a Friend</span>
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

        /*watch: {
            '$route': function(e) {
                if (e && window.innerWidth < 768) {
                    this.backdrop = false
                    document.getElementById("sidebar-head").style.display = "none"
                }
            }
        }*/
    }

</script>

<style scoped>
    .sidebar-container{
        display: grid;
        min-height: 100vh;
        grid-template-rows: 60px 1fr;

    }
    .sidebar-nav {
        display: grid;
        grid-auto-rows: 50px;
        margin-top: 50px;
        align-items: center;
        font-size: 17px;
    }
    .sidebar-nav a{
        text-decoration: none;
        color: #000;
        padding: 14px 10px;
        transition: .7s ease-out;
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
    .sidebar-nav a:hover,
    .sidebar-nav a:active{
        background-color: rgb(207, 202, 240);
        border-right: 2px solid;
    }
    .sidebar-nav a:active{
        color: #b4b4b4;
        
    }
    .sidebar-head{
        display: grid;
        grid-template-columns: auto 30px;
        align-items: center;
        padding-left: 12px;
        background: #fffcfc;
        border-right: 1px solid rgb(230, 224, 224);
        border-bottom: 1px solid rgb(230, 224, 224);
    }
    .sidebar-head a{
        color: rgb(104, 98, 98);
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
        .toggle-bar{
            /* display: none; */
        }
    }
</style>
