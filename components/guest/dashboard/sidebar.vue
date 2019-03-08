<template>
    <div class="main-div">
        <div class="sidebar-head">
            <nuxt-link to='/' class="brand-name">
                <h1 class='wr-logo'>GPAT</h1>
            </nuxt-link>
            <a class='toggle-bar' @click.prevent="$emit('toggleSidebar')">
                <i class='fa fa-bars'></i>
            </a>
        </div>

        <div class='sidebar-nav'>
             <nuxt-link to='/about' class='logo'>Transaction History</nuxt-link>
             <nuxt-link to='/contact' class='logo'>Notifications</nuxt-link>
             <nuxt-link to='/volunteer' class='logo'>Pick-up Form</nuxt-link>
             <nuxt-link to='/projects' class='logo'>Refer a Friend</nuxt-link>
             <nuxt-link to='/login' class='logo'>Logout</nuxt-link>
            
            <nuxt-link to='/login' class='setting-link'>
                <span class="setting"><i class="fa fa-cog"></i></span>Settings
            </nuxt-link>
        
        </div>

        
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .main-div{
        display: grid;
        min-height: 100vh;
        grid-template-rows: 60px 1fr;
        
    }
    .sidebar-nav {
        position: relative;
        display: grid;
        grid-template-rows: 50px;
        grid-auto-rows: 50px;
        /* list-style: none;
        padding: 0;
        margin: 0; */
        background: red;
    }
    .nav-item {
        /* margin: 30px 40px; */
        height: 50px;
    }
    .nav-item a {
        text-decoration: none;
        color: #000;
        transition: .7s ease-out;
    }
    .nav-item a:hover,
    .nav-item a:active{
        color: #b4b4b4;
    }
    .setting{
        padding-right: 10px;
    }
    .setting-link{
        /* display: grid; */
        align-self: end !important;
        /* background: #fff; */
    }
    .setting-li a{
        text-decoration: none;
        color: #000;
        transition: .7s ease-out;
    }
    .setting-li a:hover,
    .setting-li a:active{
        color: #b4b4b4;
    }
    .setting-link{
        margin-left: 20px
    }
    .sidebar-head{
        display: grid;
        grid-template-columns: auto 60px;
        align-items: center;
        padding-left: 13px;
        background: #fff;
        border-right: 1px solid rgb(230, 224, 224);
        border-bottom: 1px solid rgb(230, 224, 224);
    }
    .sidebar-head a{
        color: rgb(104, 98, 98);
    }

@media (max-width: 767px){
    .sidebar-head{
        grid-template-columns: auto 40px;
        
    }
}
</style>


