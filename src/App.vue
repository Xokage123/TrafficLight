<template>
  <main>
    <section class="timer__container">
      <h3 class="timer__title">Сколько осталось времени для смены сигнала</h3>
      <span class="timer__value">
        До смены сигнала осталось {{ timerValue }} секунд
      </span>
    </section>
    <router-view @update-timer="updateTimer"></router-view>
  </main>
</template>

<script>
import { nameScreen } from "./data/index";
export default {
  name: "App",
  data() {
    return {
      timerValue: 0,
    };
  },
  methods: {
    updateTimer(value) {
      this.timerValue = value;
    },
  },
  mounted() {
    if (!localStorage.getItem("colorScrennNow")) {
      localStorage.setItem("colorScrennNow", nameScreen.red);
    }
    if (!this.$route.name) {
      this.$router
        .push({
          name: localStorage.getItem("colorScrennNow"),
        })
        .catch(() => {});
    }
  },
};
</script>

<style src="./styles/scss/index.scss" lang="scss"></style>