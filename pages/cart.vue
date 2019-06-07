<template>
    <div class="cart-order-summary">
        <Cart/>
        <OrderSummary/>
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
    @keyframes bounce {
        0% {
             /* transform: scale(1,1) translate(0px, 0px); */
        }
        30%{
            transform: scale(1,0.8) translate(0px, 10px); 
        }
        75%{
             /* transform: scale(1,1.1) translate(0px, -25px);  */
        }
        100% {
             /* transform: scale(1,1) translate(0px, 0px); */
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
    }
</style>


