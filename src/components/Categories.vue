<script setup lang="ts">
import { ref } from "vue";

const activeIndex = ref(0);
const categoriesArray = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
</script>

<template>
  <div class="categories">
    <ul>
      <li
        v-for="(item, index) in categoriesArray"
        :key="index"
        :class="{ active: index === activeIndex }"
        @click="activeIndex = index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import "../scss/variables";

.categories {
  ul {
    display: flex;

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
