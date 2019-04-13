<template>
    <div class="edit-preferences" :style="myStyle">
        <div class="preferences-wrapper">
            <div class="preferences-list">
                <label for=""><span class="preferences-head">Preferences</span> <br>
                    <input type="radio" class="starch" name="" id="" checked> Starch <br>
                    <input type="radio" name="" id=""> Light Starch <br>
                    <input type="radio" name="" id=""> No Starch 
                </label>
                <label for=""><span class="preferences-head">Shirt Laundry Preferences</span> <br>
                    <input type="radio" class="hung" name="" id="" checked> Hung <br>
                    <input type="radio" name="" id=""> Fold 
                </label>
            </div>
            <div class="update-preferences">
                <button @click.prevent="signUp" class="preferences-button">
                    Change Preferences
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
    .edit-preferences{
        display: grid;
        min-height: 100vh;
    }
    a{
        text-decoration: none;
    }
    .preferences-wrapper{
        display: grid;
        grid-template-rows: 200px 90px;
        background-color: #fefefe;
        margin: 0 160px 40px 160px;
        padding: 80px 70px 0 70px;
        box-shadow: 5px 5px 15px grey;
        grid-gap: 10px;
        height: 400px;
        color: #114e9e;
    }
    .preferences-list{
        display: grid;
        grid-gap: 20px;
    }
    .preferences-head{
        font-size: 22px;
    }
    .update-preferences{
        display: grid;
        justify-content: center;
        margin: 20px 0;
    }
    .preferences-button{
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
    .preferences-button:hover{
        background-color: #00122b;
    }

    @media (max-width: 767px) {
        .preferences-wrapper{
           
        }
        .update-preferences{
            grid-gap: 20px;
        }
        .preferences-button{
            width: 200px;
            font-size: 14px;
        }
    }
</style>