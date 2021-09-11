<template>
  <div class="screen__case">
    <Screen
      :key="color"
      :color="color"
      :activeColor="activeColor"
      :blinking="blinking"
      v-for="color in colors"
    ></Screen>
  </div>
</template>

<script>
import Screen from "./Screen.vue";
import { nameScreen, timeLight, toggleScreen } from "../../data/index";
export default {
  name: "Screens",
  components: {
    Screen,
  },
  data() {
    return {
      colors: nameScreen,
      activeColor: this.$route.name,
      timerCounter: "",
      screenCounter: "",
      timerValue: timeLight[this.$route.name] / 1000,
      blinking: false,
    };
  },
  methods: {
    startAnimation() {
      this.clearAnimation();
      this.$emit("update-timer", this.timerValue);
      this.timerCounter = window.setInterval(() => {
        --this.timerValue;
        if (this.timerValue <= 3) {
          this.blinking = true;
        }
        this.$emit("update-timer", this.timerValue);
      }, 1000);
      this.screenCounter = toggleScreen(this.$router, this.$route);
    },
    clearAnimation() {
      this.blinking = false;
      window.clearInterval(this.timerCounter);
      window.clearInterval(this.screenCounter);
    },
  },
  mounted() {
    this.startAnimation();
  },
  destroyed() {
    this.clearAnimation();
  },
  watch: {
    $route(to, from) {
      this.activeColor = to.name;
      this.timerValue = timeLight[this.$route.name] / 1000;
      this.startAnimation();
    },
  },
};
</script>

// animate__flash animate__infinite