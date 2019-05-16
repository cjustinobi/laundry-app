<template>
    <div class="notifications">
        <div class="title"><h2>Notifications</h2></div>
        <div class="product-list">
            <li class="product-links">Dry Cleaning</li>
            <div class="yellow-demarcator"></div> 
            <li class="product-links">Wash &amp; Fold</li>
            <div class="yellow-demarcator"></div>
            <li class="product-links">Handled with extra love &amp; care</li>
            <div class="yellow-demarcator"></div>
            <li class="product-links">Donate or recycle</li>
        </div>
        <div/>
        <div class="notifications-wrapper">
            <img src="~assets/images/EL_laundry.png" alt="">
            <div class="order-list">
                <h2>Dry Cleaning</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit odio beatae blanditiis rem 
                    possimus porro accusamus aspernatur fugiat maiores, facere exercitationem quisquam ex! 
                    Mollitia totam aliquam suscipit veritatis sequi odit.
                </p>
            </div>
        </div>

    </div>
</template>

<script>
    

    export default {


        data() {
            return {
               
            }
        },
        mounted() {
            document.body.style.background = "#f0faff";
        },
        destroyed() {
            document.body.style.background = "none";
        }
    }
</script>

<style scoped>
    .notifications{
        display: grid;
        grid-template-rows: 80px 70px 1px 1fr;
        min-height: 100vh;
        /* grid-gap: 20px; */
        margin-top: -14px;
    }
    .title{
        display: grid;
        justify-items: center;
        align-content: center;
        /* height: 80px; */
        color: #114e9e;
        background-color: #fefefe;
        
    }
    .product-list{
        display: grid;
        grid-template-columns: auto 90px auto 90px auto 90px auto; 
        align-items: center; 
        padding: 0px;
        list-style: none;
        grid-gap: 5px;
        padding: 0 20px;
        justify-items: center;
    }
    a{
        text-decoration: none;
        color: #8a8989;
    }
    .product-links{
        cursor: pointer;
    }
    .yellow-demarcator{
        height: 12px;
        background-color: #e7b83f;
        width: 1px;
    }
    hr{
        width: 90%;
        display: grid;
        justify-items: center;
    }
    .notifications-wrapper{
        display: grid;
        grid-template-columns: 90px 1fr;
        grid-gap: 20px;
        margin: 40px;
        color: #114e9e;
        padding: 15px;
    }
    .notifications-wrapper img{
        width: 80px;
    }
    .order-list{
        display: grid;
        grid-template-rows: 30px 175px;
        grid-gap: 10px;
    }
    
    @media (max-width: 767px) {
        .notifications{
            grid-template-rows: 80px 60px 1px 1fr;
        }
        .order-list{
            grid-gap: 15px;
        }
        .product-list{
            grid-template-columns: repeat(4, auto);
            font-size: 12px;
            grid-gap: 8px;
            padding: 0 10px;
            
        }
        .yellow-demarcator{
            display: none;
        }
    }
</style>