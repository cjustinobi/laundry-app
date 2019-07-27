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
        background: #ddd;
        color: rgb(88, 87, 87);
        padding: 12px 30px;
    }
    .category{
        cursor: pointer;
    }
    .category:after{
        display: block;
        width: 20px;
        border-bottom: 3px solid #f9a825;
        margin: 2px auto;
        content: '';
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