<template>
    <div class="faq-container" :style="myStyle">
        <div class="faq-head"><h2>FAQS</h2></div>
        <img class="show-image" src="~assets/images/wash-machine.jpg" alt="FAQS Image">
        <div class="faq-list">
            <div class="faq-inner" v-for="(list, i) in lists" :key="i">
                <div class="faq-headlines">
                    <p class="faq-p1" @click.prevent="list.isopen = !list.isopen">{{list.title}}</p>
                    <i class="fa fa-caret-right" v-if="!list.isopen"  
                        @click.prevent="list.isopen = !list.isopen">
                    </i>
                    <i class="fa fa-caret-down" v-else  @click.prevent="list.isopen = !list.isopen"></i>
                </div>
                <div  v-show="list.isopen" class="show-info">
                    <p class="faq-detailed">{{list.content}}</p> 
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
                        title: 'Can I track my orders?',
                        content: 'Elegant Laundry and Dry cleaning provide services like washing of all sorts of fabrics,\
                        men\'s wears, women wears and children wears. We do the laundry, iron the clothes, do the\
                        packaging and get it ready for collection. We offer pick-up and delivery service.',
                        isopen: false
                        },{
                        title: 'Can my orders be delivered?',
                        content: 'We offer good services li lorem  men\'s wears, women wears and children wears. We do the laundry, iron the clothes, do the',
                        isopen: false
                        },{
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
        cursor: pointer;
    }
    .faq-detailed{
        padding: 0 15px 10px 0;
    }
    .show-info{
        /* display: block; */
        max-width: 650px;
        text-align: center;
        min-height: 70px;
    }
    .fa-caret-right, .fa-caret-down{
        cursor: pointer;
    }

    @media (max-width: 767px) {
        .faq-list{
            margin: 20px 10px;
            font-size: 14px;
        }
        .faq-headlines{
            grid-template-columns: 1fr 30px;
        }
    }
    @media (max-width: 290px) {
        .faq-inner{
            grid-template-rows: 70px;
        }
    }
</style>
