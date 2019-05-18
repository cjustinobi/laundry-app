<template>
    <div class="settings-container" >
        <div class="settings-head">
            <h2>IN PROGRESS</h2>
        </div>
    </div>
</template>

<script>

    export default {
        
        layout: 'dashboard',

        data() {
            return {

            }
            
        },
        mounted() {
            // document.body.style.background = "#e1f5fe";
        },
        destroyed() {
            document.body.style.background = "none";
        }
    }
</script>

<style scoped>
    .settings-container{
        display: grid;
        /* grid-template-rows: 1fr 1fr 1fr; */
        /* min-height: 100vh; */
    }
    .settings-head{
        display: grid;
        justify-items: center;
        align-content: center;
        height: 80px;
        color: #114e9e;
        border-bottom: 1px solid rgb(207, 207, 207);
    }
    a{
        text-decoration: none;
        color: #f8b711;
    }
    
    

    @media (max-width: 767px) {
       
    }
</style>