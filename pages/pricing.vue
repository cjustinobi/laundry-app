<template>
    <div class="pricing-container">
            <h2>No hidden fees. No confusing or tired pricing <br>  
                what you see is what you get
            </h2>
    
        <div class="table-container">
            <table>
                <caption>Men</caption>
                <tr>
                    <th>Items</th>
                    <th>Wash &amp; Iron (N)</th>
                    <th>Iron only (N)</th>
                </tr>
                <tr>
                    <td>Trouser</td>
                    <td class="accent-txt-color">500</td>
                    <td class="accent-txt-color">200</td>
                </tr>
                <tr>
                    <td>Shirt</td>
                    <td class="accent-txt-color">400</td>
                    <td class="accent-txt-color">200</td>
                </tr>
                <tr>
                    <td>Suit</td>
                    <td class="accent-txt-color">2000</td>
                    <td class="accent-txt-color">1000</td>
                </tr>
            </table>
            <table>
                <caption>Women</caption>
                <tr>
                    <th>Items</th>
                    <th>Wash &amp; Iron (N)</th>
                    <th>Iron only (N)</th>
                </tr>
                <tr>
                    <td>Trouser</td>
                    <td class="accent-txt-color">500</td>
                    <td class="accent-txt-color">200</td>
                </tr>
                <tr>
                    <td>Shirt</td>
                    <td class="accent-txt-color">400</td>
                    <td class="accent-txt-color">200</td>
                </tr>
                <tr>
                    <td>Suit</td>
                    <td class="accent-txt-color">2000</td>
                    <td class="accent-txt-color">1000</td>
                </tr>
            </table>
        </div>
        <button class="get-started-btn">Get started</button>
    </div>
</template>

<style lang="scss" scoped>
    .pricing-container{
        margin: 40px 74px;
        color: #114e9e;
        h2{
            margin-bottom: 30px;
        }
    }
    
    .quick-response{
        display: grid;
        align-items: center;
        text-align: center;
    }
    .table-container{
        display: grid;
        grid-gap: 40px;
        overflow-x: auto;
    }
    table {
        border-collapse: collapse;
        width: 100%;
        font-size: 14px;
        caption{
            text-align: left;
            margin: 20px 0;
        }
    }
    td, th {
        border: 1px solid #dddddd;
        text-align: center;
        padding: 8px;
        background-color: #fefefe;
        width: auto;
    }
    .discount{
        margin: 0 70px;
        display: grid;
        grid-template-columns: 30px auto 30px;
        justify-content: center;
        justify-items: center;
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
        justify-self: center;
        margin-top: 40px;
    }
    .get-started-btn:hover{
        background-color: #083774;
    }

    
    @media (max-width: 767px) {
        .pricing-container{
            margin: 34px;
        }
      
      
    }
</style>
