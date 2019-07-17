<template>
    <div class="all-products">
        <div><Search/></div>
        <div><Categories/></div>
        <div class="laundry-list-wrapper" >
            <div class="laundry-list" v-for="(product, i) in products" :key="i">
                <Actions
                        v-if="user !== undefined && user.user_type == 3"
                        @editItem="editItem"
                        @removeItem="removeItem"
                        :itemId="product.id" :api="api"/>

                <div class="img-square">
                    <img :src="`${baseUrl}${product.file_path}`" alt="EL image">
                </div>
                <h5>{{ product.name }}</h5>
                <p class="p1">Washed, pressed and neatly folded</p>
                <h5>&#8358;{{ currency.format(product.price) }}</h5>
                <div class="separator"></div>
                <p>{{ product.category.name }}</p>
                <div class="btn-container" v-if="user && user.user_type === 1">
                    <button @click="addToCart(product, i)" class="laundry-list-btn">Add to cart</button>
                    <div>
                        <span @click="decrementItem(product.id, i)"><i class="fa fa-minus-square"></i></span>
                        <span class="cart-qty" :ref="`qty-${i}`">{{ getQty(product.id) }}</span>
                        <span @click="incrementItem(product, i)"><i class="fa fa-plus-square"></i></span>
                    </div>
                </div>
            </div>

            <div :class="[{'side-links': sideLinks, 'hide-side-links': !sideLinks}]" id="side-links"
                v-if="user && user.user_type === 3"
            >
                <SideLinks />
            </div>
            <div :class="[{'side-links1': sideLinks, 'hide-side-links': !sideLinks}]" id="side-links"
                v-if="user && user.user_type === 1"
            >
                <SideLinks />
            </div>
        </div>
    </div>
</template>

<script>

    import User from '~/mixins/user'
    import Cart from '~/mixins/cart'
    import Categories from '~/components/categories/categories'
    import Actions from '~/components/shared/actions'
    import Search from '~/components/guest/search'
    import CurrencyFormatter from '~/mixins/currencyFormatter'

    export default {

        mixins: [User, CurrencyFormatter, Cart],

        components: { Search, Categories, Actions },

        data() {
            return {
                baseUrl: process.env.baseUrl,
                api: 'products/',
                sideLinks: true
            }
        },

        methods: {
            editItem(i) {
                this.showForm = true;
                this.editDetail = this.products.find(product => product.id === i)
            },
            removeItem(i) {
                this.$store.dispatch('products/removeItem', i)
            },
            addToCart(product, i) {
                // Check if this particluar item has been added.
                const item  = this.products.find(item => item.id == product.id)
                // Syncs the store.
                if (item) {
                    this.$store.dispatch('cart/addToCart', { item, elId: i })
                } else {
                    // Add it for the first time.
                    product.qty = 1
                    this.items.push(product)
                    this.$store.dispatch('cart/addToCart', { item: product, elId: i })
                } 
            }
        },
        computed: {
            products() {
                return this.$store.getters['products/allProducts']
            }
        },

        beforeMount() {
            this.$store.dispatch('products/getProducts')
        }
    }
</script>

<style lang="scss" scoped>
    .all-products{
        display: grid;
        grid-template-rows: auto auto 1fr;
        min-height: 100vh;
        position: relative;
        top: 0;
    }
    .continue-btn{
        position: fixed;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: none;
        outline: none;
        top: 300px;
        right: 2px;
        background-color: #b8b8b8;
        opacity: 0.6;
        z-index: 1;
        color: #fefefe;
        transition: 0.8s ease-in;
        font-size: 14px;
        animation: bounce 0.95s infinite;
        -webkit-animation: bounce 0.95s infinite;
    }
    .continue-btn:hover{
        background-color: #e7b83f;
    }
    @keyframes bounce {
        0% {
            transform: scale(1,1) translate(0px, 0px);
        }
        30%{
            transform: scale(1,0.8) translate(0px, 30px); 
        }
        75%{
            transform: scale(1,1.1) translate(0px, -25px); 
        }
        100% {
            transform: scale(1,1) translate(0px, 0px);
        }
    }
    @-webkit-keyframes bounce {
        0% {
            // transform: scale(1,1) translate(0px, 0px);
        }
        30%{
            transform: scale(1,0.8) translate(0px, 10px); 
        }
        75%{
            // transform: scale(1,1.1) translate(0px, -25px); 
        }
        100% {
            // transform: scale(1,1) translate(0px, 0px);
        }
    }
    .laundry-list-wrapper{
        display: grid;
        grid-template: 380px / repeat(auto-fit, minmax(240px, 255px));
        grid-gap: 30px;
        position: relative;
        justify-content: center;
        margin: 20px 0;
    }
    .laundry-list{
        display: grid;
        background-color: #fefefe;
        color: #114e9e;
        min-height: 320px;
        padding: 10px;
        position: relative;
    }
    .img-square{
        height: 120px;
        background-size: contain;
        background-position: left;
        img{
            width: 100%;
            max-height: 120px;
        }
    }

    .p1{
        color: #8395b1;
        font-size: 14px;
    }
    .separator{
        height: 1px;
        background-color: #8c929b;
        padding: 0;
    }
    .btn-container{
        display: grid;
        grid-template-columns: 150px auto;
        grid-gap: 10px;
    }
    .laundry-list-btn{
        // width: 235px;
        height: 30px;
        background-color: #e7b83f;
        color: #fefefe;
        outline: none;
        border: none;
        transition: 0.7s ease-in;
    }
    .laundry-list-btn:hover{
        background-color: #f58b13;
    }
    .fa-plus-square,
    .fa-minus-square{
        color: #dfdfdf;
    }
    .fa-plus-square:hover,
    .fa-minus-square:hover{
        color: #b8b8b8;
        transition: 0.8s ease-in;
    }
    .cart-qty{
        font-size: 21px;
    }
    .side-links{
        position: absolute;
        left: 0px;
        top: 20px;
        z-index: 1000;
        transition: 0.8s ease-in;
    }
    .side-links1{
        position: absolute;
        left: 0px;
        top: 138px;
        z-index: 1000;
        transition: 0.8s ease-in;
    }
    #side-links{
        display: none;
    }
    .hide-side-links{
        display: none;
    }
    
    @media (max-width: 767px) {
        .continue-btn{
            width: 60px;
            height: 60px;
            font-size: 12px;
        }
        .laundry-list-wrapper{
            grid-gap: 20px;
        }
        .side-links{
            left: 0px;
            top: 25px;
        }
        .side-links1{
            left: 0px;
            top: 143px;
        }
    }
</style>

