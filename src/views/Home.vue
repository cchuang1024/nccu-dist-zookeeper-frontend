<template>
  <div class="home">
    <cover-section/>
    <play-list-section/>
    <team-section/>
  </div>
</template>

<script>
import coverSection from "../components/coverSection";
import teamSection from "../components/teamSection";
import playListSection from "../components/playListSection";

export default {
  name: 'Home',
  components: {
    coverSection,
    teamSection,
    playListSection
  },
  data(){
    return{
     
    }
  }
}
</script>
