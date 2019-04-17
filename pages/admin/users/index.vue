<template>
    <div class="product" :style="myStyle">
        <div class="product-tabs">
            <div class="fa" :class="{'addColor': faCheckCircle, 'removeColor': !faCheckCircle}">
                <i class="fa fa-check-circle"></i> Items
            </div>
            <div class="demarcator"></div>
            <div class="fa">
                <i class="fa fa-check-circle"></i> Address
            </div>
            <div class="demarcator"></div>
            <div class="fa">
                <i class="fa fa-check-circle"></i> Time
            </div>
            <div class="demarcator"></div>
            <div class="fa">
                <i class="fa fa-check-circle"></i> Payment
            </div>
        </div>
        <div class="title"><h2>Choose items</h2></div>
        <div class="search-laundry">
            <input type="search" placeholder="Search for laundry items"><button class="search-btn">Search</button>
        </div>
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

        <div>
            <users></users>
        </div>
        
    </div>
</template>

<script>

import Users from '~/components/users/all'
export default {

    layout: 'dashboard',

    components: {
        Users
    },
    data() {
        return {
            myStyle: {
                backgroundColor: "#f0faff"
            },
            faCheckCircle: true
        }
    },
    computed: {
        users(){
            return this.$store.getter['users/users']
        }
    },

    mounted() {
        this.$store.dispatch('users/getUsers')
    }
}
</script>

<style scoped>
    .product{
        display: grid;
        grid-template-rows: 50px 70px 90px 40px;
        min-height: 100vh;
    }
    .product-tabs{
        display: grid;
        justify-content: center;
        color: #114e9e;
        background-color: #fefefe;
        grid-template-columns: auto 40px auto 40px auto 40px auto;
        align-items: center;
        grid-gap: 9px;
    }
    .demarcator{
        width: 40px;
        height: 1px;
        background-color: #898f97;
    }
    .fa{
        cursor: pointer;
    }
    .addColor{
        color: #e7b83f;
    }
    .removeColor{
        color: #114e9e;
    }
    .title{
        display: grid;
        justify-items: center;
        align-content: center;
        color: #114e9e;
        background-color: #f0faff;
    }
    .search-laundry{
        display: grid;
        justify-content: center;
        background-color: #fefefe;
        grid-template-columns: 350px 130px;
        align-content: center;
    }
    .search-laundry input{
        height: 30px;
        color: #898f97;
        padding-left: 5px;
        border: 1px solid rgb(238, 238, 238);
    }
    .search-btn{
        height: 30px;
        background-color: #114e9e;
        color: #fefefe;
        border: none;
        outline: none;
        transition: 0.7s ease-in;
        cursor: pointer
    }
    .search-btn:hover{
        background-color: #052a5a;
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


