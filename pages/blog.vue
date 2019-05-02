<template>
    <div class="blog-container">
        <div class="show-img">
            <h2>Welcome to our blog</h2>
            <p>Catch up on Elaundry news, checkout our fashion and style tips and <br>
                discover exclusive promotions and limited time deals
            </p>
            <input class="blog-search" type="search" placeholder="Search blog by keyword">
        </div>
        
    </div>
</template>

<style scoped>
    .blog-container{
        display: grid;
        min-height: 100vh;
        /* grid-template-rows: 60px 400px 1fr; */
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

    
    @media (max-width: 767px) {
        .about-item{
            padding: 10px 24px;
        }
        .blog-search{
            width: 70%;
            height: 40px;
            padding: 10px;
        }
    }
</style>