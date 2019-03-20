<template>
        <div class="editor">
            <form class="form">
                <div class="close-package">
                    <a href="#" @click.prevent="$emit('cancelForm')"><i class="fa fa-window-close fa-2x"></i></a>
                </div>
                <input class="package-input" type="text" placeholder="name" v-model="details.name">
                <input class="package-input" type="text" placeholder="price" v-model="details.price">

                <div class="package-desktop">
                    <button class="btn-btn btn-cancel" @click.prevent="$emit('cancelForm')">Cancel</button>
                    <button class="btn-btn btn-submit" @click.prevent="submitPackage">Submit</button>
                </div>
                <div class="package-mobile">
                    <button class="btn-btn btn-submit" @click.prevent="submitPackage">Submit</button>
                    <button class="btn-btn btn-cancel" @click.prevent="$emit('cancelForm')">Cancel</button>
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
    .editor{
        display: grid;
        justify-content: center;
    }
    .form{
        display: grid;
        grid-template-rows: repeat(4, 1fr);
        grid-gap: 20px;
        padding: 20px;
        background-color: rgb(147, 191, 202);
        border-radius: 5px;
        border: 1px solid grey;
        width: 500px;
        height: 300px;
    }
    .package-desktop{
        display: grid;
        grid-template-columns: 180px 180px;
        justify-content: space-between;
        align-items: center;
    }
    .package-mobile{
        display: none;
    }
    .btn-btn{
        width: 180px;
        border-radius: 5px;
        border: 1px solid grey;
        height: 40px;
        color: #fefefe;
        font-size: 16px;
        transition: 0.3s ease-in;
    }
    .btn-cancel{
        background-color: rgb(245, 100, 100);
        
    }
    .btn-cancel:hover{
        background-color: rgb(240, 59, 59);
    }
    .btn-submit{
        background-color: #e7b83f;
    }
    .btn-submit:hover{
        background-color: #f58b13;
    }
    .close-package{
        display: grid;
        justify-items: flex-end;
        align-content: center;
    }.close-package a{
        color: rgb(245, 100, 100);
    }
    .close-package a:hover{
        color: rgb(240, 59, 59);
        transition: 0.3s ease-in;
    }
    .package-input{
        border-radius: 3px;
        border: 1px solid grey;
        padding: 10px;
    }
    
    

    @media (max-width: 767px) {
        .editor{
            display: grid;
            justify-content: center;
        }
        .form{
            grid-gap: 10px;
            width: 380px;
            height: 250px;
            padding: 12px;
        }
        .package-mobile{
            display: grid;
            grid-template: 1fr 1fr / 1fr;
            align-items: center;
            grid-gap: 10px;
        }
        .package-desktop{
            display: none;
        }
        .btn-btn{
            width: 100%;
            height: 30px;
            font-size: 14px;
        }
    }

    @media (min-width: 768px) {
        
    }
</style>



