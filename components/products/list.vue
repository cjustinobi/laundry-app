<template>
    <div class="all-products">
        <div><products v-if="user !== undefined && user.user_type !== 3"/></div>
       <div><items @toogleSideLinks="toogleSideLinks"/></div>
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

        <div :class="[{'side-links': sideLinks, 'hide-side-links': !sideLinks}]" id="side-links">
            <sideLinks @cancelLinks="cancelLinks"></sideLinks>
        </div>
    </div>
</template>

<script>
    import Products from '~/components/guest/products'
    import Items from '~/components/guest/items'
    import Actions from '~/components/shared/actions'
    import SideLinks from '~/components/guest/sideLinks'

export default {

    components: { Products, Items, Actions, SideLinks },

    data() {
        return {
            api: 'products/',
            sideLinks: true
        }
    },

    methods: {
        editItem(i) {
            this.showForm = true;
            this.editDetail = this.products.find(product => product.id === i)
        },
        removeItem(i) { 
            this.$store.dispatch('products/removeItem', i)
        },
        toogleSideLinks() {
            let x = document.getElementById('side-links')
            if(x.style.display === 'block') {
                x.style.display = 'none'
            } else {
                x.style.display = 'block'
            }
        },
        cancelLinks() {
            this.sideLinks = false
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
        position: relative;
        top: 0;
    }
    .laundry-list-wrapper{
        display: grid;
        grid-template: 380px / repeat(auto-fit, minmax(240px, 255px));
        grid-gap: 30px;
        position: relative;
        justify-content: center;
        margin: 20px 0;
    }
    .laundry-list{
        display: grid;
        grid-gap: 5px;
        background-color: #fefefe;
        color: #114e9e;
        min-height: 320px;
        padding: 10px;
        position: relative;
    }
    .img-square{
        width: 150px;
        height: 150px;
        // display: grid;
        // align-items: center;
        // justify-items: center;
        background-size: contain;
        background-position: left;
    }
    img{
        width: 100%;
        height: 100%;
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
    .side-links{
        position: fixed;
        left: 50;
        top: 250;
        z-index: 1000;
    }
    #side-links{
        display: none;
    }
    .hide-side-links{
        display: none;
    }
    
    @media (max-width: 7767px) {
        .laundry-list-wrapper{
            grid-gap: 20px;
        }
    }
</style>

