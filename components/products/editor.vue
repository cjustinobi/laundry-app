<template>
    <div class="plan-editor-container">
        <div class="editor">
            <notification :error="error" :success="success" :message="message"></notification>
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
                <button @click.prevent="$refs.file.click()">Upload image</button>
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

    import  Notifications  from '~/mixins/notifications'
    import  Notification  from '~/components/shared/notification'
    import  FormElements  from '~/mixins/formElements'

    export default {

        props:[
            'editDetail',
            'showForm'
        ],

        mixins: [FormElements, Notifications],

        components: { Notification },

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
                    this.message = 'product successfully saved'
                    this.success = true
                    this.$store.dispatch('products/getProducts')
                    this.$emit('cancelForm')

                } catch (e) {

                    this.isLoading = false
                    this.message = e.response.data.error
                    this.error = true
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
        /* position: absolute; */
        /* z-index: 10000; */
        /* top: 50%; */
    }
    .form{
        display: grid;
        grid-template-rows: repeat(4, 1fr);
        grid-gap: 20px;
        padding: 20px;
        margin-top: 80px;
        background-color: rgb(147, 191, 202);
        border-radius: 5px;
        border: 1px solid grey;
        width: 400px;
        height: 300px;
    }
    img{
        width: 40px;
    }
    .file{
        display: none;
    }
    .btn-cancel{
        border-radius: 5px;
        border: 1px solid grey;
        height: 40px;
        color: #fefefe;
        font-size: 16px;
        transition: 0.3s ease-in;
        background-color: rgb(245, 100, 100);
    }
    .btn-cancel:hover{
        background-color: rgb(240, 59, 59);
    }
    .btn-submit{
        border-radius: 5px;
        border: 1px solid grey;
        height: 40px;
        color: #fefefe;
        font-size: 16px;
        transition: 0.3s ease-in;
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
    .btn-package{
        display: grid;
        grid-template-columns: 150px 150px;
        grid-gap: 10px;
        justify-content: space-between;
    }
    
    

    @media (max-width: 767px) {
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




