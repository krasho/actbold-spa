<template>
   <div>
        <section class="hero" style="position:relative;background: url('https://actbold.agency/wp-content/uploads/2016/09/santa-monica.jpg');background-size: cover;background-position: center center;height: 100%;min-height: 32.625rem;z-index: -2;">
            <div class="mask" style="position: absolute;width: 100%;height: 100%;z-index: 20;top: 0;"></div>
                <div class="video-container" style="width: 100%;max-height: 32.625rem;overflow: hidden;position: fixed;top: 0;right: 0;z-index:-1;">
                    <video autoplay="" loop="" muted="" id="video-bg" style="position: relative;width: auto;min-width: 100%;height: auto;z-index: 10;display: block;"><source src="https://actbold.agency/wp-content/uploads/2016/09/act-bold.mp4" type="video/mp4"></video>
                </div>	

            <div class="hero-wrapper" style="position:relative;width:100%;max-width:73rem;margin:auto;padding:0 1rem;height:100%;min-height: 32.625rem;z-index: 999;">
                <div>
                    <div class="hero-content" style="text-transform:uppercase;text-align:center;margin:0  auto 2.5rem auto;font-family: 'Lato', sans-serif;">                	
                        <p style="font-weight: 300;color: #fff;margin:0 auto;line-height: 1.25; font-size: 2.5rem;">We don't create ads</p>
                        <p style="font-weight: 900;color: #fff;margin:0 auto;line-height: 1.25; font-size: 2.5rem;"><strong>We create Opportunities</strong></p>
                    </div>
                    <div class="hero-icons">
                        <div class="hero-icon"><img src="https://actbold.agency/wp-content/uploads/2016/09/clutch-badge.png"></div>
                        <div class="hero-icon"><img src="https://actbold.agency/wp-content/uploads/2016/09/topseos-badge.png"></div>
                    </div>
                </div>
            </div>
        </section>


        <section class="featured-section"><!--FEATURED ON SECTION-->
            <div class="featured-wrapper">
                <div class="blue-box">
                    <span>Featured on:</span>
                </div>
                    
                <div class="featured-logos">	
                    <div class="featured-logo">
                    <img src="https://actbold.agency/wp-content/uploads/2016/09/new-york-times-logo.png">
                    </div>	
                    <div class="featured-logo">
                    <img src="https://actbold.agency/wp-content/uploads/2016/09/entreprenuer-logo.png">
                    </div>	
                    <div class="featured-logo">
                    <img src="https://actbold.agency/wp-content/uploads/2016/09/huffington-post-logo.png">
                    </div>
                    <div class="featured-logo">
                    <img src="https://actbold.agency/wp-content/uploads/2016/09/tech-co-logo.png">
                    </div>
                </div>

            </div>
        </section>    
    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss">
   .hero-wrapper {
       display: flex;
       justify-content: center;
       align-items: center;
   }

   .hero-icons {
       display: flex;
       flex-wrap: wrap;
       justify-content: center;
       align-content: center;
       align-items: center;       

        img {
                max-width: 7.5rem;
                height: 100%;
                margin: 0 1.5rem;
            }       
   }

    .featured-section {
        width: 100%;
        background: #fff;
        height: auto;
        min-height: 6.5rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }   

</style>