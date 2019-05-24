<template>
    <div>
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
                    <i @click="incrementItem(item, i)" class="fa fa-plus-square"></i>
                </p>
                <p>&#8358;{{ currency.format(item.price * item.qty) }}</p>
                <span>
                    <i @click.prevent="$store.dispatch('cart/deleteItem', item.id)" class="fa fa-trash"></i>
                </span>
            </div>
            <div class="btn-container">
                <button class="add-btn">
                    <nuxt-link to="/products">
                        <i class="fa fa-plus"></i> Add more items
                    </nuxt-link>
                </button>
            </div>
        </div>
        <div v-else class="no-items">
            <h2>You don't have items in cart</h2>
        </div>
    </div>
</template>

<script>
    import Cart from '~/mixins/cart'
    import CurrencyFormatter from '~/mixins/currencyFormatter'

    export default {
        mixins: [CurrencyFormatter, Cart],
        components: {},
        data() { 
            return {
                baseUrl: process.env.baseUrl,
                api: 'products/'
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
    }
    .cart-items{
        background-color: rgb(241, 241, 241);
        display: grid;
        align-items: center;
        justify-items: center;
        height: 35px;
    }
    a{
        text-decoration: none;
        color: #fefefe;
    }
    .sub-heading{
        display: grid;
        grid-template-columns: 60px repeat(5, 1fr) 50px;
        height: 45px;
        align-items: center;
        justify-items: center;
        color: #114e9e;
        padding-bottom: 5px;
        font-weight: bold;
        font-size: 14px;
    }
    .table-data{
        display: grid;
        grid-template-columns: 60px repeat(5, 1fr) 50px;
        align-items: center;
        justify-items: center;
        color: #114e9e;
        padding: 0 10px 10px 0;
        grid-row-gap: 10px;
        font-size: 14px;
    }
    .table-img{
        width: 40px;
        height: 40px;
        background-size: contain;
    }
    img{
        width: 100%;
        height: 100%;
    }
    .fa-minus-square,
    .fa-plus-square{
        color: rgb(211, 211, 211);
        cursor: pointer;
    }
    .fa-trash{
        color: indianred;
        cursor: pointer;
    }
    .btn-container{
        display: grid;
        cursor: pointer;
        align-items: flex-end;
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
        background-color: #114e9e;
        color: #fefefe;
        outline: none;
        border: none;
    }
    .add-btn:hover{
        background-color: #0b3f83;
        transition: 0.8s ease-in;
    }
    .no-items{
        display: grid;
        text-align: center;
        justify-items: center;
        align-items: center;
        margin: 30px;
        color: rgb(150, 150, 150);
    }

   
    @media (max-width: 767px) {
        .cart{
            font-size: 12px;    
        }
        .sub-heading{
            grid-template-columns: 30px repeat(5, 1fr) 30px;
            grid-gap: 5px;
            padding: 0 5px;
            font-size: 11px;
        }
        .table-data{
            grid-template-columns: 30px repeat(5, 1fr) 30px;
            grid-gap: 5px;
            padding: 0 5px;
            height: 50px;
            font-size: 11px;
        }
        .table-img{
            width: 30px;
            height: 30px;
            background-size: contain;
        }
        .btn-container{
            
        }
        .del-cart{
            height: 15px;
            width: 40px;
            font-size: 9px;
        }
    }
     @media (max-width: 380px) {
        .cart{
            margin: 30px 10px;
            font-size: 9px;    
        }
    }
</style>


