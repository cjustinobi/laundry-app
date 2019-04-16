<template>
    <div class="main-head">
        <div class="user-h3">
            <nuxt-link to='/'  class="user-home-btn"><i class="fa fa-home" title="Home"></i></nuxt-link>
             <a class='toggle-bar' @click.prevent="$emit('showDrawer')" title="Expand">
                <i class='fa fa-bars'></i>
            </a>
            <!-- <h3>User Dashboard</h3> -->
        </div>

        <div class="user-view">
            <div class="new-order">
                <i class="fa fa-cart-plus"></i> <p>New order</p>
            </div>

            <div class="bell">
                <i class="fa fa-bell"></i> <div class="count">0</div>
            </div>
            
            <div class="names">
                <!-- <img src="~assets/images/profile_pic.jpg" class="user-img" alt=""> -->
                <i class="fa fa-user"></i> <p>Glory Agatevure</p>
            </div>

            <div id="dropdown" :class="[{'dropdown': dropdown}]">
                    <a class="pull-down" @click.prevent="pullDown"><i class=" fa fa-angle-down"></i></a>
                    <div id="dropdown-content" :class="[{'dropdown-content': dropdownContent}]">
                        <nuxt-link class="show my-profile" to="/profile"><i class="fa fa-user"></i> My Profile</nuxt-link>
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
                x.style.display = "block"
            } else {
                this.dropdownContent = false
                x.style.display = "none"
                x.className = x.className.replace(" show", "")
            }
        },
        // hideLinks(e) {
        //     let el = document.getElementById("dropdown")
        //     if(el.style.display = 'block') {
        //         this.dropdown = true
        //         // el.style.display = 'block'
        //     }else {
        //         this.dropdown = false
        //         el.style.display = 'none'
        //     }
        // }
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
        grid-template-columns: 1fr 350px;
        position: relative;
        align-items: center;
        background-color: #01355f;
        height: 60px;
        color: #fefefe;
        transition: 0.3s ease-in;
    }
    a{
        color: #fefefe;
    }
    .user-img{
        width: 30px;
        height: 30px;
        padding: 0;
        border-radius: 50%;
    }
    .user-view{
        display: grid;
        grid-template-columns: 120px 35px 150px 20px;
        align-items: center;
        grid-gap: 7px;
    }
    .new-order{
        display: grid;
        grid-template-columns: 25px auto;
        cursor: pointer;
    }
    .bell{
        cursor: pointer;
    }
    .fa-bell{
        position: relative;
    }
    .count{
        display: grid;
        justify-items: center;
        align-items: center;
        position: absolute;
        top: 20px;
        /* right: 10px; */
        background-color: red;
        color: #fefefe;
        height: 12px;
        width: 12px;
        border-radius: 50%;
        font-size: 9px;
    }
    .fa-user{
        cursor: pointer;
    }
    .names{
        display: grid;
        grid-template-columns: 25px auto;
        
    }
    .user-h3{
        display: grid;
        grid-template-columns: 1fr;
        text-align: center;
    }
    .pull-down{
        display: grid;
        align-items: center;
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
        /* grid-gap: 15px; */
        background-color: #c7c7c7;
        transition: 0.6s ease-in;
    }
    .dropdown:hover .dropdown-content{
        display: block;
    }
    .dropdown-content a{
        text-decoration: none;
    }
    .dropdown-content a:hover,
    .dropdown-content a:active{
        /* color: rgb(207, 202, 240); */
    }
    

@media (max-width: 767px) {
    .main-head{
        grid-template-columns: 1fr 1fr;
        grid-gap: 70px;
    }
    .user-h3{
        grid-template-columns: 50px 50px;
        font-size: 15px
    }
    .user-view{
        grid-template-columns: 120px 30px 145px 20px;
    }
    img{
        width: 20px;
        height: 20px;
    }
    .new-order{
        display: grid;
        grid-template-columns: 25px 100px;
    }
    .names{
        display: grid;
        grid-template-columns: 25px 110px;
        font-size: 14px;
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


