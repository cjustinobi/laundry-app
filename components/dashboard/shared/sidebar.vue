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

        <div
                class='sidebar-nav' :class="{'center-nav': !wideMenu}"
        >
            <nuxt-link to='/dashboard' class='logo'>
                <i class="fa fa-dashcube" title="Dashboard"></i>
                <span v-if="wideMenu">Dashboard</span>
            </nuxt-link>
            <nuxt-link to='/products' class='logo'>
                <i class="fa fa-cart-plus" title="Items"></i>
                <span v-if="wideMenu">Items</span>
            </nuxt-link>
            <nuxt-link to='/subscriptions' class='logo'>
                <i class="fa fa-suitcase" title="Subscription"></i>
                <span v-if="wideMenu">My subscription</span>
            </nuxt-link>
            <nuxt-link to='/transactions' class='logo'>
                <i class="fa fa-history" title="Transaction History"></i>
                <span v-if="wideMenu">Transactions</span>
            </nuxt-link>
            <nuxt-link to='/notifications' class='logo'>
                <i class="fa fa-bell" title="Notifications"></i>
                <div :class="[{'count': wideMenu}, {'small-count': !wideMenu}]">0</div>
                <span v-if="wideMenu">Notifications</span>
            </nuxt-link>
            <nuxt-link to='/support' class='logo'>
                <i class="fa fa-user" title="Contact/Support"></i>
                <span v-if="wideMenu">Contact support</span>
            </nuxt-link>
            <nuxt-link to='/referral' class='logo'>
                <i class="fa fa-user-plus" title="Refer a Friend"></i>
                <span v-if="wideMenu">Refer a Friend</span>
            </nuxt-link>
            <nuxt-link to='/settings' class='logo setting-icon'>
                <i class="fa fa-cog" title="Settings"></i>
                <span v-if="wideMenu">Settings</span>
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

        computed: {
            user() {
                if (this.$store.state.auth.user) {
                    return this.$store.state.auth.user
                }
            }
        },
    }

</script>

<style scoped>
    .sidebar-container{
        display: grid;
        /* min-height: 100vh; */
        grid-template-rows: 60px auto;
        transition: .8s ease-out;
    }
    a{
        text-decoration: none;
    }
    .sidebar-nav {
        display: grid;
        grid-template-rows: 55px;
        margin-top: 40px;
        align-items: center;
        font-size: 17px;
        transition: .8s ease-out;

    }
    .sidebar-nav a{
        text-decoration: none;
        color: #114e9e;
        padding: 14px 10px;
    }
    .sidebar-nav a:hover,
    .sidebar-nav a:active{
        background-color: #fad370;
        border-right: 1px solid #8f6600;
    }
    .center-nav{
        display: grid;
        grid-template-rows: 45px;
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
    .fa-bell{
        position: relative;
    }
    .count{
        display: grid;
        justify-items: center;
        align-items: center;
        position: absolute;
        /* top: 20px; */
        left: 20px;
        background-color: red;
        color: #fefefe;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        font-size: 9px;
        border: 1px solid #01355f;
    }
    .small-count{
        display: grid;
        justify-items: center;
        align-items: center;
        position: absolute;
        /* top: 20px; */
        left: 40px;
        background-color: red;
        color: #fefefe;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        font-size: 9px;
        border: 1px solid #01355f;
    }
    .toggle-bar{
        cursor: pointer;
    }
    .setting-icon{
        margin-top: 120px;
    }

    @media (max-width: 767px){
        .sidebar-head{
            grid-template-columns: 145px 40px;
            /* display: none; */
        }

    }

    @media (min-width: 768px) {
    }
</style>
