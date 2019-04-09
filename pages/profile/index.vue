<template>
    <div class="profile-page">
        <h4>User Profile</h4>
        <div class="edit-profile">
            <nuxt-link to="/editprofile">Edit</nuxt-link>
        </div>
    </div>
</template>

<script>
    export default {

        layout: 'dashboard'
    }
</script>

<style scoped>
    .profile-page{
        display: grid;
        grid-template-rows: 70px 70px;
        margin: 20px;

    }
    a{
        text-decoration: none;
        color: #fefefe;
    }
    .edit-profile{
        display: grid;
        align-content: center;
        justify-items: center;
        width: 100px;
        height: 30px;
        padding: 10px;
        background-color: #114e9e;
        color: #fefefe;
        font-size: 18px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: 0.6s ease-in;
    }
</style>