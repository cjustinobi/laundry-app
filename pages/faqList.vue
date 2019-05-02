<template>
    <div class="faq-container" :style="myStyle">
        <div class="faq-head"><h2>FAQS</h2></div>
        <img class="show-image" src="~assets/images/wash-machine.jpg" alt="FAQS Image">
        <div class="faq-list">
            <div class="faq-inner">
                <div class="faq-headlines">
                    <p>What sort of service do you provide?</p>
                    <i class="fa fa-plus-square" @click.prevent="toggleInfo()"></i>
                </div>
                <div id="hide-info" :class="[{'hide-info': showInfo, 'show-info': !showInfo}]">
                    <p>Elegant Laundry and Dry cleaning provide services like washing of all sorts of fabrics,
                        men's wears, women wears and children wears. We do the laundry, iron the clothes, do the
                        packaging and get it ready for collection. We offer pick-up and delivery service.
                    </p>
                </div>
            </div>
            <div class="faq-inner">
                <div class="faq-headlines">
                    <p>How do I prepare for my first pick-up?</p>
                    <i class="fa fa-plus-square" @click.prevent="toggleInfo()"></i>
                </div>
                <div id="hide-info" :class="[{'hide-info': showInfo, 'show-info': !showInfo}]">
                    <p>Elegant Laundry and Dry cleaning provide services like washing of all sorts of fabrics,
                        men's wears, women wears and children wears. We do the laundry, iron the clothes, do the
                        packaging and get it ready for collection. We offer pick-up and delivery service.
                    </p>
                </div>
            </div>
            <div class="faq-inner">
                <div class="faq-headlines">
                    <p>Can I track my orders?</p>
                    <i class="fa fa-plus-square" @click.prevent="toggleInfo()"></i>
                </div>
                <div id="hide-info" :class="[{'hide-info': showInfo, 'show-info': !showInfo}]">
                    <p>Elegant Laundry and Dry cleaning provide services like washing of all sorts of fabrics,
                        men's wears, women wears and children wears. We do the laundry, iron the clothes, do the
                        packaging and get it ready for collection. We offer pick-up and delivery service.
                    </p> 
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
                    backgroundColor: "#fefefe"
                },
                showInfo: true
            }
        },
        methods: {
            toggleInfo() {
                let x = document.getElementById('hide-info')
                if(x.display === 'none') {
                    x.display = 'block'
                    this.showInfo = false
                    alert('hi')
                } else {
                    x.display = 'none'
                    this.showInfo = true
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
    .faq-container{
        display: grid;
        min-height: 100vh;
        grid-template-rows: 60px 400px 1fr;
        color: #114e9e;
    }
    .faq-head{
        display: grid;
        align-items: center;
        text-align: center;
        background-color: #fefefe;
    }
    .show-image{
        background-size: cover;
        width: 100%;
        height: 400px;
    }
    .faq-inner{
        display: grid;
        border-bottom: 1px solid rgb(212, 212, 212);
    }
    .faq-headlines{
        display: grid;
        grid-template-columns: 600px 30px;
        position: relative;
        grid-gap: 20px;
    }
    .hide-info{
        display: none;
        width: 500px;
        text-align: center;
        position: absolute;
    }
    #hide-info{
        display: none;
    }
    .fa-plus-square{
        cursor: pointer;
    }
    .show-info{
        display: block;
    }

    @media (max-width: 767px) {
        .faq-list{
            display: grid;
            grid-auto-rows: 50px;
            margin: 50px;
            grid-gap: 20px;
        }
        .faq-headlines{
            grid-template-columns: 1fr 30px;
        }
    }
    @media (min-width: 768px) {
       .faq-list{
            display: grid;
            grid-auto-rows: 50px;
            margin: 50px;
            justify-items: center;
            grid-gap: 20px;
        }
    }
</style>
