
<template>
    <div class="container-fluid">
        <div class="row inside-shadow">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide  class="play-list-item" v-for="(item,index) in playList" :key="index">
                    <router-link :to="'/watch/'+item.ID">
                    <div data-aos-anchor-placement="top-bottom" data-aos="fade-up" :data-aos-delay="(index+1)*100"  class="ratio ratio-16x9">
                        <video :src="item.Url"
                               title="Test video"
                               preload="metadata"  controls></video>
                    </div>
                    <div class="video-title">{{item.title}}</div>
                    <br>
                    </router-link>
                </swiper-slide>
                <div class="swiper-scrollbar" slot="scrollbar"></div>
<!--                <div class="swiper-button-prev" slot="button-prev"></div>-->
<!--                <div class="swiper-button-next" slot="button-next"></div>-->
<!--                <div class="swiper-pagination" slot="pagination"></div>-->
            </swiper>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueAwesomeSwiper from  'vue-awesome-swiper'
    import{swiper, swiperSlide} from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'
    Vue.use(VueAwesomeSwiper);

    export default {
        name: 'swiper-example-free-mode',
        title: 'Free mode / No fixed positions',
        props:["playList"],
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperOption: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    freeMode: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    scrollbar: {
                        el: '.swiper-scrollbar'
                    },
                    mousewheel: true,
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .play-list-item{
        background-color: rgba(255, 255, 255, 0.8);
        padding: 25px 15px 5px;
        width: 300px;
        height: auto;
        margin: 50px auto;
        box-shadow: 0px 3px 18px rgb(0 0 0 / 10%);
        /*background-color: #5e5e5e;*/
    }
    .video-title{
        padding-top: 15px;
        text-align: center;
    }
    .inside-shadow{
        /*padding: 50px 0;*/
        /*box-shadow: inset 20px 20px 25px 20px #D1D1D1;*/
    }
    .swiper-button-prev, .swiper-container-rtl .swiper-button-next{
        left: 100px;
    }
    .swiper-button-next, .swiper-container-rtl .swiper-button-prev{
        right: 100px;
    }
</style>