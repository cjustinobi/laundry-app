<template>
    <div class="items">
        <span v-if="categories && categories.length" v-for="(cat, i) in categories" :key="i" class="category">
            {{ cat.name }}
        </span>
    </div>
</template>

<script>

    export default {

        data() {
            return {
                categories: ''
            }
        },
        
        async beforeMount() {
            this.categories = await this.$axios.$get('categories')
        }
    }
</script>

<style scoped>
    .items{
        display: flex;
        justify-content: space-between;
    }
    .category{

    }
    a{
        text-decoration: none;
        color: #fefefe;
    }

    @media (max-width: 767px) {
        .items{
            grid-template-rows: 50px 1fr;
        }
    }
</style>