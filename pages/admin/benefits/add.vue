<template>
    <div class="create-benefit">
        <button class="btn create-btn" v-if="!showBenefitForm" @click.prevent="showBenefitForm = true">Add benefit</button>

        <AllBenefits/>

        <div :class="{'backdrop': showBenefitForm}">
            <div :class="[{'show-form': showBenefitForm, 'hide-form': !showBenefitForm}]">
                <Editor @cancelForm="showBenefitForm = false" />
            </div>
        </div>

    </div>
    
</template>

<script>
    import AllBenefits from '~/components/benefits/list'
    import Editor from '~/components/benefits/editor'

    export default {

        layout: 'dashboard',

        components: {
            AllBenefits,
            Editor
        },

        data() {
            return {
                showBenefitForm: false,
            }
        },
        

    }
</script>

<style scoped>
    .create-benefit{
        margin: 45px;
        position: relative;
    }

    .create-btn{
        width: 150px;
        height: 40px;
        background-color: #114e9e;
        color: #fefefe;
        outline: none;
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