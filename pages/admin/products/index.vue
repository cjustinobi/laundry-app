<template>
    <div class="create-benefit" :style="myStyle">
        <div class="btn-created">
            <button class="create-btn" v-if="!showProductForm" @click.prevent="showProductForm = true">
                CREATE PRODUCT
            </button>
        </div>

        <div :class="{'backdrop': showProductForm}">
            <div :class="[{'show-form': showProductForm, 'hide-form': !showProductForm}]">
                <editor @cancelForm="showProductForm = false" />
            </div>
        </div>

        <div>
            <all-products/>
        </div>

    </div>
    
</template>

<script>

import Editor from '~/components/products/editor'
import AllProducts from '~/components/products/list'

export default {

    layout: 'dashboard',

    components: {
        Editor,
        AllProducts        
    },

    data() {
        return {
            myStyle: {
                backgroundColor: "#f0faff"
            },
            showProductForm: false,
            
        }
    },
    

}
</script>

<style scoped>
    .create-benefit{
        display: grid;
        position: relative;
        min-height: 100vh;
        grid-template-rows: 80px 1fr;
    }
    .btn-created{
        display: grid;
    }
    .create-btn{
        margin: 20px 40px;
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