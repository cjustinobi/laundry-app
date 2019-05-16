<template>
    <div class="services">
        <div class="title"><h2>Services</h2></div>
        <div class="services-list">
            <li class="services-links">Dry Cleaning</li>
            <div class="yellow-demarcator"></div> 
            <li class="services-links">Wash &amp; Fold</li>
            <div class="yellow-demarcator"></div>
            <li class="services-links">Handled with extra love &amp; care</li>
            <div class="yellow-demarcator"></div>
            <li class="services-links">Donate or recycle</li>
        </div>
        <div class="hr-demarcator"/>
        
        <div><dryCleaning/></div>

    </div>
</template>

<script>
    import DryCleaning from '~/components/guest/dryCleaning'

    export default {
        components:{
            DryCleaning
        },

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
    .services{
        display: grid;
        grid-template-rows: 70px 70px 1px 1fr;
        min-height: 100vh;
        /* grid-gap: 10px; */
        margin-top: -14px;
    }
    .title{
        display: grid;
        justify-items: center;
        align-content: center;
        /* height: 80px; */
        color: #114e9e;
        background-color: #fefefe;
        
    }
    .services-list{
        display: grid;
        grid-template-columns: auto 90px auto 90px auto 90px auto; 
        align-items: center; 
        padding: 0px;
        list-style: none;
        grid-gap: 5px;
        padding: 0 20px;
        justify-items: center;
        color: #114e9e;
    }
    a{
        text-decoration: none;
        color: #8a8989;
    }
    .services-links{
        cursor: pointer;
    }
    .yellow-demarcator{
        height: 12px;
        background-color: #a87e12;
        width: 1px;
    }
    .hr-demarcator{
        width: 90%;
        display: grid;
        justify-items: center;
        background-color: #fdc026;
        margin: 0 auto;
    }

    @media (max-width: 878px) {
        .services-list{
            font-size: 13px;
        }
    }
    @media (max-width: 767px) {
        .services{
            grid-template-rows: 80px 60px 1px 1fr;
        }
        .services-list{
            grid-template-columns: repeat(4, auto);
            font-size: 12px;
            grid-gap: 8px;
            padding: 0 10px;    
        }
    }
    @media (max-width: 450px) {
        .services-list{
            font-size: 9px;
        }
    }
</style>