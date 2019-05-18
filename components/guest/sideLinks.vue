<template>
    <div class="side-links" :style="myStyle">
        <div :class="{'side-list': toggleSideLinks}">
            <!-- <div class="close-package">
                <a href="#" @click.prevent="$emit('cancelLinks')"><i class="fa fa-window-close"></i></a>
            </div> -->
            <nuxt-link to="/">Men</nuxt-link>
            <nuxt-link to="/">Women</nuxt-link>
            <nuxt-link to="/">Children</nuxt-link>
            <nuxt-link to="/">Ironing</nuxt-link>
            <nuxt-link to="/">Dry cleaning</nuxt-link>
        </div>
    </div>
</template>

<script>

    export default {
        
        components: {},

        data() {
            return {
                myStyle: {
                    backgroundColor: "#8f3366"
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
        width: 200px;
        height: 300px;
    }
    a{
        text-decoration: none;
        color: #fefefe;
    }
    .side-list{
        display: grid;
        grid-template-rows: 55px;
        margin-top: 10px;
        align-items: center;
    }
    .side-list a{
        padding: 16px;
    }
    .side-list a:hover,
    .side-list a:active{
        background-color: #dd88b7;
        border-right: 1px solid #8f6600;
    }
    .close-package{
        display: grid;
        justify-items: flex-end;
        align-content: center;
    }.close-package a{
        color: rgb(245, 100, 100);
    }
    .close-package a:hover{
        color: rgb(240, 59, 59);
        transition: 0.3s ease-in;
    }
    

    @media (max-width: 767px) {
       .side-links{
            width: 150px;
            height: 300px;
        }
    }
</style>