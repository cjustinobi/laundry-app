<template>
    <div class="page">
        <div id="intro" class="intro">
            <h1 class="relief">Save Time and Energy </h1>
            <h1>Looking good and clean always</h1>
            <div class="intro-request">
                <nuxt-link to="/products"><button class="request-btn">Request a Pick-up</button></nuxt-link>
            </div>
        </div>

        <div class="the-how">
            <p>How it works</p>
            <div class="the-how-mark"></div>
        </div>
        <div>
            <HowItWorks/>
        </div>

        <div class="pricing">
            <p>Our Packages</p>
            <div class="price-highlight"></div>
        </div>
        <div>
            <PackagesList/>
        </div>
        <div class="divider"></div>

        <div class="why-us">
            <p>Why Us</p>
            <div class="why-us-highlight"></div>
        </div>
        <div><Usp/></div>

        <div class="faq">
            <p>Top 3 FAQ</p>
            <div class="faq-highlight"></div>
        </div>
        <div><TopFaq/></div>

    </div>
</template>

<script>
    import HowItWorks from '~/components/guest/howItWorks'
    import PackagesList from '~/components/packages/packagesList'
    import Usp from '~/components/guest/usp'
    import TopFaq from '~/components/guest/topFaq'

    export default {
        components: { HowItWorks, PackagesList, Usp, TopFaq}
    }
</script>

<style scoped>

    .page{
        margin-top: 35px;
        min-height: 100vh;
    }
    .intro{
        background-image: url('~assets/images/wash-machine.jpg');
        background-size: cover;
        background-position: center top;
        height: 700px;
        width: 100%;
        margin-top: -117px;
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
    .price-highlight{
        width: 180px;
        background-color: #f9a825;
        height: 2px;
        margin-top: 20px;
    }
    .divider{
        background-color: #f9a825;
        height: 2px;
        margin-top: 30px;
    }
    .why-us {
        display: grid;
        grid-template-rows: 1fr 1fr;
        justify-items: center;
        font-family: Courier;
        font-size: 40px;
        font-weight: bold;
        margin: 70px 0 20px 0;
        color: #728691;
    }
    .why-us-highlight{
        width: 100px;
        background-color: #f9a825;
        height: 2px;
        margin-top: 20px;
    }
    .faq{
        display: grid;
        grid-template-rows: 1fr 1fr;
        justify-items: center;
        font-family: Courier;
        font-size: 40px;
        font-weight: bold;
        margin: 70px 0 20px 0;
        color: #728691;
    }
    .faq-highlight{
        width: 140px;
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
        .the-how,
        .pricing,
        .why-us,
        .faq{
            font-size: 30px;
        }   
        .the-how-mark,
        .price-highlight,
        .why-us-highlight,
        .faq-highlight{
            width: 150px;
        }
    }

    @media(max-width: 480px) {
        

    }
</style>
