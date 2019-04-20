<template>
    <ul class='nav-list'>
        <li class="nav-item"><nuxt-link to='/about' class='logo'>About</nuxt-link></li>
        <li class="nav-item"><nuxt-link to='/contact' class='logo'>How It Works</nuxt-link></li>
        <li class="nav-item"><nuxt-link to='/volunteer' class='logo'>Packages</nuxt-link></li>
        <li class="nav-item"><nuxt-link to='/volunteer' class='logo'>Pricing</nuxt-link></li>
        <li class="nav-item"><nuxt-link to='/projects' class='logo'>Services</nuxt-link></li>
        <li class="nav-item login-list"><nuxt-link to='/login' class='logo'>Login</nuxt-link></li>
    </ul>
</template>

<style scoped>
    .nav-list {
        display: grid;
        align-items: center;
        list-style: none;
        padding: 0;
        margin-top: 15px;
    }
    .nav-item {
        margin: 0 10px;
    }
    .nav-item a {
        text-decoration: none;
        color: #fefefe;
        transition: .7s ease-out;
        font-size: 15px;
    }
    .nav-item a:hover,
    .nav-item a:active{
        color: #b4b4b4;
    }
    .login-list{
        display: grid; 
        align-items: center;
        justify-content: center;
        border: 1px solid rgb(196, 191, 191);
        width: 100px;
        height: 30px;
        border-radius: 5px;
        /* text-align: center; */
        background-color: #e7b83f;
        font-weight: bold;
    }
    .login-list:hover{
        background-color: #f58b13;
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
        .nav-item a {
        font-size: 17px;
    }
    }
    @media (min-width: 768px) {
        .nav-list {
            display: flex;
        }
    }

    </style>