<template>
    <div class="user-home">
        <div class="main-overview">
            <div class="overview"><h4>Overview</h4></div>
            <div class="balance">
                <div class="all-balance">
                    <h2>#25,967.96</h2>
                    <h5>CURRENT BALANCE</h5>
                </div>
                <div class="all-balance">
                    <h2>#25,967.96</h2>
                    <h5>CURRENT BALANCE</h5>
                </div>
                <div class="all-balance">
                    <h2>#25,967.96</h2>
                    <h5>CURRENT BALANCE</h5>
                </div>
            </div>
        </div>

        <div class="plans">
            <div class="all-plans">
                <h4>Periodic Plans</h4>

                <div class="interest">
                    <h1>10<span style="font-size: 16px; color: rgb(120, 120, 243)">%</span></h1>
                    <div>
                        <h6 style="color: #9fa8da">INTEREST RATE</h6>
                        <h6 style="color: #283593"># 25,463.67</h6>
                    </div>
                </div>
                <h4>Captain</h4>
                <span class="chevron-right"><i class="fa fa-chevron-right"></i></span>
            </div>

            <div class="all-plans">
                <h4>Periodic Plans</h4>

                <div class="interest">
                    <h1>10<span style="font-size: 16px; color: rgb(120, 120, 243)">%</span></h1>
                    <div>
                        <h6 style="color: #9fa8da">INTEREST RATE</h6>
                        <h6 style="color: #283593"># 25,463.67</h6>
                    </div>
                </div>
                <h4>Captain</h4>
                <span class="chevron-right"><i class="fa fa-chevron-right"></i></span>
            </div>

            <div class="all-plans">
                <h4>Periodic Plans</h4>

                <div class="interest">
                    <h1>10<span style="font-size: 16px; color: rgb(120, 120, 243)">%</span></h1>
                    <div>
                        <h6 style="color: #9fa8da">INTEREST RATE</h6>
                        <h6 style="color: #283593"># 25,463.67</h6>
                    </div>
                </div>
                <h4>Captain</h4>
                <span class="chevron-right"><i class="fa fa-chevron-right"></i></span>
            </div>
        </div>

    </div>
</template>

<script>



export default {
    layout: 'dashboard',
}
</script>

<style scoped>
    .user-home{
        display: grid;
        grid-template-columns: 1fr;
        background-color: rgb(233, 233, 233);
        min-height: 100vh;
    }
    .main-overview{
        display: grid;
        grid-auto-rows: 50px 1fr;
        background-color: #fefefe;
        margin: 70px 80px;
        border-radius: 5px;
    }
    .overview{
        border-bottom: 1px solid rgb(230, 224, 224);
        padding: 10px 0 0 100px;
        color: rgb(100, 100, 100);
    }
    .balance{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        justify-items: center;
        height: 150px;
    }
    .all-balance h2{
        color: #2979ff;
    }
    .all-balance h5{
        color: rgb(154, 154, 196);
    }
    .all-balance{
        /* border-right: 1px solid rgb(230, 224, 224); */
        /* padding-right: 10px; */
        
    }
    .plans{
        display: grid;
        grid-template: 1fr / repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 20px;
        margin: 70px 80px;
        
    }
    .all-plans{
        background-color: #fefefe;
        border-radius: 5px;
        height: 150px;
        
    }
    .all-plans h4{
        color: rgb(100, 100, 100);
        padding: 5px 0 0 80px;
    }
    .all-plans h1{
        color: #2979ff;
        font-size: 50px;
    }
    .interest{
        display: grid;
        grid-template-columns: 80px 100px;
        align-items: center;
        justify-content: center;
    }
    .chevron-right{
        display: grid;
        justify-items: end;
        padding-right: 20px;
        color: rgb(119, 119, 119);
        cursor: pointer;
    }

@media (max-width: 480px) {
    .balance{
        grid-template-columns: 1fr;
        height: 200px;
    }
}

@media (max-width: 767px) {
    .balance{
       font-size: 14px;
    }
    .overview{
        padding: 10px 0 0 70px;
    }
}
</style>


