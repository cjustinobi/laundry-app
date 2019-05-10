    <template>
    <div class="transaction-history" :style="myStyle">
        <div class="transaction-wrapper">
            <div class="sub-heading"><h4>Transactions</h4></div>
            <p class="p1">Show <input type="number" class="number-input"> Entries</p>
            <table>
                <tr>
                    <th>Transaction Ref <i class="fa fa-sort-down"></i></th>
                    <th>Card Number <i class="fa fa-sort"></i></th>
                    <th>Payment For <i class="fa fa-sort"></i></th>
                    <th>Payment Type <i class="fa fa-sort"></i></th>
                    <th>Amount <i class="fa fa-sort"></i></th>
                    <th>Trans Date <i class="fa fa-sort"></i></th>
                    <th>Status <i class="fa fa-sort-amount-desc"></i></th>
                </tr>
                <tr>
                    <td>TR0RT565565656</td>
                    <td>476965656565765</td>
                    <td>Order</td>
                    <td>Card</td>
                    <td>N4,000</td>
                    <td>19th, Mar, 2019, 10:00AM</td>
                    <td class="pending">Pending <br> <button class="requery-btn">Requery</button></td>
                </tr>
                <tr>
                    <td>TR0RT565565656</td>
                    <td>476965656565765</td>
                    <td>Order</td>
                    <td>Card</td>
                    <td>N4,000</td>
                    <td>19th, Mar, 2019, 10:00AM</td>
                    <td class="successful">Successful</td>
                </tr>
            </table>
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

    export default {

        data() {
            return {
                myStyle: {
                    backgroundColor: "#f0faff"
                }
            }
        },
        mounted() {
            // document.body.style.background = "#e1f5fe";
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
        grid-template-rows: 50px 50px 150px 30px;
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
    .successful{
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

    @media (max-width: 767px) {
        .transaction-wrapper{
            grid-template-rows: 40px 50px 250px 30px;
            margin: 60px 20px 40px 20px;
            padding-bottom: 20px;
        }
        table {
            width: 60%;
            margin: 0 20px;
            font-size: 12px;
        }
        td, th {
            text-align: center;
            padding: 8px;
        }
    }  
</style>