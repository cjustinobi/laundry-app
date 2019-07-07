<template>
    <div class="transaction-container" >
       <!--<div class="awaiting">
           <div class="awaiting-inner"><i class="fa fa-check-circle"></i> <h4>Awaiting Pick-up</h4></div>
           <h4 class="mens-wear">Dry Cleaning/Men's Wear</h4>
       </div>
       <div class="items">
           <p class="item-head">Tracksuit jacket</p>
           <p class="number">1</p>
           <p class="amount">N4,000.00</p>
       </div>
       <div class="third-section">
           <div class="item-total">
               <p style="padding-left: 5px">Items: 1</p>
               <div class="total-inner">
                   <p>Total:</p>
                   <p>N3,000.00</p>
               </div>
           </div>
           <div class="second-item">
               <div class="coupon-section">
                   <p>Coupon code</p>
                   <div class="coupon-p2"><p>N/A</p></div>
               </div>
               <div class="total-inner2">
                   <p>Discount:</p>
                   <p>N0.0</p>
                   <p>+Tax:</p>
                   <p>N0.0</p>
                   <p>Delivery charge:</p>
                   <p>N1,000.00</p>
                   <p>Grand Total:</p>
                   <p>N4,000.00</p>
               </div>
           </div>
       </div>
       <div class="pick-up-delivery">
            <h4>Pick-up/Delivery</h4>
            <div class="pick-up-inner">
                <div class="fa-pick">
                    <div class="fa-pick-inner"><i class="fa fa-check-circle"></i> <p>Pick-up</p></div>
                    <div class="fa-pick-inner"><i class="fa fa-check-circle"></i> <p>Delivery</p></div>
                </div>
                <div class="address-inner">
                    <p>30 Afaha Uqua Road,</p>
                    <p>Eket, Akwa Ibom State</p>
                </div>
            </div>
        </div>
        <div class="pick-up-day">
            <h4>Pick-up day &amp; Time</h4>
        </div>
        <div class="mode-of-payment">
            <label for=""><br>
                <select v-model="paymode" id="" class="mode-select">
                    <option disabled>Mode of Payment</option>
                    <option >Card payment</option>
                    <option>Bank transfer</option>
                    <option>Pay on delivery</option>
                </select>
            </label>
        </div>

        <div class="btn-back"><button class="back"><i class="fa fa-angle-left"></i> &nbsp; Back</button></div>-->

        <div><transaction-history/></div>
      
    </div>
</template>

<script>
import TransactionHistory from '~/components/dashboard/shared/transactionHistory'
    export default {

        layout: 'dashboard',
        components: { TransactionHistory },

        data() {
            return {
                paymode: 'Mode of Payment'
            }
        }
        
    }
</script>

<style scoped>
    .transaction-container{
        display: grid;
        grid-template-rows: 100px 40px 160px 150px 200px 60px 60px;
        color: #114e9e;
        min-height: 100vh;
        grid-gap: 20px;
    }
    .awaiting{
        display: grid;
        grid-template: repeat(2, 30px) / 1fr;
        height: 100px;
        align-items: center;
        justify-items: center;
        align-content: center;
        text-align: center;
    }
    .awaiting-inner{
        display: grid;
        grid-template-columns: 20px 150px;
        color: #4caf50;
    }
    .items{
        display: grid;
        grid-template-columns: 1fr 80px 110px;
        margin: 0 60px;
        grid-gap: 20px;
        align-items: center;
        width: 90%;
    }
    .item-head{
        background-color: #fefefe;
        padding: 5px;
    }
    .number{
        background-color: #fefefe;
        padding: 5px;
    }
    .amount{
        background-color: #114e9e;
        color: #fefefe;
        display: grid;
        justify-items: center;
        padding: 5px;
    }
    .third-section{
        display: grid;
        grid-template-rows: 30px 120px;
        margin: 0 60px;
    }
    .item-total{
        display: grid;
        grid-template-columns: 1fr 300px;
        border-top: 1px solid rgb(184, 184, 184);
        border-bottom: 1px solid rgb(184, 184, 184);
        align-items: center;
    }
    .total-inner{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .coupon-section{
        display: grid;
        grid-template-columns: 1fr 80px;
        width: 90%;
        padding: 10px;
        border: 1px solid rgb(236, 236, 236);
        background-color: rgb(241, 241, 241);
    }
    .coupon-p2{
        display: grid;
        justify-items: center;
        background-color: #fefefe;
        text-align: center;
    }
    .second-item{
        display: grid;
        grid-template-columns: 1fr 300px;
        align-items: center;
        padding-top: 10px;
        grid-gap: 15px;
    }
    .total-inner2{
        display: grid;
        grid-template: repeat(4, 30px) / 1fr 1fr;
    }
    .pick-up-delivery{
        display: grid;
        grid-template-rows: 30px 110px;
        grid-gap: 3px;
        margin: 0 60px;
    }
    .pick-up-inner{
        display: grid;
        grid-template-rows: 30px 1fr;
        border: 1px solid rgb(150, 150, 150);
        width: 300px;
        background-color: rgb(241, 241, 241);
    }
    .fa-pick{
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-items: center;
        border: 1px solid rgb(211, 211, 211);
    }
    .fa-check-circle{
        color: #e7b83f;
    }
    .fa-pick-inner{
        display: grid;
        grid-template-columns: 20px 1fr;
    }
    .address-inner{
        display: grid;
        align-content: center;
        grid-template-rows: 20px 20px;
        padding-left: 30px;
    }
    .pick-up-day{
        margin: 0 60px;
    }
    .mode-of-payment{
        margin: 0 60px;
    }
     .mode-select{
        width: 440px;
        padding: 10px;
        border: none;
        border-bottom: 1px solid rgb(197, 197, 197);
        outline: none;
    }
    .btn-back{
        display: grid;
        align-items: center;
    }
    .back{
        height: 40px;
        width: 200px;
        padding: 10px;
        background-color: #e7b83f;
        color: #fefefe;
        font-size: 17px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: 0.6s ease-in;
        box-shadow: 5px 5px 15px grey;
        margin: 0 60px;
    }
    .back:hover{
        background-color: #f58b13;
    }

    @media (max-width: 767px) {
        .transaction-container{
            font-size: 12px;
        }
        .awaiting-inner{
            display: grid;
            grid-template-columns: 20px 100px;
            color: #4caf50;
        }
        .items{
            grid-template-columns: 1fr 40px 110px;
            margin: 0 10px;
            width: 90%;
            align-content: center;
        }
        .coupon-section{
            grid-template-columns: 1fr 40px;
            grid-gap: 10px;
            padding: 5px;
        }
        .second-item{
            grid-template-columns: 1fr 200px;
        }
        .third-section{
            grid-template-rows: 30px 110px;
            margin: 0 10px;
        }
        .item-total{
            grid-template-columns: 1fr 200px;
        }
        .pick-up-delivery{
            grid-template-rows: 30px 110px;
            margin: 0 10px;
        }
        .pick-up-day{
            margin: 0 10px;
        }
        .mode-of-payment{
            margin: 0 10px;
        }
        .mode-select{
            width: 240px;
        }
        .back{
            font-size: 14px;
            margin: 0 10px;
        }
    }
</style>