<template>
    <div class="page">
        <div id="intro" class="intro">
            <h1 class="relief">Save Time and Energy </h1>
            <h1>Looking good and clean always</h1>
            <button @click="$router.push('/products')" class="request-btn">Request a Pick-up</button>
        </div>

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

    export default {
        components: { HowItWorks, PackagesList, Usp, TopFaq }
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

    @media (max-width: 767px) {
        .intro{
            height: 400px;
        }

    }

</style>
