<template>
    <div class="pricing-container" :style="myStyle">
        <div class="price-head"><h2>Our Prices</h2></div>
        <div class="quick-response">
            <h2>No hidden fees. No confusing or tired pricing <br>  
                what you see is what you get
            </h2>
        </div>
        <div class="table-container">
            <table>
                <caption style="font-size:18px">Men</caption>
                <tr>
                    <th>Items</th>
                    <th>Wash &amp; Iron (N)</th>
                    <th>Iron only (N)</th>
                </tr>
                <tr>
                    <td>Trouser</td>
                    <td class="text-yellow">500</td>
                    <td class="text-yellow">200</td>
                </tr>
                <tr>
                    <td>Shirt</td>
                    <td class="text-yellow">400</td>
                    <td class="text-yellow">200</td>
                </tr>
                <tr>
                    <td>Suit</td>
                    <td class="text-yellow">2000</td>
                    <td class="text-yellow">1000</td>
                </tr>
            </table>
            <table>
                <caption style="font-size:18px">Women</caption>
                <tr>
                    <th>Items</th>
                    <th>Wash &amp; Iron (N)</th>
                    <th>Iron only (N)</th>
                </tr>
                <tr>
                    <td>Trouser</td>
                    <td class="text-yellow">500</td>
                    <td class="text-yellow">200</td>
                </tr>
                <tr>
                    <td>Shirt</td>
                    <td class="text-yellow">400</td>
                    <td class="text-yellow">200</td>
                </tr>
                <tr>
                    <td>Suit</td>
                    <td class="text-yellow">2000</td>
                    <td class="text-yellow">1000</td>
                </tr>
            </table>
        </div>
        <div class="discount"><i class="fa fa-asterisk"></i> 
                <h2>We also offer bulk laundry washes at awesome discounted prices</h2> 
            <i class="fa fa-asterisk"></i>
        </div>
        <div class="get-started"><button class="get-started-btn">Get started</button></div>
    </div>
</template>
<script>
    export default {
        
        data() {
            return {
                myStyle: {
                    backgroundColor: "#f0faff"
                },
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
    .pricing-container{
        display: grid;
        min-height: 100vh;
        grid-template-rows: 60px 100px 1fr 50px 60px;
        grid-gap: 30px;
        color: #114e9e;
        padding-bottom: 30px;
    }
    .price-head{
        display: grid;
        align-items: center;
        text-align: center;
        background-color: #fefefe;
    }
    .quick-response{
        display: grid;
        align-items: center;
        text-align: center;
    }
    .table-container{
        display: grid;
        grid-gap: 90px;
        margin: 0 70px;
        overflow-x: auto;
    }
    table {
        border-collapse: collapse;
        width: 100%;
        font-size: 14px;
    }
    td, th {
        border: 1px solid #dddddd;
        text-align: center;
        padding: 8px;
        background-color: #fefefe;
        width: auto;
    }
    .text-yellow{
        color: #e7b83f;
    }
    .discount{
        margin: 0 70px;
        display: grid;
        grid-template-columns: 30px auto 30px;
        justify-content: center;
        justify-items: center;
    }
    .fa-asterisk{
        color: #e7b83f;
    }
    .get-started{
        display: grid;
        justify-content: center;
    }
    .get-started-btn{
        width: 250px;
        height: 55px;
        background-color: #114e9e;
        color: #fefefe;
        outline: none;
        border: none;
        transition: 0.8s ease-in;
        font-size: 19px;
    }
    .get-started-btn:hover{
        background-color: #083774;
    }

    
    @media (max-width: 767px) {
        .pricing-container{
            grid-gap: 40px;
            grid-template-rows: 60px 140px 1fr;
        }
        .quick-response{
            margin: 0 40px;
        }
        table {
            /* width: 70%;
            font-size: 14px; */
        }
    }
</style>
