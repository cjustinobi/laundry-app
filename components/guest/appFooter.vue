<template>
    <footer class="footer">
        <div class="elegant-laundry">
            <h5><a href="#" target="_blank">Elegant Laundry 2019 All Rights Reserved</a></h5>
        </div>
        <div class="socials">
            <nuxt-link to="/projects">Terms and Conditions</nuxt-link> 
            <div class="separator">|</div>
            <nuxt-link to="/projects">Privacy Policy</nuxt-link>
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
        /* height: 100px; */
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
        /* justify-content: space-between; */
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
        a{
            /* font-size: 14px; */
        }
        /* .elegant-laundry
        {
            display: grid;
            justify-items: center;
        } */
        .socials{
            grid-template: repeat(2, auto) / 1fr;
            align-items: center;
            align-content: center;
            align-self: center;
            justify-self: center;
            justify-content: center;
            justify-items: center;
            /* width: 150px;
            margin: 16px 0; */
        }
        .separator{
            display: none;
        }
    }
</style>