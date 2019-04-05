<template>
    <div class="page">
        <div id="intro" class="intro">
            <h1 class="relief">Save Time and Energy </h1>
            <h1>Looking good and clean always</h1>
            <div class="intro-request">
                <nuxt-link to="/usernotification"><button class="request-btn">Request a Pick-up</button></nuxt-link>
            </div>
        </div>

        <div class="the-how">
              <p>How it works</p>
              <div class="the-how-mark"></div>
        </div>
        <div>
            <howItWorks></howItWorks>
        </div>

        <div class="pricing">
              <p>Our Packages</p>
              <div class="price-header"></div>
        </div>
        <div>
            <packages-list/>
        </div>

    </div>
</template>

<script>

    import HowItWorks from '~/components/guest/howItWorks'
    import PackagesList from '~/components/packages/packagesList'
    

    export default {
        components: {
            HowItWorks,
            PackagesList        }
    }
</script>

<style scoped>

    .page{
        /* position: relative; */
        margin-top: 35px;
    }
    .intro{
        background-image: url('~assets/images/wash-machine.jpg');
        background-size: cover;
        background-position: center top;
        height: 600px;
        width: 100%;
        margin-top: -47px;
        display: grid;
        align-content: center;
        color: #fefefe;
        font-weight: 700;
        text-align: center;
    }
    .intro-request{
        display: grid;
        height: 50px;
        align-content: center;
        color: #fefefe;
        font-weight: 700;
        margin-top: 140px;
    }
    .request-btn{
        width: 220px;
        height: 60px;
        border: 1px solid #fefefe;
        border-radius: 5px;
        background-color: #f8f7f7;
        font-size: 20px;
        color: #0622be;
        font-weight: bold;
        outline: none;
    }
    .request-btn:hover,
    .request-btn:active{
        background-color: #f58b13;
        transition: .7s ease-out;
        color: #fefefe;
    }
    .the-how{
        display: grid;
        grid-template-rows: 1fr 1fr;
        justify-items: center;
        font-family: Courier;
        font-size: 40px;
        font-weight: bold;
        margin: 70px 0 20px 0;
        color: #728691;
    }
    .the-how-mark{
        width: 200px;
        background-color: #f9a825;
        height: 2px;
        margin-top: 20px;
    }
    .pricing {
        display: grid;
        grid-template-rows: 1fr 1fr;
        justify-items: center;
        font-family: Courier;
        font-size: 40px;
        font-weight: bold;
        margin: 70px 0 20px 0;
        color: #728691;
    }
    .price-header{
        width: 180px;
        background-color: #f9a825;
        height: 2px;
        margin-top: 20px;
    }

    @media (max-width: 767px) {
        .intro{
            height: 400px;
        }
        .intro-request{
            display: none;
        }
    }

    @media(max-width: 480px) {
        

    }
</style>
