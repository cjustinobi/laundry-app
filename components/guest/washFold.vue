<template>
    <div class="services-container">
        <div class="services-wrapper">
            <div class="services-inner">
                <div class="services-img"><img src="~assets/images/EL_iron.jpg" alt=""></div>
                <div class="order-list">
                    <h2>Wash &amp; Fold</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit odio beatae blanditiis rem 
                        possimus porro accusamus aspernatur fugiat maiores, facere exercitationem quisquam ex! 
                        Mollitia totam aliquam suscipit veritatis sequi odit.
                    </p>
                    <div class="order-demarcate"/>
                </div>
            </div>
            <div class="services-inner">
                <div class="services-img"><img src="~assets/images/EL_iron.jpg" alt=""></div>
                <div class="order-list">
                    <h2>Wash &amp; Fold</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit odio beatae blanditiis rem 
                        possimus porro accusamus aspernatur fugiat maiores, facere exercitationem quisquam ex! 
                        Mollitia totam aliquam suscipit veritatis sequi odit.
                    </p>
                    <div class="order-demarcate"/>
                </div>
            </div>

            
        </div>
    </div>
</template>

<script>
    export default {


        data() {
            return {
               
            }
        },
        mounted() {
            document.body.style.background = "#f0faff";
        },
        destroyed() {
            document.body.style.background = "none";
        }
    }
</script>

<style scoped>
    .services-container{
        display: grid;
        grid-template-rows: 1fr;
        min-height: 100vh;
    }
    .services-wrapper{
        display: grid;
        grid-template-rows: 150px;
        grid-gap: 20px;
        margin-top: 20px;
    }
    .services-inner{
        display: grid;
        grid-template-columns: 90px 1fr;
        grid-gap: 20px;
        margin: 0 70px;
        color: #114e9e;
        max-height: 150px;
    }
    .services-img{
        background-size: contain;
        display: grid;
        align-items: center;
    }
    img{
        width: 90px;
        height: 90px;
        border-radius: 50%;
        border: 1px solid #fdc026;
    }
    .order-list{
        display: grid;
        grid-template-rows: 40px auto 1px;
        grid-gap: 8px;
    }
    .order-demarcate{
        display: grid;
        justify-items: center;
        background-color: #fdc026;
        margin: 0 auto;
        width: 30%;
    }
    
    @media (max-width: 767px) {
        .services-wrapper{
            grid-template-rows: auto;
            margin-bottom: 20px;
        }
        .services-inner{
            margin: 0;
            padding: 0 15px;
            max-height: 350px;
        }
        .order-list{
            grid-gap: 10px;
        }
        
    }
</style>
