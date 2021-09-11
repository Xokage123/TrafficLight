import Vue from "vue";
import App from './App.vue'
import "animate.css"
import router from './components/router/router'

new Vue({
  el: '#root',
  router,
  render: h => h(App)
});