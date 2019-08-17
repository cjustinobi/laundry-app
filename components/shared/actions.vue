<template>
    <div class="action-container">
        <div v-if="selectedId && selectedId == itemId">
            <i v-if="!hideViewButton" class="fa fa-eye"></i>
            <i @click="$emit('editItem', itemId)" class="fa fa-edit"></i>
            <i v-if="!hideDeleteButton" @click="delItem(itemId)" class="fa fa-trash"></i>
        </div>
        <span class="ellipsis-item" :style="actionStyle">
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

        props: ['itemId', 'api', 'actionStyle', 'hideDeleteButton', 'hideViewButton'],

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
                        { messages: ['item removed'], state: 'success' })
                    this.$emit('removeItem', i)
                } catch (e) {
                    this.$store.dispatch('notifications/setStatus',
                        { messages: [e.response.data.error], state: 'error' })
                }
            }
        },

        computed: {
            selectedId() {
                return this.$store.getters['shared/selectedIndex']
            }
        }

    }

</script>

<style>
    .action-container{
        position: relative;
    }

    .fa-eye{
        position: absolute;
        top: 12px !important;
        right: 90px;
        color: #2ca02c;
        cursor: pointer;
    }
    .fa-edit{
        position: absolute;
        top: 12px !important;
        right: 60px;
        color: darkblue;
        cursor: pointer;
    }
    .fa-trash{
        position: absolute;
        top: 12px !important;
        right: 36px;
        color: indianred;
        cursor: pointer;
    }
    .fa-ellipsis-v{
        color: darkblue;
        cursor: pointer;
    }
    .ellipsis-item{
        position: absolute;
        right: 11px;
        top: 10px;
        cursor: pointer;
    }
</style>