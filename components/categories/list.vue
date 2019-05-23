<template>
    <div>
        <div class="benefits">
            <div class="benefit" v-for="(item, i) in categories" :key="i">
                <div class="benefit-container">
                    <li class="item-title">{{ item.name }}</li>
                    <div class="fa-container">
                        <i class="fa fa-ellipsis-v fa-2x"></i>
                        <i class="fa fa-times-circle"></i>
                        <div class="edit-button">
                            <i class="fa fa-edit" @click.prevent="editCategory(item.id)"></i>
                            <i class="fa fa-trash" @click.prevent="deleteForm(i)"></i>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <div :class="{backdrop : showForm}">
            <div :class="[{'show-form': showForm, 'hide-form': !showForm}]">
                <editor :editDetail="editDetail" @cancelForm="showForm = false"/>
            </div>
        </div>

    </div>
</template>

<script>

    import Editor from '~/components/categories/editor'

    export default {
        components:{
            Editor
        },
        data() {
            return {
                showForm: false,
                editDetail: ''
            }
        },

        methods: {
            editCategory(itemId) {
                this.showForm = true;
                this.editDetail = this.categories.filter(item => item.id == itemId)
            },
            deleteForm(i){

            }
        },

        mounted() {
            this.$store.dispatch('categories/getCategories')
        },

        computed: {
            categories() {
                return this.$store.getters['categories/allCategories']
            }
        }
        
    }
</script>

<style scoped>
    .benefits{
        display: grid;
        grid-template-columns: 40% 40%; 
        grid-gap: 20px;
        padding: 15px 0 20px 0;
        margin: 0 auto;
        justify-content: center;
        color: #114e9e;
        position: relative;
    }
    .benefit{
        background-color: #fefefe;
        display: grid;
        border: 1px solid #f3efef;
        border-radius: 4px;
        font-size: 16px;
    }
    .benefit li{
        list-style-type: none;
    }
     .benefit-container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        padding: 10px;
     }
     .fa-container{
        display: grid;
        /* grid-template-columns: 50px 50px;
        grid-gap: 5px; */
        justify-content: flex-end;
     }
     .fa-ellipsis-v{
         cursor: pointer;
         position: relative;
     }
     .fa-times-circle{
         cursor: pointer;
         position: absolute;
     }
    .edit-button{
        /* display: grid;
        grid-template-columns: 30px 30px; */
        position: relative;
    }
    .fa-edit{
        position: absolute;
        bottom: 15px;
        right: 18px;
        color: darkblue;
        cursor: pointer;
    }
    .fa-trash{
        position: absolute;
        bottom: 15px;
        right: 48px;
        color: indianred;
        cursor: pointer;
    }
    
    @media (max-width: 767px) {
        .benefits{
            grid-template-columns: 1fr;
            padding-bottom: 20px;
        }
        .benefit{
            font-size: 17px;
            margin: 20px;
        }
    }

    @media (min-width: 768px) {
        
    }
</style>
