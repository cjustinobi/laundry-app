<template>
    <div class="about-container">
        <div id="top-nav"></div>
        <div class="faq-head"><h2>About Us</h2></div>
        <img class="show-image" src="~assets/images/wash-machine.jpg" alt="FAQS Image">
        <div class="about">
            <div class="about-item">
                <p class="about-item-p1">
                    Elegant Laundry is the ultimate solution to get your laundry done. Done right and done 
                    affordably - whether you are too busy or just in a pinch, we'll pick you up, clean, fold
                    and return your laundry, nice and neat - so you don't have to worry about it!
                </p>
                <p>
                    We help you with your laundry so you do more important stuffs. <br> 
                    Place your order online, over the phone.
                </p>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
    .about-container{
        display: grid;
        /* min-height: 100vh; */
        grid-template-rows: 60px 400px 1fr;
        color: #114e9e;
    }
    .faq-head{
        display: grid;
        align-items: center;
        text-align: center;
        background-color: #fefefe;
        grid-template-rows: 60px;
    }
    .show-image{
        background-size: cover;
        width: 100%;
        height: 400px;
    }
    .about{
        display: grid;
        grid-row-gap: 10px;
        align-items: center;
        margin: 30px 68px;
    }
    .about-item{
        max-width: 1000px;
        min-height: 150px;
        display: grid;
        align-content: center;
        background: #f9f9f9;
        padding: 0 24px;
        color: #4d4d4d;
        transition: .7s ease-out;
        border-left: 5px solid #2cff44;
    }
    .about-item-p1{
        margin-bottom: 20px;
    }
    .about-item:hover{
        border-left: 5px solid #114e9e;
    }

    @media (max-width: 480px) {
        .about{
            margin: 16px;
        }
    }
    @media (max-width: 767px) {
        .about-item{
            padding: 10px 24px;
        }
    }
</style>