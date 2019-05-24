<template>
    <div>
        <div class="categories">
            <div class="category" v-for="(item, i) in categories" :key="i">
                <div class="category-container">
                    <li class="item-title">{{ item.name }}</li>
                    <div class="fa-container">
                        <span>
                            <i class="fa fa-times-circle" v-if="allCategories && allCategories == itemId"
                                @click.stop="unsetSelect"
                            ></i>
                            <i  v-else @click.prevent="setSelect(itemId)"
                                class="fa fa-ellipsis-v fa-2x"
                            ></i>
                        </span>
                        <span v-if="allCategories && allCategories == itemId">
                            <i class="fa fa-edit" @click.prevent="editCategory(item.id)"></i>
                            <i class="fa fa-trash" @click.prevent="deleteForm(i)"></i>
                        </span>
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
        props:['itemId', 'api'],
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
            unsetSelect() {
                this.$store.dispatch('categories/allCategories', null)
            },
            setSelect(i) {
                this.$store.dispatch('categories/allCategories', i)
            },
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
    .categories{
        display: grid;
        grid-template-columns: 40% 40%; 
        grid-gap: 20px;
        padding: 15px 0 20px 0;
        margin: 0 auto;
        justify-content: center;
        color: #114e9e;
        position: relative;
    }
    .category{
        background-color: #fefefe;
        display: grid;
        border: 1px solid #f3efef;
        border-radius: 4px;
        font-size: 16px;
    }
    .category li{
        list-style-type: none;
    }
     .category-container{
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        padding: 15px;
     }
     .fa-container{
        position: relative;
     }
     .fa-ellipsis-v{
         cursor: pointer;
         position: absolute;
         right: 5px;
         top: -24px;
     }
     .fa-times-circle{
         cursor: pointer;
         position: absolute;
         right: 2px;
         top: -18px;
     }
    .fa-edit{
        position: absolute;
        bottom: 15px;
        right: 29px;
        color: darkblue;
        cursor: pointer;
    }
    .fa-trash{
        position: absolute;
        bottom: 15px;
        right: 65px;
        color: indianred;
        cursor: pointer;
    }
    
    @media (max-width: 767px) {
        .categories{
            grid-template-columns: 1fr;
            padding-bottom: 20px;
        }
        .category{
            font-size: 17px;
            margin: 20px;
        }
    }

    @media (min-width: 768px) {
        
    }
</style>
