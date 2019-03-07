<template>
    <div class="main-div">
        <div class="gpat">
            <nuxt-link to='/' class="brand-name">
                <h1 class='wr-logo'>GPAT</h1>
            </nuxt-link>
            <a class='toggle-bar' @click.prevent="$emit('toggleSidebar')">
                <i class='fa fa-bars'></i>
            </a>
        </div>

        <ul class='sidebar-nav'>
            <li class="nav-item"><nuxt-link to='/about' class='logo'>About</nuxt-link></li>
            <li class="nav-item"><nuxt-link to='/contact' class='logo'>How It Works</nuxt-link></li>
            <li class="nav-item"><nuxt-link to='/volunteer' class='logo'>Pricing</nuxt-link></li>
            <li class="nav-item"><nuxt-link to='/projects' class='logo'>Contact us</nuxt-link></li>
            <li class="nav-item"><nuxt-link to='/login' class='logo'>Login</nuxt-link></li>
            
        </ul>

        <div class="setting-li">
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
        grid-template-rows: 60px auto 60px;
        
    }
    .sidebar-nav {
        list-style: none;
        padding: 0;
        margin: 0;
        background: #fff;
    }
    .nav-item {
        margin: 30px 40px;
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
    .setting-li{
        background: #fff;
    }
    .setting-li a{
        text-decoration: none;
        color: #000;
        transition: .7s ease-out;
    }
    .setting-link{
        margin-left: 20px
    }
    .gpat{
        display: grid;
        grid-template-columns: auto 60px;
        align-items: center;
        padding-left: 13px;
        background: #fff;
        border-right: 1px solid rgb(230, 224, 224);
        border-bottom: 1px solid rgb(230, 224, 224);
    }
    .gpat a{
        color: rgb(104, 98, 98);
    }

@media (max-width: 767px){
    .gpat{
        grid-template-columns: auto 40px;
        
    }
}
</style>


