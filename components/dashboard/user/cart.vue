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
            <p>{{ item.name }}</p>
            <p>&#8358;{{ currency.format(item.price) }}</p>
            <p>
                <i @click="decrementItem(item.id, i)" class="fa fa-minus-square"></i>
                <span :ref="`qty-${i}`">{{ item.qty }}</span>
                <i @click="incrementItem(item, i)" class="fa fa-plus-square"></i></p>
            <p>N30,000</p>
            <button class="del-cart" @click.prevent="deleteCart(i)">Delete</button>
        </div>
        <div class="btn-container">
            <button class="add-btn"><i class="fa fa-plus"></i> Add more items</button>
        </div>
    </div>
    <div v-else class="no-items">
        <h3>you don't have items in cart</h3>
    </div>
</template>

<script>

    import Cart from '~/mixins/cart'
    import CurrencyFormatter from '~/mixins/currencyFormatter'

    export default {
        mixins: [CurrencyFormatter, Cart],
        data() { 
            return {
                baseUrl: process.env.baseUrl,
                api: 'products/'
            }
        },
        methods: {
            deleteCart(i) {
                this.$store.dispatch('items', i)
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
        grid-template-columns: 60px repeat(6, 1fr);
        height: 40px;
        align-items: center;
        justify-items: center;
        color: #114e9e;
    }
    .table-data{
        display: grid;
        grid-template-columns: 60px repeat(6, 1fr);
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
    .del-cart{
        height: 20px;
        width: 50px;
        font-size: 12px;
        text-align: center;
    }
    .add-btn{
        height: 30px;
    }
    .no-items{
        display: grid;
        text-align: center;
        justify-items: center;
        align-items: center;
        margin: 30px;
    }

    @media (max-width: 767px) {
        .cart{
            margin: 30px 15px;
            font-size: 12px;    
        }
        .sub-heading{
            grid-template-columns: 20px repeat(6, 1fr);
            grid-gap: 5px;
            padding: 0 5px;
        }
        .table-data{
            grid-template-columns: 20px repeat(6, 1fr);
            grid-gap: 5px;
            padding: 0 5px;
        }
        .btn-container{
            margin-left: 20px;
        }
        .del-cart{
            height: 15px;
            width: 40px;
            font-size: 9px;
        }
    }
</style>


