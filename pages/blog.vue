<template>
    <div class="blog-container">
        <div class="show-img">
            <h2>Welcome to our blog</h2>
            <p>Catch up on Elaundry news, checkout our fashion and style tips and <br>
                discover exclusive promotions and limited time deals
            </p>
            <input class="blog-search" type="search" placeholder="Search blog by keyword">
        </div>

        <div class="blog-wrapper">
            <div class="blog-inner">
                <div class="blog-img"><img src="~assets/images/EL_laundry.png" alt=""></div>
                <div class="order-list">
                    <p class="time-stamp">
                        <i class="fa fa-circle"></i> 
                        March, 27, 2019 | <span class="tips-styles">TIPS &amp; STYLES</span>
                    </p>
                    <h2>Dry Cleaning</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit odio beatae blanditiis rem 
                        possimus porro accusamus aspernatur fugiat maiores, facere exercitationem quisquam ex! 
                        Mollitia totam aliquam suscipit veritatis sequi odit.
                    </p>
                    <nuxt-link to="/">Read more <i class="fa fa-angle-double-right"></i></nuxt-link>
                    <div class="order-demarcate"/>
                </div>
            </div>
            <div class="blog-inner">
                <div class="blog-img"><img src="~assets/images/EL_laundry.png" alt=""></div>
                <div class="order-list">
                    <p class="time-stamp">
                        <i class="fa fa-circle"></i>
                         March, 27, 2019 | <span class="tips-styles">TIPS &amp; STYLES</span>
                    </p>
                    <h2>Dry Cleaning</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit odio beatae blanditiis rem 
                        possimus porro accusamus aspernatur fugiat maiores, facere exercitationem quisquam ex! 
                        Mollitia totam aliquam suscipit veritatis sequi odit.
                    </p>
                    <nuxt-link to="/">Read more <i class="fa fa-angle-double-right"></i></nuxt-link>
                    <div class="order-demarcate"/>
                </div>
            </div>
        </div>

        <p class="next">1 2 3 4 5...<nuxt-link to="/">Next <i class="fa fa-angle-double-right"></i></nuxt-link></p>
        
    </div>
</template>

<script>

    export default {
        components:{
           
        },

        data() {
            return {
               
            }
        },
        methods: {
           
        },
        mounted() {
            document.body.style.background = "#fefefe";
        },
        destroyed() {
            document.body.style.background = "none";
        }
    }
</script>

<style scoped>
    .blog-container{
        display: grid;
        min-height: 100vh;
        grid-template-rows: 450px 1fr;
        color: #114e9e;
    }
    .show-img{
        background-image: url('~assets/images/wash-machine.jpg');
        background-size: cover;
        background-position: center top;
        height: 450px;
        width: 100%;
        margin-top: -12px;
        display: grid;
        grid-template-rows: 90px 90px 150px;
        align-items: center;
        color: #fefefe;
        text-align: center;
        justify-items: center;
        padding-top: 120px;
    }
    .blog-search{
        width: 600px;
        height: 40px;
        border: 1px solid rgb(233, 233, 233);
        padding: 10px;
    }
    .blog-wrapper{
        display: grid;
        grid-auto-rows: auto;
        grid-gap: 30px;
        margin: 20px 0;
    }
    .blog-inner{
        display: grid;
        grid-template-columns: 90px 1fr;
        grid-gap: 20px;
        margin: 0 70px;
        color: #114e9e;
        max-height: 210px;
    }
    .blog-img{
        background-size: contain;
        display: grid;
        /* align-items: center; */
    }
    a{
        text-decoration: none;
        color: #fdc026;
    }
    img{
        width: 90px;
        height: 90px;
        border-radius: 40%;
        border: 1px solid #fdc026;
    }
    .order-list{
        display: grid;
        grid-template-rows: 30px 40px auto 30px 1px;
        grid-gap: 8px;
    }
    .time-stamp{
        color: rgb(216, 216, 216);
    }
    .tips-styles{
        color: #fdc026;
    }
    .order-demarcate{
        display: grid;
        justify-items: center;
        background-color: rgb(196, 196, 196);
        margin: 0 auto;
        width: 97%;
    }
    .next{
        margin: 0 70px 20px 70px;
    }

    
    @media (max-width: 767px) {
        .about-item{
            padding: 10px 24px;
        }
        .blog-search{
            width: 70%;
            height: 40px;
            padding: 10px;
        }
        .blog-wrapper{
            grid-template-rows: auto;
            margin-bottom: 20px;
        }
        .blog-inner{
            margin: 0;
            padding: 0 15px;
            max-height: 380px;
        }
        .order-list{
            grid-gap: 10px;
        }
        .time-stamp,
        .tips-styles{
            font-size: 12px;
        }
        .next{
            margin: 0 0 20px 0;
            padding: 0 15px;
        }
    }
</style>