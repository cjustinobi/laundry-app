<template>
    <div class="add-package">
        <div class="btn-add">
            <button v-if="!showForm" class="create-btn" @click.prevent="showForm = true">ADD PACKAGE</button>
        </div>

        <div class="all-packages">
            <all-packages/>
        </div>
        
        <div :class="{'backdrop': showForm}">
            <div :class="[{'show-form': showForm, 'hide-form': !showForm}]">
                <plan-editor @cancelForm="showForm = false" />
            </div>
        </div>
    </div>
    
</template>

<script>

import PlanEditor from '~/components/packages/editor'
import AllPackages from '~/components/packages/packagesList'


export default {
    
    layout: 'dashboard',

    components: {
        PlanEditor,
        AllPackages 
    },

    data() {
        return {
            showForm: false,
        }
    },
}
</script>

<style scoped>
    .add-package{
        display: grid;
        grid-template-columns: 1fr;
        position: relative;
    }
    .btn-add{
        display: grid;
        justify-content: center;
    }
    .create-btn{
        margin: 40px 0;
        width: 400px;
        height: 60px;
        border: 3px solid rgb(209, 159, 67);    
        border-radius: 15px;
        font-weight: bold;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        background-color: rgb(111, 185, 185);
        color: #fff;
        outline: none;
        box-shadow: 0 0 20px 0 rgb(117, 126, 126);
        transition: 0.6s ease-in;
    }
    .create-btn:hover{
        background-color: darkcyan;
    }

    @media (max-width: 767px) {
        .create-btn{
            width: 300px;
            font-weight: 200;
        }
    }
</style>
