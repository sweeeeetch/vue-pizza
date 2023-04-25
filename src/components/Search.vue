<script setup lang="ts">
import { ref, watch } from "vue";

import { useHomeStore } from "@/stores/homeStore";
const homeStore = useHomeStore();

const seachValue = ref("");
const input = ref<HTMLInputElement>();

const clearSearch = () => {
  seachValue.value = "";
  input.value?.focus();
};

watch(seachValue, (newValue: string) => {
  homeStore.search = newValue;
});
</script>

<template>
  <div class="search">
    <img
      src="@/assets/svgs/search.svg"
      alt=""
      class="search__svg" />
    <input
      ref="input"
      class="search__input"
      v-model="seachValue"
      type="text"
      placeholder="Поиск пиццы..." />

    <img
      v-if="seachValue"
      src="@/assets/svgs/close.svg"
      alt=""
      class="search__close"
      @click="clearSearch" />
  </div>
</template>

<style lang="scss">
@import "@/scss/variables";

.search {
  position: relative;
  margin-right: 120px;
  &__input {
    border: 1px solid rgba($orange, 0.5);
    padding: 10px 30px 10px 35px;
    width: 350px;
    font-size: 18px;
    border-radius: 12px;
    &:focus {
      border: 1.5px solid rgba($orange, 1);
    }
  }
  &__svg {
    width: 22px;
    height: 22px;
    position: absolute;
    top: 12px;
    opacity: 0.4;
    left: 9px;
  }
  &__close {
    position: absolute;
    opacity: 0.4;
    width: 22px;
    height: 22px;
    top: 12px;
    right: 7px;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
