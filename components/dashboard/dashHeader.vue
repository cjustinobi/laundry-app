<template>
    <div class="main-head">
        <div class="user-h3">
            <nuxt-link to='/' class="user-home-btn"><i class="fa fa-home" title="Home"></i></nuxt-link>

             <a class='toggle-bar' @click.prevent="$emit('showDrawer')" title="Expand">
                <i class='fa fa-bars'></i>
            </a>
            <h3>User Dashboard</h3>
        </div>

        <div class="user-view">
            <img src="~assets/images/profile_pic.jpg" class="user-img" alt="">
            <div class="names">
                <p>Obi Chuks</p>
                <p>First User</p>
            </div>
            <a class="pull-down"><i class=" fa fa-angle-down fa-2x"></i></a>
        </div>

    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .main-head{
        display: grid;
        grid-template-columns: 1fr 200px;
        align-items: center;
        background: #fffcfc;
        height: 60px;
        color: rgb(104, 98, 98);
        transition: 0.3s ease-in;
    }
    a{
        color: rgb(104, 98, 98);
    }
    .user-img{
        width: 40px;
        height: 40px;
        padding: 0;
        border-radius: 50%;
    }
    user{
        display: grid;
        grid-template-columns: 1fr 80px;
    }
    .user-view{
        display: grid;
        grid-template-columns: repeat(3, auto);
        align-items: center;
        grid-gap: 10px;
    }
    .user-h3{
        display: grid;
        grid-template-columns: 50px 50px 1fr;
        text-align: center;
    }
    .pull-down{
        cursor: pointer;
    }
    .toggle-bar{
        padding: 3px;
    }

@media (max-width: 767px) {
    .main-head{
        grid-template-columns: 1fr 160px;
       
    }
    .user-h3{
        font-size: 15px
    }
    .names{
        font-size: 14px
    }
}

@media (min-width: 768px) {
    .user-h3{
        grid-template-columns: 1fr;
    }
    .toggle-bar{
        display: none;
    }
    .user-home-btn{
        display: none;
    }
}
</style>


