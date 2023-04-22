<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
@import "scss/variables";
@import "scss/normalize";
body {
  background-color: $background;
}
</style>
