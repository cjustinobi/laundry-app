<template>
    <footer class="footer">
        <div class="elegant-laundry">
            <nuxt-link to="/rights">Elegant Laundry 2019 All Rights Reserved</nuxt-link>
        </div>
        <div class="socials">
            <nuxt-link to="/terms">Terms and Conditions</nuxt-link> 
            <div class="separator">|</div>
            <nuxt-link to="/policy">Privacy Policy</nuxt-link>
        </div>
    </footer>
</template>

<style scoped>
    footer{
        display: grid;
        position: relative;
        grid-template-columns: auto auto;
        justify-content: space-between;
        align-items: center;
        background: #312a3d;
        color: #acaaaa;
        padding: 10px 48px;
    }
    a{
        color: #b4b4b4;
        transition: 1s ease-in;
        text-decoration: none;
    }
    a:hover{
        color: rgba(137, 137, 137, 0.67);
    }
    .socials{
        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-gap: 10px;
    }

    @media(max-width: 767px) {
        footer{
            grid-template: auto auto / 1fr;
            padding: 10px 16px;
            grid-gap: 15px;
            align-items: center;
            justify-items: center;
            font-size: 14px;
        }
        .socials{
            grid-template: repeat(2, auto) / 1fr;
            align-items: center;
            align-content: center;
            align-self: center;
            justify-self: center;
            justify-content: center;
            justify-items: center;
        }
        .separator{
            display: none;
        }
    }
</style>