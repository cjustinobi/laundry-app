<template>
    <div class="create-benefit" :style="myStyle">
        <div class="btn-created">
            <button class="create-btn" v-if="!showBenefitForm" @click.prevent="showBenefitForm = true">CREATE BENEFITS</button>
        </div>

        <div>
            <all-benefits/>
        </div>

        <div :class="{'backdrop': showBenefitForm}">
            <div :class="[{'show-form': showBenefitForm, 'hide-form': !showBenefitForm}]">
                <benefit-editor @cancelForm="showBenefitForm = false" />
            </div>
        </div>

    </div>
    
</template>

<script>
    import AllBenefits from '~/components/benefits/list'
    import BenefitEditor from '~/components/benefits/editor'

    export default {

        layout: 'dashboard',

        components: {
            AllBenefits,
            BenefitEditor
        },

        data() {
            return {
                myStyle: { backgroundColor: "#f0faff" },
                showBenefitForm: false,
                
            }
        },
        

    }
</script>

<style scoped>
    .create-benefit{
        display: grid;
        position: relative;
        /* min-height: 100vh; */
    }
    .btn-created{
        display: grid;
    }
    .create-btn{
        margin: 40px 0 40px 40px;
        width: 150px;
        height: 40px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        background-color: #114e9e;
        color: #fefefe;
        outline: none;
        box-shadow: 0 0 20px 0 rgb(117, 126, 126);
        transition: 0.6s ease-in;
        border: none;
        cursor: pointer;
    }
    .create-btn:hover{
        background-color: #032f6d;
    }

    @media (max-width: 767px) {
        .create-btn{
            width: 135px;
            font-size: 12px;
        }
    }
</style>