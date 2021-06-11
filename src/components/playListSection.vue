
<template>
    <div class="container-fluid">
        <div class="row inside-shadow">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide class="play-list-item" v-for="(item,index) in playList" :key="index">
                    <div class="ratio ratio-16x9">
                        <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
                        <video src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
                               title="Test video"
                               preload="metadata"  controls></video>
                    </div>
                    <div class="video-title">{{item.title}}</div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
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
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                playList:[
                    {
                        title:"Test Video 1",
                        Url:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
                    },
                    {
                        title:"Test Video 2",
                        Url:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
                    },
                    {
                        title:"Test Video 3",
                        Url:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
                    },
                    {
                        title:"Test Video 4",
                        Url:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
                    },
                    {
                        title:"Test Video 5",
                        Url:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
                    },
                    {
                        title:"Test Video 6",
                        Url:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
                    },
                ],
                swiperOption: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    freeMode: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .play-list-item{
        padding: 25px 5px 5px;
        width: 300px;
        height: 300px;
        margin: 50px auto;
        box-shadow: 2px 7px 10px 0 #D1D1D1;
        /*background-color: #5e5e5e;*/
    }
    .video-title{
        padding-top: 15px;
        text-align: center;
    }
    .inside-shadow{
        box-shadow: inset 0px 11px 25px 0px #D1D1D1;
    }
</style>