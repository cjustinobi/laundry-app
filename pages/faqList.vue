<template>
    <div class="faq-container" :style="myStyle">
        <div class="faq-head"><h2>FAQS</h2></div>
        <img class="show-image" src="~assets/images/wash-machine.jpg" alt="FAQS Image">
        <div class="faq-list">
            <!-- <div class="faq-inner">
                <div class="faq-headlines">
                    <p class="faq-p1">Can I track my orders?</p>
                    <i class="fa fa-plus-square" @click.prevent="toggleInfo()"></i>
                </div>
                <div id="hide-info" :class="[{'hide-info': hideInfo, 'show-info': !hideInfo}]">
                    <p class="faq-detailed">Elegant Laundry and Dry cleaning provide services like washing of all sorts of fabrics,
                        men's wears, women wears and children wears. We do the laundry, iron the clothes, do the
                        packaging and get it ready for collection. We offer pick-up and delivery service.
                    </p> 
                </div>
            </div> -->
            <div class="faq-inner" v-for="(list, i) in lists" :key="i">
                <div class="faq-headlines">
                    <p class="faq-p1" @click.prevent="toggleInfo(list)">{{list.title}}</p>
                    <i class="fa fa-plus-square" v-if="!list.isopen"  @click.prevent="toggleInfo(list)"></i>
                    <i class="fa fa-minus-square" v-if="list.isopen"  @click.prevent="toggleInfo(list)"></i>
                </div>
                <div  v-show="list.isopen" class="show-info">
                    <p class="faq-detailed">
                        {{list.content}}
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
                // hideInfo: true,
                lists: [{
                        id: 1,
                        title: 'Can I track my orders?',
                        content: 'Elegant Laundry and Dry cleaning provide services like washing of all sorts of fabrics,\
                        men\'s wears, women wears and children wears. We do the laundry, iron the clothes, do the\
                        packaging and get it ready for collection. We offer pick-up and delivery service.',
                        isopen: false
                    },{
                        id: 2,
                        title: 'Can my orders be delivered?',
                        content: 'We offer good services li lorem  men\'s wears, women wears and children wears. We do the laundry, iron the clothes, do the',
                        isopen: false
                    },{
                        id: 3,
                        title: 'How do I communicate with the customer care?',
                        content: 'Elegant Laundry and Dry cleaning provide services like washing of all sorts of fabrics,\
                        men\'s wears, women wears and children wears. We do the laundry, iron the clothes, do the\
                        packaging and get it ready for collection. We offer pick-up and delivery service.',
                        isopen: false
                    }
                ],
                velocity: ''
            }
        },
        methods: {
            toggleInfo(list) {
                // let x = document.getElementById('hide-info')
                // if(x.display === 'none') {
                //     x.display = 'block'
                //     this.hideInfo = false
                // } else {
                //     x.display = 'none'
                //     this.hideInfo = true
                // }
                list.isopen = !list.isopen
            },
            setClass(list){
                if(list.isopen == true){
                    return 'open'
                }
                return 'close'
            },
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
        /* min-height: 100vh; */
        grid-template-rows: 60px 400px 1fr;
        color: #114e9e;
    }
    .faq-head{
        display: grid;
        align-items: center;
        text-align: center;
        background-color: #fefefe;
    }
    .faq-list{
        display: grid;
        grid-template-rows: 1fr;
        margin: 50px;
        justify-items: center;
        grid-gap: 20px;
    }
    .show-image{
        background-size: cover;
        width: 100%;
        height: 400px;
    }
    .faq-inner{
        display: grid;
        border-bottom: 1px solid rgb(212, 212, 212);
        grid-template-rows: 40px;
        grid-gap: 5px;
    }
    .faq-headlines{
        display: grid;
        grid-template-columns: 600px 30px;
        position: relative;
        grid-gap: 20px;
    }
    .faq-p1{
        font-weight: 700;
        min-height: 40px;
        cursor: pointer;
    }
    .faq-detailed{
        padding: 0 15px 10px 0;
    }
    .hide-info{
        /* display: none; */
    }
    .show-info{
        /* display: block; */
        max-width: 650px;
        text-align: center;
        /* position: absolute; */
        min-height: 70px;
    }
    .fa-plus-square, .fa-minus-square{
        cursor: pointer;
    }

    @media (max-width: 767px) {
        .faq-list{
            margin: 20px;
        }
        .faq-headlines{
            grid-template-columns: 1fr 30px;
        }
    }
    @media (min-width: 768px) {
       
    }
</style>
