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
            <nuxt-link to='/pickupform' class='logo'>
                <i class="fa fa-suitcase" title="My Orders"></i>
                <span v-if="wideMenu">Orders</span>
            </nuxt-link>
            <nuxt-link to='/mysubscription' class='logo'>
                <i class="fa fa-hashtag" title="Subscription"></i>
                <span v-if="wideMenu">Subscriptions</span>
            </nuxt-link>
            <nuxt-link to='/transaction' class='logo'>
                <i class="fa fa-history" title="Transaction History"></i>
                <span v-if="wideMenu">Transaction History</span>
            </nuxt-link>
            <nuxt-link to='/notifications' class='logo'>
                <i class="fa fa-bell" title="Notifications"></i>
                <span v-if="wideMenu">Notifications</span>
            </nuxt-link>


            <nuxt-link to='/referafriend' class='logo'>
                <i class="fa fa-user-plus" title="Refer a Friend"></i>
                <span v-if="wideMenu">Referrals</span>
            </nuxt-link>
            <nuxt-link to='/admin/packages/add' class='logo'>
                <i class="fa fa-plus-circle" title="Add Package"></i>
                <span v-if="wideMenu">Add Package</span>
            </nuxt-link>
            <nuxt-link to='/admin/benefits/add' class='logo'>
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
        }
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
