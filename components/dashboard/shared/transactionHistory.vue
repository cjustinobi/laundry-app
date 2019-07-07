    <template>
    <div class="transaction-history" >
        <div class="transaction-wrapper">
            <div class="sub-heading"><h4>Transactions</h4></div>
            <p class="p1">Show <input type="number" class="number-input"> Entries</p>
            <div class="table-wrap1">
                <table>
                    <tr>
                        <th># <i class="fa fa-sort-down"></i></th>
                        <th>Transaction Ref <i class="fa fa-sort-down"></i></th>
                        <th>Payment Type <i class="fa fa-sort"></i></th>
                        <th>Amount <i class="fa fa-sort"></i></th>
                        <th>Trans Date <i class="fa fa-sort"></i></th>
                        <th>Status <i class="fa fa-sort-amount-desc"></i></th>
                    </tr>
                    <tr v-if="transactions && transactions.length" v-for="(tran, i) in transactions" :key="i">
                        <td>{{ i + 1 }}</td>
                        <td>{{ tran.reference }}</td>
                        <td>{{ tran.payment_method }}</td>
                        <td>&#8358;{{ currency.format(tran.amount) }}</td>
                        <td>{{ tran.updatedAt }}</td>
                        <td :class="[{'success': tran.status},{'pending': !tran.status}]">{{ tran.message }} <br>
                            <button v-if="!tran.status" class="requery-btn">Requery</button>
                        </td>
                    </tr>
                </table>
            </div>

            <div class="entries">
                <div class="entry-head"><p class="p2">Showing 2 to 2 of Entries</p></div>
                <div class="previous-next">
                    <div class="p3"><p>Previous</p></div>
                    <div class="p4"><p>1</p></div>
                    <div class="p5"><p>Next</p></div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

    import CurrencyFormatter from '~/mixins/currencyFormatter'

    export default {

        mixins: [CurrencyFormatter],

        data() {
            return {
               
            }
        },

        computed: {
            transactions() {
                return this.$store.getters['transactions/allTransactions']
            }
        },

        beforeMount() {
            this.$store.dispatch('transactions/getTransactions')
        },

        destroyed() {
            document.body.style.background = "none";
        }
    }

</script>

<style scoped>
    .transaction-history{
        display: grid;
        /* min-height: 100vh; */
    }
    a{
        text-decoration: none;
    }
    .transaction-wrapper{
        display: grid;
        grid-template-rows: 50px 40px 190px 30px;
        background-color: #fefefe;
        margin: 60px 40px 40px 40px;
        color: #114e9e;
        box-shadow: 5px 5px 15px grey;
        padding-bottom: 20px;
    }
    .sub-heading{
        display: grid;
        height: 40px;
        align-items: center;
        background-color: rgb(241, 241, 241);
        padding-left: 40px;
        color: #114e9e;
    }
    .p1{
        padding-left: 40px;
    }
    .number-input{
        width: 35px;
    }
    table {
        border-collapse: collapse;
        width: 92%;
        margin: 0 40px;
        font-size: 14px;
    }
    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
    .number-input{
        border: 1px solid #dddddd;
    }
    .pending{
        color: rgb(241, 50, 50);
    }
    .requery-btn{
        background-color: #e7b83f;
        color: #fefefe;
        outline: none;
        border: none;
        cursor: pointer;
    }
    .success{
        color: rgb(31, 168, 31);
    }
    .entries{
        display: grid;
        margin: 0 45px 0 40px;
        grid-template-columns: auto auto;
        justify-content: space-between;
        align-items: center;
    }
    .previous-next{
        display: grid;
        grid-template-columns: 70px 40px 60px;
    }
    .p3{
        display: grid;
        color: #e7b83f;
        background-color: #fefefe;
        border: 1px solid #f1f1f1;
        justify-items: center;
        cursor: pointer;
    }
    .p4{
        display: grid;
        color: #fefefe;
        background-color: #114e9e;
        justify-items: center;
    }
    .p5{
        display: grid;
        color: #114e9e;
        background-color: #fefefe;
        border: 1px solid #f1f1f1;
        justify-items: center;
        cursor: pointer;
    }

     @media (max-width: 1022px) {
        .transaction-wrapper{
            grid-template-rows: 60px 40px 220px 30px;
        }
    }
    @media (max-width: 767px) {
        .transaction-wrapper{
            grid-template-rows: 60px 40px 250px 30px;
            margin: 60px 10px 40px 10px;
            padding-bottom: 20px;
        }
        .sub-heading{
            padding-left: 10px;
        }
        .p1{
            padding-left: 10px;
        }
        table {
            width: 35%;
            margin: 0 10px;
            font-size: 9px;
        }
        td, th {
            text-align: center;
            padding: 8px;
        }
        .table-wrap1{
            /* display: none; */
        }
        .entries{
            margin: 0 10px;
        }
    }  
</style>