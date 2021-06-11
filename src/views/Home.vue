<template>
  <div class="home">
    <cover-section/>
    <about-section/>
    <play-list-section/>
    <team-section/>
  </div>
</template>

<script>
import coverSection from "../components/coverSection";
import aboutSection from "../components/aboutSection";
import teamSection from "../components/teamSection";
import playListSection from "../components/playListSection";

export default {
  name: 'Home',
  components: {
    coverSection,
    aboutSection,
    teamSection,
    playListSection
    // HelloWorld
  }
}
</script>
