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

                <multiselect v-if="benefits"
                             class="add-product-cat"
                             v-model="details.benefits"
                             :options="benefits"
                             :multiple="true"
                             :close-on-select="true"
                             :clear-on-select="false"
                             :hide-selected="true"
                             label="name"
                             track-by="name"
                             :preserve-search="false">
                </multiselect>

                <div class="btn-package">
                    <button class="btn-cancel" @click.prevent="$emit('cancelForm')">Cancel</button>
                    <button class="btn-submit" @click.prevent="submitPackage">
                        <img v-if="isLoading" src="~/assets/images/loading.gif" alt="Elegant image">
                        <span v-else>{{ sendBtnTxt }}</span>
                    </button>
                </div>
            </form>
        </div>
    </div>

</template>

<script>

    import Multiselect from 'vue-multiselect'
    import Notifications  from '~/mixins/notifications'
    import Notification  from '~/components/shared/notification'
    import FormElements  from '~/mixins/formElements'

    export default {

        props:['editDetail', 'showForm'],

        mixins: [FormElements, Notifications],

        components: { Multiselect, Notification },

        data() {
            return {
                details: {
                    name: '',
                    price: '',
                    benefits: []
                }
            }
        },


        methods: {
            async submitPackage() {
                this.isLoading = true
                // Filter only the benefit IDs.
                this.details.benefits = this.details.benefits.map(item => item.id)

                try {
                    let res = await this.$store.dispatch('plans/store', {data: this.details, editMode: this.editDetail})
                    if (res) {
                        this.isLoading = false
                        this.clearFields(this.details)
                        this.message = 'benefit successfully saved'
                        this.success = true
                        this.$emit('cancelForm')
                    }
                } catch (e) {

                    this.isLoading = false
                    this.message = e.response.data.error
                    this.error = true
                }
            },

        },

        computed: {
            benefits() {
                return this.$store.getters['benefits/allBenefits']
            }
        },

        mounted(){
            this.$store.dispatch('benefits/getBenefits')
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
        grid-template-rows: repeat(4, auto);
        grid-gap: 15px;
        padding: 10px 20px 20px 20px;
        background-color: rgb(147, 191, 202);
        border-radius: 5px;
        border: 1px solid grey;
        width: 400px;
        height: 300px;
    }
    img{
        width: 40px;
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
<style>
    @import '~/node_modules/vue-multiselect/dist/vue-multiselect.min.css';
</style>



