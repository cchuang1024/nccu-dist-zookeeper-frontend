<template>
  <div class="home">
    <cover-section/>
    <play-list-section :playList="playList"/>
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
    // HelloWorld
  },
  data(){
    return{
      playList: [
        {
          ID: 0,
          title: "Test Video 0",
          Url: "https://wedistill.io/uploads/videos/processed/757/girlbythesea.mp4.mp4"
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
  }
}
</script>
