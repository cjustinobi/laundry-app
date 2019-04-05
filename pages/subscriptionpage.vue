<template>
    <div class="edit-subpage" :style="myStyle">
        <div class="title"><h2>Subscriptions</h2></div>
        <div class="edit-wrapper">
            <div class="sub-heading">
                <p>#</p>
                <p>Subscription Plan</p>
                <p>Price</p>
                <p>Duration/Month</p>
                <p>Total</p>
            </div>
            <div class="table-data">
                <p>1</p>
                <p>Starter</p>
                <p># 15,000/Month</p>
                <p><i class="fa fa-plus-square"></i> 1 <i class="fa fa-minus-square"></i></p>
                <p>#15,000</p>
            </div>

            <div class="payment-total">
                <div class="payment-method">
                    <h4>Payment Method</h4>
                    <div class="payment-sect">
                        <div><input type="checkbox" name="" id=""> Card Payment</div>
                        <div><input type="checkbox" name="" id=""> Bank Transfer</div>
                    </div>
                    <p>Support only Naira cards</p>
                </div>

                <!-- <p style="background-color: blue; margin-top: 30px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo omnis ratione asperiores, obcaecati iusto deserunt enim? In veniam, repudiandae ducimus, dolore eos tenetur harum perferendis nihil eaque pariatur aperiam. Magnam.</p> -->

                <div class="plan-total">
                    <h4>Plan Total</h4>
                    <div class="apply">
                        <input type="text" placeholder="coupon code">
                        <button class="apply-btn">Apply</button>
                    </div>
                    <div class="plan-inner">
                        <p>Total Due</p>
                        <p>#15,000</p>
                        <p>Plan Expiry</p>
                        <p>Thur, May 12, 2019</p>
                        <div>
                            <img src="~assets/images/mastercard.png" alt="Master Card">
                            <img src="~assets/images/visa.png" alt="Visa Card">
                            <img src="~assets/images/verve.jpg" alt="Verve Card">
                        </div>
                    </div>
                    <button class="confirm-order">Confirm Order</button>
                </div>
            </div>
        </div>

        <div class="other-subscription">
          <h4>Other Subscription Plans</h4>
        </div>

        <div><package-list></package-list></div>
    </div>
</template>

<script>
    import PackageList from '~/components/packages/packagesList'

    export default {
        
        layout: 'dashboard',

        components: {
            PackageList
        },

        data() {
            return {
                myStyle: {
                    backgroundColor: "#f0faff"
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
    .edit-subpage{
        display: grid;
        grid-template-rows: 80px 1fr 80px 1fr;
        min-height: 100vh;
    }
    .title{
        display: grid;
        justify-items: center;
        align-content: center;
        height: 80px;
        color: #114e9e;
        background-color: #f0faff;
        border-bottom: 1px solid rgb(207, 207, 207);
    }
    a{
        text-decoration: none;
    }
    .edit-wrapper{
        display: grid;
        grid-template-rows: 40px 50px 1fr; 
        background-color: #fefefe;
        margin: 40px;
        color: #114e9e;
        box-shadow: 5px 5px 15px grey;
    }
    .sub-heading{
        display: grid;
        grid-template-columns: 60px repeat(4, auto);
        height: 40px;
        align-items: center;
        justify-items: center;
        background-color: rgb(241, 241, 241);
        color: #114e9e;
    }
    .table-data{
        display: grid;
        grid-template-columns: 60px repeat(4, auto);
        align-items: center;
        justify-items: center;
        color: #114e9e;
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
    .payment-method{
        display: grid;
        grid-template-rows: repeat(2, 30px) 50px;
        align-items: center;
        height: 130px;
        background-color: rgb(241, 241, 241);
        padding: 15px;
    }
    .plan-total{
        display: grid;
        grid-template-rows: repeat(2, 40px) 160px 70px ;
        align-items: center;
        background-color: rgb(241, 241, 241);
        padding: 20px;
        
    }
    .payment-sect{
        display: grid;
        grid-template-columns: 180px 180px;
    }
    .apply{
        display: grid;
        grid-template-columns: 300px 80px;
    }
    .plan-total input{
        width: 300px;
        height: 30px;
        padding: 10px;
        border: 1px solid #d4d4d4;
        outline: none;
    }
    .apply-btn{
        display: grid;
        align-items: center;
        height: 30px;
        width: 80px;
        background-color: #01355f;
        color: #fefefe;
        font-size: 17px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: 0.8s ease-in;
    }
    .apply-btn:hover{
        background-color: #020f1a;
    }
    .plan-inner{
        display: grid;
        grid-template: repeat(3, 40px) / 1fr 1fr;
    }
    img{
        width: 40px;
    }
    .confirm-order{
        height: 60px;
        width: 250px;
        padding: 10px;
        background-color: #e7b83f;
        color: #fefefe;
        font-size: 20px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: 0.6s ease-in;
    }
    .confirm-order:hover{
        background-color: #f58b13;
    }
    .other-subscription{
        display: grid;
        height: 40px;
        align-items: center;
        background-color: rgb(241, 241, 241);
        color: #114e9e;
        margin: 20px 40px 0 40px;
        padding-left: 20PX;
    }

    @media (max-width: 767px) {
        .edit-list{
            font-size: 15px;
        }
        .update-button{
            width: 200px;
            font-size: 14px;
        }
        .title{
            height: 80px;
        }
        .edit-wrapper{
            /* margin: 40px; */
            /* height: 700px; */
        }
        .payment-total{
            grid-template-rows: 130px 1fr;
            grid-gap: 20px;
            margin: 20px;
            justify-content: center;
            align-content: center;
        }
        .payment-method{
            padding: 10px;
        }
        .plan-total{
            grid-template-rows: repeat(2, 40px) 160px 6 0px ;
            padding: 10px;
            margin-top: 30px;
        }
        .apply{
            display: grid;
            grid-template-columns: 180px 80px;
        }
        .plan-total input{
            width: 180px;
            height: 30px;
            padding: 10px;
            border: 1px solid #d4d4d4;
            outline: none;
        }
        .apply-btn{
            height: 28px;
            width: 70px;
            font-size: 14px;
        }
        .confirm-order{
            width: 210px;
            height: 40px;
        }
    }

    @media (min-width: 1038px) { 
        .payment-total{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            justify-content: center;
            grid-gap: 20px;
            align-content: center;
            margin: 20px;
        }
    }

    @media (min-width: 768px) { 
        .payment-total{
            display: grid;
            grid-template-columns: 1fr 1fr;
            justify-content: center;
            grid-gap: 20px;
            align-content: center;
            margin: 20px;
        }
    }
</style>