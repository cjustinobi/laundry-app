<template>
    <div class="items" :style="myStyle">
        <div class="product-list">
            <div class="all-category">
                <li class="product-links">All Categories</li> <i class="fa fa-bars"></i>
            </div>
            <li class="product-links">Subscriptions</li>
            <div class="yellow-demarcator"></div>
            <li class="product-links">Washing &amp; Ironing</li>
            <div class="yellow-demarcator"></div>
            <li class="product-links">Dry cleaning</li>
            <div class="yellow-demarcator"></div>
            <li class="product-links">Laundry</li>
        </div>

        <div class="laundry-list-wrapper">
            <div class="laundry-list">
                <img src="~assets/images/EL_laundry.png" alt="EL image">
                <h5>Towels</h5>
                <p style="color: #8395b1">Washed, pressed and neatly folded</p>
                <div class="separator"></div>
                <h5>N1,000.00</h5>
                <button class="laundry-list-btn">Add to cart</button>
            </div>
        </div>
        
    </div>
</template>

<script>

    export default {
        
        layout: 'dashboard',

        components: {},

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
        grid-template-rows: 40px 1fr;
        min-height: 100vh;
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
    }
    .product-links{
        cursor: pointer;
    }
    .all-category{
        display: grid;
        grid-template-columns: 1fr 50px;
        grid-gap: 10px;
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
    .laundry-list-wrapper{
        display: grid;
        grid-template: 300px / repeat(auto-fit, minmax(200px, 250px));
        grid-gap: 30px;
    }
    .laundry-list{
        display: grid;
        grid-template-rows: auto;
        grid-gap: 10px;
        background-color: #fefefe;
        margin: 40px;
        color: #114e9e;
        min-height: 300px;
        
    }
    img{
        display: grid;
        align-self: center;
        width: 150px;
    }
    .separator{
        height: 1px;
        background-color: #8c929b;
    }
    .laundry-list-btn{
        width: 120px;
        height: 35px;
        background-color: #e7b83f;
        color: #fefefe;
    }

    @media (max-width: 1124px) {
        .product-list{
            grid-template-columns: repeat(5, auto); 
            grid-gap: 20px;
        }
        .all-category{
            display: grid;
            grid-template-columns: 1fr 50px;
            grid-gap: 15px;
        }
        .yellow-demarcator{
            display: none;
        }
    }

    @media (max-width: 767px) {
        .product{
            grid-template-rows: 50px 70px 90px 70px;
        }
    }
</style>