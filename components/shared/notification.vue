<template>
    <div>
        <div v-if="message" :class="[{'error': error},{success: success}]">{{ message }}</div>
    </div>
</template>

<script>

    export default {

        props: ['message', 'error', 'success']

    }

</script>

<style lang="scss" scoped>
    div{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
</style>