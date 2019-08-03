<template>
    <div class="page">
        <div class="intro">
            <h1 class="animate-txt">Save Time and Energy </h1>
            <h1 class="animate-txt">Looking good and clean always</h1>
            <button @click="$router.push('/register')">Sign up</button>
        </div>

        <!--<svg width="268" height="141" viewBox="0 0 68 141" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M46.5 57.4531H16.9219V81.6406H51.2812V89H7.92188V20.75H50.8125V28.1562H16.9219V50.0938H46.5V57.4531Z" fill="#E7C411"/>
            <path d="M49.2384 58.3004L16.9066 57.4208L17.1068 50.0642L58.4821 51.1898L56.6261 119.415L47.5826 119.169L49.2384 58.3004Z" fill="#1133E7"/>
        </svg>-->

        <HowItWorks/>
      
        <PackagesList/>

        <Usp/>

        <TopFaq/>
    </div>
</template>

<script>
    import HowItWorks from '~/components/guest/howItWorks'
    import PackagesList from '~/components/packages/packagesList'
    import Usp from '~/components/guest/usp'
    import TopFaq from '~/components/guest/topFaq'
    import { TimelineMax } from 'gsap'

    export default {
        components: { HowItWorks, PackagesList, Usp, TopFaq },

            methods: {
               animateTxt() {
                   let tl = new TimelineMax({repeat:6, repeatDelay:1, yoyo:true});
                   tl.staggerTo("h2", 0.2, {className:"+=superShadow", top:"-=10px", ease:Power1.easeIn}, "0.3", "start")
               }
            },
            mounted() {
                this.animateTxt()

                window.addEventListener('scroll', function() {
                    if (window.pageYOffset > 70) {
                        let el = document.querySelector('animate-txt')
                        console.log(el)
                    }
                })
            }
    }
</script>

<style>
@import '~/assets/css/animateText.css'
</style>

<style lang="scss" scoped>
    
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
        padding-left: 60px;
        display: grid;
        align-content: center;
        color: #fefefe;
        h1{
            font-weight: 300 !important;
        }
        button{
            width: 140px;
            height: 35px;
            margin-top: 60px;
            border: none;
            background-color: #f8f7f7;
            color: #0622be;
            font-weight: bold;
            outline: none;
            transition: .7s ease-out;
            cursor: pointer;
        }
        button:hover,
        button:active{
            background-color: #f58b13;
            color: #fefefe;
        }
    }


    @media (max-width: 767px) {
        .intro{
            height: 400px;
        }

    }

</style>
