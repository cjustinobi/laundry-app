<template>
    <div class="page">
        <div class="intro">
            <div class="intro-inner">
                <h1 class="relief">We Deliver Anywhere. Stain Free Service</h1>
                <!-- <p class="mission">We are here to serve the water needs of the African Continent
                </p> -->
            </div>
        </div>
        <!-- <video class="video" src="~/assets/video/dw.mp4" autoplay muted loop></video> -->
        <img src="~assets/images/wash-machine.jpg" class="img-show" alt="Washing Machine">


        <div class="feat">
            <div class="water w1">
                <img src="~/assets/images/feature_api.png" alt="water relief">
                <div>
                    <h2 class="water-sub">Clean Water</h2>
                    <p class="water-body">
                        Providing water needs for humanity around
                        the world and especially in Africa by leveraging
                        on the latest water puryfying technology.
                    </p>
                </div>
            </div>
            <div class="water w2">
                <img src="~/assets/images/clean.png" alt="water relief">
                <div>
                    <h2 class="water-sub">Decent Environment</h2>
                    <p class="water-body">
                        Providing water needs for humanity around
                        the world and especially in Africa by leveraging
                        on the latest water puryfying technology.
                    </p>
                </div>
            </div>
        </div>

        <div class="catchy">
            <div>
                <h2 class="aoc">Agent of Change</h2>
                <p class="aocp"> 50% of the 1.45 billion people living in  Africa are
                    threatened by a lack of clean, fresh water or the inability to find enough
                    water to sustain normal life.
                </p>
                <donate></donate>
            </div>
        </div>

        <div class="africa">
            <div class="change">
                <h4>Changing lives across Africa</h4>
                <p>We hope to reach millions in Africa with clean water.
                    Directly installing taps and toilets is vital, but we do much more. To make lasting change
                    happen on a massive scale, we work together with local communities, governments and service providers.
                </p>
            </div>
            <img src="~/assets/images/clean.png" alt="water relief">
        </div>

    </div>
</template>

<script>

    import Donate from '~/components/donate'

    export default {
        components: {
            Donate
        }
    }
</script>

<style scoped>

    .page{
        position: relative;
    }
    .relief{
        margin-bottom: 24px;
    }
    .video{
        position: relative;
        width: 100%;
        height: 100%;
        padding: 0;
    }
    .img-show
    {
        background-size: cover;
        background-position: center top;
        height: 600px;
        width: 100%;
        position: relative;
    }
    .intro {
        position: absolute;
        display: block;
        left: 340px;
        top: 400px;
        border-radius: 10px;
        line-height: 1.5;
        z-index: 1000;
        width: 700px;
        height: 200px;
        /* margin-left: 40px; */
        /* background-color: rgba(84, 53, 117, 0.42); */
    }
    .intro-inner{
        display: grid;
        height: 200px;
        align-content: center;
        justify-items: left;
        color: #fefefe;
        padding: 0 28px;
        font-weight: 700;
    }
    .feat{
        height: 500px;
        display: grid;
        grid-template: 250px / repeat(2, 40%);
        justify-content: space-around;
        align-content: space-around;
    }
    .w1{
        transition: 1s ease-in;
        border-top: 5px solid #FB2247 !important;
    }
    .w2{
        transition: 1s ease-in;
        border-top: 5px solid #220052 !important;
    }
    .w1:hover{
        border-top: 5px solid #fb9e36 !important;
    }
    .w2:hover{
        border-top: 5px solid #1d520a !important;
    }
    .water{
        border: 1px solid #f2f2f2;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        padding: 50px 20px;
        display: grid;
        grid-template: auto auto / 1fr 1fr 1fr;
        grid-gap: 24px;
        grid-template-areas:
            "pix text text"
            " . text text";
    }
    .water img{
        grid-area: pix;
    }
    .water div{
        grid-area: text;
    }
    .water-sub{
        color: #777;
        margin-bottom: 24px;
    }
    .catchy{
        display: grid;
        justify-items: center;
        padding: 48px 10px;
        background: #f7f7f7;
        font-weight: 400;
    }
    .catchy div{
        width: 50%;
    }
    .aoc{
        margin-bottom: 20px;
        color: #777;
    }
    .aocp{
        margin-bottom: 20px;
    }

    .africa{
        background: #220052;
        display: grid;
        grid-gap: 24px;
        padding: 48px;
        grid-template: 200px / 1fr 1fr;
        font-weight: 400;
        font-size: 20px;
        color: #898989;
    }
    .africa img{
        width: 240px;
    }
    .change h4{
        margin-bottom: 20px;
    }
    @media (max-width: 1044px) {
        .feat{
            height: auto;
            margin: 24px 0;
            grid-template: auto / 90%;
        }

    }

    @media (max-width: 767px) {
        .africa{
            grid-template: auto / 1fr;
        }
        .africa img{
            max-width: 200px;
        }
        .intro{
            display: none;
        }
    }

    @media(max-width: 480px) {

        .water{
            margin-bottom: 24px;
            grid-template-areas:
                "pix . . "
                " text text text";
        }
        .catchy div{
            width: 90%;
        }

    }
</style>
