<template>
    <div class="dashboard">
        <div class="sidebar">
            <div>
                <nuxt-link to='/' class="brand-name">
                    <h1 class='wr-logo'>GPAT</h1>
                </nuxt-link>
                <a class='toggle-icon' @click.prevent="$emit('toggleSidebar')">
                    <i class='fa fa-bars'></i>
                </a>
            </div>
            <div>
                <ul class='sidebar-nav'>
                    <li class="nav-item"><nuxt-link to='/about' class='logo'>About</nuxt-link></li>
                    <li class="nav-item"><nuxt-link to='/contact' class='logo'>How It Works</nuxt-link></li>
                    <li class="nav-item"><nuxt-link to='/volunteer' class='logo'>Pricing</nuxt-link></li>
                    <li class="nav-item"><nuxt-link to='/projects' class='logo'>Contact us</nuxt-link></li>
                    <li class="nav-item"><nuxt-link to='/login' class='logo'>Login</nuxt-link></li>
                    <li class="nav-item">
                        <i class="fa fa-cog"></i><nuxt-link to='/login' class='logo'>Settings</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="content">
            <div>
                <h3>User Dashboard</h3>
                <div>
                    <img src="~assets/images/chuks.jpg" class="chuks" alt="">
                    <p>Obi Chuks</p>
                    <p>First User</p>
                    <i class="fa fa-chevron-down"></i>
                </div>
            </div>
        </div>

        <div><nuxt/></div>
        
    </div>
</template>

<script>

    export default {

        middleware: ['check-auth']

    }

</script>

<style scoped>
    .dashboard{
        display: grid;
        grid-template-columns: 200px auto;
    }
    .sidebar{
        display: grid;
        grid-template-rows: 100px auto;
    }
    .content{
        display: grid;
        grid-template-rows: 100px auto;
    }
    .chuks{
        width: 80px;
        border-radius: 50%;
    }
    .sidebar-nav {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .nav-item {
        margin: 0 10px;
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
</style>
