<template>
    <div class="page">
        <div class="intro">
            <h1>Save Time and Energy </h1>
            <h1>Looking good and clean always</h1>
            <button @click="$router.push('/register')">Sign up</button>
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
