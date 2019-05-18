<template>
    <div class="admin-transact-container" :style="myStyle">
        <div class="no-items">
            <h2>No Transactions yet</h2>
        </div>
    </div>
</template>

<script>


    export default {
        layout: 'dashboard',
        data() { 
            return {
               myStyle: {
                   backgroundColor: "#f0faff"
               }
            }
        },

    }
</script>

<style lang="scss" scoped>
    .admin-transact-container{
        display: grid;
        color: #114e9e;
        min-height: 100vh;
    }
    a{
        text-decoration: none;
        color: #fefefe;
    }
    .no-items{
        display: grid;
        text-align: center;
        justify-items: center;
        align-items: center;
        margin: 30px;
        color: rgb(150, 150, 150);
        box-shadow: 5px 5px 15px grey;
        margin: 40px;
        height: 70px;
        background-color: #fefefe;
    }

    @media (max-width: 767px) {
        .cart{
            margin: 30px 15px;
            font-size: 12px;    
        }
    }
</style>


