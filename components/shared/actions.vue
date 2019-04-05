<template>
    <div class="action-container">
        <div v-if="selectedId && selectedId == itemId">
            <i class="fa fa-eye"></i>
            <i class="fa fa-edit"></i>
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


    export default {

        props: ['itemId', 'deleteEndPoint'],

        methods: {
            unsetSelected() {
                this.$store.dispatch('shared/selectedIndex', null)
            },

            setSelected(i){
                this.$store.dispatch('shared/selectedIndex', i)
            },

            async delItem(i) {
                try {
                    await this.$store.dispatch('shared/deleteItem', {i, deleteEndPoint: this.deleteEndPoint})
                    this.$emit('removeItem', i)
                } catch (e) {
                    this.messages.push(e.response.data.error)
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
    /*@import '~/assets/scss/_mixins.scss';*/
    .action-container{
        position: relative;
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
        right: 10px;
        top: -35px;
        cursor: pointer;
    }
</style>