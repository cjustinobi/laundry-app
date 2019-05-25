<template>
    <div class="profile-pg">
        <div class="edit-profile-wrapper">
            <ul class="edit-list">
                <li class="edit-links" @click.prevent="toggleTab('profile')">Profile</li>
                <li class="edit-links" @click.prevent="toggleTab('address')">Address</li>
                <li class="edit-links" @click.prevent="toggleTab('password')">Change Password</li>
            </ul>
        </div>
        <UserProfile v-if="profile"/>
        <UserAddress v-if="address"/>
        <EditPassword v-if="password"/>
    </div>
</template>

<script>

    import UserProfile from '~/components/guest/userProfile'
    import UserAddress from '~/components/shared/userAddresses'
    import EditPassword from '~/components/guest/editPassword'

    export default {
        
        layout: 'dashboard',

        components: { UserProfile, UserAddress, EditPassword },

        data() {
            return {
                profile: true,
                address: false,
                password: false
            }
        },
        methods: {
            toggleTab(val) {
                if(val == 'profile') {
                    this.address =false
                    this.password = false
                    return this.profile = true
                }
                if(val == 'address') {
                    this.password =false
                    this.profile = false
                    return this.address = true
                }
                if(val == 'password') {
                    this.profile =false
                    this.address = false
                    return this.password = true
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
    .profile-pg{
        display: grid;
        /* height: 100%; */
        /* min-height: 100vh; */
        grid-template-rows: 1fr;
    }   
    .edit-profile-wrapper{
        display: grid;
        /* grid-template-columns: 1fr; */
        margin: 40px 200px 0 200px;
        align-items: center;
        height: 60px;
    }
    .edit-list{
        display: grid;
        grid-template: 60px / repeat(3, auto); 
        align-items: center; 
        padding: 0px;
        font-size: 16px;
        outline: none;
        border: none;
        cursor: pointer;
        list-style: none;
        justify-items: center;
        background-color: rgb(241, 241, 241);
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
        .edit-profile-wrapper{
            margin: 40px 20px 0 20px;
        }
        .title{
            margin-top: 30px;
        }
        .edit-list{
            grid-template: 60px / repeat(3, auto); 
            font-size: 12px;
            grid-gap: 2px;
        }
    }
</style>