<template>

    <div class="editor">
        <form class="form">
            <div class="close-benefit"><a href="#" @click.prevent="$emit('cancelForm')"><i class="fa fa-window-close"></i></a></div>
            <div v-for="(item, i) in items">
                <input class="input-benefit" v-model="item.name" placeholder="benefit">
                <i class="fa fa-remove" @click="removeItem(i)"></i>
            </div>
            <button @click.prevent="addItem">Add fields</button>

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


