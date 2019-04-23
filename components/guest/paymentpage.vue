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
                        <div class="edit-address"><h4>Pick-up Address</h4> <i class="fa fa-edit"></i></div>
                        <p>30, Afaha Uqua road</p>
                        <p>Eket, Akwa Ibom State</p>
                    </div>
                </div>
                <div class="line-demarcator"></div>
                 <div class="pick-address">
                    <div>
                        <div class="edit-address"><h4>Pick-up Address</h4> <i class="fa fa-edit"></i></div>
                        <p>30, Afaha Uqua road</p>
                        <p>Eket, Akwa Ibom State</p>
                    </div>
                    <div>
                        <div class="edit-address"><h4>Pick-up Address</h4> <i class="fa fa-edit"></i></div>
                        <p>30, Afaha Uqua road</p>
                        <p>Eket, Akwa Ibom State</p>
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

            </div>
        </div>

        <div class="verify-cart">

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
        grid-template-rows: 300px 100px 60px;
        grid-gap: 20px;
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
    .line-demarcator{
        background-color: rgb(194, 194, 194);
        height: 1px;
    }
    .cart-summary{
        display: grid;
        height: 300px;
        color: #114e9e;
        background-color: #fefefe;
        border-bottom: 1px solid rgb(207, 207, 207);
        box-shadow: 5px 5px 15px grey;
        margin-right: 40px;
        padding: 15px;
    }
    .verify-cart{
        display: grid;
        height: 90px;
        color: #114e9e;
        background-color: #fefefe;
        border-bottom: 1px solid rgb(207, 207, 207);
        box-shadow: 5px 5px 15px grey;
        margin: 0 40px 40px 40px;
        padding: 15px;
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


    @media (max-width: 767px) {
        
    }
</style>