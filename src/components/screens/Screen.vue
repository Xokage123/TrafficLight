<template>
  <div
    :class="{
      active: activeColor == color ? true : false,
      animate__flash: activeColor == color && blinking ? true : false,
    }"
    class="screen__container animate__animated animate__infinite animate__slow"
    :style="{
      'background-color': color,
    }"
  ></div>
</template>

<script>
export default {
  name: "Screen",
  props: {
    color: String,
    activeColor: String,
    blinking: Boolean,
  },
};
</script>