<template>
    <div>
        <div class="packages">
            <div class="package" v-for="(item, i) in packages" :key="i">
                <div class="pack-item">
                    <h1 class="name">{{ item.name }}</h1>
                    <div  class="price">
                        <h1><sup>#</sup>{{ item.price }} <span class="month">per month</span> </h1>
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
                  

                      <button class="edit-button" @click.prevent="editPackage(i)">Edit</button>
                   
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
// import {db} from '../config/firebase'
import PackagesForm from '~/components/packages/packagesForm'

export default {
    components:{
        PackagesForm
    },
    data() {
        return {
            showForm: false,
            editDetail: ''
        }
    },

    methods: {
        editPackage(i) {
            this.showForm = true;
            this.editDetail = this.packages.find((item, index) => index == i)
        },
        subscribe() {
            this.$root.$emit("package", 2000);
            this.$router.push({ path: "/subscribe" });
        }
  
    },
    // firebase: {
    //     packages: db.ref('packages')
    // }
}
</script>

<style scoped>


@media (max-width: 767px) {
    .packages{
        position: relative;
        display: grid;
        grid-template-rows: 1fr;
        justify-content: center;
        justify-items: center;
        grid-gap: 20px;
        background-color: #f9f9f9;
        margin-bottom: 40px;
        }
    .package{
        position: relative;
        }
    }
@media (min-width: 768px) {
    .packages{
    position: relative;
    display: grid;
    grid-template: 1fr / repeat(3, 1fr);
    justify-content: center;
    justify-items: center;
    grid-gap: 20px;
    background-color: #f9f9f9;
}
.package{
    position: relative;
    }
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
    border-top: 10px solid green;
    display: grid;
    margin: 30px 0 30px 0;
    justify-content: center;
    justify-items: center;
    width: 300px;
    height: 500px;
    background-color: #fefefe;
}
.name{
    font-family: Courier;
    font-size: 40px;
    margin-top: 50px;
    color: rgb(75, 73, 73);
}
.price{
    margin-bottom: 0px;
    color: rgb(19, 87, 36);
    background-color: rgb(199, 189, 189);
    height: 60px;
    width: 100%;
    display: grid;
    justify-content: center;
    align-content: center
}
.month{
    font-size: 14px
}
.subscribe{
    width: 150px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #fff;
}
.subscribe:hover{
    background-color: #3d5afe;
    color: #fff;
    font-weight: bold
}


.edit-button:hover{
    background-color: #26a69a;
    color: #fff;
}
.edit-button{
    position: absolute;
    top: 50px;
    right: 12px;
    margin-bottom: 30px;
    width: 50px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #f9f9f9;
}


</style>
