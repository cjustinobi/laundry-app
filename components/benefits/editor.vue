<template>
    <div class="editor">
        <form class="form">
            <div class="create-close">
                <button class="add-fields" @click.prevent="addItem">Add fields</button>
                <a href="#" @click.prevent="$emit('cancelForm')"><i class="fa fa-window-close"></i></a>
            </div>
            <div v-for="(item, i) in items">
                <input class="input-benefit" v-model="item.name" placeholder="benefit">
                <i class="fa fa-remove" @click="removeItem(i)"></i>
            </div>

            <div class="btn-benefits">
                <button class="btn-cancel-benefits" @click.prevent="$emit('cancelForm')">Cancel</button>
                <button class="btn-submit-benefits" @click.prevent="submitBenefit">
                    <img v-if="isLoading" src="~/assets/images/loading.gif" alt="Elegant image">
                    <span v-else>{{ sendBtnTxt }}</span>
                </button>
            </div>
        </form>
    </div>

</template>

<script>
    import  FormElements  from '~/mixins/formElements'
    export default {

        props: [
            'showBenefitsForm',
            'editDetail'
        ],

        mixins: [FormElements],

        data() {
            return {
                items: [{ name: '' }]
            }
        },

        methods: {
            async submitBenefit() {
                this.isLoading = true
                try {
                    let res = await this.$store.dispatch('benefits/store', this.items)
                    this.isLoading = false
                    this.items = [{ name: '' }] // Clears the form.
                    this.$emit('cancelForm')
                } catch (err) {
                    console.log(err)
                    this.isLoading = false
                }
            },
            addItem() {
                this.items.push({ name: ''})
            },
            removeItem(i) {
                this.items.splice(i, 1)
            },
            async submitForm() {

            }

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
        align-items: center;
        grid-template-columns: 1fr;
        /* min-width: 300px; */
        /* position: absolute; */
        }
    .form{
        display: grid;
        grid-template-rows: 1fr;
        grid-gap: 20px;
        padding: 20px;
        /* width: 300px;
        height: 200px; */
        background-color: rgb(111, 185, 185);
        border-radius: 5px;
        border: 1px solid grey;
    }
    .create-close{
        display: grid;
        grid-template-columns: 1fr auto;
        grid-gap: 20px;
    }
    .create-close a{
        color: rgb(245, 100, 100);
        transition: 0.8s ease-in;
    }
    .create-close a:hover{
        color: rgb(240, 59, 59);
    }
    .add-fields{
        height: 40px;
        color: #3f3f3f;
        border: 1px solid #fefefe;
        border-radius: 5px;
        outline: none;
        background-color: #cecece;
        transition: 0.8s ease-in;
        font-size: 17px;
    }
    .add-fields:hover{
        color: #fefefe;
        background-color: #575757;
    }
    .input-benefit{
        height: 40px;
        border: 3px solid rgb(36, 136, 36);
        border-radius: 5px;
        padding: 20px;
    }
    img{
        width: 40px;
    }
    .btn-benefits{
        display: grid;
        grid-template-columns: 1fr 1fr;
        /* justify-content: end;
        align-items: end; */
        grid-gap: 16px;
        font-size: 16px;
        outline: none;
    }
    .btn-cancel-benefits{
        /* width: 170px; */
        border-radius: 5px;
        border: 1px solid grey;
        height: 40px;
        color: #fefefe;
        transition: 0.6s ease-in;
        background-color: rgb(245, 100, 100);
    }
    .btn-cancel-benefits:hover{
        background-color: rgb(240, 59, 59);
    }
    .btn-submit-benefits{
        display: grid;
        /* width: 170px; */
        border-radius: 5px;
        border: 1px solid grey;
        color: #fefefe;
        height: 40px;
        background-color: #e7b83f;
        transition: 0.6s ease-in;
    }
    .btn-submit-benefits:hover{
        background-color: #f58b13;
    }
    

    @media (max-width: 767px) {
        .form{
            padding: 15px;
            /* width: 300px; */
        }
        .btn-benefits{
            /* grid-template-columns: 120px 120px; */
            /* justify-content: end;
            align-items: end; */
            grid-gap: 16px;
            font-size: 14px;
        }
        .btn-cancel-benefits{
            height: 30px;
            font-size: 14px;
        }
        .btn-submit-benefits{
            height: 30px;
            font-size: 14px;
        }
        .create-close{
            /* grid-template-columns: 200px 50px; */
            grid-gap: 15px;
        }
        .input-benefit{
            height: 30px;
        }
    }
</style>


