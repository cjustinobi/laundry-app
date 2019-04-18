<template>
    <div class="all-products">
        <div><products/></div>
       
        <div class="laundry-list-wrapper" >
            <div class="laundry-list" v-for="(product, i) in products" :key="i">
                 <actions
                        v-if="user !== undefined && user.user_type == 3"
                        @editItem="editItem"
                        @removeItem="removeItem"
                        :itemId="product.id" :api="api">
                </actions>
                <div class="img-square">
                    <img :src="product.file_path" alt="EL image">
                </div>
                <h5>{{ product.name }}</h5>
                <p class="p1">Washed, pressed and neatly folded</p>
                <div class="separator"></div>
                <h5>{{ product.price }}</h5>
                <p>{{ product.category.name }}</p>
                <button 
                    v-if="user !== undefined && user.user_type !== 3"   
                    class="laundry-list-btn">Add to cart
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import Products from '~/components/guest/products'
    import Actions from '~/components/shared/actions'

export default {

    components: { Products, Actions },

    data() {
        return {
            api: '/api/products/'
        }
    },

    methods: {
        editItem(i) {
            this.showForm = true;
            this.editDetail = this.products.find(product => product.id === i)
        },
        removeItem(i) {
            this.$store.dispatch('products/removeItem', i)
        }
    },

    computed: {
        products() {
            return this.$store.getters['products/allProducts']
        }
    },
    beforeMount() {
        this.$store.dispatch('products/getProducts')
    }
}
</script>

<style lang="scss" scoped>
    .all-products{
        display: grid;
        grid-template-rows: auto 1fr;
        min-height: 100vh;
    }
    .laundry-list-wrapper{
        display: grid;
        grid-template: 320px / repeat(auto-fit, minmax(240px, 255px));
        grid-gap: 30px;
        position: relative;
        justify-content: center;
    }
    .laundry-list{
        display: grid;
        grid-gap: 5px;
        background-color: #fefefe;
        margin: 40px 0;
        color: #114e9e;
        min-height: 320px;
        padding: 10px;
        position: relative;
    }
    .img-square{
        width: 150px;
        height: 150px;
        display: grid;
        align-items: center;
        justify-items: center;
    }
    img{
        max-width: 100%;
        max-height: 100%;
    }
    .p1{
        color: #8395b1;
        font-size: 14px;
    }
    .separator{
        height: 1px;
        background-color: #8c929b;
        padding: 0;
    }
    .laundry-list-btn{
        width: 235px;
        height: 35px;
        background-color: #e7b83f;
        color: #fefefe;
        outline: none;
        border: none;
        transition: 0.7s ease-in;
    }
    .laundry-list-btn:hover{
        background-color: #f58b13;
    }
</style>

