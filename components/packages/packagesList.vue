<template>
    <div class="packages-contain">
        <div class="packages">
            <div class="pack-item" v-for="(plan, i) in plans" :key="i">
                <actions
                        v-if="user !== undefined && user.user_type == 3"
                    	:class="[{'ellipsis-product': productList}, {'ellipsis-package': !productList}]"
                        @editItem="editItem"
                        @removeItem="removeItem"
                        :itemId="plan.id"
                        :api="api">
                </actions>
                <div class="name">
                    <img class="elegant-image" src="~assets/images/EL_logo_3.png" alt="Elegant Laundry">
                    <h1>{{ plan.name }}</h1>
                </div>
                <div  class="price">
                    <h1><sup>#</sup>{{ plan.price }}<span class="month">per month</span> </h1>
                </div>
                <div class="wash-menu" v-for="(benefit, i) in plan.benefits" :key="i">
                       <i class="fa fa-check"></i>
                       <li>{{ benefit.name }}</li>
                </div>
                <form v-if="user !== undefined && user.user_type !== 3" method="get" id="sub-btn">
                    <button class="subscribe" @click.prevent="subscribe" type="submit">SUBSCRIBE</button>
                </form>
            </div>
    </div>
        <div :class="{'backdrop' : showForm}">
            <div :class="[{'show-form': showForm, 'hide-form': !showForm}]">
                <editor :editDetail="editDetail" @cancelForm="showForm = false"></editor>
            </div>
        </div>
    </div>
</template>

<script>
    import Actions from '~/components/shared/actions'
    import Editor from '~/components/packages/editor'

    export default {
        components:{
            Editor, Actions
        },
        data() {
            return {
                showForm: false,
                editDetail: '',
                showEditButton: false,
                api: 'plans/',
                productList: false
            }
        },

        methods: {
            hideButton(){
                this.showEditButton = false
            },
            removeItem(i) {
                this.$store.dispatch('plans/removeItem', i)
            },
             editItem(i) {
                 this.showForm = true;
                 this.editDetail = this.plans.find(plan => plan.id === i)
             },
            subscribe() {
                this.$root.$emit("package", 2000);
                this.$router.push({ path: "/volunteer" });
            }
        },


        mounted() {
            this.$store.dispatch('plans/getPlans')
            this.hideButton()
        },

        computed: {
            plans() {
                return this.$store.getters['plans/allPlans']
            }
        }
    }
</script>

<style scoped>
    .packages-contain{
        display: grid;
    }
    .packages{
        position: relative;
        top: 0;
        display: grid;
        grid-template: auto / repeat(auto-fit, minmax(250px, 350px));
        justify-content: center;
        justify-items: center;
        grid-gap: 40px;
        background-color: #f9f9f9;
        margin-bottom: 40px;
    }
    .pack-item{
        position: relative;
        border: 1px solid #b2d2e4;
        border-radius: 10px;
        display: grid;
        margin-top: 30px;
        min-height: 500px;
        background-color: #fefefe;
        transition: 0.7s ease-in;
        grid-gap: 10px;
        padding-bottom: 15px;
        grid-template-rows: 130px 60px 1fr 70px;
    }
    .packages .pack-item:nth-child(1){
        border-top: 7px solid rgb(247, 174, 241);
    }
    .packages .pack-item:nth-child(1):hover{
        border-top: 7px solid rgb(184, 76, 175);
    }
    .packages .pack-item:nth-child(2){
        border-top: 7px solid rgb(195, 217, 247);
    }
    .packages .pack-item:nth-child(2):hover{
        border-top: 7px solid rgb(147, 183, 229);
    }
    .packages .pack-item:nth-child(3){
        border-top: 7px solid rgb(176, 233, 179);
    }
    .packages .pack-item:nth-child(3):hover{
        border-top: 7px solid rgb(17, 145, 23);
    }
    .wash-menu{
        display: grid;
        grid-template-columns: 20px 1fr;
        grid-auto-rows: 30px;
        color: #728691;
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0 15px;
    }
    .wash-menu li{
        list-style-type: none;
        /* height: 30px */
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
        /* margin-top: -20px; */
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
        align-items: center;
        justify-self: center;
    }
    .subscribe{
        width: 300px;
        height: 60px;
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
            grid-template: auto / 1fr;
            grid-gap: 30px;
        }
        .wash-menu{
            font-size: 14px;
        }
        .pack-item{
            
        }
        .elegant-image{
            width: 30px;
        }
        .name{
            font-size: 18px;
        }
        .price{
            font-size: 16px;
        }
        .subscribe{
            width: 270px;
            height: 40px;
            font-size: 16px;
        }
    }

</style>
