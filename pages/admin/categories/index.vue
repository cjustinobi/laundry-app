<template>
    <div class="create-category">
        <button class="btn create-btn" v-if="!showCategoryForm" @click.prevent="showCategoryForm = true">Add category</button>

        <AllCategories/>

        <div :class="{'backdrop': showCategoryForm}">
            <div :class="[{'show-form': showCategoryForm, 'hide-form': !showCategoryForm}]">
                <Editor @cancelForm="showCategoryForm = false" />
            </div>
        </div>
    </div>
    
</template>

<script>
    import AllCategories from '~/components/categories/list'
    import Editor from '~/components/categories/editor'

    export default {

        layout: 'dashboard',

        components: {
            AllCategories,
            Editor
        },

        data() {
            return {
                showCategoryForm: false
            }
        },
        

    }
</script>

<style scoped>
    .create-category{
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