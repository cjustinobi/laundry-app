<template>
    <div id="sidebar" :class="[{'sidebar': sidebar}]">
        <app-link></app-link>
    </div>
</template>

<script>

    import AppLink from '~/components/appLinks'

    export default {

        components: { AppLink },

        data() {
            return {
                sidebar: true
            }
        },

        methods: {
            toggleSidebar() {
                console.log(this)
            }
        }

    }

</script>

<style scoped>
    .sidebar{
        position: fixed;
        top: 0;
        left: 0;
        width: 200px;
        height: 100%;
        color: #fefefe;
        background: #120642;
        z-index: 40000;
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