<template>
    <ul class='nav-list'>
        <li class="nav-item"><nuxt-link to='/about' class='logo'>About</nuxt-link></li>
        <li class="nav-item"><nuxt-link to='/contact' class='logo'>How It Works</nuxt-link></li>
        <li class="nav-item"><nuxt-link to='/volunteer' class='logo'>Our Packages</nuxt-link></li>
        <li class="nav-item"><nuxt-link to='/volunteer' class='logo'>Pricing</nuxt-link></li>
        <li class="nav-item"><nuxt-link to='/projects' class='logo'>Services</nuxt-link></li>
        <li class="nav-item login-list"><nuxt-link to='/login' class='logo'>Login</nuxt-link></li>
    </ul>
</template>

<style scoped>
    .nav-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .nav-item {
        margin: 0 10px;
    }
    .nav-item a {
        text-decoration: none;
        color: #fefefe;
        transition: .7s ease-out;
        font-size: 16px;
    }
    .nav-item a:hover,
    .nav-item a:active{
        color: #b4b4b4;
    }
    .login-list{
        border: 1px solid rgb(196, 191, 191);
        width: 80px;
        height: 30px;
        border-radius: 5px;
        
        text-align: center;
    }
    .nav-item a {
        color: #fefefe;
        font-size: 16px;
    }
    .login-list:hover{
        background-color: #f8c749;
        transition: .7s ease-out;
    }
    .login-list a:hover,
    .login-list a:active{
        color: #fff;
    }
    @media (max-width: 767px) {
        .nav-list {
            display: block;
            padding-left: 24px;
            padding-top: 32px;
        }
        .nav-item{
            margin-top: 28px;
            margin-bottom: 16px;
        }
    }
    @media (min-width: 768px) {
        .nav-list {
            display: flex;
        }
    }

    </style>