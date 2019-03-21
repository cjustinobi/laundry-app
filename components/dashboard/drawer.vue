<template>
    <div class="drawer-container">
        <div class="hide-drawer">
            <a href="#" @click.prevent="$emit('hideDrawer')"><i class="fa fa-times-circle"></i></a>
        </div>
        <div class='sidebar-nav' >
            <nuxt-link to='/about' class='logo'>
                <i class="fa fa-window-maximize" title="Transaction History"></i> 
                <span >Transaction History</span>
            </nuxt-link>
            <nuxt-link to='/contact' class='logo'>
                <i class="fa fa-bell" title="Notifications"></i>
                <span >Notifications</span>
            </nuxt-link>
            <nuxt-link to='/volunteer' class='logo'>
                <i class="fa fa-address-card" title="Pick-up Form"></i>
                <span >Pick-up Form</span>
            </nuxt-link>
            <nuxt-link to='/projects' class='logo'>
                <i class="fa fa-user-plus" title="Refer a Friend"></i>
                <span>Refer a Friend</span>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            hideDrawer() {

            }
        }
    }
</script>

<style scoped>
    .drawer-container{
        height: 100%;
        position: fixed;
        top: 0;
        /* left: 0;
        bottom: 0;
        right: 0; */
        width: 100%;
        background: #83044a;
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
        font-size: 40px;
        padding-right: 15px;
    }
    .sidebar-nav {
        display: grid;
        grid-auto-rows: 1fr;
        width: 100%;
        margin-top: 20px;
        align-items: center;
        font-size: 25px;
        justify-content: center;
    }
    .sidebar-nav a{
        text-decoration: none;
        color: #fefefe;
        padding: 14px 10px;
        transition: .7s ease-out;
    }
</style>