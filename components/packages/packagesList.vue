<template>
    <div class="packages-container">
        <h1 class=" pkg-txt gray-txt">Our Packages</h1>
        <div class="packages">
            <div class="pack-item" v-for="(plan, i) in plans" :key="i">
                <Actions
                        v-if="user !== undefined && user.user_type == 3"
                        :class="[{'ellipsis-product': productList}, {'ellipsis-package': !productList}]"
                        @editItem="editItem"
                        @removeItem="removeItem"
                        :itemId="plan.id"
                        :api="api"
                />

                <div class="name">
                    <img src="~assets/images/EL_logo_3.png" alt="Elegant Laundry">
                    <h1 class="gray-txt">{{ plan.name | capitalize }}</h1>
                </div>
                <div class="price">
                    <h1>&#8358;{{ currency.format(plan.price) }}/<span class="gray-txt">month</span></h1>
                </div>
                <div class="wash-container">
                    <div class="wash-menu" v-for="(benefit, i) in plan.benefits" :key="i">
                        <p>{{ benefit.name }}</p>
                    </div>
                </div>
                <button class="subscribe" @click.prevent="subscribe" type="submit">SUBSCRIBE</button>
            </div>
        </div>
        <div :class="{'backdrop' : showForm}">
            <div :class="[{'show-form': showForm, 'hide-form': !showForm}]">
                <Editor :editDetail="editDetail" @cancelForm="showForm = false"/>
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

<style lang="scss" scoped>
    .packages-container{
        display: grid;
        background: #f6f6f6;
        padding: 60px 0 80px 0;
    }
    .pkg-txt{
        text-align: center;
        margin-bottom: 60px;
    }
    .pkg-txt::after{
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
        grid-template-columns: repeat(auto-fit, minmax(150px, 350px));
        justify-content: center;
        justify-items: center;
        grid-gap: 40px;
    }
    .pack-item{
        display: grid;
        grid-template-rows: 70px 50px auto 70px;
        position: relative;
        border: 1px solid #dcdcdc;
        min-height: 450px;
        background-color: #fefefe;
        transition: 0.7s ease-in;
    }

    .wash-menu{
        display: grid;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #ddd;
        height: 60px;
        font-weight: 500;
        color: #a3a3a3;
    }
    .name{
        display: grid;
        grid-template-columns: 60px 250px;
        justify-items: center;
        align-self: center;
        font-size: 18px;
        padding: 5px;
        img{
            width: 30px;
        }
    }
    .price{
        margin-bottom: 0;
        color: rgb(255, 255, 255);
        background-color: #2f5163;
        width: 100%;
        display: grid;
        justify-content: center;
        align-self: center;
        padding: 8px 0;
    }
    .subscribe{
        margin: 8px;
        padding: 16px 0;
        border: 1px solid #fff;
        background-color: #e7b83f;
        color: #fff;
        outline: none;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
        display: grid;
        transition: .7s ease-out;
    }
    .subscribe:hover,
    .subscribe:active{
        color: #fff;
        font-weight: bold;
        background-color: #f58b13;
    }

    @media (max-width: 767px) {
        .wash-menu{
            font-size: 14px;
        }
        .elegant-image{
            width: 30px;
        }
        .name, .price{
            font-size: 14px;
        }
    }

</style>
