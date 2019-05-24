<template>
    <div class="edit-subpage" :style="myStyle">
        <div><Subscriptions/></div>

        <div class="other-subscription">
          <h4>Other Subscription Plans</h4>
        </div>

        <!-- <div><pay-stack/></div> -->

        <div><package-list></package-list></div>
    </div>
</template>

<script>
    import Subscriptions from '~/components/guest/subscriptions'
    // import PayStack from '~/components/guest/payStack'
    import PackageList from '~/components/packages/packagesList'

    export default {
        
        layout: 'dashboard',

        components: {
            Subscriptions,
            // PayStack,
            PackageList
        },

        data() {
            return {
                myStyle: {
                    backgroundColor: "#f0faff"
                }
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
    .edit-subpage{
        display: grid;
        grid-template-rows: 700px 80px 1fr;
        /* min-height: 100vh; */
        grid-gap: 10px;
    }
    .other-subscription{
        display: grid;
        height: 40px;
        align-items: center;
        background-color: rgb(241, 241, 241);
        color: #114e9e;
        margin: 0 40px;
        padding-left: 20PX;
    }

    @media (max-width: 767px) {
        .edit-subpage{
            grid-template-rows: 800px 80px 1fr;
        }
        .other-subscription{
            margin: 0 20px;
            padding-left: 20PX;
        }
    }
</style>