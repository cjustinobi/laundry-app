<template>
    <div class="main-head">
        <div class="user-h3">
            <nuxt-link to='/' class="user-home-btn"><i class="fa fa-home" title="Home"></i></nuxt-link>
             <a class='toggle-bar' @click.prevent="$emit('showDrawer')" title="Expand">
                <i class='fa fa-bars'></i>
            </a>
        </div>

        <div class="user-view">
            <div class="new-order" @click="$router.push('/cart')">
                <i class="fa fa-cart-plus"><div class="order-count">{{ itemsInCart }}</div></i><p>Cart</p>
            </div>

            <div class="bell">
                <i class="fa fa-bell"></i> <div class="notification-count">0</div>
            </div>
            
            <div class="names">
                <i class="fa fa-user"></i> 
                <p v-if="user">{{ user.fullname }}</p>
            </div>

            <div v-if="user !== undefined && user.user_type !== 3"
                id="dropdown" :class="[{'dropdown': dropdown}]">
                <a class="pull-down" @mouseover="showPull" @click.prevent="pullDown"><i class=" fa fa-angle-down"></i></a>
                <div id="dropdown-content" :class="[{'dropdown-content': dropdownContent}]">
                    <nuxt-link class="show my-profile" to="/profile">
                        <i class="fa fa-user"></i> My Profile
                    </nuxt-link>
                    <nuxt-link class="show" to="/logout"><i class="fa fa-power-off"></i> Exit</nuxt-link>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {

    data() {
        return {
            dropdownContent: true,
            dropdown: true
        }
    },
    methods: {
        pullDown() {
            let x = document.getElementById("dropdown-content")
            if(x.className.indexOf("show") == -1) {
                this.dropdownContent = true
                x.className += " show"
                x.style.display = "grid"
            } else {
                this.dropdownContent = false
                x.style.display = "none"
                x.className.replace("")
            }
        },
        showPull() {
            // this.dropdownContent = !this.dropdownContent
        }
    },
    computed: {
       /* user() {
            if (this.$store.state.auth.user) {
                return this.$store.state.auth.user
            }
        },*/
        itemsInCart(){
            let cart = this.$store.getters['cart/items']
            return cart.reduce((accum, item) => accum + item.qty, 0)
        }

    },
    watch: {
        'route': function(e) {
            if(e && window.innerWidth > 767){
                this.pullDown = true
                this.dropdownContent = true
            }else{
                this.pullDown = false
                this.dropdownContent = false
            }
        }
    }
}
</script>

<style scoped>
    .main-head{
        display: grid;
        grid-template-columns: 1fr;
        position: relative;
        /* align-items: center; */
        background-color: #01355f;
        height: 60px;
        color: #fefefe;
        transition: 0.3s ease-in;
    }
    a{
        color: #fefefe;
    }
    .user-h3{
        display: grid;
        grid-template-columns: 1fr;
        text-align: center;
    }
    .user-img{
        width: 30px;
        height: 30px;
        padding: 0;
        border-radius: 50%;
    }
    .user-view{
        display: grid;
        grid-template-columns: 70px 35px auto 30px;
        /* align-items: center; */
        grid-gap: 15px;
        justify-self: flex-end;
    }
    .new-order{
        display: grid;
        grid-template-columns: 30px auto;
        cursor: pointer;
        position: relative;
    }
    .fa-cart-plus{
        cursor: pointer;
        
    }
    .order-count{
        display: grid;
        justify-items: center;
        align-items: center;
        position: absolute;
        top: 6px;
        background-color: red;
        color: #fefefe;
        height: 18px;
        width: 18px;
        border-radius: 50%;
        font-size: 9px;
        font-weight: 700;
        left: 9px;
        border: 1px solid #01355f;
    }
    .bell{
        cursor: pointer;
        position: relative;
    }
    .notification-count{
        display: grid;
        justify-items: center;
        align-items: center;
        position: absolute;
        top: 6px;
        background-color: red;
        color: #fefefe;
        height: 18px;
        width: 18px;
        border-radius: 50%;
        font-size: 9px;
        left: 9px;
        border: 1px solid #01355f;
        font-weight: 700;
    }
    .fa-user{
        cursor: pointer;
    }
    .names{
        display: grid;
        grid-template-columns: 20px auto;
        
    }
    .pull-down{
        display: grid;
        /* align-items: center; */
        cursor: pointer;
    }
    .dropdown a{
        font-weight: 700;
    }
    .toggle-bar{
        padding: 3px;
    }
    .dropdown{
        display: grid;
        position: relative;
    }
    .dropdown-content{
        position: absolute;
        top: 40px;
        right: 20px;
        display: none;
        z-index: 1;
        min-width: 140px;
        height: 70px;
        padding: 15px;
        border: 1px solid #fefefe;
        border-radius: 5px;
        background-color: #c7c7c7;
        transition: 0.6s ease-in;
    }
    .dropdown:hover .dropdown-content{
        /* display: block; */
    }
    .dropdown-content a{
        text-decoration: none;
    }

@media (max-width: 480px) {
    
}
    

@media (max-width: 767px) {
    .main-head{
        grid-template-columns: 80px auto;
        grid-gap: 40px;
        font-size: 12px;
        align-items: center;
    }
    .user-h3{
        grid-template-columns: 40px 40px;
    }
    .user-view{
        grid-template-columns: 60px 30px auto 25px;
        grid-gap: 7px;
        align-items: center;
    }
    img{
        width: 20px;
        height: 20px;
    }
    .new-order{
        display: grid;
        grid-template-columns: 25px 25px;
    }
    .order-count{
        top: 6px;
        left: 7px;
        width: 15px;
        height: 15px;
    }
    .notification-count{
        /* top: 6px;
        left: 7px; */
        width: 15px;
        height: 15px;
    }
    .names{
        display: grid;
        grid-template-columns: 15px auto;
    }
    .pull-down{
        align-items: center;
    }
}

@media (min-width: 768px) {
    .toggle-bar{
        display: none;
    }
    .user-home-btn{
        display: none;
    }
}
</style>


