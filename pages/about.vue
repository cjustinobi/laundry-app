<template>
    <div>
        <div class="about">
            <div class="about-item about-item-vision">
                <h4>Our Vision</h4>
                <p>Our vision is to help build an Africa where all individuals have access to portable water at all times.</p>
            </div>
            <div class="about-item about-item-mission">
                <h4>Our Mission</h4>
                <p>
                    To Provide avenues where well-meaning individuals can contribute to the
                    growth of the African Continent through their contributions. Reaching
                    out to areas that lack access to portable Water in Africa
                    thereby providing access to portable Water for the identified Communities.
                </p>
            </div>
            <div class="about-item about-item-history">
                <h4>Our History</h4>
                <p>
                    Water Relief Africa started in 2018, though we have other organisations
                    that provide succour for the water needs of humanity
                    around the world, there are far more places to reach out to especially in Africa.
                </p>
            </div>
        </div>
        <div class="water-relief">
            <h4>Why Water Relief Africa</h4>
            <p>
                It is no secret that Africa has a water problem. People in
                developed countries have known this for a long time, and organizations
                and governments around the world have been trying to make a difference
                for decades. Unfortunately, the continent of Africa continues to face a
                big problem, and it only seems to be getting worse no matter how hard people try to resolve it.
            </p>
            <p>
                The biggest issue is the inability to find fresh, clean water for drinking and daily
                living. Most people in Africa rely on surface water and don't have
                the technology or the money to dig wells to harvest groundwater. Since
                Africa is an arid continent, surface water evaporates often, and
                when that is coupled with the strain placed on these bodies of water by large populations,
                the result is a receding water table across the continent.
            </p>
            <p>
                Sanitation also poses a big problem. Many people do not have dedicated sewage or septic systems, so human waste builds up over time and pollutes the surface water used for drinking. Even in agricultural processes, animal waste canâ€™t be disposed of properly, leading to unsanitary conditions that are perfect for the spread of disease. There are a lot of factors that work together to cause problems for the condition of water across Africa, and these donâ€™t seem to be easing up anytime soon.
            </p>
        </div>
    </div>
</template>

<style scoped>
    .about{
        display: grid;
        grid-row-gap: 24px;
        align-items: center;
        min-height: 100vh;
        margin: 52px 68px;
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
    }
    .about-item h4{
        margin-bottom: 20px;
    }
    .about-item-vision{
        border-left: 5px solid #2cff44;
    }
    .about-item-vision:hover{
        border-left: 5px solid #fff14b;
    }
    .about-item-mission{
        border-left: 5px solid #FB2247;
    }
    .about-item-mission:hover{
        border-left: 5px solid #4554fb;
    }
    .about-item-history{
        border-left: 5px solid #fb9e36;
    }
    .about-item-history:hover{
        border-left: 5px solid #9d1390;
    }
    .water-relief{
        background: #220052;
        padding: 48px;
        color: #9d9d9d;
    }
    .water-relief h4, .water-relief p{
        margin-bottom: 20px;
    }
    @media (max-width: 480px) {
        .about{
            margin: 16px;
        }
        .water-relief{
            padding: 48px 16px;
        }
    }
</style>