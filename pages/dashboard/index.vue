<template>
    <div class="user-home">
        <div class="main-overview">
            <div class="overview"><h4>Overview</h4></div>
            <div class="balance">
                <div class="all-balance">
                    <h2>20</h2>
                    <h5>TOTAL ORDERS</h5>
                </div>
                <div class="all-balance">
                    <h2>N50,000.00</h2>
                    <h5>TOTAL SPENT</h5>
                </div>
                <div class="all-balance">
                    <h2>N5,000</h2>
                    <h5>REFERRAL BONUS</h5>
                </div>
            </div>
        </div>

        <div class="plans">
            <div class="basic-plans">
                <div class="plan-title"><h4>Basic Plans</h4></div>
                <div class="basic-inner">
                    <h2 style="color: #e7b83f">N15,000.00</h2>
                    <p style="color: #114e9e">You save 5%</p>
                    <p style="color: #114e9e">off orders</p>
                </div>
                <span class="chevron-right"><i class="fa fa-chevron-right"></i></span>
            </div>

            <div class="express-plans">
                <div class="plan-title"><h4>Express Plans</h4></div>
                <div class="express-inner">
                    <p style="color: #114e9e">You currently</p>
                    <p style="color: #114e9e">don't have any</p>
                    <p style="color: #114e9e">luxury plan</p>
                </div>
                <div class="express-create-btn"><button class="express-btn">Upgrade Plan</button></div>
            </div>

            <div class="luxury-plans">
                <div class="luxury-plan-title">
                    <h4>Luxury Plans</h4>
                    <div class="luxury-create-btn"><button class="luxury-btn">Upgrade Plan</button></div>
                </div>
                <div class="luxury-inner">
                    <img class="elegant-image" src="~assets/images/EL_logo_2.png" alt="Elegant Logo">
                    <div class="right-sect">
                        <h4>Set your <br> life free</h4>
                        <p>Commit to a plan <br> and save cost</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    layout: 'dashboard',
    middleware: ['check-auth'],
}
</script>

<style scoped>
    .user-home{
        display: grid;
        grid-template-columns: 1fr;
        background-color: #f0faff;
        min-height: 100vh;
        justify-content: center;
    }
    .main-overview{
        display: grid;
        grid-auto-rows: 50px 1fr;
        background-color: #fefefe;
        margin: 50px 80px;
        border-radius: 5px;
        box-shadow: 5px 5px 15px grey;
    }
    .overview{
        display: grid;
        align-items: center;
        border-bottom: 1px solid rgb(230, 224, 224);
        padding-left: 20px;
        color: #114e9e;
    }
    .balance{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        justify-items: center;
        height: 150px;
        grid-gap: 10px;
    }
    .all-balance{
        display: grid;
        justify-items: center;
        grid-gap: 10px;
    }
    .all-balance h2{
        color: #e7b83f;
    }
    .all-balance h5{
        color: #114e9e;
    }
    .plans{
        display: grid;
        grid-template: 200px / repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 20px;
        margin: 0 80px 70px 80px;
    }
    .basic-plans{
        display: grid;
        grid-template-rows: 40px 1fr 30px;
        background-color: #fefefe;
        border-radius: 5px;
        height: 200px;
        box-shadow: 5px 5px 15px grey;
    }
    .basic-inner{
        display: grid;
        grid-template-rows: 50px repeat(2, 30px);
        align-items: center;
        justify-items: center;
    }
    .plan-title{
        display: grid;
        align-items: center;
        color: #114e9e;
        padding-left: 20px;
        border-bottom: 1px solid rgb(230, 224, 224);
    }
    .express-plans{
        display: grid;
        grid-template-rows: 40px 80px 50px;
        grid-gap: 10px;
        background-color: #fefefe;
        border-radius: 5px;
        height: 200px;
        box-shadow: 5px 5px 15px grey;
    }
    .express-inner{
        display: grid;
        grid-template-rows: repeat(3, 23px);
        align-items: center;
        justify-items: center;
    }
    .express-create-btn{
        display: grid;
        align-items: center;
        justify-items: center;
    }
    .express-btn{
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
    }
    .express-btn:hover{
        background-color: #f58b13;
    }
    .luxury-plans{
        display: grid;
        grid-template-rows: 40px 1fr;
        grid-gap: 10px;
        background-color: #114e9e;
        border-radius: 5px;
        height: 200px;
        box-shadow: 5px 5px 15px grey;
    }
    .luxury-plan-title{
        display: grid;
        grid-template-columns: 50% 50%;
        align-items: center;
        color: #fefefe;
        padding-left: 20px;
        border-bottom: 1px solid rgb(230, 224, 224);
    }
    .luxury-inner{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        justify-items: center;
        color: #fefefe;
    }
    .luxury-create-btn{
        display: grid;
        align-items: center;
        justify-items: center;
    }
    .luxury-btn{
        height: 25px;
        width: 120px;
        padding: 5px;
        background-color: #e7b83f;
        color: #fefefe;
        font-size: 14px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: 0.6s ease-in;
    }
    .luxury-btn:hover{
        background-color: #f58b13;
    }
    .elegant-image{
        width: 60px;
    }
    .right-sect{
        display: grid;
        grid-gap: 10px;
    }
    .chevron-right{
        display: grid;
        justify-items: end;
        padding-right: 20px;
        color: rgb(207, 207, 207);
        cursor: pointer;
    }

@media (max-width: 480px) {
    
}

@media (max-width: 767px) {
    .main-overview{
        margin: 50px 80px 20px 80px;
    }
    .overview{
        padding-left: 20px;
    }
    .balance{
        font-size: 14px;
        grid-template-columns: 1fr;
        height: 200px;
    }
    .all-balance{
        grid-gap: 5px;
    }
    .plans{
        grid-template: 1fr / repeat(auto-fit, minmax(200, 1fr));
    }
    .luxury-btn{
        width: 100px;
        font-size: 12px;
    }
}
</style>


