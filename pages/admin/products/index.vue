<template>
    <div class="create-benefit">
        <div class="btn-created">
            <button class="create-btn" v-if="!showProductForm" @click.prevent="showProductForm = true">CREATE PRODUCT</button>
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
            showProductForm: false,
            
        }
    },
    

}
</script>

<style scoped>
    .create-benefit{
        display: grid;
        position: relative;
    }
    .btn-created{
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