<template>
    <div>
        <div class="packages">
            <div class="pack-item" v-for="(plan, i) in plans" :key="i">
                <button v-if="isAdmin" class="edit-button" @click.prevent="editPackage()">Edit</button>
                <h1 class="name">{{ plan.name }}</h1>
                <div  class="price">
                    <h1><sup>#</sup>{{ plan.price }}<span class="month">per month</span> </h1>
                </div>
                <div class="wash-menu">
                   <i class="fa fa-check"></i><li>Wash, Starch &amp; Iron 20 clothes</li>
                   <i class="fa fa-check"></i><li>Beddings</li>
                   <i class="fa fa-check"></i><li>Curtains</li>
                   <i class="fa fa-check"></i><li>Duvets</li>
                   <i class="fa fa-check"></i><li>1 suit/any fabric you wish to be dry cleaned</li>
                </div>
                <form method="get" id="sub-button">
                    <button class="subscribe" @click.prevent="subscribe" type="submit">SUBSCRIBE</button>
                </form>
            </div>
        </div>

        <div :class="{'backdrop' : showForm}">
            <div :class="[{'show-form': showForm, 'hide-form': !showForm}]">
                <packages-form :editDetail="editDetail" @cancelForm="showForm = false"/>
            </div>
        </div>
    </div>
</template>

<script>

import PackagesForm from '~/components/packages/packagesForm'

export default {
    components:{
        PackagesForm
    },
    data() {
        return {
            showForm: false,
            editDetail: '',
            editButton: false
        }
    },

    methods: {
        // editPackage(i) {
        //     this.showForm = true;
        //     this.editDetail = this.packages.find((item, index) => index == i)
        // },
        subscribe() {
            this.$root.$emit("package", 2000);
            this.$router.push({ path: "/volunteer" });
        }
    },

    mounted() {
        this.$store.dispatch('plans/getPlans')
    },

    computed: {
        plans() {
            return this.$store.getters['plans/allPlans']
        }
    }

}
</script>

<style scoped>
    .packages{
        position: relative;
        display: grid;
        grid-template: 1fr / repeat(auto-fit, minmax(300px, 1fr));
        justify-content: center;
        justify-items: center;
        grid-gap: 20px;
        background-color: #f9f9f9;
        margin-bottom: 40px;
    }

    .wash-menu{
        display: grid;
        grid-template: repeat(5, 1fr) / 20px 1fr;
        color: #728691;
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0 15px;
    }
    .wash-menu li{
        list-style-type: none;
        height: 30px
    }
    .pack-item{
        border: 1px solid #b2d2e4;
        border-radius: 10px;
        border-top: 7px solid indianred;
        display: grid;
        margin: 30px 0;
        min-height: 500px;
        background-color: #fefefe;
    }
    .pack-item:hover
    {
        border-top: 7px solid #fb9e36;
    }
    .packages .pack-item:nth-child(even)
    {
        border-top: 7px solid rgb(184, 76, 175);
    }
    .packages .pack-item:nth-child(even):hover
    {
        border-top: 7px solid rgb(214, 78, 45);
    }
    .elegant-image{
        width: 40px;
        padding-top: 6px;
    }
    .name{
        display: grid;
        grid-template-columns: 60px 250px;
        align-items: center;
        justify-items: center;
        font-family: Courier;
        font-size: 22px;
        color: #728691;
    }
    .price{
        margin-bottom: 0px;
        color: rgb(255, 255, 255);
        background-color: #2f5163;
        height: 60px;
        width: 100%;
        display: grid;
        justify-content: center;
        align-content: center;
    }
    .month{
        font-size: 14px;
        color: #b0b9c5;
    }
    #sub-btn{
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        justify-self: center;
    }
    .subscribe{
        width: 300px;
        height: 60px;
        border-radius: 10px;
        border: 1px solid #fff;
        background-color: #e7b83f;
        color: #fff;
        outline: none;
        font-weight: bold;
        font-size: 20px;
    }
    .subscribe:hover,
    .subscribe:active{
        color: #fff;
        font-weight: bold;
        background-color: #f58b13;
        transition: .7s ease-out;
    }


    .edit-button:hover{
        background-color: rgb(248, 144, 118);
        color: #fff;
    }
    .edit-button{
        width: 50px;
        height: 30px;
        border-radius: 5px;
        border: 1px solid #f9f9f9;
        justify-self: flex-end;
        margin: 10px;
        background-color: rgb(250, 182, 165);
        color: #fff;
    }
    .hide-edit-button{
        display: none;
    }

    @media (max-width: 767px) {
    .packages{
        grid-template-columns: 1fr;        
        }
    }

</style>
