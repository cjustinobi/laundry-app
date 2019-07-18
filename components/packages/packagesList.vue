<template>
    <div class="packages-contain">
        <h1 class=" pkg-txt gray-txt">Our packages</h1>
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
                <div class="price">
                    <h1>&#8358;{{ currency.format(plan.price) }}/<span class="gray-txt">month</span></h1>
                </div>
                <div class="wash-container">
                    <div class="wash-menu" v-for="(benefit, i) in plan.benefits" :key="i">
                        <i class="fa fa-check"></i>
                        <li>{{ benefit.name }}</li>
                    </div>
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

    import Editor from '~/components/packages/editor'
    import Actions from '~/components/shared/actions'
    import CurrencyFormatter from '~/mixins/currencyFormatter'

    export default {

        mixins: [CurrencyFormatter],

        components: { Editor, Actions },

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
    .pkg-txt{
        text-align: center;
        margin-top: 48px;
    }
    .pkg-txt::after
    {
        position: absolute;
        left: calc(50% - 35px);
        display: block;
        width: 70px;
        border-bottom: 3px solid #f9a825;
        padding-top: 20px;
        content: '';
    }
    .packages{
        position: relative;
        display: grid;
        grid-template: auto / repeat(auto-fit, minmax(150px, 350px));
        justify-content: center;
        justify-items: center;
        grid-gap: 40px;
        margin: 40px 0;
        padding: 20px 0;
    }
    .pack-item{
        position: relative;
        border: 1px solid #b2d2e4;
        border-radius: 10px;
        display: grid;
        min-height: 450px;
        background-color: #fefefe;
        transition: 0.7s ease-in;
        grid-gap: 10px;
        grid-template-rows: 120px 60px 187px 40px;
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
    .packages .pack-item:nth-child(4){
        border-top: 7px solid rgb(232, 233, 176);
    }
    .packages .pack-item:nth-child(4):hover{
        border-top: 7px solid rgb(216, 202, 73);
    }
    .packages .pack-item:nth-child(5){
        border-top: 7px solid rgb(163, 160, 179);
    }
    .packages .pack-item:nth-child(5):hover{
        border-top: 7px solid rgb(5, 65, 230);
    }
    .packages .pack-item:nth-child(6){
        border-top: 7px solid rgb(255, 160, 160);
    }
    .packages .pack-item:nth-child(6):hover{
        border-top: 7px solid rgb(247, 89, 89);
    }
    .wash-container{
        display: grid;
        grid-template-rows: repeat(auto-fit, 40px);
    }
    .wash-menu{
        display: grid;
        grid-template-columns: 30px 1fr;
        color: #728691;
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0 15px;
    }
    .wash-menu li{
        list-style-type: none;
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
        font-size: 18px;
        color: #728691;
        grid-gap: 5px;
        padding: 5px;
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
        width: 290px;
        height: 40px;
        border: 1px solid #fff;
        background-color: #e7b83f;
        color: #fff;
        outline: none;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
        border-radius: 10px;
        display: grid;
    }
    .subscribe:hover,
    .subscribe:active{
        color: #fff;
        font-weight: bold;
        background-color: #f58b13;
        transition: .7s ease-out;
    }

    @media (max-width: 767px) {
        .packages{
            grid-template: auto / repeat(auto-fit, minmax(150px, 300px));
            grid-gap: 30px;
        }
        .wash-menu{
            font-size: 14px;
        }
        .pack-item{
            grid-template-rows: 110px 60px 187px 40px;
        }
        .elegant-image{
            width: 30px;
        }
        .name{
            grid-template-columns: 60px 190px;
            font-size: 14px;
            /* max-width: 310px; */
        }
        .price h1{
            font-size: 16px;
        }
        .subscribe{
            width: 250px;
            font-size: 14px;
        }
    }

</style>
