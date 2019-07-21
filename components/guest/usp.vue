<template>
   <div>
       <h1 class="why-us-txt gray-txt">Why us</h1>
       <div class="usp">
           <div class="services">
               <div class="usp-images"><img src="~assets/images/EL_laundry.png" alt=""></div>
               <h4>Affordable pricing</h4>
               <p>
                   Before colletion, just ensure your wash and fold laundry is in a separate pile to your
                   dry cleaning. Don't worry about dark and light fabrics, we will sort this out for you.
               </p>
           </div>
           <div class="services">
               <div class="usp-images"><img src="~assets/images/EL_laundry.png" alt=""></div>
               <h4>Online Payment</h4>
               <p>
                   Before colletion, just ensure your wash and fold laundry is in a separate pile to your
                   dry cleaning. Don't worry about dark and light fabrics, we will sort this out for you.
               </p>
           </div>
           <div class="services">
               <div class="usp-images"><img src="~assets/images/EL_laundry.png" alt=""></div>
               <h4>Doorstep Service</h4>
               <p>
                   Before colletion, just ensure your wash and fold laundry is in a separate pile to your
                   dry cleaning. Don't worry about dark and light fabrics, we will sort this out for you.
               </p>
           </div>
       </div>
   </div>
</template>

<style scoped>
    .why-us-txt{
        text-align: center;
        margin: 48px;
    }
    .why-us-txt::after
    {
        position: absolute;
        left: calc(50% - 35px);
        display: block;
        width: 70px;
        border-bottom: 3px solid #f9a825;
        padding-top: 20px;
        content: '';
    }
    .usp{
        display: grid;
        grid-gap: 70px;
        grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
        align-content: center;
        justify-content: center;
        min-height: 350px;
        /*border-bottom: 2px solid #f9a825; */
        margin: 25px 0; 
        padding: 0 20px 20px 20px;   
        font-size: 16px;
    }
    .services{
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
    .usp-images{
        display: grid;
        justify-items: center;
        
    }

    @media (max-width: 767px) {
        .usp{
            grid-gap: 40px;
            grid-template-columns: 1fr;
            padding: 0 15px 20px 15px;
        }
    }

     
    
</style>
