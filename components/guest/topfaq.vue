<template>
    <div class="top-faq">
        <div class="faq-list">
            <div><img src="~assets/images/EL_laundry.png" alt=""></div>
            <h5>Affordable pricing</h5>
            <p>
                Before colletion, just ensure your wash and fold laundry is in a separate pile to your
                dry cleaning. Don't worry about dark and light fabrics, we will sort this out for you.
            </p>
        </div>

        <p>For the full list of FAQ visit the page <nuxt-link to="/">here</nuxt-link></p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .top-faq{
        display: grid;
        grid-template-columns: repeat(3, 300px);
        grid-gap: 20px;
        align-items: center;
        justify-items: center;
        border-bottom: 2px solid #f9a825; 
        margin: 25px 0; 
        padding: 0 20px;   
        font-size: 16px;
    }
    

    @media (max-width: 1048px) {
        
    }

     
    
</style>
