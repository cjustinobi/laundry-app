<template>
    <div class="notifications" :style="myStyle">
        <div class="title"><h2>Notifications</h2></div>
        <div class="notifications-wrapper">
            <img src="~assets/images/EL_laundry.png" alt="">
            <div class="order-list">
                <h2>4 Shirts, 5 Trousers</h2>
                <p>Washing and Ironing of 4 Suits, and 5 Trousers</p>
                <div class="pickup-delivery">
                    <div class="pickup">
                        <div>
                            <h5 style="color: #e7b83f">Pick-up Address</h5>
                            <p>30, Afaha Uqua road, <br> Eket, Akwa Ibom State</p>
                        </div>
                        <div>
                            <h5>Delivery Address</h5>
                            <p>30, Afaha Uqua road, <br> Eket, Akwa Ibom State</p>
                        </div>
                    </div>
                    <div class="delivery">
                        <div>
                            <h5 style="color: #e7b83f">Due For Delivery</h5>
                            <p>Fri 29 Mar, 2019</p>
                        </div>
                        <div>
                            <h5>Delivery Status</h5>
                            <p style="color: #e7b83f">pending</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="notifications-wrapper">
            <img src="~assets/images/EL_laundry.png" alt="">
            <div class="order-list">
                <h2>4 Shirts, 5 Trousers</h2>
                <p>Washing and Ironing of 4 Suits, and 5 Trousers</p>
                <div class="pickup-delivery">
                    <div class="pickup">
                        <div>
                            <h5 style="color: #e7b83f">Pick-up Address</h5>
                            <p>30, Afaha Uqua road, <br> Eket, Akwa Ibom State</p>
                        </div>
                        <div>
                            <h5>Delivery Address</h5>
                            <p>30, Afaha Uqua road, <br> Eket, Akwa Ibom State</p>
                        </div>
                    </div>
                    <div class="delivery">
                        <div>
                            <h5 style="color: #e7b83f">Due For Delivery</h5>
                            <p>Fri 29 Mar, 2019</p>
                        </div>
                        <div>
                            <h5>Delivery Status</h5>
                            <p style="color: #e7b83f">pending</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="notifications-wrapper">
            <img src="~assets/images/EL_laundry.png" alt="">
            <div class="order-list">
                <h2>4 Shirts, 5 Trousers</h2>
                <p>Washing and Ironing of 4 Suits, and 5 Trousers</p>
                <div class="pickup-delivery">
                    <div class="pickup">
                        <div>
                            <h5 style="color: #e7b83f">Pick-up Address</h5>
                            <p>30, Afaha Uqua road, <br> Eket, Akwa Ibom State</p>
                        </div>
                        <div>
                            <h5>Delivery Address</h5>
                            <p>30, Afaha Uqua road, <br> Eket, Akwa Ibom State</p>
                        </div>
                    </div>
                    <div class="delivery">
                        <div>
                            <h5 style="color: #e7b83f">Due For Delivery</h5>
                            <p>Fri 29 Mar, 2019</p>
                        </div>
                        <div>
                            <h5>Delivery Status</h5>
                            <p style="color: #e7b83f">pending</p>
                        </div>
                    </div>
                </div>
            </div>
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
        mounted() {
            // document.body.style.background = "#e1f5fe";
        },
        destroyed() {
            document.body.style.background = "none";
        }
    }
</script>

<style scoped>
    .notifications{
        display: grid;
        grid-template-rows: 90px repeat(3, 350px);
        min-height: 100vh;
        grid-gap: 20px;
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
    .notifications-wrapper{
        display: grid;
        grid-template-columns: 90px 1fr;
        grid-gap: 20px;
        background-color: #fefefe;
        margin: 40px;
        color: #114e9e;
        box-shadow: 5px 5px 15px grey;
        padding: 15px;
    }
    .notifications-wrapper img{
        width: 80px;
    }
    .order-list{
        display: grid;
        grid-template-rows: 30px 30px 175px;
        grid-gap: 10px;
    }
    .pickup{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .delivery{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    /* @media (min-width: 1038px) { 
        .order-list{
            grid-template-rows: 30px 30px 175px;
            grid-template-rows: repeat(auto-fit, minmax(300px, 1fr));
        }
    } */
    @media (max-width: 767px) {
        .notifications{
            grid-template-rows: 90px repeat(3, 400px);
            grid-gap: 20px;
        }
        .order-list{
            display: grid;
            grid-template-rows: 30px 40px 175px;
            grid-gap: 15px;
        }
        .pickup-delivery{
            display: grid;
            grid-template-rows: 1fr 1fr;
            grid-gap: 20px;
        }
    }
    @media (min-width: 768px) {
        .pickup-delivery{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 50px;
        }
    }
</style>