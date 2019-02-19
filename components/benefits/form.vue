<template>

    <div class="editor">
        <form class="form">
            <div class="close-benefit"><a href="#" @click.prevent="$emit('cancelForm')"><i class="fa fa-window-close"></i></a></div>
            <input type="text" class="input-benefit" placeholder="benefit" v-model="details.title">

            <div class="btn-benefits">
                <button class="btn-cancel-benefits" @click.prevent="$emit('cancelForm')">Cancel</button>
                <button class="btn-submit-benefits" @click.prevent="submitBenefit">Submit</button>
            </div>
        </form>
    </div>

</template>

<script>
    // import {db} from '../config/firebase'

    export default {

        props: [
            'showBenefitsForm',
            'editDetail'
        ],

        data() {
            return {
            
                details: {
                    title: ''
                }
            }
        },

        methods: {
            async submitBenefit() {
                if (this.details['.key']){
                    try{
                        await db.ref('/benefits').child(this.details['.key']).update({title: this.details.title})
                    }
                    catch(e) {
                    console.log(e)
                    }
                    
                 }  else {
                        this.$firebaseRefs.benefits.push( {title: this.details.title} )
                    }
                     
                }    
            },

        // firebase:{
        //     benefits: db.ref('benefits')
        // },


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
        grid-gap: 20px;
        padding: 20px;
        background-color: rgb(211, 97, 4);
        height: 200px;
        /* width: 80%; */
    }
    .editor{
        display: grid;
        grid-template-columns: 1fr;
        border-radius: 5px;
        /* width: 50%; */
    }
    .btn-benefits{
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: end;
        align-items: end;
        grid-gap: 16px;
    }
    .btn-cancel-benefits{
        width: 170px;
        border-radius: 5px;
        border: 1px solid grey;
        height: 40px;
    }
    .btn-submit-benefits{
        width: 170px;
        border-radius: 5px;
        border: 1px solid grey;
        height: 40px;
    }
    .close-benefit{
        display: grid;
        justify-content: flex-end;
    }
    .close-benefit a:hover{
        color: darkslategray;
    }
    .input-benefit{
        height: 40px;
        border: 10x solid grey;
        border-radius: 5px;
    }

    @media (max-width: 767px) {
        .form{
            display: grid;
            grid-gap: 20px;
            padding: 20px;
            background-color: rgb(211, 97, 4);
            height: 150px;
        }
        .editor{
            border-radius: 5px;
            display: grid;
            grid-template-columns: 1fr;
            border-radius: 5px;
            width: 20%;
        }
        .btn-benefits{
            display: grid;
            grid-template-co: 1fr 1fr;
            justify-content: end;
            align-items: end;
            grid-gap: 16px;
        }
        .btn-cancel-benefits{
            width: 170px;
            border-radius: 5px;
            border: 1px solid grey;
            height: 30px;
        }
        .btn-submit-benefits{
            width: 170px;
            border-radius: 5px;
            border: 1px solid grey;
            height: 30px;
        }
        .close-benefit{
            display: grid;
            justify-content: flex-end;
        }
        .close-benefit a:hover{
            color: darkslategray;
        }
        .input-benefit{
            height: 30px;
            border: 10x solid grey;
            border-radius: 5px;
        }
    }
</style>


