<template>
    <!-- ======= About Section ======= -->
    <section id="about" class="about">
        <div style="background-color: rgba(255,255,255,0.8)" class="container" data-aos="fade-up">


            <div class="row p-5">

                <div class="col-lg-6 video-box align-self-baseline" data-aos="zoom-in" data-aos-delay="0">
                    <div class="ratio ratio-16x9">
                        <video :src="videoInfo.Url"
                               title="Test video"
                               preload="metadata"  controls ></video>
                    </div>
                </div>
                <div class="col-lg-6 p-3 pt-lg-0 content">
                    <h3>{{videoInfo.title}}</h3>
                    <p class="font-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </div>

            </div>
            <div class="row justify-content-end">
                <div class="col-lg-11">
                    <div class="row justify-content-end">

                        <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                            <div class="count-box">
                                <span data-toggle="counter-up">65</span>
                                <p>Happy Clients</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                            <div class="count-box">
                                <span data-toggle="counter-up">85</span>
                                <p>Projects</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                            <div class="count-box">
                                <span data-toggle="counter-up">12</span>
                                <p>Years of experience</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                            <div class="count-box">
                                <span data-toggle="counter-up">15</span>
                                <p>Awards</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </section><!-- End About Section -->
</template>

<script>
    export default {
        name: "playerSection",
        props:["videoInfo"],
    }
</script>

<style scoped>

</style>