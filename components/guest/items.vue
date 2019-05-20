<template>
    <div class="items" :style="myStyle">
        <div class="product-list">
            <div class="all-category">
                <li class="product-links">All Categories</li> 
                <a href="#" class="item-menu-bar" @click.prevent="$emit('toogleSideLinks')">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
            <li class="product-links">Subscriptions</li>
            <div class="blue-demarcator"></div>
            <li class="product-links">Washing &amp; Ironing</li>
            <div class="blue-demarcator"></div>
            <li class="product-links">Dry cleaning</li>
            <div class="blue-demarcator"></div>
            <li class="product-links">Laundry</li>
        </div>
        
    </div>
</template>

<script>

    export default {

        components: {  },

        data() {
            return {
                myStyle: {
                    backgroundColor: "#f0faff"
                },
            }
        },
        
        mounted() {
            // document.body.style.background = "#e1f5fe";
        },
        destroyed() {
            document.body.style.background = "none";
        }
    }
</script>

<style scoped>
    .items{
        display: grid;
        grid-template-rows: 40px;
        /* min-height: 100vh; */
        position: relative;
    }
    .product-list{
        display: grid;
        grid-template-columns: auto auto 90px auto 90px auto 90px auto; 
        align-items: center; 
        padding: 0px;
        list-style: none;
        grid-gap: 10px;
        padding: 0 20px;
        background-color: #51b3e7;
        justify-items: center;
        font-size: 14px;
        color: #fefefe;
    }
    a{
        text-decoration: none;
        color: #fefefe;
    }
    .item-menu-bar{
        display: grid;
        align-items: center;
        
    }
    .product-links{
        cursor: pointer;
    }
    .all-category{
        display: grid;
        grid-template-columns: 1fr 50px;
        position: relative;
        grid-gap: 10px;
        font-weight: bold;
    }
    .blue-demarcator{
        height: 12px;
        background-color: #075179;
        width: 1px;
    }
    .fa-bars{
        cursor: pointer;
        display: grid;
        align-self: center;
        font-weight: bold;
    }
   

    @media (max-width: 1124px) {
        .product-list{
            grid-template-columns: repeat(5, auto); 
            grid-gap: 20px;
        }
        .all-category{
            grid-template-columns: 1fr 20px;
        }
        .blue-demarcator{
            display: none;
        }
        
    }

    @media (max-width: 767px) {
        .items{
            grid-template-rows: 50px 1fr;
        }
       .product-list{
            grid-template: 45px / repeat(5, auto); 
            height: 50px;
            font-size: 11px;
            grid-gap: 7px;
            padding: 0 12px;
            
        }
    }
    @media (max-width: 450px) {
       .product-list{
            font-size: 10px;
        }
        .all-category{
            grid-template-columns: 1fr 15px;
            grid-gap: 5px;
        }
    }
</style>