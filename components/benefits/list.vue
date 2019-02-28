<template>
    <div class="main-div">
        <div class="benefits">
            <div class="benefit" v-for="(item, i) in benefits" :key="i">
                <div class="benefit-container">
                    <li class="item-title">{{ item.title }}</li>

                    <div class="edit-button">
                        <button class="edit-package" @click.prevent="editBenefit(i)">Edit</button>
                        <button class="delete-package" @click.prevent="deleteForm(i)">Delete</button>
                    </div>
                    
                </div>
            </div>
        </div>

        <div :class="{backdrop : showForm}">
            <div :class="[{'show-form': showForm, 'hide-form': !showForm}]">
                <benefits-form :editDetail="editDetail" @cancelForm="showForm = false"/>
            </div>
        </div>

    </div>
</template>

<script>
    // import {db} from '../config/firebase'
    import Form from '~/components/benefits/form'

    export default {
        components:{
            Form
        },
        data() {
            return {
                showForm: false,
                editDetail: ''
            }
        },

        methods: {
            editBenefit(i) {
                this.showForm = true;
                this.editDetail = this.benefits.find((item, index) => index == i)
            },
            deleteForm(i){
            db.ref('benefits').child(this.benefits[i]['.key']).remove()
        }
        },
        // firebase: {
        //     benefits: db.ref('benefits')
        // },
        
    }
</script>

<style scoped>
    .main-div{
        background-color: #fefefe;
    }
    .benefit li{
        list-style-type: none;
        
    }
     .benefit-container{
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            padding: 15px;
        }
    
    @media (max-width: 767px) {
        .benefits{
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 20px;
            padding-bottom: 20px;
            margin: 0 auto;
            justify-self: center
        
        }
        .benefit{
            background-color: #f3efef;
            display: grid;
            border: 1px solid #f3efef;
            border-radius: 4px;
            font-size: 17px;
        }
        .edit-button{
            display: grid;
            grid-template-columns: 50px 50px;
            grid-gap: 5px;
            justify-content: flex-end;
        }
        .delete-package{
            background-color: rgb(235, 69, 69);
            border: 1px solid #fefefe;
            border-radius: 4px;
            color: #e9e1e1;
            padding: 5px;
        }
        .edit-package{
            background-color: rgb(87, 87, 231);
            border: 1px solid #fefefe;
            border-radius: 4px;
            color: #ddcdcd;
        }
}

    @media (min-width: 768px) {
        .benefits{
            display: grid;
            grid-template-columns: 40% 40%; 
            grid-gap: 20px;
            padding: 15px 0 15px 0;
            margin: 0 auto;
            justify-content: center;
        
        }
       
        .benefit{
            background-color: #f3efef;
            display: grid;
            border: 1px solid #f3efef;
            border-radius: 4px;
            font-size: 18px;
        }
        .edit-button{
            display: grid;
            grid-template-columns: 50px 50px;
            grid-gap: 5px;
            justify-content: flex-end;
        }
        .delete-package{
            background-color: rgb(235, 69, 69);
            border: 1px solid #fefefe;
            border-radius: 4px;
            color: #e9e1e1;
            padding: 5px;
        }
        .edit-package{
            background-color: rgb(87, 87, 231);
            border: 1px solid #fefefe;
            border-radius: 4px;
            color: #ddcdcd;
        }
    }
</style>
