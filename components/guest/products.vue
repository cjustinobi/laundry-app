<template>
    <div class="product" :style="myStyle">
        <div class="title"><h2>Choose items</h2></div>
        <div class="search-laundry">
            <input type="search" placeholder="Search for laundry items"><button class="search-btn">Search</button>
        </div>

        <div><items/></div>
    </div>
</template>

<script>
    import Items from '~/components/guest/items'

    export default {
        
        layout: 'dashboard',

        components: { Items },

        data() {
            return {
                myStyle: {
                    backgroundColor: "#f0faff"
                },
                faCheckCircle: true
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
    .product{
        display: grid;
        grid-template-rows: 50px 70px 40px;
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

    @media (max-width: 767px) {
       
    }
</style>