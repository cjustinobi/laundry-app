<template>
    <div class="drawer-container">
        <div class="hide-drawer">
            <a href="#" @click.prevent="$emit('hideDrawer')"><i class="fa fa-times-circle fa-2x"></i></a>
        </div>
        <div v-if="user !== undefined && user.user_type !== 3" class='sidebar-nav'>
            <nuxt-link to='/dashboard' class='logo'>
                <i class="fa fa-dashcube" title="My Orders"></i>
                <span>My Orders</span>
            </nuxt-link>
            <nuxt-link to='/products' class='logo'>
                <i class="fa fa-cart-plus" title="Items"></i>
                <span>Items</span>
            </nuxt-link>
            <nuxt-link to='/dashboard/subscriptions' class='logo'>
                <i class="fa fa-suitcase" title="Subscription"></i>
                <span>My subscription</span>
            </nuxt-link>
            <nuxt-link to='/dashboard/transactions' class='logo'>
                <i class="fa fa-history" title="Transaction History"></i>
                <span>Transaction History</span>
            </nuxt-link>
            <nuxt-link to='/dashboard/notifications' class='logo'>
                <i class="fa fa-bell" title="Notifications"></i>
                <!-- <div :class="{'count': wideMenu}">0</div> -->
                <span >Notifications</span>
            </nuxt-link>
            <nuxt-link to='/support' class='logo'>
                <i class="fa fa-user" title="Contact/Support"></i>
                <span>Contact support</span>
            </nuxt-link>
            <nuxt-link to='/dashboard/referral' class='logo'>
                <i class="fa fa-user-plus" title="Refer a Friend"></i>
                <span>Refer a Friend</span>
            </nuxt-link>
            <nuxt-link to='/dashboard/settings' class='logo setting-icon'>
                <i class="fa fa-cog" title="Settings"></i>
                <span>Settings</span>
            </nuxt-link>
        </div>

        <div v-if="user !== undefined && user.user_type == 3" class='sidebar-nav'>
            <nuxt-link to='/admin/dashboard' class='logo'>
                <i class="fa fa-dashcube" title="Dashboard"></i>
                <span>All orders</span>
            </nuxt-link>
            <nuxt-link to='/admin/products' class='logo'>
                <i class="fa fa-cart-plus" title="Items"></i>
                <span>Items</span>
            </nuxt-link>
            <nuxt-link to='/admin/categories' class='logo'>
                <i class="fa fa-list" title="Categories"></i>
                <span>Categories</span>
            </nuxt-link>
            <nuxt-link to='/admin/users' class='logo'>
                <i class="fa fa-user" title="Users"></i>
                <span>Users</span>
            </nuxt-link>
            <nuxt-link to='/admin/subscriptions' class='logo'>
                <i class="fa fa-hashtag" title="Subscription"></i>
                <span>Subscriptions</span>
            </nuxt-link>
            <nuxt-link to='/admin/transactions' class='logo'>
                <i class="fa fa-history" title="Transaction History"></i>
                <span>Transaction History</span>
            </nuxt-link>
            <nuxt-link to='/admin/notifications' class='logo'>
                <i class="fa fa-bell" title="Notifications"></i>
                <!-- <div :class="{'count': wideMenu}">0</div> -->
                <span>Notifications</span>
            </nuxt-link>
            <nuxt-link to='/admin/packages/add' class='logo'>
                <i class="fa fa-plus-circle" title="Add Package"></i>
                <span>Add Package</span>
            </nuxt-link>
            <nuxt-link to='/admin/benefits/add' class='logo'>
                <i class="fa fa-ellipsis-v" title="Create Benefit"></i>
                <span>Create Benefits</span>
            </nuxt-link>
            <nuxt-link to='/logout' class='logo'>
                <i class="fa fa-power-off" title="Logout"></i>
                <span>Logout</span>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
    import User from '~/mixins/user'

    export default {

        mixins: [User],

        data() {
            return {
                sidebarNav: true,
                wideMenu: true
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
        height: 100%;
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
    .count{
        display: grid;
        justify-items: center;
        align-items: center;
        position: absolute;
        left: 218px;
        background-color: red;
        color: #fefefe;
        height: 12px;
        width: 12px;
        border-radius: 50%;
        font-size: 9px;
        bottom: 380px;
    }

</style>