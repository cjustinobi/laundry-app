<template>
    <div>
        <div class="benefits">
            <div class="benefit" v-for="(item, i) in benefits" :key="i">
                <div class="benefit-container">
                    <li class="item-title">{{ item.name }}</li>
                    <div class="fa-container">
                        <span>
                            <i class="fa fa-times-circle" 
                                
                            ></i>
                            <i  
                                class="fa fa-ellipsis-v fa-2x"
                            ></i>
                        </span>
                        <span >
                            <i class="fa fa-edit" @click.prevent="editBenefit(i)"></i>
                            <i class="fa fa-trash" @click.prevent="deleteForm(i)"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div :class="{backdrop : showForm}">
            <div :class="[{'show-form': showForm, 'hide-form': !showForm}]">
                <editor :editDetail="editDetail" @cancelForm="showForm = false"/>
            </div>
        </div>

    </div>
</template>

<script>

    import Editor from '~/components/benefits/editor'

    export default {
        components:{
            Editor
        },
        data() {
            return {
                showForm: false,
                editDetail: ''
            }
        },

        methods: {
            editBenefit(i) {
                this.showForm = true;
                this.editDetail = this.benefits.find((item, index) => index == i)
            },
            deleteForm(i){

            }
        },

        mounted() {
            this.$store.dispatch('benefits/getBenefits')
        },

        computed: {
            benefits() {
                return this.$store.getters['benefits/allBenefits']
            }
        }
        
    }
</script>

<style scoped>
    .benefits{
        display: grid;
        grid-template-columns: 40% 40%; 
        grid-gap: 20px;
        padding: 15px 0 20px 0;
        margin: 0 auto;
        justify-content: center;
        color: #114e9e;
        position: relative;
    }
    .benefit{
        background-color: #fefefe;
        display: grid;
        border: 1px solid #f3efef;
        border-radius: 4px;
        font-size: 16px;
    }
    .benefit li{
        list-style-type: none;
    }
     .benefit-container{
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        padding: 15px;
    }
    .fa-container{
        position: relative;
     }
     .fa-ellipsis-v{
         cursor: pointer;
         position: absolute;
         right: 5px;
         top: -24px;
     }
     .fa-times-circle{
         cursor: pointer;
         position: absolute;
         right: 2px;
         top: -18px;
     }
    .fa-edit{
        position: absolute;
        bottom: 15px;
        right: 29px;
        color: darkblue;
        cursor: pointer;
    }
    .fa-trash{
        position: absolute;
        bottom: 15px;
        right: 65px;
        color: indianred;
        cursor: pointer;
    }
    
    
    @media (max-width: 767px) {
        .benefits{
            grid-template-columns: 1fr;
            padding-bottom: 20px;
        }
        .benefit{
            font-size: 17px;
            margin: 20px;
        }
    }

    @media (min-width: 768px) {
        
    }
</style>
