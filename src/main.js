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
AOS.init();
// app.AOS = new AOS.init({ disable: "phone" });

// app.use(router).mount("#app");
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
