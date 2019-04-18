<template>
    <div class="add-package" :style="myStyle">
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
            myStyle: { backgroundColor: "#f0faff" },
            showForm: false
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
    }
    .create-btn:hover{
        background-color: #00122b;
    }

    @media (max-width: 767px) {
        .create-btn{
            width: 135px;
            font-size: 14px;
        }
    }
</style>
