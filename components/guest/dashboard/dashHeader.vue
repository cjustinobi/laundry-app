<template>
    <div class="main-head">
        <div class="gpat">
            <nuxt-link to='/' class="brand-name">
                <h1 class='wr-logo'>GPAT</h1>
            </nuxt-link>
            <a class='toggle-icon' @click.prevent="$emit('toggleSidebar')">
                <i class='fa fa-bars'></i>
            </a>
        </div>

        <div class="user-h3">
            <h3>User Dashboard</h3>
        </div>

        <div class="user-view">
            <img src="~assets/images/chuks.jpg" class="chuks" alt="">
            <div>
                <p>Obi Chuks</p>
                <p>First User</p>
            </div>
            <i class="fa fa-chevron-down"></i>
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
        grid-template-columns: 200px 1fr 200px;
        align-items: center;
        padding: 0 20px;
        background-color: rgb(231, 238, 238);
        height: 60px;
    }
    .gpat a{
        display: grid;
        grid-template-columns: auto 40px;
        color: black;
    }
    .chuks{
        width: 30px;
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
    }
    .user-h3{
        text-align: center;
    }
</style>


