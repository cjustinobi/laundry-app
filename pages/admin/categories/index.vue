<template>
    <div class="create-benefit">
        <div class="btn-created">
            <button class="create-btn" v-if="!showCategoryForm" @click.prevent="showCategoryForm = true">CREATE CATEGORY</button>
        </div>

        <div :class="{'backdrop': showCategoryForm}">
            <div :class="[{'show-form': showCategoryForm, 'hide-form': !showCategoryForm}]">
                <editor @cancelForm="showCategoryForm = false" />
            </div>
        </div>

        <div>
            <all-categories/>
        </div>
    </div>
    
</template>

<script>

import Editor from '~/components/categories/editor'
import AllCategories from '~/components/categories/list'


export default {

    layout: 'dashboard',

    components: {
        Editor,
        AllCategories
        
    },

    data() {
        return {
            showCategoryForm: false,
            
        }
    },
    

}
</script>

<style scoped>
    .show-form{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 300px;
        transform: translate(-50%, -50%);
    }
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