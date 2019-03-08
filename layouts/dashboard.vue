<template>
    <div class="dashboard">
        <div class="sidebar">
            <sidebar></sidebar>
        </div>

        <div class="content">
            <dash-header></dash-header>
            <div class="nuxt-rend"><nuxt/></div>
        </div>
        
    </div>
</template>

<script>
    import Sidebar from '~/components/guest/dashboard/sidebar'
    import DashHeader from '~/components/guest/dashboard/dashHeader'
    

    export default {

        components: {Sidebar, DashHeader},
        middleware: ['check-auth']

    }

</script>

<style scoped>
    .dashboard{
        display: grid;
        grid-template-columns: 200px 1fr;
        background-color: rgb(233, 233, 233);
    }
    .content{
        display: grid;
        grid-template-rows: 60px 1fr;
    }
    .sidebar{
        min-height: 100vh;
        background: #fff;
    }

@media (max-width: 767px) {
    .dashboard{
        grid-template-columns: 170px 1fr;
    }
}
</style>
