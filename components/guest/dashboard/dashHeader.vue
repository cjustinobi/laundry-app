<template>
    <div class="main-head">
        <div class="user-h3">
            <h3>User Dashboard</h3>
        </div>

        <div class="user-view">
            <img src="~assets/images/chuks.jpg" class="chuks" alt="">
            <div class="names">
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
        grid-template-columns: 1fr 200px;
        align-items: center;
        background: #fff;
        height: 60px;
        color: rgb(104, 98, 98);
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

@media (max-width: 767px) {
    .main-head{
        grid-template-columns: auto 130px;
       
    }
    .user-h3{
        font-size: 15px
    }
    .names{
        font-size: 14px
    }
}
</style>


