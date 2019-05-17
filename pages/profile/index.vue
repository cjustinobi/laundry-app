<template>
    <div class="edit-profile" :style="myStyle">
        <!-- <div class="title"><h2>My Account</h2></div> -->
        <div class="edit-wrapper">
            <ul class="edit-list">
                <li class="edit-links" @click.prevent="toggleTab('profile')">Profile</li>
                <li class="edit-links" @click.prevent="toggleTab('address')">Address</li>
                <li class="edit-links" @click.prevent="toggleTab('password')">Change Password</li>
                <li class="edit-links" @click.prevent="toggleTab('preferences')">Preferences</li>
            </ul>
        </div>

        <div><profileXXX v-if="profile"></profileXXX></div>
        <div><editAddress v-if="address"></editAddress></div>
        <div><editPassword  v-if="password"></editPassword></div>
        <div><preferences  v-if="preferences"></preferences></div>
    </div>
</template>

<script>
    import ProfileXXX from '~/components/guest/profileXXX'
    import EditAddress from '~/components/guest/editAddress'
    import EditPassword from '~/components/guest/editPassword'
    import Preferences from '~/components/guest/preferences'

    export default {
        
        layout: 'dashboard',
        components: {ProfileXXX, EditAddress, EditPassword, Preferences},

        data() {
            return {
                myStyle: {
                    backgroundColor: "#f0faff"
                },
                profile: true,
                address: false,
                password: false,
                preferences: false
            }
        },
        methods: {
            toggleTab(val) {
                if(val == 'profile') {
                    this.address =false
                    this.password = false
                    this.preferences = false
                    return this.profile = true
                }
                if(val == 'address') {
                    this.password =false
                    this.preferences =false
                    this.profile = false
                    return this.address = true
                }
                if(val == 'password') {
                    this.preferences =false
                    this.profile =false
                    this.address = false
                    return this.password = true
                }
                if(val == 'preferences') {
                    this.profile =false
                    this.address = false
                    this.password = false
                    return this.preferences = true
                }
            },
        
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
    .edit-profile{
        display: grid;
        min-height: 100vh;
    }
    .title{
        display: grid;
        justify-items: center;
        align-content: center;
        height: 80px;
        color: #114e9e;
        background-color: #f0faff;
    }
    a{
        text-decoration: none;
    }
    .edit-wrapper{
        display: grid;
        grid-template-columns: 1fr;
        background-color: #fefefe;
        margin: 40px 160px 0 160px;
        box-shadow: 5px 5px 15px grey;
        grid-gap: 20px;
        align-items: center;
    }
    .edit-list{
        display: grid;
        grid-template: 80px / repeat(4, auto); 
        align-items: center; 
        padding: 0px;
        font-size: 18px;
        outline: none;
        border: none;
        cursor: pointer;
        list-style: none;
        justify-items: center;
        
    }
    .edit-links{
        color: #114e9e;
        transition: 0.6s ease-in;
    }
    .edit-links:hover,
    .edit-links:active{
        color: #a0a0a0; 
    }
   

    @media (max-width: 767px) {
        .edit-wrapper{
            margin: 40px 20px 0 20px;
        }
        .title{
            margin-top: 30px;
        }
        .edit-list{
            grid-template: 60px / repeat(4, auto); 
            font-size: 12px;
            grid-gap: 2px;
        }
    }
</style>