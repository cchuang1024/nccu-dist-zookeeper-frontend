import Vue from 'vue'
import App from './App.vue'
// import { createApp } from "vue";
import router from "./router";

import 'bootstrap'; // Import js file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import css file
Vue.config.productionTip = false

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
