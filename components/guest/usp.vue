<template>
    <div class="why-us">
        <!-- <div class="services">
            <div><img src="~assets/images/EL_laundry.png" alt=""></div>
            <h5>Affordable pricing</h5>
            <p>
                Before colletion, just ensure your wash and fold laundry is in a separate pile to your
                dry cleaning. Don't worry about dark and light fabrics, we will sort this out for you.
            </p>
        </div> -->
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .why-us{
        display: grid;
        grid-template-columns: repeat(3, 300px);
        grid-gap: 20px;
        /* grid-template: 1fr / repeat(auto-fit, minmax(350px, 1fr)); */
        align-items: center;
        justify-items: center;
        /* min-height: 500px; */
        border-bottom: 2px solid #f9a825; 
        margin: 25px 0; 
        padding: 0 20px;   
        font-size: 16px;
    }
    .services{
        display: grid;
        grid-template-rows: 90px 50px 90px;
        /* margin-top: 15px; */
        grid-gap: 15px;
    }

    @media (max-width: 1048px) {
        /* .why-us{
            grid-template: auto / 1fr 1fr;
            grid-gap: 20px;
        } */
    }
    @media (max-width: 767px) {
        /* .why-us{
            grid-template: auto / 1fr;
            grid-gap: 20px;
        } */
    }

     
    
</style>
