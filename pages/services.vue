<template>
    <div class="services">
        <div class="title"><h2>Services</h2></div>
        <div class="services-list">
            <li class="services-links" :class="{'addColor': dryCleaning}"
                @click.prevent="toggleServices('dryCleaning')"
            >Dry Cleaning
            </li>
            <div class="yellow-demarcator"></div> 
            <li class="services-links" :class="{'addColor': washFold}"
                @click.prevent="toggleServices('washFold')"
            >Wash &amp; Fold
            </li>
            <div class="yellow-demarcator"></div>
            <li class="services-links" :class="{'addColor': handleCare}"
                @click.prevent="toggleServices('handleCare')"
            >Handled with extra love &amp; care
            </li>
            <div class="yellow-demarcator"></div>
            <li class="services-links" :class="{'addColor': recycle}"
                @click.prevent="toggleServices('recycle')"
            >Donate or recycle
            </li>
        </div>
        <div class="hr-demarcator"/>
        
        <div><DryCleaning v-if="dryCleaning"/></div>
        <div><WashFold v-if="washFold"/></div>
        <div><HandleCare v-if="handleCare"/></div>
        <div><Recycle v-if="recycle"/></div>

    </div>
</template>

<script>
    import DryCleaning from '~/components/guest/dryCleaning'
    import WashFold from '~/components/guest/washFold'
    import HandleCare from '~/components/guest/handleCare'
    import Recycle from '~/components/guest/recycle'

    export default {
        components:{
            DryCleaning, WashFold, HandleCare, Recycle
        },

        data() {
            return {
               dryCleaning: true,
               washFold: false,
               handleCare: false,
               recycle: false
            }
        },
        methods: {
             toggleServices(val) {
                if(val == 'dryCleaning') {
                    this.washFold =false
                    this.handleCare = false
                    this.recycle = false
                    return this.dryCleaning = true
                }
                if(val == 'washFold') {
                    this.handleCare =false
                    this.recycle =false
                    this.dryCleaning = false
                    return this.washFold= true
                }
                if(val == 'handleCare') {
                    this.recycle =false
                    this.dryCleaning =false
                    this.washFold = false
                    return this.handleCare = true
                }
                if(val == 'recycle') {
                    this.dryCleaning =false
                    this.washFold = false
                    this.handleCare = false
                    return this.recycle = true
                }
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
        margin-top: -14px;
    }
    .title{
        display: grid;
        justify-items: center;
        align-content: center;
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
    .addColor{
        color: #e7b83f;
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
        .yellow-demarcator{
            display: none;
        }
    }
    @media (max-width: 450px) {
        .services-list{
            font-size: 9px;
        }
    }
</style>