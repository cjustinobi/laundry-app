<template>
    <div id="sidebar"  :class="[{'sidebar': sidebar}]">
        <AppLink/>
    </div>
</template>

<script>

    import AppLink from '~/components/guest/appLinks'

    export default {

        components: { AppLink },

        data() {
            return {
                sidebar: true
            }
        }

    }

</script>

<style scoped>
    .sidebar{
        position: fixed;
        /* top: 0; */
        right: 0;
        width: 300px;
        height: 100%;
        color: #fefefe;
        background: #580231;
        z-index: 40000;
        font-size: 22px;
        transition: 0.6s ease-in;
    }
   
    #sidebar{
        display: none;
    }
    @media(min-width: 768px) {
        .sidebar{
            display: none;
        }
    }
</style>