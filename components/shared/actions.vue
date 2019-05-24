<template>
    <div class="action-container">
        <div :class="[{'trash-edit-product': productList}, {'trash-edit-package': !productList}]" 
            v-if="selectedId && selectedId == itemId">
            <i class="fa fa-eye"></i>
            <i @click="$emit('editItem', itemId)" class="fa fa-edit"></i>
            <i @click="delItem(itemId)" class="fa fa-trash"></i>
        </div>
        <span :class="[{'ellipsis-product': productList}, {'ellipsis-package': !productList}]">
            <i v-if="selectedId && selectedId == itemId"
               @click.stop="unsetSelected"
               class="fa fa-times-circle">
            </i>
            <i v-else="" @click.prevent="setSelected(itemId)" class="fa fa-ellipsis-v fa-2x"></i>
        </span>
    </div>
</template>

<script>

    export default {

        props: ['itemId', 'api'],

        data() {
            return {
                productList: true
            }
        },
        methods: {
            unsetSelected() {
                this.$store.dispatch('shared/selectedIndex', null)
            },

            setSelected(i){
                this.$store.dispatch('shared/selectedIndex', i)
            },

            async delItem(i) {
                try {
                    await this.$store.dispatch('shared/deleteItem', {i, api: this.api})
                    this.$store.dispatch('notifications/setStatus',
                        { messages: ['item removed'], status: 'success' })
                    this.$emit('removeItem', i)
                } catch (e) {
                    this.$store.dispatch('notifications/setStatus',
                        { messages: [e.response.data.error], status: 'error' })
                    this.error = true
                }
            },
        },

        computed: {
            selectedId() {
                return this.$store.getters['shared/selectedIndex']
            }
        }

    }

</script>

<style scoped>
    .action-container{
        position: relative;
    }
    .trash-edit-product{
        position: absolute;
        top: 24px;
        right: -24px;
    }
    .trash-edit-package{
        position: absolute;
        top: 24px;
        right: -24px;
    }
    .fa-eye{
        position: absolute;
        top: -31px;
        right: 90px;
        color: #2ca02c;
        cursor: pointer;
    }
    .fa-edit{
        position: absolute;
        top: -31px;
        right: 60px;
        color: darkblue;
        cursor: pointer;
    }
    .fa-trash{
        position: absolute;
        top: -31px;
        right: 36px;
        color: indianred;
        cursor: pointer;
    }
    .fa-ellipsis-v{
        color: darkblue;
        cursor: pointer;
    }
    .ellipsis-product{
        position: absolute;
        right: -3px;
        top: 10px;
        cursor: pointer;
    }
    .ellipsis-package{
        position: absolute;
        right: 12px;
        top: 10px;
        cursor: pointer;
    }
    .cc{
        color: red;
    }
</style>