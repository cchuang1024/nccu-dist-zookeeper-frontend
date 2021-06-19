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
</style>