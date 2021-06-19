import Vue from 'vue'
import App from './App.vue'
// import { createApp } from "vue";
import router from "./router";

import 'bootstrap'; // Import js file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import css file
import 'bootstrap/dist/css/bootstrap-utilities.min.css'; // Import css file
Vue.config.productionTip = false
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
// const app = createApp(App);

import AOS from "aos";
import "aos/dist/aos.css";
import Video from 'video.js';
import 'video.js/dist/video-js.css';
Vue.prototype.$video = Video;
AOS.init();

Vue.mixin({
  data() {
    return{
      playList: [
        {
          ID: 0,
          title: "School",
          Url: "http://172.25.222.79:1935/NCCUMediaNetwork/mp4:test-video.mp4/manifest.mpd",
          poster: require('@/assets/img/poster-2.jpg'),
          description: "Interesting"
        },
        {
          ID: 1,
          title: "Test Video 1",
          Url: "https://dash.akamaized.net/dash264/TestCases/2c/qualcomm/1/MultiResMPEG2.mpd"
        },
        {
          ID: 2,
          title: "Test Video 2",
          Url: "https://livesim.dashif.org/livesim/chunkdur_1/ato_7/testpic4_8s/Manifest.mpd"
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
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
