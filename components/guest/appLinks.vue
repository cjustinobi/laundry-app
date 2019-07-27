<template>
    <ul class='nav-list'>
        <li class="nav-item"><nuxt-link to='/about'>About</nuxt-link></li>
        <li class="nav-item"><nuxt-link to='/contact'>How It Works</nuxt-link></li>
        <li class="nav-item"><nuxt-link to='/pricing'>Pricing</nuxt-link></li>
        <li class="nav-item"><nuxt-link to='/services'>Services</nuxt-link></li>
        <li class="nav-item"><nuxt-link to='/contact'>Contact</nuxt-link></li>
        <li class="nav-item"><nuxt-link to='/blog'>Blog</nuxt-link></li>
        <li class="nav-item login"><nuxt-link to='/login'>Login</nuxt-link></li>
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
        font-size: 14px;
    }
    .nav-item a:hover,
    .nav-item a:active{
        color: #b4b4b4;
    }
    .login{
        display: grid; 
        align-items: center;
        justify-content: center;
        border: none;
        width: 100px;
        height: 30px;
        background-color: #e7b83f;
        font-weight: bold;
        cursor: pointer;
    }
    .login:hover{
        background-color: #f58b13;
        transition: .7s ease-out;
    }
    .login a:hover,
    .login a:active{
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
        font-size: 14px;
    }
    }
    @media (min-width: 768px) {
        .nav-list {
            display: flex;
        }
    }

    </style>