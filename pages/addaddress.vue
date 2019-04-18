<template>
    <div class="add-address" :style="myStyle">
        <div class="title"><h2>My Account</h2></div>
        <div class="add-wrapper">
            <h4 class="address-head">Your Addresses (1)</h4>
            <div class="add-form">
                <div class="font-folder">
                    <i class="fa fa-trash"></i>
                    <i class="fa fa-edit"></i>
                </div>
                <p>{{ address }}</p>
                <p>{{ nearestBusStop  }}</p>
                <p>{{ city  }}</p>
                <p>{{ State }}</p>
                
            </div>
            <div class="add-sect">
                <button @click.prevent="signUp" class="add-button">
                    Add Address
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
    layout: 'dashboard',

    data() {
        return {
            myStyle: {
                backgroundColor: "#f0faff"
            },
            address: '30 Afaha Uqua, Road',
            nearestBusStop: 'Mobil Mart',
            city: 'Eket',
            State: 'Akwa Ibom State'
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
    .add-address{
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
        border-bottom: 1px solid rgb(207, 207, 207);
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
        grid-template: 80px / repeat(4, 180px); 
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
    .add-wrapper{
        display: grid;
        background-color: #fefefe;
        margin: 0 160px 40px 160px; 
        padding: 0 60px;
        box-shadow: 5px 5px 15px grey;
        grid-gap: 10px;
        
    }
    .add-list{
        display: grid;
        grid-template: 80px / repeat(3, 150px); 
        align-items: center; 
        padding: 0px;
        font-size: 18px;
        outline: none;
        border: none;
        cursor: pointer;
        list-style: none;
        border-bottom: 1px solid rgb(207, 207, 207);
    }
    .add-links a{
        color: #114e9e;
        transition: 0.6s ease-in;
    }
    .add-links a:hover,
    .add-links a:active{
        color: #a0a0a0;
        
    }
    .address-head{
        margin-top: 30px;
        color: #114e9e;
    }
    .add-form{
        display: grid;
        grid-template-rows: 30px repeat(4, 20px);
        grid-gap: 10px;
        margin-top: 8px;
        color: #114e9e;
        padding: 20px;
        border: 1px solid rgb(207, 207, 207);
        width: 300px;
    }
    .font-folder{
        display: grid;
        justify-content: flex-end;
        grid-template-columns: 30px 30px;
        border-bottom: 1px solid rgb(207, 207, 207);
        cursor: pointer;
    }
    .add-sect{
        display: grid;
        align-items: center;
        margin: 20px 0 30px 0;
    }
    .add-button{
        height: 50px;
        width: 250px;
        padding: 10px;
        background-color: #01355f;
        color: #fefefe;
        font-size: 18px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: 0.6s ease-in;
    }
    .add-button:hover{
        background-color: #00122b;
    }

    @media (max-width: 767px) {
        .add-wrapper{
            grid-template-rows: 50px 30px 250px 50px;
            /* width: 500px; */
            margin: 0 150px 40px 150px;
            padding: 0 40px;
            height: 450px;
        }
        .add-list{
            grid-template: 40px / repeat(3, 120px);
            font-size: 15px;
        }
        .add-form{
            grid-gap: 10px;
        }
        .address-head{
            margin-top: 10px;
        }
        .add-sect{
            margin: 10px 0;
        }
        .add-button{
            width: 200px;
            font-size: 14px;
        }
        .edit-list{
            font-size: 15px;
        }
    }
</style>