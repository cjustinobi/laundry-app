<template>
    <div class="transaction-container" :style="myStyle">
       <div class="awaiting">
           <div class="awaiting-inner"><i class="fa fa-check-circle"></i> <h4>Awaiting Pick-up</h4></div>
           <h4 class="mens-wear">Dry Cleaning/Men's Wear</h4>
       </div>
       <div class="items">
           <p class="item-head">Tracksuit jacket</p>
           <p class="number">1</p>
           <p class="amount">N4,000.00</p>
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
        methods: {
          
            },
        
    }
</script>

<style scoped>
    .transaction-container{
        display: grid;
        grid-template-rows: 100px 40px 120px 150px 200px 60px;
        color: #114e9e;
        min-height: 100vh;
        grid-gap: 15px;
    }
    .awaiting{
        display: grid;
        grid-template: repeat(2, 30px) / 1fr;
        height: 100px;
        align-items: center;
        justify-items: center;
        align-content: center;
    }
    .awaiting-inner{
        display: grid;
        grid-template-columns: 20px 170px;
        color: #4caf50;
    }
    .items{
        display: grid;
        grid-template-columns: 750px 80px 110px;
        margin: 0 60px;
        grid-gap: 20px;
        align-items: center;
    }
    .item-head{
        
    }
</style>