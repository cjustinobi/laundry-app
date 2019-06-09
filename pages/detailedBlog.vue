<template>
    <div class="detailed-blog">
         <img src="~assets/images/blog.jpg" class="blog-img" alt="Blog Img">
         <div class="detailed-blog-wrapper">
            <div class="blog-inner">
                <p class="time-stamp">
                    <i class="fa fa-circle"></i> 
                    March, 27, 2019 | <span class="tips-styles">TIPS &amp; STYLES</span>
                </p>
                <h2>Combating Coffee Stains</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit odio beatae blanditiis rem 
                    possimus porro accusamus aspernatur fugiat maiores, facere exercitationem quisquam ex! 
                    Mollitia totam aliquam suscipit veritatis sequi odit.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia voluptatum aliquam quae 
                    eius quasi consectetur distinctio quibusdam, nobis exercitationem omnis odit incidunt, 
                    quidem dolorum, veritatis earum eaque sint. Veniam, tempore!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab impedit nulla quaerat 
                    necessitatibus, doloremque tenetur eum est dolor. Non amet sint inventore saepe quisquam 
                    corporis reiciendis ea aut provident. Ratione!
                </p>
            </div>
            <div class="fa-fold">
                <i class="fa fa-facebook"></i>
                <i class="fa fa-twitter"></i>
                <i class="fa fa-linkedin"></i>
                <i class="fa fa-instagram"></i>
            </div>
        </div>
        <h3 class="people-read">People also read...</h3>
        <div class="hr-grey"></div>

        <div class="blog-stack">
            <div class="other-blogs" v-for="(blog, i) in blogs" :key="i">
                <nuxt-link to="/">
                    <div class="blog-stories">
                        <div class="story-img-container"><img class="story-img" :src="blog.image" alt="EL img"/></div>
                        <h5>{{ blog.title }}</h5>
                        <p>{{ blog.content }}</p>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
           blogs: [{
                    image: require('~/assets/images/EL_laundry.png'),
                    title: 'Combating Coffee Stain',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium nobis quis quia\
                            doloremque explicabo quo rem expedita dolorem, ex culpa. Voluptate alias asperiores blanditiis\
                            sunt cumque necessitatibus. Nobis, harum.'
                    },{
                    image: require('~/assets/images/EL_laundry.png'),
                    title: 'Combating Coffee Stain',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium nobis quis quia\
                            doloremque explicabo quo rem expedita dolorem, ex culpa. Voluptate alias asperiores blanditiis\
                            sunt cumque necessitatibus. Nobis, harum.'
                    
                    },{
                    image: require('~/assets/images/EL_laundry.png'),
                    title: 'Combating Coffee Stain',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium nobis quis quia\
                            doloremque explicabo quo rem expedita dolorem, ex culpa. Voluptate alias asperiores blanditiis\
                            sunt cumque necessitatibus. Nobis, harum.'
                    
                    },{
                    image: require('~/assets/images/EL_laundry.png'),
                    title: 'Combating Coffee Stain',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium nobis quis quia\
                            doloremque explicabo quo rem expedita dolorem, ex culpa. Voluptate alias asperiores blanditiis\
                            sunt cumque necessitatibus. Nobis, harum.'
                    
                    }
                ]    
        }
    }
}
</script>

<style scoped>
    .detailed-blog{
        display: grid;
        color: #114e9e;
    }
    .blog-img{
        background-size: cover;
        height: 500px;
        width: 100%;
        margin-top: -12px;
    }
    .detailed-blog-wrapper{
        display: grid;
        grid-template-columns: 1fr 50px;
        grid-gap: 30px;
        padding: 20px;
        margin: 0 20px 0 70px;
    }
    a{
        text-decoration: none;
        color: #114e9e;
    }
    .blog-inner{
        display: grid;
        grid-template-rows: 30px 40px auto;
        grid-gap: 8px;
    }
    .time-stamp{
        color: rgb(216, 216, 216);
    }
    .tips-styles{
        color: #fdc026;
    }
    .fa-fold{
        display: grid;
        grid-template-rows: repeat(4, 40px);
        background-color: #fdc026;
        color: #fefefe;
        height: 160px;
        align-items: center;
        justify-items: center;
        font-size: 12px;
        align-self: center;
        box-shadow: 5px 5px 15px grey;
    }
    .fa-facebook,
    .fa-twitter,
    .fa-linkedin,
    .fa-instagram{
        cursor: pointer;
     }
     .people-read{
         padding: 10px;
         margin-left: 30px;
     }
     .hr-grey{
         margin: 20px 30px;
         background-color: rgb(163, 163, 163);
         height: 1px;
     }
     .blog-stack{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;
        padding: 20px;
        margin: 0 30px 20px 30px;
    }
    .other-blogs{
        display: grid;
    }
    .other-blogs:hover{
        border: 1px solid #114e9e;
        background-color: #e3eaf3;
        opacity: 0.7;
        transition: all 0.8s ease-in-out;
    }
    .blog-stories{
        display: grid;
        grid-gap: 10px;
        border: 1px solid rgb(218, 218, 218);
        padding: 10px;
    }
    .story-img-container{
        justify-items: center;
        display: grid;
    }
    .story-img{
        width: 120px;
        height: 120px;
    }
    

    @media (max-width: 767px) {
        .detailed-blog{
            font-size: 12px;
        }
        .detailed-blog-wrapper{
            grid-gap: 30px;
            padding: 10px;
            margin: 15px 10px;
        }
       .blog-img{
            height: 400px;
        }
        .blog-inner{
            grid-gap: 5px;
        }
        .people-read{
            padding: 10px;
            margin-left: 15px;
        }
        .hr-grey{
            margin: 15px 10px;
        }
        .blog-stories{
            grid-gap: 10px;
        }
        .blog-stack{
            grid-template-columns: 1fr;
            grid-gap: 20px;
            padding: 10px;
            margin: 20px 10px;
        }
    }
</style>


