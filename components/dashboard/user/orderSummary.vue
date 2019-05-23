<template>
    <div class="order-container">
        <div class="order-summary">
            <div class="order">
                <h4>Order Summary</h4>
                <h4>4 Items</h4>
            </div>
            <div class="hl"></div>
            <div class="order">
                <p>Subtotal:</p>
                <p class="p-total">N177,450</p>
            </div>
            <div class="hl"></div>
            <div class="order">
                <p>Delivery charges:</p>
                <p class="delivery-ad">Add your Delivery address at checkout to see delivery charges</p>
            </div>
            <div class="hl"></div>
            <div class="order">
                <p>Total</p>
                <p class="p-total">N177,450</p>
            </div>
            <div class="hl"></div>
            <div class="order-inner">
                <p class="exclude">Excluding delivery charges</p>
                <button class="pay-now">Continue to Checkout</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .order-container{
        display: grid;
    }
    .order-summary{
        display: grid;
        height: 330px;
        color: #114e9e;
        background-color: #fefefe;
        border-bottom: 1px solid rgb(207, 207, 207);
        box-shadow: 5px 5px 15px grey;
        font-size: 14px;
        padding: 5px 15px;
        align-items: center;
    }
    .order{
        display: grid;
        grid-template-columns: repeat(2, auto);
        justify-content: space-between;
        align-items: center;
        grid-gap: 40px;
    }
    .hl{
        height: 1px;
        background-color: rgb(212, 212, 212);
        display: grid;
    }
    .order-inner{
        display: grid;
        align-items: stretch;
        grid-gap: 20px;
    }
    .p-total{
        font-weight: 700;
    }
    .delivery-ad{
        font-size: 10px;
    }
    .exclude{
        display: grid;
        justify-content: flex-end;
        font-size: 10px;
        color: indianred;
    }
    .pay-now{
        height: 40px;
        width: 100%;
        background-color: #e7b83f;
        color: #fefefe;
        font-size: 15px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: 0.6s ease-in;
        box-shadow: 5px 5px 15px grey;
    }
    .pay-now:hover{
        background-color: #f58b13;
    }
</style>


