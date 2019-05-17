<template>
    <div class="edit-address" :style="myStyle">
        <div class="edit-wrapper">
            <div class="update-form">
                <label for="">Street name <br>
                    <input type="text" required>
                </label>
                <label for="" >Nearest Bus stop <br>
                    <input type="text" required>
                </label>
                <label for="" >City <br>
                    <input type="text" required>
                </label>
                <label for="" >State <br>
                    <input type="text" required>
                </label>
                <div class="update-sect">
                    <nuxt-link to="/addaddress">
                        <button class="update-button">
                            Update Address
                        </button>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            myStyle: {
                backgroundColor: "#f0faff"
            },
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
    .edit-address{
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
        background-color: #fefefe;
        margin: 0 160px 40px 160px;
        padding: 50px 70px 0 70px;
        box-shadow: 5px 5px 15px grey;
        grid-gap: 10px;
    }
    .update-form{
        display: grid;
        grid-template-rows: repeat(4, 20px), 70px;
        grid-gap: 10px;
        margin-top: 40px;
        color: #114e9e;
        
    }
    .update-form input{
        width: 100%;
        padding: 5px;
        border: none;
        border-bottom: 1px solid rgb(207, 207, 207);
        font-size: 25px;
        outline-style: none;
    }
    .update-sect{
        display: grid;
        align-items: center;
        /* margin: 20px 0 40px 0; */
    }
    .update-button{
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
    .update-button:hover{
        background-color: #00122b;
    }

    @media (max-width: 767px) {
        .edit-wrapper{
            height: 500px;
            padding: 30px 20px 20px 20px;
            margin: 0 20px 40px 20px;
            
        }
        .update-form{
            grid-template-rows: repeat(3, 20px), 40px;
            grid-gap: 10px;
            
        }
        .update-form input{
            font-size: 20px;
        }
        .update-sect{
            display: grid;
            align-items: center;
            margin: 0;
        }
        .update-button{
            width: 200px;
            font-size: 14px;
        }
    }
</style>