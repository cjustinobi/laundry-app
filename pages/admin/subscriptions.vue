<template>
    <div class="admin-sub-container" >
        <div class="no-items">
            <h2>No Subsbcription yet</h2>
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

    }
</script>

<style lang="scss" scoped>
    .admin-sub-container{
        display: grid;
        color: #114e9e;
        // min-height: 100vh;
    }
    a{
        text-decoration: none;
        color: #fefefe;
    }
    .no-items{
        display: grid;
        text-align: center;
        justify-items: center;
        align-items: center;
        margin: 30px;
        color: rgb(150, 150, 150);
        box-shadow: 5px 5px 15px grey;
        margin: 40px;
        height: 70px;
        background-color: #fefefe;
    }

    @media (max-width: 767px) {
        
    }
</style>


