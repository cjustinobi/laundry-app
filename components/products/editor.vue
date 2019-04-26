<template>
    <div class="plan-editor-container">
        <div class="editor">
            <form class="form">
                <div class="close-package">
                    <a href="#" @click.prevent="$emit('cancelForm')"><i class="fa fa-window-close"></i></a>
                </div>
                <input class="package-input" type="text" placeholder="name" v-model="details.name">
                <input class="package-input" type="text" placeholder="price" v-model="details.price">
                <select v-model="details.category_id">
                    <option disabled>Select category</option>
                    <option v-for="(category, i) in categories" :value="category.id" :key="i">{{ category.name }}</option>
                </select>
                <input type="file" ref="file" accept="image/*" @change="uploadFile" class="file">
                <button class="upload-image" @click.prevent="$refs.file.click()">Upload image</button>
                <img v-if="filePreview" :src="filePreview" alt="">
                <div class="btn-package">
                    <button class="btn-cancel" @click.prevent="$emit('cancelForm')">Cancel</button>
                    <button class="btn-submit" @click.prevent="submitProduct">
                        <img v-if="isLoading" src="~/assets/images/loading.gif" alt="Elegant image">
                        <span v-else>{{ sendBtnTxt }}</span>
                    </button>
                </div>
            </form>
        </div>
    </div>

</template>

<script>
    import  FormElements  from '~/mixins/formElements'

    export default {

        props:[
            'editDetail',
            'showForm'
        ],

        mixins: [FormElements],

        data() {
            return { 
                details: {
                    name: '',
                    price: '',
                    category_id: 'Select category',
                    file: '',
                },
                filePreview: '',
                categories: ''
            }
        },


        methods: {
            async submitProduct() {
                this.isLoading = true

                try {
                    await this.$store.dispatch('products/store', this.details)
                    this.isLoading = false
                    this.clearFields(this.details)
                    this.$store.dispatch('notifications/setStatus',
                        { messages: ['product successfully saved'], state: 'success' }
                    )
                    this.$store.dispatch('products/getProducts')
                    this.$emit('cancelForm')

                } catch (e) {

                    this.isLoading = false
                    this.$store.dispatch('notifications/setStatus',
                        { messages: [e.response.data.error], state: 'error' }
                    )
                }
            },

            async getCategories() {
                this.categories = await this.$axios.$get('/api/categories')
            },

            uploadFile(e) {
                this.details.file = e.target.files[0]
                this.filePreview = URL.createObjectURL(this.details.file)
            }

        },


        mounted(){
            this.getCategories()
        },


        watch: {
            editDetail: function(e){
                e ? this.details = e : ''
            }
        }

    }
</script>

<style scoped>
    .plan-editor-container{
        position: relative;
    }
    .editor{
        display: grid;
        justify-content: center;
        align-items: center;
    }
    .form{
        display: grid;
        grid-template-rows: repeat(7, auto);
        grid-gap: 12px;
        padding: 10px 20px 20px 20px;
        margin-top: 80px;
        background-color: #f8f8f8;
        border-radius: 5px;
        border: 1px solid grey;
        width: 400px;
        height: 310px;
    }
    img{
        width: 40px;
    }
    .file{
        display: none;
    }
    .btn-cancel{
        border-radius: 5px;
        height: 40px;
        color: #fefefe;
        font-size: 16px;
        transition: 0.3s ease-in;
        background-color: rgb(245, 100, 100);
        outline: none;
        border: none;
    }
    .btn-cancel:hover{
        background-color: rgb(240, 59, 59);
    }
    .btn-submit{
        border-radius: 5px;
        height: 40px;
        color: #fefefe;
        font-size: 16px;
        transition: 0.3s ease-in;
        background-color: #e7b83f;
        outline: none;
        border: none;
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
        border: 1px solid rgb(202, 202, 202);
        padding: 10px;
    }
    .btn-package{
        display: grid;
        grid-template-columns: 150px 150px;
        grid-gap: 10px;
        justify-content: space-between;
    }
    .upload-image{
        background-color: #42a5f5;
        color: #fefefe;
        transition: 0.6s ease-in;
        outline: none;
        border: none;
    }
    .upload-image:hover{
        background-color: #3391df;
    }
    

    @media (max-width: 767px) {
        .form{
            grid-gap: 10px;
            width: 380px;
            height: 300px;
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




