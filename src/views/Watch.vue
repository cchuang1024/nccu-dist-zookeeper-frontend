<template>
    <div class="watch">
        <div class="watch-container">
            <watch-section :videoInfo="playList[$route.params.ID]"/>
<!--            <play-list-section :playList="playList"/>-->
        </div>
    </div>
</template>

<script>
    import watchSection from "../components/watchSection";
    // import playListSection from "../components/playListSection";

    export default {
        name: 'Watch',
        components: {
            watchSection,
            // playListSection
        },
        data() {
            return {
                playList: [
                    {
                        ID: 0,
                        title: "Test Video 0",
                        Url: "http://172.23.211.189:1935/NCCUMediaNetwork/mp4:test-video.mp4/manifest.mpd"
                    },
                    {
                        ID: 1,
                        title: "Test Video 1",
                        Url: "https://wedistill.io/uploads/videos/processed/1007/2015-03-29-01.mp4.mp4"
                    },
                    {
                        ID: 2,
                        title: "Test Video 2",
                        Url: "https://wedistill.io/uploads/videos/processed/34/Adrift-HD.mp4.mp4"
                    },
                    {
                        ID: 3,
                        title: "Test Video 3",
                        Url: "https://wedistill.io/uploads/videos/processed/256/HeadRoomTheDepartmentofChemistryGlassblowingShop.mp4.mp4"
                    },
                    {
                        ID: 4,
                        title: "Test Video 4",
                        Url: "https://wedistill.io/uploads/videos/processed/803/citylifestyle.mp4.mp4"
                    },
                    {
                        ID: 5,
                        title: "Test Video 5",
                        Url: "https://wedistill.io/uploads/videos/processed/1637/flow_in_the_sky.mp4"
                    },
                ],
            }
        },
    }
</script>

<style scoped>
    .watch{
        background-color: rgba(0,0,0,0.1);
    }
    /*.watch{*/
    /*    background: url("g") top center;*/
    /*    background-size: cover;*/
    /*}*/
    /*.watch {*/
    /*    !*width: 100%;*!*/
    /*    !*height: 100vh;*!*/
    /*    background: url("../assets/img/about-boxes-bg.jpg") top center;*/
    /*    background-size: cover;*/
    /*    position: relative;*/
    /*    padding: 0;*/
    /*}*/
    
    /*.watch:before {*/
    /*    content: "";*/
    /*    background: rgba(13, 20, 26, 0.7);*/
    /*    position: absolute;*/
    /*    bottom: 0;*/
    /*    top: 0;*/
    /*    left: 0;*/
    /*    right: 0;*/
    /*    z-index: 0;*/
    /*}*/
    /*.watch-container{*/
    /*    position: absolute;*/
    /*    bottom: 0;*/
    /*    top: 0;*/
    /*    left: 0;*/
    /*    right: 0;*/
    /*    display: flex;*/
    /*    height: auto;*/
    /*    justify-content: center;*/
    /*    align-items: center;*/
    /*    flex-direction: column;*/
    /*    text-align: center;*/
    /*}*/
</style>