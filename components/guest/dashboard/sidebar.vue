<template>
    <!-- <div class="main-div"> -->
        <ul class='sidebar-nav'>
            <li class="nav-item"><nuxt-link to='/about' class='logo'>About</nuxt-link></li>
            <li class="nav-item"><nuxt-link to='/contact' class='logo'>How It Works</nuxt-link></li>
            <li class="nav-item"><nuxt-link to='/volunteer' class='logo'>Pricing</nuxt-link></li>
            <li class="nav-item"><nuxt-link to='/projects' class='logo'>Contact us</nuxt-link></li>
            <li class="nav-item"><nuxt-link to='/login' class='logo'>Login</nuxt-link></li>
            <li class="nav-item" style="align-self: flex-end">
                <span class="setting"><i class="fa fa-cog"></i></span>
                <nuxt-link to='/login' class='logo'>Settings</nuxt-link>
            </li>
        </ul>
    <!-- </div> -->
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .main-div{
        display: grid;
        grid-template-rows: 1fr;
        height: 100%;
    }
    /* .sidebar{
        display: grid;
        grid-template-rows: auto;
        height: 100%;
        grid-gap: 20px;
    } */
    .sidebar-nav {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .nav-item {
        margin: 20px 40px;
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
        padding-right: 20px;
    }
</style>


