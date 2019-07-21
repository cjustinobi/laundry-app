<template>
    <div>
        <h1 class="faq-txt gray-txt">Top 3 FAQs</h1>
        <div class="faq-container">
            <div class="faq-list">
                <div class="faq-images"><img src="~assets/images/EL_iron.jpg" alt=""></div>
                <h4>How do I prepare my first order ?</h4>
                <p>
                    Before colletion, just ensure your wash and fold laundry is in a separate pile to your
                    dry cleaning. Don't worry about dark and light fabrics, we will sort this out for you.
                </p>
            </div>
            <div class="faq-list">
                <div class="faq-images"><img src="~assets/images/EL_iron.jpg" alt=""></div>
                <h4>Can I change my order ?</h4>
                <p>
                    Before colletion, just ensure your wash and fold laundry is in a separate pile to your
                    dry cleaning. Don't worry about dark and light fabrics, we will sort this out for you.
                </p>
            </div>
            <div class="faq-list">
                <div class="faq-images"><img src="~assets/images/EL_iron.jpg" alt=""></div>
                <h4>What items can I wash ?</h4>
                <p>
                    Before colletion, just ensure your wash and fold laundry is in a separate pile to your
                    dry cleaning. Don't worry about dark and light fabrics, we will sort this out for you.
                </p>
            </div>
            <p class="full-list">For the full list of FAQ visit the page <nuxt-link to="/faqList">here</nuxt-link></p>
        </div>
    </div>
</template>


<style scoped>

    .faq-txt{
        text-align: center;
        margin: 48px;
    }
    .faq-txt::after{
        position: absolute;
        left: calc(50% - 35px);
        display: block;
        width: 70px;
        border-bottom: 3px solid #f9a825;
        padding-top: 20px;
        content: '';
    }
    .faq-container{
        display: grid;
        grid-gap: 70px;
        grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
        align-content: center;
        justify-content: center;
        min-height: 350px;
        margin: 25px 0 50px;
        padding: 0 20px 20px 20px;   
        font-size: 16px;
    }
    .faq-list{
        display: grid;
        grid-template-rows: 150px auto auto;
        grid-gap: 15px;
        color: #114e9e;
    }
    img{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 1px solid #f9a825;
    }
    .faq-images{
        display: grid;
        justify-items: center;
    }
    .full-list{
        text-align: center;
        grid-column: 1 / -1;
        color: #114e9e;
    }
    a{
        text-decoration: none;
        color:#f9a825;
    }

    @media (max-width: 767px) {
        .faq-container{
            grid-gap: 40px;
            grid-template-columns: 1fr;
            padding: 0 15px 20px 15px;
        }
    } 
</style>
