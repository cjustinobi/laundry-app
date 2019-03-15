<template>
    <div>
        <div class="packages">
            <!-- <div class="package"> -->
                <div class="pack-item">
                    <button 
                        :class="[{'edit-button': showEditButton}, {'hide-edit-button': !showEditButton}]" 
                        @click.prevent="editPackage()">
                        Edit
                    </button>
                    <div class="name">
                        <img src="~assets/images/EL_logo_2.png" class="elegant-image" alt="Elegant_Laundry_Picture"> 
                        <h1 class="">Economy</h1>
                    </div>
                    <div  class="price">
                        <h1><sup>#</sup>5000<span class="month">per month</span> </h1>
                    </div>
                    <div class="wash-menu">
                       <i class="fa fa-check"></i><li>Wash, Starch &amp; Iron 20 clothes</li>
                       <i class="fa fa-check"></i><li>Beddings</li>
                       <i class="fa fa-check"></i><li>Curtains</li>
                       <i class="fa fa-check"></i><li>Duvets</li>
                       <i class="fa fa-check"></i><li>1 suit/any fabric you wish to be dry cleaned</li>
                    </div>
                    <form method="get" id="sub-btn">
                        <button class="subscribe" @click.prevent="subscribe" type="submit">SUBSCRIBE</button>
                    </form>
                    
                </div>
                <div class="pack-item">
                    <button 
                        :class="[{'edit-button': showEditButton}, {'hide-edit-button': !showEditButton}]" 
                        @click.prevent="editPackage()">
                        Edit
                    </button>
                    <div class="name">
                        <img src="~assets/images/EL_logo_2.png" class="elegant-image" alt="Elegant_Laundry_Picture"> 
                        <h1 class="">Basic</h1>
                    </div>
                    <div  class="price">
                        <h1><sup>#</sup>10000<span class="month">per month</span> </h1>
                    </div>
                    <div class="wash-menu">
                       <i class="fa fa-check"></i><li>Wash, Starch &amp; Iron 20 clothes</li>
                       <i class="fa fa-check"></i><li>Beddings</li>
                       <i class="fa fa-check"></i><li>Curtains</li>
                       <i class="fa fa-check"></i><li>Duvets</li>
                       <i class="fa fa-check"></i><li>1 suit/any fabric you wish to be dry cleaned</li>
                    </div>
                    <form method="get" id="sub-btn">
                        <button class="subscribe" @click.prevent="subscribe" type="submit">SUBSCRIBE</button>
                    </form>
                    
                </div>
                <div class="pack-item">
                    <button 
                        :class="[{'edit-button': showEditButton}, {'hide-edit-button': !showEditButton}]" 
                        @click.prevent="editPackage()">
                        Edit
                    </button>
                    <div class="name">
                        <img src="~assets/images/EL_logo_2.png" class="elegant-image" alt="Elegant_Laundry_Picture"> 
                        <h1 class="">Premium</h1>
                    </div>
                    <div  class="price">
                        <h1><sup>#</sup>20000<span class="month">per month</span> </h1>
                    </div>
                    <div class="wash-menu">
                       <i class="fa fa-check"></i><li>Wash, Starch &amp; Iron 20 clothes</li>
                       <i class="fa fa-check"></i><li>Beddings</li>
                       <i class="fa fa-check"></i><li>Curtains</li>
                       <i class="fa fa-check"></i><li>Duvets</li>
                       <i class="fa fa-check"></i><li>1 suit/any fabric you wish to be dry cleaned</li>
                    </div>

                    <form method="get" id="sub-btn">
                        <button class="subscribe" @click.prevent="subscribe" type="submit">SUBSCRIBE</button>
                    </form>
                    
                </div>
                  

            <!-- </div> -->
        </div>

        <div :class="{'backdrop' : showForm}">
            <div :class="[{'show-form': showForm, 'hide-form': !showForm}]">
                <packages-form :editDetail="editDetail" @cancelForm="showForm = false"/>
            </div>
        </div>
    </div>
</template>

<script>
// import {db} from '../config/firebase'
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
    // firebase: {
    //     packages: db.ref('packages')
    // }
}
</script>

<style scoped>
    .packages{
        position: relative;
        display: grid;
        grid-template: 1fr / 1fr 1fr 1fr;
        justify-content: center;
        justify-items: center;
        grid-gap: 20px;
        background-color: #f9f9f9;
        margin-bottom: 40px;
    }

    .wash-menu{
        display: grid;
        grid-template: repeat(5, 1fr) / 30px 1fr;
        color: rgb(87, 72, 72);
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0 15px 0 15px;
        margin: 20px 0 30px 0;
    }
    .wash-menu li{
        list-style-type: none;
        height: 30px
    }
    .pack-item{
        border: 1px solid grey;
        border-radius: 10px;
        border-top: 7px solid indianred;
        display: grid;
        margin: 30px 0 30px 0;
        /* justify-content: center; */
        /* justify-items: center; */
        width: 300px;
        height: 500px;
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
        grid-template-columns: 60px 1fr;
        align-items: center;
        justify-items: center;
        font-family: Courier;
        /* font-size: 40px; */
        /* margin-top: 20px; */
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
        width: 190px;
        height: 40px;
        border-radius: 10px;
        border: 1px solid #fff;
        background-color: rgb(139, 139, 248);
        color: #fff;
        outline: none;
    }
    .subscribe:hover{
        background-color: #3d5afe;
        color: #fff;
        font-weight: bold
    }


    .edit-button:hover{
        background-color: rgb(248, 144, 118);
        color: #fff;
    }
    .edit-button{
        /* position: absolute;
        top: 50px;
        right: 72px;
        margin-bottom: 30px; */
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
