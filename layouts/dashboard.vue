<template>
    <div class="dashboard">
        <div class="dash-header">
            <dashHeader></dashHeader>
        </div>

        <div class="content">
            <sidebar></sidebar>
            <div><nuxt/></div>
        </div>
        
    </div>
</template>

<script>
    import DashHeader from '~/components/guest/dashboard/dashHeader'
    import Sidebar from '~/components/guest/dashboard/sidebar'
    

    export default {

        components: {DashHeader, Sidebar}

    }

</script>

<style scoped>
    .dashboard{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .dash-header{

    }
    .content{
        display: grid;
        grid-template: 100% / 200px 1fr;
    }
</style>
