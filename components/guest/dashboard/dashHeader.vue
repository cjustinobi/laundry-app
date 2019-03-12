<template>
    <div class="main-head">
        <div class="user-h3">
             <a class='toggle-bar' @click.prevent="$emit('toggleSidebar')" title="Expand">
                <i class='fa fa-bars'></i>
            </a>
            <h3>User Dashboard</h3>
        </div>

        <div class="user-view">
            <img src="~assets/images/chuks.jpg" class="chuks" alt="">
            <div class="names">
                <p>Obi Chuks</p>
                <p>First User</p>
            </div>
            <a class="pull-down"><i class=" fa fa-chevron-down"></i></a>
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
        display: grid;
        grid-template-columns: 50px 1fr;
        text-align: center;
    }
    .pull-down{
        cursor: pointer;
    }

@media (max-width: 767px) {
    .main-head{
        grid-template-columns: 1fr 130px;
        /* position: fixed; */
       
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
}
</style>


