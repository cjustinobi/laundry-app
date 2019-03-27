<template>
    <div class="edit">
        <div><editprofile></editprofile></div>
        <div><editaddress></editaddress></div>
        <div><editpassword></editpassword></div>
    </div>
</template>

<script>

    import Editprofile from '~/pages/editprofile'
    import Editaddress from '~/pages/editaddress'
    import Editpassword from '~/pages/editpassword'

    export default {
        
        layout: 'dashboard',

        components: {
            Editprofile,
            Editaddress,
            Editpassword

        },
        data() {
            return {
                
            }
        }
        
    }
</script>
    
<style scoped>
    .edit{
        display: grid;
    }
</style>