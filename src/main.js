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
import axios from 'axios';
Vue.prototype.$axios = axios;
Vue.prototype.$video = Video;
Vue.use(axios);
AOS.init();

Vue.mixin({
  data() {
    return{
      playList: [
        {
          ID: 0,
          title: "School",
          Url: "/NCCUMediaNetwork/mp4:test-video.mp4/manifest.mpd",
          poster: require('@/assets/img/poster-2.jpg'),
          description: "Interesting"
        },
        {
          ID: 1,
          title: "Test Video 1",
          Url: "/NCCUMediaNetwork/mp4:test-video.mp4/manifest.mpd",
          poster: require('@/assets/img/poster-1.jpg'),
          description: "1"
        },
        {
          ID: 2,
          title: "Test Video 2",
          Url: "/NCCUMediaNetwork/mp4:test-video-1.mp4/manifest.mpd",
          // poster: require('@/assets/img/poster-3.jpg'),
          description: "2"
        },
        {
          ID: 3,
          title: "Test Video 3",
          Url: "/NCCUMediaNetwork/mp4:test-video-2.mp4/manifest.mpd",
          // poster: require('@/assets/img/poster-4.jpg'),
          description: "3"
        },
        {
          ID: 4,
          title: "Test Video 4",
          Url: "/NCCUMediaNetwork/mp4:test-video-3.mp4/manifest.mpd",
          // poster: require('@/assets/img/poster-5.jpg'),
          description: "4"
        },
        {
          ID: 5,
          title: "Test Video 5",
          Url: "/NCCUMediaNetwork/mp4:test-video-4.mp4/manifest.mpd",
          // poster: require('@/assets/img/poster-6.jpg'),
          description: "5"
        },
      ],
    }
  },
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
