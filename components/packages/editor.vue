    <template>
    <div class="plan-editor-container plan-editor">
        <div class="editor">
            <form class="form">
                <div class="close-package">
                    <a href="#" @click.prevent="$emit('cancelForm')"><i class="fa fa-window-close"></i></a>
                </div>
                <input class="package-input" type="text" placeholder="Name" v-model="details.name">
                <input class="package-input" type="text" placeholder="Price" v-model="details.price">

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
    import FormElements  from '~/mixins/formElements'

    export default {
        props:['editDetail', 'showForm'],

        mixins: [FormElements],

        components: { Multiselect },

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
                        this.$store.dispatch('notifications/setStatus',
                            { messages: ['benefit successfully saved'], status: 'success' })
                        this.$emit('cancelForm')
                    }
                } catch (e) {
                    this.isLoading = false
                    this.$store.dispatch('notifications/setStatus',
                        { messages: [e.response.data.error], status: 'error' })
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

<style lang="scss">
    @import '~/node_modules/vue-multiselect/dist/vue-multiselect.min.css';
    .plan-editor{
        position: relative;
        display: grid;
        justify-content: center;
        align-items: center;
    .editor{
        display: grid;
        justify-content: center;
        align-items: center;
        width: 400px;
    }
    .form{
        display: grid;
        grid-template-rows: repeat(4, auto);
        grid-gap: 15px;
        padding: 10px 20px 20px 20px;
        background-color: #d4d4d4;
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
        height: 40px;
        color: #000;
        font-size: 16px;
        transition: 0.3s ease-in;
        background-color: #c2c2c2;
        outline: none;
        border: none;
        cursor: pointer;
    }
    .btn-cancel:hover{
        background-color: #b8b8b8;
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
        cursor: pointer;
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
        // width: 100%;
    }
    .add-product-cat{
        width: 340px;
        border-radius: 3px;
        border: 1px solid rgb(202, 202, 202);
        padding: 10px;
        font-size: 14px;
    }
    .btn-package{
        display: grid;
        grid-template-columns: 148px 148px;
        grid-gap: 10px;
        justify-content: space-between;
    }
    
    

    @media (max-width: 767px) {
        .form{
            grid-gap: 10px;
            width: 320px;
            height: 280px;
            padding: 12px;
        }
        .package-input{
            width: 293px;
        }
        .add-product-cat{
            width: 270px;
        }
        .btn-package{
            display: grid;
            grid-template-columns: 120px 120px;
            grid-gap: 10px;
            justify-content: space-between;
        }
    }

    @media (min-width: 768px) {
        
    }
    }
</style>



