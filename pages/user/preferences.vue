<template>
    <div class="edit-preferences" :style="myStyle">
        <div class="preferences-wrapper">
            <div class="preferences-list">
                <h3>Starch Preferences</h3>
                <div class="preferences-head">
                    <p>Starch</p>
                    <span>
                        <i :class="[{'fa fa-toggle-off': !starch, 'fa fa-toggle-on': starch}]" 
                            @click.prevent="toggleSwitch('starch')">
                        </i>
                    </span>
                </div>
                <div class="preferences-head">
                    <p>Light Starch</p>
                    <span >
                        <i :class="[{'fa fa-toggle-off': !lightStarch, 'fa fa-toggle-on': lightStarch}]" 
                            @click.prevent="toggleSwitch('lightStarch')">
                        </i>
                    </span>
                </div>
                <div class="preferences-head">
                    <p>No Starch</p>
                    <span>
                        <i :class="[{'fa fa-toggle-off': !noStarch, 'fa fa-toggle-on': noStarch}]" 
                            @click.prevent="toggleSwitch('noStarch')">
                        </i>
                    </span>
                </div>
            </div>

            <div class="shirt-laundry-preferences">
                <h3>Shirt Laundry Preferences</h3>
                <div class="preferences-head">
                    <p>Hung</p>
                    <span>
                        <i :class="[{'fa fa-toggle-off': !hung, 'fa fa-toggle-on': hung}]" 
                            @click.prevent="toggleSwitch('hung')">
                        </i>
                    </span>
                </div>
                <div class="preferences-head">
                    <p>Fold</p>
                    <span>
                        <i :class="[{'fa fa-toggle-off': !fold, 'fa fa-toggle-on': fold}]" 
                            @click.prevent="toggleSwitch('fold')">
                        </i>
                    </span>
                </div>
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
            },
            starch: true,
            lightStarch: false,
            noStarch: false,
            hung: false,
            fold: true
        }
    },
    methods: {
        toggleSwitch(v) {
            if (v == 'starch') {
                this.starch =! this.starch
                this.lightStarch = false
                this.noStarch = false
            }
            if (v == 'lightStarch') {
                this.lightStarch =! this.lightStarch
                this.noStarch = false
                this.starch = false
            }
            if (v == 'noStarch') {
                this.noStarch =! this.noStarch
                this.starch = false
                this.lightStarch = false
            }
            if (v == 'hung') {
                this.hung =! this.hung
                this.fold = false
            }
            if (v == 'fold') {
                this.fold =! this.fold
                this.hung = false
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
        /* margin-top: -12px; */
    }
    a{
        text-decoration: none;
    }
    .preferences-wrapper{
        display: grid;
        grid-template-rows: 110px 90px 90px;
        background-color: #fefefe;
        margin: 40px 160px;
        padding: 70px 70px 0 70px;
        box-shadow: 5px 5px 15px grey;
        grid-gap: 18px;
        height: 400px;
        color: #114e9e;
    }
    .preferences-list{
        display: grid;
        grid-gap: 5px;
        grid-template-rows: 30px repeat(3, 20px);
    }
    .preferences-head{
        display: grid;
        grid-template-columns: 1fr 90px;
        grid-gap: 50px;
    }
    .shirt-laundry-preferences{
        display: grid;
        grid-gap: 5px;
        grid-template-rows: 30px repeat(2, 20px);
    }
    .update-preferences{
        display: grid;
        justify-content: center;
        margin: 15px 0;
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
            grid-template-rows: 130px 90px 70px;
            padding: 30px 20px;
            font-size: 13px;
            margin: 20px 30px 0 30px;
        }
        .preferences-list{
            grid-template-rows: 30px repeat(3, 30px);
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