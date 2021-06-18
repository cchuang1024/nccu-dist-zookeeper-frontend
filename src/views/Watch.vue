<template>
    <div class="watch">
        <div class="watch-container">
            <watch-section :videoInfo="playList[$route.params.ID]"/>
            <play-list-section/>
        </div>
    </div>
</template>

<script>
    import watchSection from "../components/watchSection";
    import playListSection from "../components/playListSection";

    export default {
        name: 'Watch',
        components: {
            watchSection,
            playListSection
        }
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