<template>
    <div class="action-container">
        <notification :success="success" :error="error"></notification>
        <div class="trash-edit" v-if="selectedId && selectedId == itemId">
            <i class="fa fa-eye"></i>
            <i @click="$emit('editItem', itemId)" class="fa fa-edit"></i>
            <i @click="delItem(itemId)" class="fa fa-trash"></i>
        </div>
        <span class="ellipsis">
            <i v-if="selectedId && selectedId == itemId"
               @click.stop="unsetSelected"
               class="fa fa-times-circle">
            </i>
            <i v-else="" @click.prevent="setSelected(itemId)" class="fa fa-ellipsis-v fa-2x"></i>
        </span>
    </div>
</template>

<script>

    import Notifications from '~/mixins/notifications'
    import Notification from '~/components/shared/notification'

    export default {

        props: ['itemId', 'api'],

        components: { Notification },

        mixins: [Notifications],

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
//                    this.messages.push('item removed')
                    this.success = true
                    this.$emit('removeItem', i)
                } catch (e) {
//                    this.messages.push(e.response.data.error)
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

<style lang="scss" scoped>
    .action-container{
        position: relative;
    }
    .trash-edit{
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
    .ellipsis{
        position: absolute;
        right: -3px;
        top: 10px;
        cursor: pointer;
    }
</style>