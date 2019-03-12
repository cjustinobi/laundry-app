<template>
    <div class="drawer-container">
        <a href="#" @click.prevent="$emit('hideDrawer')">Hide drawer</a>
        <div>
            <nuxt-link to="/">Hello</nuxt-link>
            <nuxt-link to="/">Hello</nuxt-link>
            <nuxt-link to="/">Hello</nuxt-link>
            <nuxt-link to="/">Hello</nuxt-link>
            <nuxt-link to="/">Hello</nuxt-link>
            <nuxt-link to="/">Hello</nuxt-link>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            hideDrawer() {

            }
        }
    }
</script>

<style scoped>
    .drawer-container{
        min-height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: greenyellow;
    }
    div a{
        display: block;
    }
</style>