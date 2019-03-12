<template>
    <div class="main-div">
        <div id="sidebar-head" class="sidebar-head">
            <nuxt-link to='/' class="brand-name">
                <h1 class='wr-logo'>GPAT</h1>
            </nuxt-link>
            <a class='toggle-bar' @click.prevent="toggleMenu" title="Menu Icons">
                <i class='fa fa-bars'></i>
            </a>
        </div>

        <div  class="toggle-sidebar-nav">
             <div class='sidebar-nav' v-show="showMenu">
                <nuxt-link to='/about' class='logo'>Transaction History</nuxt-link>
                <nuxt-link to='/contact' class='logo'>Notifications</nuxt-link>
                <nuxt-link to='/volunteer' class='logo'>Pick-up Form</nuxt-link>
                <nuxt-link to='/projects' class='logo'>Refer a Friend</nuxt-link>
                <nuxt-link to='/login' class='logo'>Logout</nuxt-link>
            
                <nuxt-link to='/login' class='setting-link'>Settings
                </nuxt-link>
             </div>

             <div class='sidebar-nav sidebar-icons' v-if="!showMenu" >
                <nuxt-link to='/about' class='logo'>
                    <span class="setting"><i class="fa fa-cog"></i></span>
                </nuxt-link>
                <nuxt-link to='/contact' class='logo'>
                    <span class="setting"><i class="fa fa-cog"></i></span>
                </nuxt-link>
                <nuxt-link to='/volunteer' class='logo'>
                    <span class="setting"><i class="fa fa-cog"></i></span>
                </nuxt-link>
                <nuxt-link to='/projects' class='logo'>
                    <span class="setting"><i class="fa fa-cog"></i></span>
                </nuxt-link>
                <nuxt-link to='/login' class='logo'>
                    <span class="setting"><i class="fa fa-cog"></i></span>
                </nuxt-link>
            
                <nuxt-link to='/login' class='setting-link'>
                    <span class="setting"><i class="fa fa-cog"></i></span>
                </nuxt-link>
             </div>
        
        </div>

        
    </div>
</template>

<script>
export default {
    
    data() {
        return{
            showMenu: true,
        }
    },
    
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu
        }
    },

     watch: {
        '$route': function(e) {
            if (e && window.innerWidth < 768) {
                this.backdrop = false
                document.getElementById("sidebar-head").style.display = "none"
            }
        }
    }
}

</script>

<style scoped>
    .main-div{
        display: grid;
        min-height: 100vh;
        grid-template-rows: 60px 1fr;
        
    }
    .toggle-sidebar-nav{
        /* display: grid;
        grid-template-rows: 1fr 1fr; */
    }
    .sidebar-icons{
        padding-left: -60px;
    }
    .sidebar-nav {
        display: grid;
        grid-template-rows: 50px;
        grid-auto-rows: 50px;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    .nav-item {
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
    .setting-link{
        align-self: end;
        
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
    .sidebar-head{
        display: grid;
        grid-template-columns: auto 60px;
        align-items: center;
        padding-left: 13px;
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
        /* display: none;   */
    }
    .toggle-sidebar-nav{
        /* width: 200px; */
    }
    .sidebar-head{
        grid-template-columns: 145px 40px;
        
    }
    .sidebar-nav{
        /* display: none; */
    }
}

@media (min-width: 768px) {
    .toggle-bar{
        /* display: none; */
    }
}
</style>


