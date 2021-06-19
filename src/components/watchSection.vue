<template>
    <!-- ======= About Section ======= -->
    <div>
    <section id="about" class="about">
        <div style="background-color: rgba(255,255,255,0.8)" class="container" data-aos="fade-up">
            <div class="row p-5">
                <div class="col-lg-6 video-box align-self-baseline" data-aos="zoom-in" data-aos-delay="0">
                    <div class="ratio ratio-16x9">
                        <video id="myVideo"
                               class="video-js vjs-default-skin vjs-big-play-centered"
                               title="Test video"
                               preload="metadata"
                               :poster="videoInfo.poster"
                               controls
                        ></video>
                    </div>
                </div>
                <div class="col-lg-6 p-3 pt-lg-0 content">
                    <h3>{{videoInfo.title}}</h3>
                    <p class="font-italic">
                        {{videoInfo.description}}
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
                                <span data-toggle="counter-up">16</span>
                                <p>Awards</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section><!-- End About Section -->
    </div>
</template>

<script>
    import videojs from "video.js";
    import 'dashjs' ;
    import 'videojs-contrib-dash';
    import 'video.js/dist/video-js.css';

    let lastLearnTime = null;
    export default {
        name: "playerSection",
        props:["videoInfo"],
        mounted() {
            this.player();
            // setTimeout(() => {
            //     this.videoInfo.Url = "http://172.31.142.231:1935/NCCUMediaNetwork/mp4:test-video.mp4/manifest.mpd";
            //     this.player();
            // }, 10000)
        },
        activated() {
            this.player();
        },
        watch: {
            videoInfo: function () {
                this.player();
            },
        },
        methods:{
            player(){
                let player=videojs('myVideo');
                let videoUrl = this.videoInfo.Url;
                
                player.ready(function(){
                    player.src({
                        src:videoUrl,
                        type:"application/dash+xml"
                    })

                    player.play();

                    player.on('loadstart', function() {
                        console.log('loadstart')
                    });

                    player.on('loadedmetadata', function() {
                        console.log('loadedmetadata-載入完成')              
                        player.currentTime(lastLearnTime);
                        console.log(`現在時間${player.currentTime()}`)                        
                    });
                    player.on('loadeddata', function() {
                        console.log('loadeddata-渲染畫面'); 
                    });

                    player.on('error', function() {
                        console.log('error');
                        //monitor api
                    });

                    player.on('waiting', function() {
                        console.log('waiting');
                        //monitor api
                    });

                    player.on('progress', function() {
                        console.log('progress');
                        console.log(videoUrl);
                    });
                
                    //播放时长(秒)
                    let totalTime = 0;
                    // 监听播放进度
                    player.on('timeupdate', function() {
                        //当前播放时长(秒)
                        let currentTime = Math.floor(player.currentTime());
                        if (currentTime > 0 && currentTime > totalTime && (currentTime % 5 === 0)) {
                            //每隔5秒，向服务器提交播放时间(秒)
                            lastLearnTime=currentTime;                           
                        }
                        totalTime = currentTime;
                    });
                
                    // 使用事件监听
                    player.on('ended', function() {
                        console.log('播放結束');
                    });
                })
            },
        }
    }

</script>

<style scoped>
.video-js{
    position: absolute!important;
}
</style>