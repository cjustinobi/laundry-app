<template>
    <div class="benefits">
        <div class="benefit" v-for="(item, i) in benefits" :key="i">
            <p class="item-title">{{ item.name | capitalize }}</p>
            <Actions
                    v-if="user !== undefined && user.user_type == 3"
                    @editItem="editItem(item.id)"
                    :itemId="item.id"
                    :api="api"
                    :style="actionStyle"
                    :hideViewButton="hideViewButton"
            />
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
    import Editor from '~/components/benefits/editor'

    export default {

        components: { Editor, Actions },

        data() {
            return {
                showForm: false,
                editDetail: '',
                actionStyle: { top: '-34px' },
                api: 'benefits/',
                hideViewButton: true
            }
        },

        methods: {
            editItem(i) {
                this.showForm = true;
                this.editDetail = this.benefits.find(item => item.id == i)
            },
            deleteForm(i){

            }
        },

        mounted() {
            this.$store.dispatch('benefits/getBenefits')
        },

        computed: {
            benefits() {
                return this.$store.getters['benefits/allBenefits']
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
        background: #fefefe;
        display: grid;
        border: 1px solid #f3efef;
        border-radius: 4px;
        font-size: 16px;
        padding: 15px;
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
</style>
