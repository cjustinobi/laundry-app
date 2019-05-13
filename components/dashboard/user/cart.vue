<template>
    <div v-if="items.length > 0" class="cart">
        <div class="cart-items"><h4>Cart Items</h4></div>
        <div class="sub-heading">
            <p>#</p>
            <p>Product</p>
            <p>Description</p>
            <p>Unit Price</p>
            <p>Quantity</p>
            <p>Total</p>
        </div>
        <div class="table-data" v-for="(item, i) in items" :key="i">
            <p>{{ i + 1 }}</p>
            <img class="table-img" :src="`${baseUrl}${item.file_path}`" alt="Elegant Image">
            <p>Long sleeve shirt</p>
            <p>&#8358;{{ currency.format(item.price) }}</p>
            <p>
                <i @click="decrementItem(item.id, i)" class="fa fa-minus-square"></i>
                <span :ref="`qty-${i}`">{{ item.qty }}</span>
                <i @click="incrementItem(item, i)" class="fa fa-plus-square"></i></p>
            <p>N30,000</p>
        </div>
        <div class="btn-container">
            <button class="add-btn"><i class="fa fa-plus"></i> Add more items</button>
        </div>
    </div>
    <div v-else>
        <h4>you don't have items in cart</h4>
    </div>
</template>

<script>

    import Cart from '~/mixins/cart'
    import CurrencyFormatter from '~/mixins/currencyFormatter'

    export default {
        mixins: [CurrencyFormatter, Cart],
        data() { 
            return {
                baseUrl: process.env.baseUrl
            }
        },
        computed: {
            items() {
                return this.$store.getters['cart/items']
            }
        }

    }
</script>

<style lang="scss" scoped>
    .cart{
        display: grid;
        color: #114e9e;
        background-color: #fefefe;
        border-bottom: 1px solid rgb(207, 207, 207);
        box-shadow: 5px 5px 15px grey;
        margin: 40px;
    }
    .cart-items{
        background-color: rgb(241, 241, 241);
        display: grid;
        align-items: center;
        justify-items: center;
        height: 35px;
    }
    .sub-heading{
        display: grid;
        grid-template-columns: 60px repeat(5, auto);
        height: 40px;
        align-items: center;
        justify-items: center;
        color: #114e9e;
    }
    .table-data{
        display: grid;
        grid-template-columns: 60px repeat(5, auto);
        align-items: center;
        justify-items: center;
        color: #114e9e;
        padding-bottom: 10px;
    }
    .btn-container{
        display: grid;
        margin-left: 40px;
    }
    img{
        width: 50px;
    }
    @media (max-width: 767px) {
        .cart{
            margin: 0 20px;
            font-size: 12px;    
        }
        .sub-heading{
            grid-gap: 5px;
        }
        .table-data{
            grid-gap: 5px;
        }
        .btn-container{
            margin: 0 0 0 20px;
        }
    }
</style>


