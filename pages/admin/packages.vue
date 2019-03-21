<template>
    <div>
        <div class="packages-container">
            <div class="btn-group">
                <button class="create-btn" v-if="!showForm" @click.prevent="showForm = true">ADD PACKAGE</button>
                <button class="create-btn" v-if="!showBenefitForm" @click.prevent="showBenefitForm = true">CREATE BENEFITS</button>
            </div>

            <div class="all-packages">
                <PackagesList/>
            </div>

            <div :class="{'backdrop': showForm}">
                <div :class="[{'show-form': showForm, 'hide-form': !showForm}]">
                    <packages-form @cancelForm="showForm = false" />
                </div>
            </div>

            <div :class="{'backdrop': showBenefitForm}">
                <div :class="[{'show-form': showBenefitForm, 'hide-form': !showBenefitForm}]">
                    <!--<benefits-form @cancelForm="showBenefitForm = false" />-->
                </div>
            </div>

            

            <div>
                <!--<all-benefits/>-->
            </div>

        </div>
    </div>
    
</template>

<script>

    import PackagesList from '~/components/packages/packagesList'
    import PackagesForm from '~/components/packages/packagesForm'
    // import Form from '~/components/benefits/form'

    // import List from '~/components/benefits/list'


export default {

    components: {
        // Banner,
        PackagesList,
        PackagesForm,
        // Form,
        // List
        
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
    .create-btn:hover{
        transition: 2s;
        background-color: rgb(86, 189, 189);
    }
    .btn-group{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        width: 40%;
    }
    
    
    @media (max-width: 767px) {
        .btn-group{
            grid-template-rows: 1fr 1fr;
            margin: 20px 0;
        }
        .create-btn{
            width: 100px;
            height: 40px;
            align-items: center;
        }
        .banner{
            margin-top: -30px;
        }
    }

    @media (min-width: 768px) {
    
    }

</style>

