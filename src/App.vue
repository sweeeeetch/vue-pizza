<script setup lang="ts">
import Header from "@/components/Header.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="wrapper">
    <Header />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
@import "scss/variables";
@import "scss/normalize";
body {
  background-color: $background;
}
.wrapper {
  width: calc(100vw - 100px);
  height: 100%;
  background-color: #fff;
  margin: 50px auto;
  border-radius: 10px;
  max-width: 1400px;
  @media (max-width: 470px) {
    margin: 35px auto;
    width: calc(100vw - 35px);
  }
}
.content {
  padding: 40px 0;
}
.container {
  width: $container-width;
  margin: 0 auto;
}
</style>
