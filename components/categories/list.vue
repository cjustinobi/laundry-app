<template>
    <div class="categories">
        <div class="category" v-for="(item, i) in categories" :key="i">
            <span class="item-title">{{ item.name }}</span>
            <div class="action">
                <Actions
                        v-if="user !== undefined && user.user_type == 3"
                        @editItem="editItem(item.id)"
                        :itemId="item.id"
                        :api="api"
                        :style="actionStyle"
                        :hideDeleteButton="hideDeleteButton"
                        :hideViewButton="hideViewButton"
                />
            </div>
        </div>
        <div :class="{backdrop : showForm}">
            <div :class="[{'show-form': showForm, 'hide-form': !showForm}]">
                <Editor :editDetail="editDetail" @cancelForm="showForm = false"/>
            </div>
        </div>
    </div>
</template>

<script>

    import Actions from '~/components/shared/actions'
    import Editor from '~/components/categories/editor'

    export default {

        components:{ Editor, Actions },

        data() {
            return {
                api: 'categories/',
                showForm: false,
                editDetail: '',
                actionStyle: { top: '-34px' },
                hideViewButton: true,
                hideDeleteButton: true,
            }
        },

        methods: {
            editItem(categoryId) {
                this.editDetail = this.categories.filter(category => category.id == categoryId)
                this.showForm = true
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

<style lang="scss" scoped>
    .categories{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 20px;
        padding: 15px 0;
        color: #114e9e;
        position: relative;
    }
    .category{
        background: #fefefe;
        display: grid;
        border: 1px solid #f3efef;
        border-radius: 4px;
        font-size: 16px;
        padding: 15px;
    }

    .fa-edit{
        right: 50px !important;
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
</style>
