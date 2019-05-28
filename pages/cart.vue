<template>
    <div class="cart-order-summary">
        <Cart/>
        <OrderSummary/>
        <nuxt-link to="/products" class="continue-btn">
            Continue
        </nuxt-link>
    </div>
</template>

<script>
import Cart from '~/components/dashboard/user/cart'
import OrderSummary from '~/components/dashboard/user/orderSummary'
export default {
    layout: 'dashboard',

    components: { Cart, OrderSummary }
}
</script>

<style scoped>
    .cart-order-summary{
        display: grid;
        grid-template-columns: 1fr 280px;
        grid-gap: 30px;
        padding: 40px;
    }
    a{
        text-decoration: none;
    }
    .continue-btn{
        position: fixed;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: none;
        outline: none;
        bottom: 100px;
        right: 2px;
        background-color: #b8b8b8;
        opacity: 0.6;
        z-index: 1;
        color: #fefefe;
        transition: 0.8s ease-in;
        font-size: 14px;
        display: grid;
        align-items: center;
        justify-items: center;
        animation: bounce 0.95s infinite;
        -webkit-animation: bounce 0.95s infinite;
    }
    .continue-btn:hover{
        background-color: #e7b83f;
    }
    @keyframes bounce {
        0% {
            /* // transform: scale(1,1) translate(0px, 0px); */
        }
        
        30%{
            transform: scale(1,0.8) translate(0px, 10px); 
        }

        75%{
            /* // transform: scale(1,1.1) translate(0px, -25px);  */
        }
        
        100% {
            /* // transform: scale(1,1) translate(0px, 0px); */
        }
    }
    @-webkit-keyframes bounce {
        0% {
            /* // transform: scale(1,1) translate(0px, 0px); */
        }
        
        30%{
            transform: scale(1,0.8) translate(0px, 10px); 
        }

        75%{
            /* // transform: scale(1,1.1) translate(0px, -25px);  */
        }
        
        100% {
            /* // transform: scale(1,1) translate(0px, 0px); */
        }
    }

     @media (max-width: 1110px) {
        .cart-order-summary{
            grid-template-columns: 1fr;
            padding: 20px;
        }
        .continue-btn{
            width: 60px;
            height: 60px;
            font-size: 12px;
        }
    }
</style>


