<template>
    <div>
        <div class="packages-container">
            <div class="btn-group">
                <button class="create-btn" v-if="!showForm" @click.prevent="showForm = true">ADD PACKAGE</button>
                <button class="create-btn" v-if="!showBenefitForm" @click.prevent="showBenefitForm = true">CREATE BENEFITS</button>
            </div>

            <div :class="{'backdrop': showForm}">
                <div :class="[{'show-form': showForm, 'hide-form': !showForm}]">
                    <plan-editor @cancelForm="showForm = false" />
                </div>
            </div>

            <div :class="{'backdrop': showBenefitForm}">
                <div :class="[{'show-form': showBenefitForm, 'hide-form': !showBenefitForm}]">
                    <benefit-editor @cancelForm="showBenefitForm = false" />
                </div>
            </div>

        </div>

        <div class="all-packages">
            <all-packages/>
        </div>

        <div>
            <all-benefits/>
        </div>
    </div>
    
</template>

<script>

import PlanEditor from '~/components/packages/editor'
import BenefitEditor from '~/components/benefits/editor'
import AllPackages from '~/components/packages/packagesList'
import AllBenefits from '~/components/benefits/list'


export default {

    layout: 'dashboard',

    components: {
        PlanEditor,
        BenefitEditor,
        AllPackages,
        AllBenefits
        
    },

    data() {
        return {
            showForm: false,
            showBenefitForm: false,
        }
    },
    

}
</script>

<style scoped>

    .packages-container{
        position: relative;
        display: grid;
        grid-template-columns: 1fr;
    }
    .create-btn:hover{
        transition: 2s;
        background-color: rgb(86, 189, 189);
    }
    
    
    @media (max-width: 767px) {
        .btn-group{
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-gap: 20px;
        width: 40%;
        margin: 20px 0;
        /* justify-content: center; */
    }
    .create-btn{
        width: 100px;
        height: 40px;
        border: 3px solid rgb(209, 159, 67);    
        border-radius: 15px;
        justify-self: center;
        align-items: center;
        font-weight: bold;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        background-color: darkcyan;
        color: #fff;
        
    }
    .banner{
        margin-top: -30px;
    }
}

    @media (min-width: 768px) {
    .create-btn{
        width: 180px;
        height: 60px;
        border: 3px solid rgb(209, 159, 67);    
        border-radius: 15px;
        margin: 80px 0 70px 0;
        justify-self: center;
        font-weight: bold;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        background-color: darkcyan;
        color: #fff;
    }
    .btn-group{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        width: 40%;
    }
}

</style>
