<template>
    <div class="items" :style="myStyle">
        <div class="product-list">
            <div class="all-category">
                <li class="product-links">All Categories</li> 
                <a href="#" @click.prevent="$emit('toogleSideLinks')"><i class="fa fa-bars"></i></a>
            </div>
            <li class="product-links">Subscriptions</li>
            <div class="yellow-demarcator"></div>
            <li class="product-links">Washing &amp; Ironing</li>
            <div class="yellow-demarcator"></div>
            <li class="product-links">Dry cleaning</li>
            <div class="yellow-demarcator"></div>
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
        background-color: rgb(241, 241, 241);
        justify-items: center;
    }
    .product-links{
        cursor: pointer;
    }
    .all-category{
        display: grid;
        grid-template-columns: 1fr 50px;
        grid-gap: 15px;
        position: relative;
    }
    .yellow-demarcator{
        height: 12px;
        background-color: #e7b83f;
        width: 1px;
    }
    .fa-bars{
        cursor: pointer;
        display: grid;
        align-self: center;
    }
    
   

    @media (max-width: 1124px) {
        .product-list{
            grid-template-columns: repeat(5, auto); 
            grid-gap: 20px;
            font-size: 15px;
        }
        .all-category{
            grid-template-columns: 1fr 20px;
            grid-gap: 15px;
        }
        .yellow-demarcator{
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
            font-size: 13px;
            grid-gap: 7px;
            
        }
    }
</style>