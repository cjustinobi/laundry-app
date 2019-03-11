<template>
        <div class="editor">
            <form class="form">
                <div class="close-package"><a href="#" @click.prevent="$emit('cancelForm')"><i class="fa fa-window-close"></i></a></div>
                <input class="package-input" type="text" placeholder="name" v-model="details.name">
                <input class="package-input" type="text" placeholder="price" v-model="details.price">

                <div class="btn-package">
                    <button class="btn-cancel" @click.prevent="$emit('cancelForm')">Cancel</button>
                    <button class="btn-submit" @click.prevent="submitPackage">Submit</button>
                </div>

                
            </form>
        </div>
    
</template>

<script>


export default {

    props:[
        'editDetail',
        'showForm'
    ],

    data() {
        return {
            details: {
                name: '',
                price: ''
            },
        }
    },


    methods: {
        async submitPackage() {
            try {
                let res = this.$store.dispatch('packages', this.details)
            } catch (e) { console.log(e)}
        },
    },

    mounted(){
        
    },


    watch: {
        editDetail: function(e){
            e ? this.details = e : ''
        }
    }
    
}
</script>

<style scoped>
    .form{
        display: grid;
        grid-template-rows: repeat(5, 1fr);
        grid-gap: 20px;
        padding: 20px;
        background-color: rgb(173, 149, 104);
        border-radius: 5px;
        border: 1px solid grey;
        width: 500px;
        height: 300px;
    }
    
    .btn-cancel{
        width: 180px;
        border-radius: 5px;
        border: 1px solid grey;
        height: 40px;
    }
    .btn-submit{
        width: 180px;
        border-radius: 5px;
        border: 1px solid grey;
        height: 40px;
        justify-self: right;
    }
    .close-package{
        display: grid;
        justify-items: flex-end;
    }
    .close-package a:hover{
        color: darkslategray;
    }
    .package-input{
        border-radius: 3px;
        border: 1px solid grey;
    }

    @media (max-width: 767px) {
        .editor
        {
            display: grid;
            justify-content: center;
            grid-template-columns: 1fr;
        }
        .form{
            width: 400px;
            height: 200px;
        }
        .btn-package{
            display: grid;
            grid-template-columns: 1fr 1fr;
            justify-content: end;
            align-items: end;
            grid-gap: 16px;
        }
        
    }

    @media (min-width: 768px) {
        .btn-package{
            display: grid;
            grid-template-columns: 1fr 1fr;
            justify-content: end;
            align-items: end;
            grid-gap: 16px;
        }
    }
</style>



