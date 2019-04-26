<template>
    <div class="pay-stack-container">
        <div class="pay-editor">
            <form class="form">
                <div class="pay-type">
                    <div class="bb centralize"><h4>PAY WITH</h4></div>
                    <div class="bb centralize"><p class="pay-head"><i class="fa fa-credit-card"></i> Credit</p></div>
                    <div class="bb centralize"><p><i class="fa fa-building"></i> Bank</p></div>
                    <div class="bb centralize"><p><i class="fa fa-dollar"></i> GTB 737</p></div>
                    <div class="centralize"><p><i class="fa fa-cc-visa"></i> VISA QR</p></div>
                </div>
                <div class="pay-info">
                    <div class="pay-img">
                        <img src="~assets/images/EL_logo_2.png" alt="Elegant Logo">
                        <div>
                            <p>agatevureglory@gmail.com</p>
                            <p class="ngn">Pay NGN 4,000</p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>

</template>

<script>


    export default {

        props:[
            'showForm'
        ],

        components: {  },

        data() {
            return { 
               
            }
        },


    }
</script>

<style scoped>
    .pay-stack-container{
        position: relative;
    }
    .pay-editor{
        display: grid;
        justify-content: center;
    }
    .form{
        display: grid;
        grid-template-columns: 100px 1fr;
        margin-top: 80px;
        background-color: #fefefe;
        border: 1px solid grey;
        width: 400px;
        height: 310px;
        font-size: 12px;
    }
    img{
        width: 40px;
    }
    .pay-type{
        display: grid;
        background-color: rgb(241, 241, 241);
        grid-template-rows: 50px repeat(4, 35px);
        color: #114e9e;
    }
    .bb{
        border-bottom: 1px solid rgb(206, 206, 206);
    }
    .centralize{
        display: grid;
        align-items: center;
        justify-items: center;
    }
    .pay-head{
        color: rgb(31, 168, 31);
    }
    .pay-info{
        display: grid;
        grid-template-rows: repeat(5, auto);
        grid-gap: 10px;
        padding: 10px;
    }
    .pay-img{
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;
    }
    .ngn{
        padding-top: 10px;
    }

    @media (max-width: 767px) {
        .form{
            grid-gap: 10px;
            width: 380px;
            height: 300px;
            padding: 12px;
        }
    }
</style>




