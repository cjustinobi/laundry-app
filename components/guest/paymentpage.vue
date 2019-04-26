<template>
    <div class="payment-container" :style="myStyle">
        <div class="address-time-container">
            <div class="address-inner">
                <div class="pick-address">
                    <div>
                        <div class="edit-address"><h4>Pick-up Address</h4> <i class="fa fa-edit"></i></div>
                        <p>30, Afaha Uqua road</p>
                        <p>Eket, Akwa Ibom State</p>
                    </div>
                    <div>
                        <div class="edit-address"><h4>Delivery Address</h4> <i class="fa fa-edit"></i></div>
                        <p>30, Afaha Uqua road</p>
                        <p>Eket, Akwa Ibom State</p>
                    </div>
                </div>
                <div class="line-demarcator"></div>
                 <div class="pick-address">
                    <div>
                        <div class="edit-address"><h4>Estimated collection time</h4> <i class="fa fa-edit"></i></div>
                        <p>02:00PM - 04:00PM on 19th Mar, 2019</p>
                    </div>
                    <div>
                        <div class="edit-address"><h4>Estimated delivery time</h4> <i class="fa fa-edit"></i></div>
                        <p>02:00PM - 04:00PM on 19th Mar, 2019</p>
                    </div>
                </div>    
                <div class="payment-method">
                   <div class="payment-inner">
                        <h4>Payment Method</h4>
                        <div class="select-payment">
                            <div class="card-payment" :class="{'change-color': cardPayment}" 
                                @click.prevent="togglePayment('cardPayment')">
                                <i class="fa fa-check-circle"></i> Card Payment
                            </div>
                            <div class="bank-transfer" :class="{'change-color': bankTransfer}" 
                                @click.prevent="togglePayment('bankTransfer')">
                                <i class="fa fa-check-circle"></i> Bank Transfer
                            </div>
                            <div class="pod" :class="{'change-color': payOnDelivery}" 
                                @click.prevent="togglePayment('payOnDelivery')">
                                <i class="fa fa-check-circle"></i> Pay on delivery
                            </div>
                        </div>
                   </div>
                </div>
            </div> 
            <div class="cart-summary">
                <div class="cart"><h4>Cart Summary</h4></div>
                <div class="cart-inner">
                    <div class="total">
                        <p>Total</p>
                        <p>N3000</p>
                        <p>Delivery charge</p>
                        <p>N1000</p>
                        <p>Grand Total</p>
                        <p>N4000</p>
                    </div>
                    <div class="gift"><input type="checkbox" id=""> I have a coupon/Gift card</div>
                    <div>
                        <img src="~assets/images/mastercard.png" alt="Master Card">
                        <img src="~assets/images/visa.png" alt="Visa Card">
                        <img src="~assets/images/verve.jpg" alt="Verve Card">
                    </div>
                    <button class="pay-now">Pay Now</button>
                </div>
            </div>
        </div>

        <div class="verify-cart">
            <div class="cart-items"><h4>Verify Cart Items</h4></div>
            <div class="sub-heading">
                <p>#</p>
                <p>Product</p>
                <p>Description</p>
                <p>Unit Price</p>
                <p>Quantity</p>
                <p>Total</p>
            </div>
            <div class="table-data">
                <p>1</p>
                <img class="table-img" src="~assets/images/EL_laundry.png" alt="Elegant Image">
                <p>Long sleeve shirt</p>
                <p>N15000</p>
                <p><i class="fa fa-plus-square"></i> 2 <i class="fa fa-minus-square"></i></p>
                <p>N30,000</p>
            </div>
        </div>

        <div class="btn-container">
            <button class="add-btn"><i class="fa fa-plus"></i> Add more items</button>
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
                },
                cardPayment: true,
                bankTransfer: false,
                payOnDelivery: false
            }
        },
        methods: {
            togglePayment(val){
                if(val === 'cardPayment') {
                    this.bankTransfer = false
                    this.payOnDelivery = false
                    return this.cardPayment = true
                }
                if(val === 'bankTransfer') {
                    this.payOnDelivery = false
                    this.cardPayment = false
                    return this.bankTransfer = true
                }
                if(val === 'payOnDelivery') {
                    this.cardPayment = false
                    this.bankTransfer = false
                    return this.payOnDelivery = true
                }
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
    .payment-container{
        display: grid;
        min-height: 100vh;
        grid-template-rows: 300px 120px 60px;
        grid-gap: 40px;
    }
    .address-time-container{
        display: grid;
        grid-template-columns: 700px 400px;
        grid-gap: 50px;
        height: 300px;
    }
    a{
        text-decoration: none;
    }
    .address-inner{
        display: grid;
        height: 300px;
        color: #114e9e;
        background-color: #fefefe;
        border-bottom: 1px solid rgb(207, 207, 207);
        box-shadow: 5px 5px 15px grey;
        margin-left: 40px;
        padding: 15px;
    }
    .pick-address{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .edit-address{
        display: grid;
        grid-template-columns: 1fr 50px;
        margin-bottom: 8px;
    }
    .fa-edit{
        color: #e7b83f;
        cursor: pointer;
    }
    .line-demarcator{
        background-color: rgb(194, 194, 194);
        height: 1px;
    }
    .cart-summary{
        display: grid;
        grid-template-rows: 50px 1fr;
        height: 300px;
        color: #114e9e;
        background-color: #fefefe;
        border-bottom: 1px solid rgb(207, 207, 207);
        box-shadow: 5px 5px 15px grey;
        margin-right: 40px;
    }
    .verify-cart{
        display: grid;
        height: 120px;
        color: #114e9e;
        background-color: #fefefe;
        border-bottom: 1px solid rgb(207, 207, 207);
        box-shadow: 5px 5px 15px grey;
        margin: 0 40px 40px 40px;
        /* padding: 15px; */
    }
    .btn-container{
        display: grid;
        margin-left: 40px;
    }
    .add-btn{
        background-color: #114e9e;
        height: 50px;
        width: 200px;
        color: #fefefe;
        outline: none;
        border: none;
        transition: 0.8s ease-in;
        box-shadow: 5px 5px 15px grey;
    }
    .add-btn:hover{
        background-color: #053472;
    }
    .payment-method{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .select-payment{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        font-size: 13px;
        margin-top: 8px;
    }
    .payment-inner{
        grid-column: 2 / 3;
    }
    .card-payment{
        cursor: pointer;
    }
    .bank-transfer{
        cursor: pointer;
    }
    .pod{
        cursor: pointer;
    }
    .change-color{
        color: #e7b83f;
    }
    .cart{
        height: 40px;
        background-color: rgb(241, 241, 241);
        display: grid;
        justify-items: center;
        align-items: center;
    }
    .cart-inner{
        padding: 15px;
        display: grid;
        grid-template-rows: 90px 40px 40px 50px;
        align-items: center;
    }
    .total{
        display: grid;
        grid-template: repeat(3, 30px) / 1fr 60px;
    }
    .gift{
        color: #e7b83f;
    }
    img{
        width: 20px;
    }
    .pay-now{
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
    }
    .pay-now:hover{
        background-color: #f58b13;
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
    .fa-plus-square,
    .fa-minus-square{
        color: #e7b83f;
        cursor: pointer;
    }
    .fa-plus-square:hover,
    .fa-minus-square:hover{
        color: #f58b13;
        transition: 0.7s ease-in;
    }
    .table-img{
        width: 40px;
    }


    @media (max-width: 767px) {
        
    }
</style>