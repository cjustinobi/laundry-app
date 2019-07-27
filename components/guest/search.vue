<template>
    <div class="search">
        <h2>Choose items</h2>
        <div class="search-laundry">
            <input type="search" placeholder="Search for laundry items">
            <button class="search-btn">Search</button>
        </div>
        
    </div>
</template>

<script>
    

    export default {

        data() {
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
    .search{
        background: #fefefe;
        h2{
            text-align: center;
            color: #114e9e;
            padding: 16px 0;
            background: #f0faff;
        }
    }
    .search-laundry{
        display: grid;
        justify-content: center;
        grid-template-columns: 350px 130px;
        align-content: center;
        padding: 16px 0;
    }
    .search-laundry input{
        width: 100%;
        height: 30px;
        color: #898f97;
        padding: 8px;
        border: 1px solid rgb(238, 238, 238);
    }
    .search-btn{
        height: 30px;
        background: #114e9e;
        color: #fefefe;
        border: none;
        outline: none;
        transition: 0.7s ease-in;
        cursor: pointer
    }
    .search-btn:hover{
        background: #052a5a;
    }

    @media (max-width: 767px) {
       .search-laundry{
            grid-template-columns: auto 130px;
        }
    }
</style>