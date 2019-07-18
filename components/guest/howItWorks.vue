    <template>
    <div class="how-it-works">
        <h1>How it works</h1>
        <div class="description">
            <img src="~assets/images/EL_order.jpg" alt="Order-using-phone">
            <h2>Make an Order</h2>
            <p style="margin-top: 20px">Order online</p>
            <p>By visiting the webpage</p>
        </div>

        <div class="description">
            <img src="~assets/images/EL_pickup.png" alt="Pick-up-Truck">
            <h2>Pick-up</h2>
            <p style="margin-top: 20px">Choose a time and place</p>
            <p>That suits you</p>
        </div>

        <div class="description">
            <img style="margin-left: -30px" src="~assets/images/EL_laundry.png" alt="Laundry-clothes">
            <h2>Laundry</h2>
            <p style="margin-top: 20px">We treat your garment</p>
            <p>to a high quality clean</p>
        </div>

        <div class="description">
            <img style="margin-left: -20px" src="~assets/images/delivery.png" alt="Delivery-Truck">
            <h2>Delivery</h2>
            <p style="margin-top: 20px">We deliver back to you</p>
            <p>at your convenient time</p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .how-it-works{
        position: relative;
        display: grid;
        grid-template: 1fr / repeat(auto-fit, minmax(250px, 1fr));
        align-items: center;
        justify-items: center;
        min-height: 400px;
        border-bottom: 2px solid #f9a825; 
        margin: 25px 0; 
        padding: 0 20px;   
        h1{
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            text-align: center;
            margin: 24px 0;
        } 
    }
    .description{
        display: grid;
        grid-template-rows: 150px 50px 50px 50px;
        margin-top: 15px;
        h2{
            margin-top: 20px; 
            color: #728691
        }
    }
    .description p{
        color: #114e9e;
        font-weight: bold;
    }

    @media (max-width: 1048px) {
        .how-it-works{
            grid-template: auto / 1fr 1fr;
            grid-gap: 20px;
        }
    }
    @media (max-width: 767px) {
        .how-it-works{
            grid-template: auto / 1fr;
            grid-gap: 20px;
            padding: 0 10px;
        }
    }

     
    
</style>
