<template>
    <div>
        <login></login>
        <register></register>
    </div>
</template>

<script>

    import Login from '~/components/guest/login'
    import Register from '~/components/guest/register'

    export default {

        components: {
            Login, Register
        }

    }

</script>