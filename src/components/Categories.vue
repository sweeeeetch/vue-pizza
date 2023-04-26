<script setup lang="ts">
import { ref } from "vue";

import { useHomeStore } from "@/stores/homeStore";
const homeStore = useHomeStore();

const activeIndex = ref(0);
activeIndex.value = homeStore.category;
const categoriesArray = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

const setActiveCategory = (idx: number) => {
  activeIndex.value = idx;
  homeStore.category = idx;
};
</script>

<template>
  <div class="categories">
    <ul>
      <li
        v-for="(item, index) in categoriesArray"
        :key="index"
        :class="{ active: index === activeIndex }"
        @click="setActiveCategory(index)">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import "../scss/variables";

.categories {
  @media (max-width: 1290px) {
    margin-top: 30px;
    width: 100%;
    overflow: auto;
    padding-bottom: 20px;
  }

  ul {
    display: flex;
    @media (max-width: 1260px) {
      width: 785px;
    }
    li {
      background-color: #f9f9f9;
      padding: 13px 30px;
      border-radius: 30px;
      margin-right: 10px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.1s ease-in-out;
      @include noselect();

      &:hover {
        background-color: darken(#f9f9f9, 2%);
      }

      &:active {
        background-color: darken(#f9f9f9, 5%);
      }

      &.active {
        background-color: #282828;
        color: #fff;
      }
    }
  }
}
</style>
