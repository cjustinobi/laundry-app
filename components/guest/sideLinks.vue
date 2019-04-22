<template>
    <div class="side-links" :style="myStyle">
        <div :class="{'side-list': toggleSideLinks}">
            <nuxt-link to="/">Men</nuxt-link>
            <nuxt-link to="/">Women</nuxt-link>
            <nuxt-link to="/">Children</nuxt-link>
            <nuxt-link to="/">Babies</nuxt-link>
        </div>
    </div>
</template>

<script>

    export default {
        
        components: {},

        data() {
            return {
                myStyle: {
                    backgroundColor: "#d2eaf7"
                },
                toggleSideLinks: true
            }
        },
        mounted() {
            // document.body.style.background = "#e1f5fe";
        },
        destroyed() {
            document.body.style.background = "none";
        }
    }
</script>

<style scoped>
    .side-links{
        display: grid;
        /* grid-template-rows: 1fr; */
        width: 200px;
        height: 250px;
    }
    a{
        text-decoration: none;
        color: #114e9e;
    }
    .side-list{
        display: grid;
        grid-template-rows: 50px;
        margin-top: 30px;
        align-items: center;
    }
    .side-list a{
        padding: 14px 10px;
    }
    .side-list a:hover,
    .side-list a:active{
        background-color: #fcd982;
        border-right: 1px solid #8f6600;
    }
    

    @media (max-width: 767px) {
       
    }
</style>